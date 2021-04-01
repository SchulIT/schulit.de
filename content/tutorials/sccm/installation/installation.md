---
title: Installation
ordering: 5
type: static
---

Sind alle Voraussetzungen erfüllt, kann nun das SCCM installiert werden.

<!--more-->

Zur Installation zunächst das Installationsprogramm starten. 

{{< img src="/images/sccm/installation/sccm/sccm-1.png" >}}

Das Klicken auf "Installieren" startet den Installationsassistenten:

{{< img src="/images/sccm/installation/sccm/sccm-2.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-3.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-4.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-5.png" >}}

Die erforderlichen Dateien lassen sich in ein beliebiges Verzeichnis herunterladen:

{{< img src="/images/sccm/installation/sccm/sccm-6.png" >}}

{{< img src="/images/sccm/installation/sccm/sccm-7.png" >}}

Nun müssen ein Standortcode sowie ein Name vergeben werden. Dabei gelten folgende Regeln:

{{< callout type="info" title="Standortcode" >}}
    Der Standortcode identifiziert eine SCCM-Instanz eindeutig in der Gesamthierarchie von SCCM-Servern. Er darf aus maximal drei Zeichen bestehen. Dabei sind lediglich die Buchstaben a-z und Ziffern 0-9 erlaubt. 
{{< /callout >}}

{{< img src="/images/sccm/installation/sccm/sccm-8.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-9.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-10.png" >}}

Der Instanzname kann leer gelassen werden, sofern bei der SQL Server-Installation ebenfalls der Standardname (`MSSQLSERVER`) konfiguriert wurde.

{{< img src="/images/sccm/installation/sccm/sccm-11.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-12.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-13.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-14.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-15.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-16.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-17.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-18.png" >}}
{{< img src="/images/sccm/installation/sccm/sccm-19.png" >}}

Nun startet die Installation...

{{< img src="/images/sccm/installation/sccm/sccm-install.png" >}}

... welche je nach Hardware einige Zeit in Anspruch nehmen kann :wink:

{{< img src="/images/sccm/installation/sccm/sccm-finish.png" >}}

{{< callout type="success" title="Glückwunsch" icon="check" >}}
    Das SCCM ist nun installiert und kann konfiguriert werden.
{{< /callout >}}
