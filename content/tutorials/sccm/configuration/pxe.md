---
title: PXE
ordering: 4
type: static
static: Das Booten vom Netzwerk wird auch vom SCCM unterstützt. In diesem Artikel wird beschrieben, wie man PXE im SCCM konfiguriert.
---


# Konfiguration

## Schritt 1: PXE im SCCM aktivieren

In der Konsole unter "Verwaltung" > "Übersicht" > "Standortkonfiguration" > "Server und Standortsystemrollen" den SCCM-Server auswählen. Im unteren Bereich einen Rechtsklick auf die Rolle "Verteilungspunkt" machen.

{{< img src="/images/sccm/configure/pxe/step-1.png" >}}

Dort den Reiter "PXE" anklicken und folgende Häckchen setzen, falls diese nicht bereits gesetzt sind:

{{< img src="/images/sccm/configure/pxe/step-2.png" >}}

Anschließend mit "OK" bestätigen.

## Schritt 2: PXE im DHCP-Server aktivieren

Da das PXE-Startimage abhängig von der Architektur (x86 oder x64) und der verwendeten Firmware (BIOS oder UEFI) ist, muss der DHCP Server so konfiguriert sein, dass er das entsprechend passende Startimage (DHCP Option 67) an den Client meldet.

Dazu im DHCP-Server einen Rechtsklick auf "IPv4" machen und auf "Herstellerklassen definieren" klicken. Dort müssen nun drei Herstellerklassen hinzugefügt werden (Beschreibung kann jeweils leer gelassen werden):

{{< img src="/images/sccm/configure/pxe/dhcp-vendor.png" >}}

Anzeigename|ASCII-Wert (kann nicht eingefügt werden sondern muss getippt werden)
-----------|-----
PXEClient (UEFI x86) | PXEClient:Arch:00006
PXEClient (UEFI x64) | PXEClient:Arch:00007
PXEClient (BIOS x86 & x64) | PXEClient:Arch:00000


Nun einen Rechtsklick auf "Richtlinien" (direkt unter "IPv4") machen und eine neue Richtlinie hinzufügen:

{{< img src="/images/sccm/configure/pxe/dhcp-policy-1.png" >}}
{{< img src="/images/sccm/configure/pxe/dhcp-policy-2.png" >}}
{{< img src="/images/sccm/configure/pxe/dhcp-policy-3.png" >}}
{{< img src="/images/sccm/configure/pxe/dhcp-policy-4.png" >}}
{{< img src="/images/sccm/configure/pxe/dhcp-policy-5.png" >}}
{{< img src="/images/sccm/configure/pxe/dhcp-policy-6.png" >}}

Nun den Assistenten fertigstellen.

Das Ganze muss für UEFI x86 und BIOS wiederholt werden, sodass es insg. drei Richtlinien gibt. Dabei folgende Änderungen beachten:

Herstellerklasse | Name der Startdatei (Option 67)
-----|----
PXEClient (UEFI x86) | `smsboot\x86\wdsmgfw.efi`
PXEClient (BIOS x86 & x64) | `smsboot\x64\wdsnbp.com`

{{< callout type="success" title="PXE ist nun aktiviert" icon="check" >}}
    PXE ist nun für alle IP-Netze aktiviert und unterstützt sowohl BIOS als auch UEFI-Firmware.
{{< /callout >}}

# Sicherheit

Es ist möglich, eine Kennwort-Abfrage zu implementieren, falls ein Client über PXE bootet. Dazu wie in Schritt 1 die PXE-Konfiguration öffnen und das Häckchen "Kennwort erforderlich, wenn PXE von Computern verwendet wird" aktivieren sowie ein Kennwort hinterlegen.

{{< callout type="warning" title="Wichtig" icon="exclamation-triangle" >}}
    Bootet man über PXE ist das Tastaturlayout standardmäßig auf Englisch gestellt!
{{< /callout >}}

---

Quelle: https://gal.vin/2017/05/05/pxe-booting-for-uefi-bios/