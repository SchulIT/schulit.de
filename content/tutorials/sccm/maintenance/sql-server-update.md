---
title: SQL Server aktualisieren
ordering: 4
type: static
---

Jeden Monat erscheint ein Service Release für den SQL Server 2017, welches man zeitnah einspielen sollte. Hat man SQL Server 2016 im Einsatz, so gilt diese Anleitung ebenfalls.

<!--more-->

# Vorbereitungen

{{< callout type="danger" title="Wichtig" >}}
    Um bei einem Fehler im Update-Vorgang das SCCM wiederherstellen zu können, sollte zunächst ein Prüfpunkt des SCCMs (in Hyper-V) erstellt werden.
{{< /callout >}}

Das Update von der Microsoft-Webseite [hier](https://support.microsoft.com/de-de/help/4047329) herunterladen. 

# Installation

Bei der Installation ist im Grunde nicht viel zu machen. Man startet die Installationsdatei und folgt dem Assistenten:

{{< img src="/images/sccm/maintenance/sql-update/step-1.png" caption="Zunächst die Lizenzbedingungen und Datenschutzerklärung akzeptieren" >}}
{{< img src="/images/sccm/maintenance/sql-update/step-2.png" caption="Sicherstellen, dass die SQL-Serverinstanz (MSSQLSERVER) ausgewählt ist" >}}
{{< img src="/images/sccm/maintenance/sql-update/step-3.png" caption="Warten, bis der Assistent mit der Überprüfung fertig ist">}}
{{< img src="/images/sccm/maintenance/sql-update/step-4.png" caption="Falls es Prozesse gibt, die aktuell auf den SQL-Server zugreifen, können diese zunächst ignoriert werden." >}}
{{< img src="/images/sccm/maintenance/sql-update/step-5.png" caption="Zusammenfassung überprüfen" >}}
{{< img src="/images/sccm/maintenance/sql-update/step-6.png" caption="Und dann warten, bis die Aktualisierung fertig ist" >}}
{{< img src="/images/sccm/maintenance/sql-update/step-finish.png" caption="Nach wenigen Minuten ist die Aktualisierung bereits abgeschlossen" >}}

{{< callout type="warning" title="Wichtig" >}}
    Nun den SCCM Server neustarten.
{{< /callout >}}

# Überprüfen

Nach dem Neustart die SCCM Konsole starten und zu "Überwachung" > "Übersicht" > "Systemstatus" > "Standortstatus" navigieren:

{{< img src="/images/sccm/maintenance/sql-update/step-check.png" >}}

Hier sollte nach Möglichkeit alles grün sein (eventuell nach ein paar Minuten erneut überprüfen durch Klicken auf "Aktualisieren").

**Anmerkung:** Im obigen Screenshot werden die Rollen "Reporting Services-Punkt" und "Multicast-Dienstpunkt" nicht grün angezeigt. In meinem Fall hat dies andere Ursachen als das SQL Server-Update.

{{< callout type="success" title="Fertig" >}}
    Der SQL Server wurde erfolgreich aktualisiert.
{{< /callout >}}