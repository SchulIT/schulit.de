---
title: "VIS Software automatisch verteilen"
date: 2019-10-10T17:00:00
tags: ["software", "sccm"]
author: "Marcel Marnitz"
type: post
archive: "2019/10"
---

An der Schule verwenden wir die Dokumentenkamera [VIS-360](https://www.sg-versand.de/visualizer/vis-360/). Diese werden mit der Software VIS angesprochen. Leider wird diese standardmäßig nach `C:\Users\<benutzername>\AppData\Local\VIS` installiert, was in einem Mehrbenutzersystem unpraktikabel ist. 

<!--more-->

Die Downloadseite der Software enthält ein Beispiel zur stillen Installation des Tools mithilfe der Parameter `/VERYSILENT /SP-`. Da es sich bei dem Installer um den [Inno Setup](http://www.jrsoftware.org/isinfo.php) handelt, waren weitere Parameter zur stillen Installation schnell [gefunden](http://www.jrsoftware.org/ishelp/index.php?topic=setupcmdline). Der Parameter `/DIR` legt den Installationsort fest.

Zur stillen Installation in ein sinnvolles Verzeichnis (`C:\Program Files (x86)`) kann daher folgendes Kommando verwendet werden:

```
VIS_Setup.exe /VERYSILENT /DIR="C:\Program Files (x86)\VIS" /SP-
```

Um das Tool im SCCM zu hinterlegen, können folgende Einstellungen verwendet werden:

* Installationsprogramm: `VIS_Setup.exe /VERYSILENT /DIR="C:\Program Files (x86)\VIS" /SP-`
* Installation starten in: `\\sccm01\Applications\VIS Dokumentenkamera` (vorausgesetzt, die Setup-Dateien liegen in diesem Ordner)
* Deinstallationsprogramm: `unins000.exe /VERYSILENT`
* Deinstallation starten in: `C:\Program Files (x86)\VIS`
* Erkennungsregel: Das Verzeichnis `C:\Program Files (x86)\VIS` ist vorhanden