---
title: Vorbereitungen im Active Directory
ordering: 1
type: static
---

Zunächst muss das Active Directory für den Betrieb eines SCCM vorbereitet werden. 

<!--more-->

# System Management-Container erstellen

Über den Server-Manager muss der ADSI-Editor geöffnet werden. Dort einen Rechtsklick auf "ADSI-Editor" machen und auf "Verbindung herstellen..." klicken. Die Verbindungseinstellungen müssen dabei (in der Regel) nicht geändert werden:

{{< img src="/images/sccm/installation/requirements-ad/adsi-1.png" >}}

Nun erweitert man den Baum links, sodass der Ordner "CN=System" sichtbar ist (Der Baum wird sichtbar, wenn man Elemente anklickt). Nun einen Rechtsklick auf "CN=System" machen und ein neues Objekt erstellen:

{{< img src="/images/sccm/installation/requirements-ad/adsi-2.png" >}}

In dem sich nun öffnenden Assistenten nun folgende Dinge auswählen bzw. eintragen:

{{< img src="/images/sccm/installation/requirements-ad/adsi-3.png" >}}
{{< img src="/images/sccm/installation/requirements-ad/adsi-4.png" >}}
{{< img src="/images/sccm/installation/requirements-ad/adsi-5.png" >}}

# Berechtigungen für System Management-Container setzen

Nach der Erstellung des Containers die Einstellungen des Containers "CN=System Management" öffnen (Rechtsklick > Einstellungen). Dort in den Reiter "Sicherheit" wechseln und auf "Hinzufügen" klicken:

In dem sich öffnenden Suchfenster muss nun der Computeraccount des SCCM-Servers angegeben. Daher muss zunächst der Objekttyp "Computer" ausgewählt werden:

{{< img src="/images/sccm/installation/requirements-ad/adsi-8.png" >}}

Dem Computeraccount muss Vollzugriff gewährt werden:

{{< img src="/images/sccm/installation/requirements-ad/adsi-9.png" >}}

Anschließend auf "Erweitert" klicken. Dort das Computerkonto auswählen und auf "Bearbeiten" klicken:

{{< img src="/images/sccm/installation/requirements-ad/adsi-10.png" >}}

Anschließend mit "OK" und "Übernehmen" bestätigen.

# Active Directory-Schema erweitern

Nun muss noch das AD-Schema für das SCCM erweitert werden. Diese Aufgabe übernimmt das Tool `extadsch.exe`, das dem SCCM-Setup beiliegt. Dazu im Verzeichnis `SMSSETUP\BIN\X64` das Tool starten:

{{< img src="/images/sccm/installation/requirements-ad/extadsch.png" >}}

# SQL- und SCCM-Benutzer anlegen

Nun sollten noch der SQL-Benutzer (`sqladmin`) und der SCCM-Benutzer (`sccmadmin`) als Domänen-Admins erstellt werden. 

{{< callout type="success" title="Fertig" icon="check" >}}
    Das Active Directory ist nun vorbereitet.
{{< /callout >}}

---
Quelle: https://docs.microsoft.com/de-de/sccm/core/get-started/set-up-your-lab