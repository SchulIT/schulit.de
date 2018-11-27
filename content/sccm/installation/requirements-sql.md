---
title: SQL-Server installieren
ordering: 2
type: static
---

Das SCCM benötigt einen SQL Server als Datenbank-Backend. Hier wird dessen Installation beschrieben.

<!--more-->

# SQL Server installieren

Das SQL Server-Installationscenter öffnen und links zu "Installation" navigieren. Nun eine neue SQL-Server Installation durchführen:

{{< img src="/images/sccm/installation/requirements-sql/sql-1.png" >}}

Es startet der Installationassistent. Der Produkt Key ist bereits eingetragen:

{{< img src="/images/sccm/installation/requirements-sql/sql-2.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/sql-3.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/sql-4.png" >}}

Die Warnung zur Windows Firewall kann ignoriert werden:

{{< img src="/images/sccm/installation/requirements-sql/sql-5.png" >}}

Nun das Datenbankmodul installieren:

{{< img src="/images/sccm/installation/requirements-sql/sql-6.png" >}}

Die Standardinstanz installieren (sollte `MSSQLSERVER` heißen):

{{< img src="/images/sccm/installation/requirements-sql/sql-7.png" >}}

Als nächstes SQL Server so konfigurieren, dass der Agent und das Datenbankmodul mit dem SQL Administrator-Account `sqladmin` ausgeführt wird.

{{< img src="/images/sccm/installation/requirements-sql/sql-8.png" >}}

Anschließend auf den Reiter "Sortierung" klicken und die Sortierung auf `SQL_Latin1_General_CP1_CI_AS` ändern:

{{< img src="/images/sccm/installation/requirements-sql/sql-9.png" >}}

Auf "OK" und anschließend auf "Weiter" klicken. Nun sicherstellen, dass der "Windows-Authentifizierungsmodus" installiert ist. Weiter unten sind die Administratoren anzugeben, welche den SQL Server administrieren können. Hier mindestens den `sccmadmin` Account auswählen.

{{< img src="/images/sccm/installation/requirements-sql/sql-10.png" >}}

Anschließend mehrfach mit "Weiter" bestätigen...

{{< img src="/images/sccm/installation/requirements-sql/install.png" >}}

... und warten bis der SQL Server fertig installiert ist.

# SQL Reporting Services installieren

Um später auch Reports mithilfe des SCCM erstellen zu können, müssen noch die SQL Reporting Services installiert werden. Dazu den Installer von [Microsoft](https://go.microsoft.com/fwlink/?linkid=841713) herunterladen. Anschließend durch den Installationsassistenten klicken.

Hinweis: Als Produkt Key kann der Produkt Key des SQL Servers eingetragen werden.

Am Ende der Installation den `SCCM01`-Server neustarten. Nun aus dem Startmenü den "Report Server Configuration Manager" starten.

{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-1.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-2.png" >}}

Nun links den Knoten "Datenbank" auswählen und auf "Datenbank ändern" klicken. In dem sich öffnenden Assistenten muss man sich stupide durchklicken:

{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-3.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-4.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-5.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-6.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-7.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-8.png" >}}
{{< img src="/images/sccm/installation/requirements-sql/ssrs-config-9.png" >}}

Nachdem man im Hauptfenster auf "Anwenden" geklickt hat, kann der der "Report Server Configuration Manager" geschlossen werden.

# SQL Server Management Studio installieren (optional)

Mithilfe des SQL Server Management Studios kann man direkt auf die SQL Server-Datenbank zugreifen. Dies ist nützlich, wenn es mal irgendwo "hackt"...

Das SQL Server Management Studio kann online von [Microsoft](https://docs.microsoft.com/de-de/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017) heruntergeladen werden.

{{< callout type="warning" title="Achtung" >}}
    Der obenstehende Link gilt für SQL Server 2017. Hat man eine andere Version von SQL Server installiert, kann man diese auf der Webseite oben links ändern.
{{< /callout >}}

Beim Installer gibt es nichts zu beachten. Einfach installieren :wink:

{{< callout type="success" title="Fertig" icon="check" >}}
    Der SQL Server ist nun installiert und einsatzbereit.
{{< /callout >}}