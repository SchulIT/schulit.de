---
title: Erste Schritte
type: static
---

Nach der Installation des SCCM steht die SCCM Konsole auf dem Server zur Verfügung.

<!--more-->

# Fehlermeldung beim ersten Start

Je nach Installation kann es vorkommen, dass die SCCM Konsole einen mit der Fehlermeldung begrüßt, dass es beim Prüfen auf Updates einen Fehler gab:

{{< img src="/images/sccm/configure/first-steps/error-1.png" >}}

Dann navigiert man zu "Verwaltung" > "Standortkonfiguration" > "Standorte" und wählt dort den gerade (und vermutlich einzigen) installierten Server aus. Oben im Ribbon unter "Standort" auf den Button "Standortsystemrollen" hinzufügen:

{{< img src="/images/sccm/configure/first-steps/error-1-step-1.png" >}}

Im Assistenten solange auf "Weiter" klicken, bis man Rollen auswählen kann. Dort die Rolle "Dienstverbindungspunkt" auswählen:

{{< img src="/images/sccm/configure/first-steps/error-1-step-2.png" >}}
{{< img src="/images/sccm/configure/first-steps/error-1-step-3.png" >}}
{{< img src="/images/sccm/configure/first-steps/error-1-step-4.png" >}}
{{< img src="/images/sccm/configure/first-steps/error-1-finish.png" >}}

Nun sollte die Fehlermeldung weg sein.

# Ermittlungsmethoden

Nun muss noch die Kommunikation zwischen Active Directory und dem SCCM eingerichtet werden, sodass das SCCM bestimmte Informationen aus dem AD nutzen kann (wie bspw. das Auffinden von neuen Computern im AD).

Dazu zu "Verwaltung" > "Hierarchiekonfiguration" > "Ermittlungsmethoden" navigieren.

## Active Directory-Gesamtstrukturermittlung

Zunächst sollte die Gesamtstrukturermittlung aktiviert werden. Dazu diese auswählen und oben auf den Button "Eigenschaften" klicken. Anschließend die Gesamtstrukturermittlung aktivieren. Mit "OK" bestätigen und die Ermittlung direkt ausführen.

{{< img src="/images/sccm/configure/first-steps/discovery-1.png" >}}

## Active Directory-Systemermittlung

Damit das SCCM Computer im Active Directory finden kann, muss die Systemermittlung aktiviert werden. Dazu zunächst die Systemermittilung auswählen und oben auf den Button "Eigenschaften" klicken. Dort einen neuen Active Directory-Container auswählen (mithilfe des gelben Stern-Icons). Als Pfad die Wurzel des ADs angeben. Anschließend alles mit "OK" bestätigen. Die Ermittlung kann nun direkt ausgeführt werden.

{{< img src="/images/sccm/configure/first-steps/discovery-2.png" >}}
{{< img src="/images/sccm/configure/first-steps/discovery-3.png" >}}