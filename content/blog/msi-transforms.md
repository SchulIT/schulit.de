---
title: "MSI-Installationsdateien bearbeiten"
date: 2020-01-04T14:00:00
author: "Marcel Marnitz"
type: post
archive: "2020/01"
tags: [ "windows", "msi", "sccm" ]
---

Nicht immer lässt sich das Erstellen von Verknüpfungen auf dem Desktop oder im Startmenü durch Schalter beim MSI-Installationsprogramm abschalten. Dann ist die Erstellung einer Transformationsdatei möglich, um das Installationsprogramm während der Installation zu verändern.

<!--more-->

# Orca installieren

Um die MSI-Datei zu bearbeiten wird das Tool `Orca` benötigt. Dieses ist Teil des Windows SDK und lässt sich kostenlos bei Microsoft herunterladen.

1. [Windows SDK-Installationsprogramm herunterladen](https://developer.microsoft.com/de-de/windows/downloads/windows-10-sdk)
2. Bei der Installation muss lediglich "MSI Tools" ausgewählt werden. Alle anderen Tools werden nicht benötigt.
3. Anschließend befindet sich im Verzeichnis `C:\Program Files (x86)\Windows Kits\10\bin\10.0.18362.0\x86` eine MSI-Datei zur Installation von Orca (`Orca-x86_en-us.msi`). Mithilfe der MSI-Datei wird nun Orca installiert.

**Achtung:** Je nach heruntergeladener SDK-Version muss ein anderes Verzeichnis als `10.0.18362.0` ausgewählt werden.

# Verknüpfungen entfernen

Wir möchten [TigerJython](http://www.tigerjython.ch) mittels SCCM installieren, jedoch ohne Verknüpfungen. Dazu zunächst Orca starten und per Drag & Drop die MSI-Datei reinziehen:

{{< img src="/images/blog/msi-transforms/orca-1.png" >}}

Bevor man nun etwas verändert, klickt man auf "Transform" > "New Transform". Nun kann man die Tabellen des MSI-Installationsprogramms bearbeiten. Die Tabelle mit den Verknüpfungen heißt "Shortcut" (links ggf. etwas herunterscrollen):

{{< img src="/images/blog/msi-transforms/orca-2.png" >}}

Wir sehen dort zwei Verknüpfungen. Die obere Verknüpfung ist jene im Startmenü, die darunter jene auf dem Desktop. Beide müssen nun entfernt werden. Dazu macht man einen Rechtsklick auf die Einträge und klickt auf "Drop row". Den Warnungsdiaglog mit "OK" bestätigen:

{{< img src="/images/blog/msi-transforms/orca-3.png" >}}

Jede gelöschte Zeile wird grün durchgestrichen:

{{< img src="/images/blog/msi-transforms/orca-4.png" >}}

Anschließend kann die Transformationsdatei erstellt werden. Dazu im Menü auf "Transform" > "Generate Transform" klicken und die mst-Datei abspeichern.

Im SCCM müssen nun beide Dateien (die originale MSI und die erzeugte MST-Datei) hinterlegt werden. Die Anwendung erstellt man wie eine normale MSI-Anwendung. Allerdings ergänzt man das "Installationsprogramm" am Ende mit `TRANSFORMS=transforms-datei.mst`, wobei `transforms-datei.mst` durch den vorhin gewählten Dateinamen zu ersetzen ist. Bei uns lautet das Installationsprogramm für TigerJython daher: 

`msiexec /i "TigerJython.msi" /q TRANSFORMS=NoShortcuts.mst`

Zwecks Testen sollte man einen sauberen Computer verwenden (eine virtuelle Maschine eignet sich hervorragend). Dort kann man die Installationsdatei gemeinsam mit der Transformationsdatei aufrufen und schauen, ob es das gewünschte tut. Als Tipp empfiehlt sich der Parameter `/L*v install.log`, welcher eine Logdatei mit nützlichen Informationen schreibt. Insbesondere im Falle eines Fehlers ist dies eine erste Anlaufstelle.

# Abschließende Worte zu Orca

Grundsätzlich lässt sich mit Orca die gesamte MSI-Installationsdatei bearbeiten. Allerdings ist dies nicht immer ratsam. Hier muss man also wissen, was man tut. Entfernt man etwas falsches, meldet das Installationsprogramm eine Fehlermeldung beim Starten.

Aktuell benutzen wir Orca ausschließlich, um Verknüpfungen zu entfernen. So auch bei MySQL Workbench, wo man zusätzlich zu den obigen Schritten noch in der Tabelle "Directory" einen Eintrag ("MySQLStartMenuFolder") löschen muss.