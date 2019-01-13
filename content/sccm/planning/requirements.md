---
title: Voraussetzungen
ordering: 2
type: static
---

Zwar listet Microsoft selbst einige Voraussetzungen an die Hardware des SCCM-Servers, allerdings sind die für Schule sicherlich etwas übertrieben.

<!--more-->

# Offizielle Voraussetzungen

Die offiziellen Voraussetzungen von Microsoft findet sich in den [Microsoft Docs](https://docs.microsoft.com/de-de/sccm/core/plan-design/configs/recommended-hardware) (primärer Standortserver mit Datenbankstandortrolle auf dem gleichen Server). Man sollte insbesondere auf die Performance der Festplatte sowie auf Arbeitsspeicher und CPUs achten. Es wird eine Netzwerkverbindung mit 1 GBit empfohlen.

# Unsere Erfahrungen

Unser SCCM läuft in einer virtuellen Hyper-V-Maschine mit insg. 32 Kernen und 128 GB Arbeitsspeicher. Die Festplatten sind in einem RAID 10-Verbund (Hardware). Mit dem SCCM verwalten wir ca. 250 Computer.

## Anzahl Prozessoren

Für das SCCM haben wir 12 Prozessoren reserviert, also etwas weniger als die Empfehlung von Microsoft (16 CPUs). Die Auslastung liegt im laufenden Betrieb bei unter 10%. Bevor wir das SCCM auf den aktuellen Server verschoben haben, lief es auch mit nur 8 CPUs (weniger haben wir nicht ausprobiert).

## Arbeitsspeicher

Unser Arbeitsspeicher wird dynamisch verteilt. Das Monitoring zeigt jedoch, dass in der Regel circa 14 GB Arbeitsspeicher von der Maschine verwendet werden (also deutlich weniger als die empfohlenen 96 GB).

## Festplatte

Festplattenspeicherplatz ist sehr schwer kalkulierbar. Wir kommen aktuell mit 800 GB Speicherplatz locker hin (mehr als 50% ist noch frei). Wir verteilen Updates für Windows 10 (ausschließlich für die aktuelle eingesetzte Build), Windows Server 2016 sowie Office 2016. Außerdem verteilen wir sowohl Windows 10 "von der Stange" sowie ein angepasstes Windows 10. 

Bei den Berechnungen sollte man beachten, dass der verwendetete Speicherplatz doppelt benötigt wird. Das hängt damit zusammen, dass das SCCM die Dateien sowohl auf einer Netzfreigabe ablegt (um auch weitere SCCM Server mit den Dateien zu versorgen) und außerdem selbst eine Inhaltsbibliothek pflegt (dort sind alle Dateien enthalten, die das SCCM auch an die Clients ausliefern muss). Beispiel: der Speicherplatz der eigentlichen Dateien (Netzfreigabe) beträgt knapp 100 GB. Unsere Inhaltsbibliothek ist ca. 70 GB groß.

## Netzwerk

Das SCCM ist bei uns direkt am Backbone-Netzwerk mit 10 GBit/s angeschlossen. Für den laufenden Betrieb reicht vermutlich auch eine 1 GBit-Anbindung, wenn wir jedoch ganze Räume neu installieren (32 Computer pro Raum), wird es sehr schnell sehr langsam.  

---
Quelle: https://docs.microsoft.com/de-de/sccm/core/plan-design/configs/recommended-hardware