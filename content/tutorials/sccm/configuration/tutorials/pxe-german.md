---
title: Deutsche Sprache beim PXE-Boot
type: static
---

Standardmäßig ist die Windows PE-Umgebung beim Booten von PXE auf Englisch (mit englischer Tastatur). Mit den folgenden Kniffen lässt sich das jedoch auf Deutsch ändern.

<!--more-->

### Vorbereitung

Zunächst muss die deutsche Sprachdatei für WinPE in das entsprechende Verzeichnis kopiert werden. Muss die Datei `tsres.dll` in die korrekten Verzeichnisse kopiert werden:

Für das x86-Image:

* Quellverzeichnis: `C:\Program Files\Microsoft Configuration Manager\cd.latest\LanguagePack\Server\DEU\smssetup\OSD\Bin\i386\00000407`
* Zielverzeichnis: `C:\Program Files\Microsoft Configuration Manager\OSD\bin\i386\00000407`

Für das x64-Image:

* Quellverzeichnis: `C:\Program Files\Microsoft Configuration Manager\cd.latest\LanguagePack\Server\DEU\smssetup\OSD\Bin\x64\00000407`
* Zielverzeichnis: `C:\Program Files\Microsoft Configuration Manager\OSD\bin\x64\00000407`

### Skript

Nun das folgende Skript namens `SetSMSTSLanguage.vbs` unter einer Freigabe (bei uns ist das bspw. `\\SCCM01\OSD`) abgespeichern:

{{< highlight vbs >}}
Dim objTSEnvironment, objArguments, sLocaleID

Set objArguments = Wscript.Arguments
If WScript.Arguments.Count = 1 Then
    sLocaleID = objArguments.Named.Item("LocaleID")
Else
    Wscript.Echo "Usage: SetSMSTSLanguage.vbs /LocaleID:[LocaleID]"
    Wscript.Quit(0)
End If

Set objTSEnvironment = CreateObject("Microsoft.SMS.TSEnvironment")
objTSEnvironment("SMSTSLanguageFolder") = sLocaleID

Wscript.Quit(0)
{{< /highlight >}}

{{< callout type="danger" title="Wichtig" >}}
    Das Skript muss über eine Freigabe für jeden lesbar sein. Entsprechend sind also die Rechte der Freigabe bzw. des Skriptes zu setzen.
{{< /callout >}}

### Skript einbinden

{{< callout type="info" title="Hinweis" >}}
    Die folgenden Schritte müssen für alle Startabbilder durchgeführt werden!
{{< /callout >}}

In der SCCM-Konsole zu "Softwarebibliothek" > "Übersicht" > "Betriebssysteme" > "Startabbilder" navigieren und einen Rechtsklick auf das Startabbild machen und "Eigenschaften" auswählen. Im Fenster in den Tab "Anpassung" wechseln.

Die Option "Prestart-Befehl aktivieren" aktivieren und die Befehlszeile `cscript.exe SetSMSTSLanguage.vbs /LocaleID:1031` eintragen (Die LocaleID 1031 steht für Deutsch) eintragen. Außerdem die Option "Dateien für den Prestart-Befehl einbeziehen" aktivieren und das Quellverzeichnis auswählen, wo das Skript `SetSMSTSLanguage.vbs` hinkopiert wurde (Wichtig: Als Freigabepfad angeben!).

{{< img src="/images/sccm/configure/tutorials/pxe-german/smsts-language.png" >}}

Anschließend auf "OK" klicken. Es erscheint das folgende Popup:

{{< img src="/images/sccm/configure/tutorials/pxe-german/deploy.png" >}}

Hier auf "Ja" klicken und dem Assistenten folgen. Anschließend sind die Änderungen übernommen.

---

Quelle: https://www.petervanderwoude.nl/post/how-to-change-the-language-in-windows-pe-via-configmgr-2012/