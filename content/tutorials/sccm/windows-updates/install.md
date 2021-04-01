---
title: Installation
type: static
ordering: 1
---

Damit man Updates über das SCCM verteilen kann, muss zunächst die Rolle "Serverupdatepunkt" installiert werden.

<!--more-->

# Vorbereitungen

Zunächst muss ein WSUS auf dem SCCM-Server installiert werden. Dazu über den Server-Manager die Rolle "WSUS" hinzufügen.

Wichtig ist, dass man den Rollendienst "SQL Server Connectivity" auswählen. Dazu zunächst "WID Connectivity" deaktivieren.

{{< img src="/images/sccm/updates/install/wsus-1.png" >}}

Nun legt man fest, wo der WSUS seine Dateien ablegt (dies muss nicht zwangsläufig auf `C:` sein):

{{< img src="/images/sccm/updates/install/wsus-2.png" >}}

Da der SQL-Server auf dem SCCM-Server läuft, wird hier der Servername des SCCM-Servers eingetragen (**Wichtig:** Verbindung überprüfen, bevor es weitergeht!):

{{< img src="/images/sccm/updates/install/wsus-3.png" >}}

Anschließend wird die WSUS-Rolle installiert. Nach der Installation müssen noch die Nachinstallationsaufgaben durchgeführt werden:

{{< img src="/images/sccm/updates/install/wsus-4.png" >}}

# SCCM-Rolle installieren

Nachdem der WSUS installiert wurde, kann die Systemrolle im SCCM installiert werden. Dazu zunächst zu "Verwaltung" > "Standortkonfiguration" > "Standorte" navigieren und dort den aktuellen Server auswählen. Oben im Ribbon unter "Standort" auf "Standortsystemrollen hinzufügen" klicken.

Zunächst solange auf Weiter klicken, bis man zur Auswahl der Rollen gelangt. Dort die Rolle "Softwareupdatepunkt" auswählen:

{{< img src="/images/sccm/updates/install/step-1.png" >}}

Der mit Windows Server 2016 installierte WSUS kommuniziert auf den Ports 8530 und 8531:

{{< img src="/images/sccm/updates/install/step-2.png" >}}

Falls notwendig, Proxyeinstellungen eintragen:

{{< img src="/images/sccm/updates/install/step-3.png" >}}

{{< callout type="info" title="Hinweis" >}}
    Die nachfolgenden Einstellungen können im Nachhinein geändert werden.
{{< /callout >}}

Als Synchronisationsquelle kommt in der Regel "Microsoft Update" in Frage, d.h. das SCCM lädt die Updates aus dem Internet herunter und stellt sie anschließend lokal bereit:

{{< img src="/images/sccm/updates/install/step-4.png" >}}

Nun kann noch ein Zeitplan aktiviert werden, nach dem das SCCM Updates synchronisiert:

{{< img src="/images/sccm/updates/install/step-5.png" >}}

Man sollte Updates eine gewisse Zeit geben, bis sie als "abgelaufen" markiert werden (die Voreinstellung von 3 Monaten ist in Ordnung). Außerdem kann man hier den WSUS-Bereinigungsassistenten aktivieren:

{{< img src="/images/sccm/updates/install/step-6.png" >}}

Mit Windows 10 gibt es sogenannte Express-Updates. Diese können hier aktiviert werden, wenn man möchte:

{{< img src="/images/sccm/updates/install/step-7.png" >}}

Als nächstes werden die Update-Klassifizierungen ausgewählt, welche die Synchronisation von Updates auf ebenjene einschränkt. Diese können nach Belieben gesetzt werden. Empfohlen wird "Critical Updates", "Definition Updates", "Security Updates" und "Updates". 

{{< img src="/images/sccm/updates/install/step-8.png" >}}

Nun kann man bereits Produkte auswählen, für die Updates bereitgestellt werden sollen. 

{{< img src="/images/sccm/updates/install/step-9.png" >}}

Als letztes müssen noch Sprachen ausgewählt werden, für die Updates bereitgestellt werden. Hier alle ungewünschten Sprachen abwählen:

Nun mehrfach bestätigen und warten, bis das SCCM die Rolle installiert hat:

{{< img src="/images/sccm/updates/install/finish.png" >}}

