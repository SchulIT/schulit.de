---
title: Einstellungen für Adobe Reader
type: static
---

Der Adobe Reader DC lässt sich lobenswerterweise mittels GPOs steuern, sodass mittels GPO Einstellungen vorgenommen werden können, die das Arbeiten mit dem Adobe Reader erleichtern.

<!--more-->

# Download und Installation

Die Richtlinien für den Adobe Reader lassen sich [bei Adobe herunterladen](https://www.adobe.com/devnet-docs/acrobatetk/tools/AdminGuide/gpo.html). Anschließend die `.admx`-Datei sowie den Ordner `en-us` aus dem ZIP-Archiv in den Ordner `C:\Windows\SYSVOL\domain\Policies\PolicyDefinitions` (auf dem Domaincontroller) kopieren.

# Richtlinien

Da die einzelnen Richtlinien semantisch benannt sind, wird auf eine Erklärung verzichtet. 

## Computerrichtlinien

| Richtlinie | Einstellung |
|---|---|
| Adobe Acrobat Reader 2017/Preferences/General > Disable automatic updates | Aktiviert |
| Adobe Acrobat Reader 2017/Preferences/General > Don't show messages while viewing a document | Aktiviert | 
| Adobe Acrobat Reader 2017/Preferences/General > Show messages when I launch Reader | Deaktiviert |
| Adobe Acrobat Reader 2017/Preferences/General > Turn off user participation in the feedback program | Aktiviert |

## Benutzerrichtlinien

| Richtlinie | Einstellung |
|---|---|
| Adobe Acrobat Reader 2017/Preferences/General > Accept EULA | Aktiviert |
| Adobe Acrobat Reader 2017/Preferences/General > Display splash screen at launch | Deaktiviert | 