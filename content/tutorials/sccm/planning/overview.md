---
title: Übersicht
ordering: 1
type: static
summary: Auf dieser Seite soll das SCCM mit seinen Möglichkeiten kurz vorgestellt werden.
---

# Einführung

Das SCCM ist ein sehr mächtiges Tool, welches Systemadministratoren wichtige Werkzeuge zur Verfügung stellt, um die IT zu verwalten. Zwar lassen sich einzelne Dinge auch mit separaten Tools wie [WSUS](https://de.wikipedia.org/wiki/Windows_Server_Update_Services) oder [WDS](https://de.wikipedia.org/wiki/Windows_Deployment_Services) realisieren, das SCCM erweitert diese Tools jedoch um sehr praktische Funktionen.

# Clientbereitstellung

Das SCCM bringt alles mit, um die Installation eines Computers zu vereinfachen und zu automatisieren.

Mithilfe von sogenannten [Task-Sequenzen](/tutorials/sccm/osd/basic-task-sequence/) können verschiedene Rezepte zur Bereitstellung eines Clientcomputers definiert werden. Diese ergänzen die eigentliche Installation des Betriebssystems um Möglichkeiten zur Installation von Treibern und Anwendungen, automatischem Domänenbeitritt oder Ausführen von Skripten (bspw. um [Windows 10 Apps zu entfernen](/tutorials/sccm/osd/task-sequence/remove-win10-apps/), [Office-Aktivierung](/tutorials/sccm/osd/task-sequence/activate-office/), ...). Dabei können verschiedene Rezepte für verschiedene Rechnertypen (bspw. Schüler-Rechner, Lehrer-Rechner, Rechner für IT, ...) definiert werden.

Als Betriebssysteme können entweder Windows-Installationen "von der Stange" installiert werden oder aber auch [vorab angepasste Windows-Installationen](/tutorials/sccm/osd/manual-capture/). Dazu kann mithilfe eines Referenzcomputers eine Windows-Installation aufgezeichnet werden.

# Anwendungs- und Skriptbereitstellung

Das Ausrollen von [Anwendungen](/tutorials/sccm/applications/) im laufenden Betrieb ist mithilfe des SCCMs möglich. Damit können Anwendungen (sowohl MSI- und Nicht-MSI-Anwendungen) für Computer oder Sammlungen von Computern automatisch installiert werden. 

Außerdem lassen sich PowerShell-Skripte ausführen.

# Updates

Mithilfe der [Softwareupdaterolle](/tutorials/sccm/windows-updates/) des SCCMs lassen sich Updates für Windows, Office & Co zentral verwalten und an die Rechner verteilen. Im Gegensatz zum WSUS lassen sich die Updates feiner verteilen (genauer Installationszeitpunkt sowie genauere Festlegung der Zielcomputer). Mithilfe des SCUP lassen sich auch Drittanbieterupdates wie solche von Adobe für den Adobe Reader verteilen.

# Windows Defender

Zwar bietet Windows 10 einen eingebauten Windows Defender, dieser lässt sich jedoch erst mit dem SCCM auch [zentral verwalten](/tutorials/sccm/endpoint-protection/) und mithilfe von Richtlinien steuern. Darüber hinaus kann das SCCM die Verteilung der Virendefinitionen übernehmen. Für Windows 7 bietet das SCCM die sogenannte Endpoint Protection an, was dem Vorgänger vom Defender in Enterprise-Umgebungen entspricht.

# Berichte

Da das SCCM jeden Rechner kennt und überwacht, können Daten über die Rechner abgefragt werden. Somit ist es möglich, an zentraler Stelle Informationen zu installierten Programmen, Treibern oder Hardware im SCCM abzufragen.