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

Bei der Installation ist im Grunde nicht viel zu machen. Man startet die Installationsdatei und folgt dem Assistenten.

{{< callout type="warning" title="Wichtig" >}}
    Am Ende des Updates den SCCM Server neustarten.
{{< /callout >}}

# Überprüfen

{{< callout type="success" title="Fertig" >}}
    Der SQL Server wurde erfolgreich aktualisiert.
{{< /callout >}}