---
title: Installationsdateien aktualisieren
type: static
---

Grundsätzlich aktualisieren sich unsere Programme entweder eigenständig (im Falle von Chrome und Firefox), über das SCCM (Windows, Office, Adobe Reader, Flash) oder eben gar nicht. Um die Menge an Aktualisierungen zu reduzieren und um frische Computer auch mit der neuesten Programmversion auszustatten, sollte man ab und an die Installationsdateien auf dem SCCM durch die neuen Installer ersetzen.

<!--more-->

Wichtig zu beachten ist dabei, dass hier nur die Installationsdateien aktualisiert werden. Ist ein Programm bereits auf einem Computer installiert, erfolgt kein automatisches Update. Am Beispiel von Google Chrome wird dies demonstriert.

# Installationsdateien auf dem Dateisystem aktualisieren

Zunächst müssen die eigentlichen Installationsdateien auf dem Dateisystem aktualisiert werden. Dabei hat man mehrere Möglichkeiten:

1. Der Installer besteht aus einer Datei, welche die Versionsnummer nicht enthält (bspw. bei Google Chrome). Dann kann man die Dateien ersetzen.
2. Der Installer besteht aus einer Datei mit Versionsnummer (bspw. bei Mozilla Firefox). Hier empfiehlt es sich, die Versionsnummer einfach aus dem Dateinamen zu entfernen. Anderenfalls muss man später den Pfad des Installers im SCCM aktualisieren.
3. Der Installer besteht aus mehreren Dateien. Hier empfielt es sich, alle Dateien zunächst zu löschen und anschließend die neuen Dateien einzufügen :wink:

Im Falle von Google Chrome:

{{< img src="/images/sccm/applications/update-application/step-1.png" caption="Vorher" >}}
{{< img src="/images/sccm/applications/update-application/step-2.png" caption="Nachher" >}}

# SCCM aktualisieren

Nun muss im SCCM noch die Versionsnummer geändert werden (für die Kosmetik). Anschließend muss das SCCM die neue(n) Installationsdatei(en) in die interne Bibliothek aufnehmen sowie an alle Verteilungspunkte versenden.

## Versionsnummer ändern

In der SCCM Konsole unter "Softwarebibliothek" > "Übersicht" > "Anwendungsverwaltung" > "Anwendungen" einen Doppelklick auf die entsprechende Anwendung machen. Im Dialog die Versionsnummer ändern:

{{< img src="/images/sccm/applications/update-application/step-3.png" >}}

Anschließend mit "Übernehmen" bestätigen.

## Installationspfad ändern (optional)

Falls man den Namen des Installationsprogramms ändern muss, muss man in den Eigenschaften der Anwendung in den Tab "Bereitstellungstypen" wechseln, dort den Bereitstellungstypen anklicken und auf Bearbeiten klicken. Jetzt muss im Dialog in den Tab "Programme" gewechselt werden und dort der Pfad des Installationsprogramms aktualisiert werden.

Hat man mehrere Bereitstellungstypen, so muss dies für jeden Typen gemacht werden.

## Inhalt neu verteilen

Anschließend noch den Inhalt neu verteilen. Dazu in den Eigenschaften in den Tab "Inhaltsorte" wechseln. Dort den Verteilungspunkt anklicken und auf "Neu verteilen" klicken:

{{< img src="/images/sccm/applications/update-application/step-4.png"  >}}

Anschließend mit "OK" bestätigen.

{{< img src="/images/sccm/applications/update-application/step-5.png" >}}

Es folgt keine weitere Bestätigung, da der Vorgang nur angestoßen wurde. Den aktuellen Status sieht man, wenn man auf Inhaltsstatus klickt:

{{< img src="/images/sccm/applications/update-application/step-6.png" >}}
{{< img src="/images/sccm/applications/update-application/step-7.png" >}}