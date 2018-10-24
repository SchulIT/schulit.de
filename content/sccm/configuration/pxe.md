---
title: PXE
ordering: 4
type: static
---

Das Booten vom Netzwerk wird auch vom SCCM unterstützt. In diesem Artikel wird beschrieben, wie man PXE im SCCM konfiguriert.

<!--more-->

# Konfiguration

## Schritt 1: PXE im SCCM aktivieren

In der Konsole unter "Verwaltung" > "Übersicht" > "Standortkonfiguration" > "Server und Standortsystemrollen" den SCCM-Server auswählen. Im unteren Bereich einen Rechtsklick auf die Rolle "Verteilungspunkt" machen.

{{< img src="/images/sccm/configure/pxe/step-1.png" >}}

Dort den Reiter "PXE" anklicken und folgende Häckchen setzen, falls diese nicht bereits gesetzt sind:

{{< img src="/images/sccm/configure/pxe/step-2.png" >}}

Anschließend mit "OK" bestätigen.

## Schritt 2: PXE im DHCP-Server aktivieren

Verwendet man einen Windows DHCP-Server, so öffnet man die DHCP-Verwaltung und navigiert zu "IPv4" > "Serveroptionen". Dort müssen folgende Optionen gesetzt werden:

Option|Wert
------|----
066 (Hostname des Stantservers) | Hier den Hostnamen des SCCM-Servers angeben (bspw. SCCM01)
067 (Name der Startdatei) | smsboot\x64\wdsnbp.com

{{< img src="/images/sccm/configure/pxe/step-3.png" >}}

{{< callout type="info" caption="Info" >}}
    PXE ist nun für alle IP-Netze aktiviert.
{{< /callout >}}

# Sicherheit

Es ist möglich, eine Kennwort-Abfrage zu implementieren, falls ein Client über PXE bootet. Dazu wie in Schritt 1 die PXE-Konfiguration öffnen und das Häckchen "Kennwort erforderlich, wenn PXE von Computern verwendet wird" aktivieren sowie ein Kennwort hinterlegen.

{{< callout type="warning" caption="Wichtig" >}}
    Bootet man über PXE ist das Tastaturlayout standardmäßig auf Englisch gestellt!
{{< /callout >}}