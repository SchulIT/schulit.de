---
title: ADK aktualisieren
ordering: 2
type: static
summary: Das ADK muss mit jeder neuen Windows 10 Version ebenfalls aktualisiert werden, damit die neue Version von Windows 10 verteilt werden kann.
---

# Altes Windows ADK deinstallieren

Zunächst muss das aktuelle Windows ADK über die Systemsteuerung deinstalliert werden. Es heißt dort "Windows Assessment and Deployment Kit - Windows 10". Ab dem ADK 1809 muss man zusätzlich auch den Windows PE-Teil entfernen:

{{< img src="/images/sccm/maintenance/adk-update/adk-uninstall.png" >}}

{{< callout type="danger" title="Wichtig" >}}
    Anschließend den SCCM-Server neustarten!
{{< /callout >}}

# Neues Windows ADK installieren

## Download

Zunächst das "Windows ADK for Windows 10, version XXXX" (XXXX durch den aktuellen Build ersetzen) sowie das "Windows PE add-on for the ADK" von [Microsoft](https://docs.microsoft.com/de-de/windows-hardware/get-started/adk-install) herunterladen.

{{< img src="/images/sccm/maintenance/adk-update/adk-download.png" >}}


## Installation (ADK)

Zunächst die Installation des ADK starten (`adksetup.exe`):

{{< img src="/images/sccm/maintenance/adk-update/adk-step-1.png" caption="Den Installationspfad nicht ändern!" >}}
{{< img src="/images/sccm/maintenance/adk-update/adk-step-2.png" caption="Die gewünschten Datenschutz-Einstellungen vornehmen" >}}
{{< img src="/images/sccm/maintenance/adk-update/adk-step-3.png" caption="Den Lizenzvertrag lesen und annehmen">}}
{{< img src="/images/sccm/maintenance/adk-update/adk-step-4.png" caption="Nur die Bereitstellungstools und USMT werden benötigt" >}}
{{< img src="/images/sccm/maintenance/adk-update/adk-step-5.png" caption="Warten, bis die Installation fertig ist." >}}
{{< img src="/images/sccm/maintenance/adk-update/adk-finish.png" caption="Nach wenigen Minuten ist die Installation fertig." >}}

## Installation (WinPE)

Nun die Installation des WinPE-Addons starten (`adkwinpesetup.exe`):

{{< img src="/images/sccm/maintenance/adk-update/pe-step-1.png" caption="Den Installationspfad nicht ändern!" >}}
{{< img src="/images/sccm/maintenance/adk-update/pe-step-2.png" caption="Die gewünschten Datenschutz-Einstellungen vornehmen" >}}
{{< img src="/images/sccm/maintenance/adk-update/pe-step-3.png" caption="Den Lizenzvertrag lesen und annehmen">}}
{{< img src="/images/sccm/maintenance/adk-update/pe-step-4.png" caption="Einfach mit 'Install' bestätigen">}}
{{< img src="/images/sccm/maintenance/adk-update/pe-step-5.png" caption="Einfach 'Retry' anklicken, sodass die Datei aus dem Internet heruntergeladen wird" >}}
{{< img src="/images/sccm/maintenance/adk-update/pe-step-6.png" caption="Warten, bis die Installation fertig ist." >}}
{{< img src="/images/sccm/maintenance/adk-update/pe-finish.png" caption="Nach wenigen Minuten (variiert je nach Internetverbindung) ist die Installation fertig." >}}

{{< callout type="danger" title="Wichtig" >}}
    Anschließend den SCCM-Server neustarten!
{{< /callout >}}

## Boot-Images neu erstellen

Zum Schluss müssen noch die Boot-Images mit der neuesten Version von Windows PE erstellt werden. 

{{< callout type="warning" title="Hinweis" >}}
    Die folgenden Schritte müssen für alle Boot-Images gemacht werden.
{{< /callout >}}

Dazu im SCCM unter "Softwarebibliothek" > "Übersicht" > "Betriebssysteme" > "Startabbilder" das Boot-Image mit der rechten Maustaste anklicken und auf "Verteilungspunkte aktualisieren" klicken. Im Wizard die Option "Dieses Startimage mit der aktuellen Windows PE-Version aus dem Windows ADK neu laden" aktivieren und den Assistenten mit "Weiter" bestätigen.

{{< img src="/images/sccm/maintenance/adk-update/boot-step-1.png" caption="Option setzen und anschließend 2x mit 'Weiter' bestätigen." >}}
{{< img src="/images/sccm/maintenance/adk-update/boot-step-2.png" caption="Warten, bis das Boot-Image erzeugt wurde." >}}

Anschließend sollte man die Version des Boot-Image überprüfen:

{{< img src="/images/sccm/maintenance/adk-update/boot-check.png" >}}

Die Betriebssystemversion sollte "10.0.XXXXX.Y" sein, wobei XXXXX der [Build-Nummer des zugehörigen Windows 10](https://www.microsoft.com/de-de/itpro/windows-10/release-information) entspricht. Im obigen Beispiel sieht man, dass das x64-Image mit Windows 10 1809 erstellt wurde (das x86-Image noch mit Windows 10 1803).

{{< callout type="success" title="Fertig" >}}
    Das Windows ADK wurde auf die neueste Version aktualisiert.
{{< /callout >}}