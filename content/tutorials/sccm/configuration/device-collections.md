---
title: Gerätesammlungen anlegen
type: static
summary: Gerätesammlungen sind eine sehr wichtige Komponente im SCCM. Mithilfe von Gerätesammlungen können später Anwendungen, Updates und Co gezielt an bestimmte Computer verteilt werden.
---

# Standard-Gerätesammlungen

Das SCCM bringt von sich aus bereits einige Gerätesammlungen mit:

* Alle Desktop- und Serverclients
* Alle mobilen Geräte
* Alle Systeme
* Alle unbekannten Computer

# Gerätesammlung anlegen

Das Anlegen von Gerätesammlungen soll anhand eines Beispiels demonstriert werden. Dabei wird eine Sammlung für Windows 10 1809 angelegt.

Zunächst navigiert man in der SCCM Konsole zu "Assets und Konformität" > "Übersicht" > "Gerätesammlungen". Dort lässt sich dann über das Ribbon eine neue Gerätesammlung anlegen. Es startet sich der Assistent zum Erstellen einer Gerätesammlung. Dort trägt man zunächst den Namen ein und wählt eine begrenzende Sammlung aus (dann werden nur solche Computer in die Sammlunga aufgenommen, die den gleich festgelegten Kritieren entsprechen und in dieser Sammlung enthalten sind):

{{< img src="/images/sccm/configure/device-collections/step-1.png" >}}

**Info:** Die Sammlung "Windows 10" ist eine manuell erzeugte Sammlung (siehe unten).

Im nächsten Schritt muss eine Abfrageregel hinzugefügt werden. Das SCCM fügt dann alle Computer der Sammlung hinzu, die dieser Regel entsprechen:

{{< img src="/images/sccm/configure/device-collections/step-2.png" >}}

Die Abfrage erhält einen Namen (dieser ist jedoch für später irrelevant).

{{< img src="/images/sccm/configure/device-collections/step-3.png" >}}
{{< img src="/images/sccm/configure/device-collections/step-4.png" >}}
{{< img src="/images/sccm/configure/device-collections/step-5.png" >}}

Als Attributklasse wird nun "Betriebssystem" und als Attribut "Buildnummer "ausgewählt. Anhand der Betriebssystem-Buildnummer lässt sich Windows 10 bzw. dessen Build erkennen. Anschließend mit "OK" bestätigen.

{{< img src="/images/sccm/configure/device-collections/step-6.png" >}}

Nun muss noch der Vergleich der Regel angegeben werden. In diesem konkreten Beispiel soll überprüft werden, ob die Buildnummer 17763 entspricht (die Buildnummern gibt es übrigens [hier](https://docs.microsoft.com/en-us/windows/windows-10/release-information)). Anschließend mit "OK" bestätigen.

{{< img src="/images/sccm/configure/device-collections/step-7.png" >}}

Einmal mit "OK" bestätigen und das Kritierium für die Regel ist hinzugefügt:

{{< img src="/images/sccm/configure/device-collections/step-8.png" >}}

Nun solange mit "OK" bestätigen, bis man wieder im Assistenten ist. Dort sollte man noch die Option "Inkrementelle Updates für diese Sammlung verwenden" aktivieren, damit sich die Sammlung regelmäßig aktualisiert (bspw. falls man neue Computer hinzufügt).

{{< img src="/images/sccm/configure/device-collections/step-9.png" >}}

# Nützliche Gerätesammlungen

## Windows

### Alle Windows 10-Computer

Diese Sammlung schließt alle Windows 10-Computer ein:

* Attributklasse: Systemressource 
* Attribut: Betriebssystemname und -version
* Operator: ist ungefähr wie
* Wert: `%Workstation 10%`

### Alle Windows-Clients

Diese Sammlung schließt alle Windows-Versionen ein, aber keine Windows Server:

* Attributklasse: Systemressource 
* Attribut: Betriebssystemname und -version
* Operator: ist ungefähr wie
* Wert: `Microsoft%Workstation%`

## Windows Server

### Alle Windows Server

Diese Sammlung schließt alle Windows Server- ein, aber kein normales Windows:

* Attributklasse: Systemressource 
* Attribut: Betriebssystemname und -version
* Operator: ist ungefähr wie
* Wert: `Microsoft%Server%`

### Windows Server 2016

Diese Sammlung schließt alle Windows 10-Computer ein:

* Attributklasse: Systemressource 
* Attribut: Betriebssystemname und -version
* Operator: ist ungefähr wie
* Wert: `%Server 10%`

## Architektur

Diese Sammlung schließt alle 64-bit Computer ein:

* Attributklasse: Computersystem 
* Attribut: Systemtyp
* Operator: ist gleich
* Wert: `x64-based PC` (für 32-bit muss hier `x86-based PC` ausgewählt werden :wink:)

## Computernamen

Diese Sammlung schließt alle Computer ein, die mit `PC-` starten:

* Attributklasse: Systemressource 
* Attribut: Name
* Operator: ist ungefähr wie
* Wert: `PC-%`

# Komplexere Regeln

Man kann auch komplexere Regeln erzeugen, indem man mehrere Kriterien hinzufügt: 

{{< img src="/images/sccm/configure/device-collections/combinations.png" >}}

