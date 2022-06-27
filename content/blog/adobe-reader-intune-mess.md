---
title: Adobe Reader Chaos (Intune)
date: 2022-06-20T00:00:00
tags: ["intune", "mdm", "adobe", "reader"]
author: "Marcel Marnitz"
type: post
archive: "2022/06"
---

Verteilt man das falsche Installationsprogramm für den Adobe Reader über Intune, so holt man sich nervige Probleme ins Haus. In diesem Post möchte ich erläutern, welche Version man installieren muss und wie man die "falsche" Installation loswird.

<!--more-->

### Das Problem

Adobe bietet ein Installationsprogramm zur Verteilung in großen Umgebungen (bspw. Intune oder ConfigMgr) an. Dieses kann über [eine Website](https://get.adobe.com/de/reader/enterprise/) heruntergeladen werden. In der (für mich) naheligenden Konfiguration wählt man Windows 10 (oder 11), dann German und schließlich die aktuelle Version aus. 

Wie sich aber herausstellt, hat dieses Installationsprogramm einige Nachteile:

1. Der Update-Mechanismus benötigt Administratorrechte, welche unsere Nutzer nicht haben. Somit aktualisiert sich der Adobe Reader nicht automatisch.
2. Man hat scheinbar keine Kontrolle darüber, ob die 32- oder 64-bit Version installiert wird.
3. Skurillerweise kann es bei einem manuellen Update (dazu wird das neue Paket in Intune hochgeladen und als Ablösung der alten Version markiert) passieren, dass aus der 32- eine 64-bit Installation wird.

Die Punkte 2 und 3 sind jedoch kritisch, da sie dafür sorgen, dass die Erkennung des Adobe Readers und dessen Version nicht mehr sauber funktioniert. Dazu hat man zwei Möglichkeiten:

1. Erkennung über GUID (die unterscheiden sich jedoch zwischen 32- und 64-bit)
2. Erkennung über Pfad (die unterscheiden sich jedoch zwischen 32- und 64-bit)

Das Ergebnis war, dass sich viele Benutzerüber Meldungen über Installationsfehler bei Adobe Reader Updates beschwerten (zurecht!). Im Übrigen waren unsere Benutzer damit [nicht allein](https://www.reddit.com/r/sysadmin/comments/pq7c5g/adobe_automatically_updating_reader_to_64bit/).

### Die Lösung aka den richtigen Installer herunterladen

Auf der Download-Seite wählt man bei Schritt 2 "All Languages (MUI)" aus. Dann kann man in Schritt 3 die zu installierde Variante festlegen. Hier sollte man dann 64-bit wählen, damit nicht später wieder von 32- auf 64-bit aktualisiert wird.

{{< img src="/images/blog/adobe-reader-mess/download.png" >}}

Diesen sollte man dann installieren. 

{{< img src="/images/blog/adobe-reader-mess/detection-rule.png" >}}

Als Erkennungsregel wählt man den Typ "MSI" und den Produktcode "AC76BA86-1033-FF00-7760-BC15014EA700". Die Produktversion sollte nicht geprüft werden, da sich die Version bei Updates ändert.

### Aufräumen

Hat man bereits einen falschen Adobe Reader verteilt, so muss dieser sauber deinstalliert werden. Dazu kann man eine neue [Win32-Anwendung](https://docs.microsoft.com/de-de/mem/intune/apps/apps-win32-app-management) in Intune erstellen, welche aus dem folgenden PowerShell-Skript besteht:

```powershell
# Konfiguration
$programNames = @('Adobe Acrobat Reader DC', 'Adobe Acrobat DC')
$versionToBeInstalledAtLeast = New-Object System.Version "22.001.20117"

# Alle Adobe-Anwendungen
$apps = Get-wmiobject Win32_Product -filter "name LIKE 'Adobe%'"
$installedReader = $null
$installedVersion = $null

foreach($product in Get-WmiObject Win32_Product -filter "name LIKE 'Adobe%'") {
    foreach($programName in $programNames) {
        if($product.Name -ne $null -and $product.Name.StartsWith($programName)) {
            $installedReader = $product
            $installedVersion = New-Object System.Version $product.Version
            break
        }
    }
}

if($installedReader -ne $null -and -not $installedReader.Name.Contains("64-bit")) {
    Write-Host "Nicht-x64-Adobe Reader gefunden."
    $installedVersion = New-Object System.Version "0.0.0.0" # Workaround, damit die spätere if-Bedingung erfüllt ist
}

# Wenn ein Adobe Reader gefunden wurde -> deinstallieren (falls es nicht bereits die Zielversion ist)
if($installedReader -ne $null -and $installedVersion -lt $versionToBeInstalledAtLeast) {
    Write-Host "Alte Adobe Reader Version oder x86 gefunden, deinstalliere diese."
    $guid = $product.IdentifyingNumber
    Start-Process "msiexec.exe" "/x $guid /qn /norestart" -Wait
    Write-Host "Alte Adobe Reader Version deinstalliert."
} else {
    Write-Host "Adobe Reader nicht gefunden oder bereits aktuell."
}
```

In der Variable `$versionToBeInstalledAtLeast` wird gesteuert, welche Zielversion des Adobe Readers man voraussetzt. Dies sollte die Version sein, die man aktuell als Anwendung verteilt (siehe vorheriges Kapitel).

Weitere Anwendungskonfiguration:
* Name (*kann frei gewählt werden*): Adobe Reader DC Uninstall 
* Installationsbefehl: `powershell.exe -executionpolicy Bypass -file Uninstall-OldReader.ps1`
* Deinstallationsbefehl: `powershell.exe`
* Installationsverhalten: System

Als Erkennungsskript wird folgendes PowerShell-Skript verwendet:

```powershell
$programNames = @('Adobe Acrobat Reader DC', 'Adobe Acrobat DC')
$versionToBeInstalledAtLeast = New-Object System.Version "22.001.20117"

# Alle Adobe-Anwendungen
$apps = Get-wmiobject Win32_Product -filter "name LIKE 'Adobe%'"
$installedReader = $null
$installedVersion = $null

foreach($product in Get-WmiObject Win32_Product -filter "name LIKE 'Adobe%'") {
    foreach($programName in $programNames) {
        if($product.Name -ne $null -and $product.Name.StartsWith($programName)) {
            $installedReader = $product
            $installedVersion = New-Object System.Version $product.Version
            break
        }
    }
}

if($installedReader -ne $null -and -not $installedReader.Name.Contains("64-bit")) {
    Write-Host "Nicht-x64-Adobe Reader gefunden."
    Exit 1
}

# Wenn ein Adobe Reader gefunden wurde -> deinstallieren (falls es nicht bereits die Zielversion ist)
if($installedReader -ne $null -and $installedVersion -lt $versionToBeInstalledAtLeast) {
    Write-Host "Alte Adobe Reader Version gefunden"
    Exit 1
}

# Keinen Adobe Reader gefunden oder Adobe Reader DC x64 gefunden (in Version >= $versionToBeInstalledAtLeast)
Write-Host "Keinen Adobe Reader gefunden oder x64-Version gefunden >= $versionToBeInstalledAtLeast"
Exit 0
```

