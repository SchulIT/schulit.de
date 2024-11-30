---
title: Desktop-Verknüpfungen per Skript anlegen
date: 2021-03-20T00:00:00
tags: ["intune", "mdm"]
author: "Marcel Marnitz"
type: post
archive: "2021/03"
summary: "Standardmäßig wird nur der Papierkorb auf dem Windows 10 Desktop angezeigt (Stand: Windows 10 20H2). Für unsere Tablets, die wir nun über Intune verwalten, möchten wir jedoch auch die Verknüpfung *Dieser PC* sowie eine Verknüpfung zu den *Eigenen Dateien* machen."
---

Laut [Deskmodder](https://www.deskmodder.de/wiki/index.php/Desktopsymboleinstellung_Windows_10) muss man dazu Schlüssel in der Registry bearbeiten. Wie man am Schlüssel-Präfix des Pfades `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel` erkennen kann, ist es eigentlich eine Einstellung im Kontext eines Benutzers. Da die Policies von Intune -- im Gegensatz zu klassischen GPOs -- nicht grundsätzlich bei jeder Anmeldung angewendet werden, ist das unpraktikabel.

Es gibt jedoch auch denselben Schlüsselpfad unter `HKEY_LOCAL_MACHINE` (kur: `HKLM`), welcher die Einstellung systemweit seit - Danke an Microsoft für's Mitdenken!

Wir verwenden also ein Powershell-Skript, welches die entsprechenden Verknüpfungen anlegt. In unserem Fall:

* Dieser PC (`{20D04FE0-3AEA-1069-A2D8-08002B30309D}`)
* Benutzerordner (`{59031a47-3f72-44a7-89c5-5595fe6b30ee}`)

Weitere Ordner können nach Belieben hinzugefügt werden. Einfach in der Liste `@shortcutGuids` hinzufügen. Eine Übersicht findet man auf der Seite von [Deskmodder](https://www.deskmodder.de/wiki/index.php/Desktopsymboleinstellung_Windows_10).

Warum man die Schlüssel sowohl unter `ClassicStartMenu` als auch unter `NewStartPanel` anlegen muss, weiß ich leider nicht mehr. Bei einem Test reichte es jedoch nicht aus, nur einen der Schlüssel zu verwenden.

Wichtig bei der Konfiguration des Skriptes in Intune:

* Das Skript sollte nicht mit den Anmeldeinformationen des angemeldeten Benutzers ausgeführt werden (schließlich sollte der Benutzer keinen Zugriff auf HKLM haben)
* Das Skript muss im 64-bit-PowerShell-HOst ausgeführt werden

```powershell
$rootKey = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons"

$subKeys = @("ClassicStartMenu", "NewStartPanel")
$shortcutGuids = @("{20D04FE0-3AEA-1069-A2D8-08002B30309D}", "{59031a47-3f72-44a7-89c5-5595fe6b30ee}")

function CreateKey([string]$path, [string]$key) {
    New-ItemProperty -Path $path -Name $key -PropertyType DWord -Value 0
}

function KeyExists([string]$path, [string]$key) {
    Write-Host $path
    $keys = Get-Item -Path $path | Select-Object -ExpandProperty Property
    return $keys.Contains($key)
}

function SetKey([string]$path, [string]$key) {
    Set-ItemProperty -Path $path -Name $key -Value 0
}

foreach($subKey in $subKeys) {
    Write-Host $subKey
    foreach($guid in $shortcutGuids) {
        Write-Host $guid
        if(KeyExists -path ($rootKey+"\"+$subKey) -key $guid) {
            SetKey -path ($rootKey+"\"+$subKey) -key $guid
        } else {
            CreateKey -path ($rootKey+"\"+$subKey) -key $guid
            SetKey -path ($rootKey+"\"+$subKey) -key $guid
        }
    }
}
```