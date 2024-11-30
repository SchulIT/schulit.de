---
title: "Windows Virtual Desktop deaktivieren"
date: 2020-01-02T14:00:00
author: "Marcel Marnitz"
type: post
archive: "2020/01"
tags: [ "windows" ]
summary: Mit Windows 10 wurden virtuelle Desktops eingeführt. Mithilfe dieser lassen sich mehrere Desktops für verschiedene Bereiche anlegen. Unsere Schülerinnen und Schüler machen leider auch davon Gebrauch und nutzen das Feature, um Blödsinn zu machen. Leider lassen sich die virtuellen Desktops nicht mithilfe von Windows-Boardmitteln abschalten, sodass man zu externen Tools greifen muss.
---

Wir nutzen das Tool [AutoHotkey](https://www.autohotkey.com/), um die Shortcuts zu überschreiben, mit denen man (a) virtuelle Desktops erstellen und (b) zwischen diesen wechseln kann.

# Installation

Zwar enthält die Installationsdatei auch einen Parameter, um AutoHotkey automatisch zu installieren. Allerdings werden dann auch Features installiert, die wir gar nicht möchten:

* Startmenü-Einträge (auch wenn sie für Schülerinnen und Schüler nicht sichtbar sind)
* Doppelklick auf ahk-Dateien zum Starten von Skripten

Insbesondere letzteres ist unerwünscht. Glücklicherweise ist das Tool jedoch auch ohne Installation lauffähig, indem einfach die gewünschte `AutoHotkey.exe` an einen gewünschten Platz auf dem Computer kopiert wird. Zum Verteilen des Tools verwenden wir das SCCM. Man kann jedoch auch eine Gruppenrichtlinie erstellen, die das Programm auf den Computer kopiert.

## Installationsdateien

Wir laden die benötigten Dateien von der [Download-Seite](https://www.autohotkey.com/download/) herunter. Dabei laden wir das ZIP-Archiv herunter. Entpackt sieht das so aus:

{{< img src="/images/blog/autohotkey/zip-contents.png" >}}

Wir benötigten die Datei `AutoHotkeyU64.exe` (**U**nicode, **64**-bit). Auf 32-bit Systemen wählt man entsprechend `AutoHotkeyU32.exe`. Wir haben jedoch ausschließlich 64-bit Computer.

Zur Installation und Deinstallation des Programmes benötigen wir dann noch zwei Skripte. Diese kopieren die Datei auf den Computer oder löschen sie von diesem.

install.ps1:
```powershell
$sourcePath = ".\AutoHotkey.exe"
$directory = "C:\Program Files\AutoHotkey"
$targetPath = $directory + "\AutoHotkey.exe"

if(-not (Test-Path $directory)) {
	New-Item $directory -ItemType "directory"
}

Copy-Item -Path $sourcePath -Destination $targetPath
```

uninstall.ps1:
```powershell
$directory = "C:\Program Files\AutoHotkey"

if(Test-Path $directory) {
	Remove-Item -Path $directory -Recurse -Confirm:$false -Force
}
```

Das Programm wird dann unter `C:\Program Files\AutoHotkey\AutoHotkey.exe` abgespeichert.

Die beiden Skripte und die `AutoHotkeyU64.exe` landen dann auf dem SCCM-Server unter `\\SCCM01\Applications\AutoHotkey\1.1.32` (wir haben Version 1.1.32). Die `AutoHotkeyU64.exe` haben wir in `AutoHotkey.exe` umbenannt:

{{< img src="/images/blog/autohotkey/sccm-contents.png" >}}

## SCCM-Anwendung

Bei der Erstellung einer Anwendung im SCCM muss der Skript-Installationstyp angegeben werden. Folgende Parameter müssen im Assistenten angegeben werden:

* Installationsprogramm: `powershell.exe -executionpolicy bypass -file install.ps1`
* Deinstallationsprogramm: `powershell.exe -executionpolicy bypass -file uninstall.ps1`
* Erkennungsregel: Die Datei `C:\Program Files\AutoHotkey\AutoHotkey.exe` ist vorhanden und hat eine Version ist gleich `1.1.32.0`

# Nutzung

Um nun die entsprechenden Tastenkürzel zu unterbinden, eignet sich das [ein AutoHotkey-Skript von GwenDragon](https://labs.gwendragon.de/blog/Computer/Windows/hotkey-fur-windows-virtual-desktop-deaktivieren). Dieses kopiert man auf eine Windows-Freigabe auf dem Domain Controller.

Nun erstellt man eine GPO und konfiguriert unter Benutzerkonfiguration > Richtlinien > Administrative Vorlagen > System/Anmelden die Richtlinie "Diese Programme bei der Benutzeranmeldung ausführen". Hier gibt man dann `%programfiles%\AutoHotkey\AutoHotkey.exe "UNC-Pfad zur AHK-Datei"` an. 

Die GPO dann entsprechend in den gewünschten OUs aktivieren.

# Weitere Skripte

Wir nutzen noch ein weiteres Skript, mit dem wir Tastenkombinationen unterbinden. Es gibt zwar die Gruppenrichtlinie, Tastenkombinationen mit der Windows-Taste (Win+E, Win+X, Win+R, ...) zu unterbinden, allerdings unterbindet dies bspw. auch die Tastenkombination Win+E zum Starten des Explorers. Wenn man die entsprechende Richtlinie nun deaktiviert, so ergeben sich durch die Tastenkombinationen Win+X oder Win+R mögliche Lücken, die Schülerinnnen oder Schüler ausnutzen können. Das folgende AutoHotkey-Skript unterbindet diese jedoch praktischerweise:

```
#NoTrayIcon

; Disable Win+R
#R::

; Disable Win+X
#X::

return

```

Das Skript `DisableWindowsShortkeys.ahk` deployen wir genauso wie das Skript zum Unterbinden der virtuellen Desktops.