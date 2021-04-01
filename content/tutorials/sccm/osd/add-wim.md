---
title: Betriebssystemabbild importieren
ordering: 1
type: static
toc: false
---

Um ein Betriebssystem installieren zu können, muss das entsprechende Betriebssystemabbild (WIM-Datei) in das SCCM importiert werden.

<!--more-->

# Vorbereitungen

Zunächst die gewünschte WIM-Datei in ein passendes Verzeichnis kopieren, bspw. `C:\Windows 10 x64\1803` für das Vanilla-Windows 10 (Build 1803). Die WIM-Datei befindet sich in der Windows ISO-Datei unter `\sources\install.wim`. Erzeugt man die WIM-Datei durch [Aufzeichnen eines Prototypen](../manual-capture/), so befindet sich die WIM-Datei in der Regel bereits an der gewünschten Stelle.

# Einbinden ins SCCM

## Schritt 1: Abbild hinzufügen

Nach "Softwarebibliothek" > "Übersicht" > "Betriebssysteme" > "Betriebssystemabbilder" navigieren. Dort auf den Button "Betriebssystemabbild hinzufügen" klicken.

{{< img caption="Schritt 1: UNC-Pfad zur WIM auswählen" src="/images/sccm/osd/add-wim/step-1.png" >}}
{{< img caption="Schritt 2: Versionsnummer und Architektur ergänzen, um das Image später wiederzufinden" src="/images/sccm/osd/add-wim/step-2.png" >}}
{{< img caption="Schritt 3: Zusammenfassung überprüfen" src="/images/sccm/osd/add-wim/step-3.png" >}}
{{< img caption="Fertig: Das Abbild ist nun im SCCM hingefügt" src="/images/sccm/osd/add-wim/step-4.png" >}}

## Schritt 2: Abbild verteilen

Nun Rechtsklick auf das Abbild machen und auf "Inhalt verteilen" klicken.

{{< img caption="Schritt 1: auf Weiter klicken" src="/images/sccm/osd/add-wim/step-5.png" >}}
{{< img caption="Schritt 2: Auf Hinzufügen > Verteilungspunkt klicken" src="/images/sccm/osd/add-wim/step-6.png" >}}
{{< img caption="Schritt 3: SCCM-Server auswählen" src="/images/sccm/osd/add-wim/step-7.png" >}}
{{< img caption="Schritt 4: Solange auf Weiter klicken, bis der Vorgang abgeschlossen ist" src="/images/sccm/osd/add-wim/step-8.png" >}}

## Schritt 3: Verteilungsstatus überprüfen

Das Abbild wird nun auf dem SCCM Server zur Verteilung vorbereitet. Den Status sieht man unten im Dashboard:

{{< img caption="Zunächst wird der Vorgang bearbeitet..." src="/images/sccm/osd/add-wim/check-1.png" >}}
{{< img caption="... nach einiger Zeit ist der Vorgang abgeschlossen" src="/images/sccm/osd/add-wim/check-2.png" >}}