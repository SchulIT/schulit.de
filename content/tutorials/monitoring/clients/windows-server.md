---
title: Windows Server
type: static
summary: Diese Anleitung zeigt, wie man Telegraf auf Windows Servern einrichtet.
---

# Download und Installation

Zunächst Telegraf von der [GitHub-Seite](https://github.com/influxdata/telegraf/releases) herunterladen. Die ZIP-Datei entpacken und deren Inhalte (`telegraf.conf` und `telegraf.exe`) in den Ordner `C:\Programme\Telegraf` kopieren.

# Basis-Konfiguration

Unsere Konfiguration sieht folgendermaßen aus (die Parameter für die InfluxDB wie Server-IP, Benutzername und Passwort wurden geschwärzt):

```
[agent]
  interval = "5s"
  flush_interval = "10s"
  debug = false

[[outputs.influxdb]]
  urls = ["http://***.***.***.***:8086"]
  username = "WINSERVER"
  password = "************"
  database = "telegraf"

[[inputs.win_perf_counters]]c
  PreVistaSupport = true
  [[inputs.win_perf_counters.object]]
    ObjectName = "Prozessor"
    Instances = ["_Total"]
    Counters = ["Prozessorzeit (%)"]
    Measurement = "cpu"

  [[inputs.win_perf_counters.object]]
    ObjectName = "Arbeitsspeicher"
    Instances = ["------"]
    Counters = ["Zugesicherte Bytes", "Zugesicherte verwendete Bytes (%)", "Verfügbare MB"]
    Measurement = "mem"
	
  [[inputs.win_perf_counters.object]]
    ObjectName = "Netzwerkschnittstelle"
	Instances = ["Microsoft Hyper-V Network Adapter"]
	Counters = ["Bytes gesendet/s", "Empfangene Pakete/s", "Gesamtanzahl Bytes/s"]
	Measurement = "net"
	
  [[inputs.win_perf_counters.object]]
    ObjectName = "System"
	Instances = ["------"]
	Counters = ["Systembetriebszeit"]
	Measurement = "win_system"

  [[inputs.win_perf_counters.object]]
    ObjectName = "Logischer Datenträger"
	Instances = ["C:"]
	Counters = ["MB frei", "Freier Speicherplatz (%)"]
	Measurement = "win_disk"
```

Dabei werden die Windows Performance Counters (siehe [Manual](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/win_perf_counters)) verwendet, um die entsprechenden Daten auszulesen. In unserem Falle:

* Die gesamte Prozessorlast (ObjectName="Prozessor")
* Verwendeten und verfügbaren Arbeitsspeicher (ObjectName="Arbeitsspeicher")
* Aktuelle Auslastung der Netzwerkkarte `Microsoft Hyper-V Network Adapter` (für unsere Hyper-V Gäste) (ObjectName="Netzwerkschnittstelle")
* Uptime des Servers (ObjectName="System")
* Freier Speicherplatz von Laufwerk `C:` (ObjectName="Logischer Datenträger")

# Dienst einrichten

Nun eine Eingabeaufforderung starten und folgenden Befehl ausführen:

    $ "C:\Programme\Telegraf\telegraf.exe" --service install

Nun überprüfen, ob der Dienst auch tatsächlich angelegt wurde. Auch überprüfen, ob der Dienst automatisch startet. Nach Bedarf nun starten :wink:

# Telegraf debuggen

Zwecks Debugging kann Telegraf einfach von der Eingabeaufforderung gestartet werden:

    $ "C:\Programme\Telegraf\telegraf.exe" --config "C:\Programme\Telegraf\telegraf.conf"

# Weitere Performance Counter

Leider erfolgt der Zugriff auf die Performance Counter in der Systemsprache. Das bedeutet, dass man die im Internet gefundenen Namen "übersetzen" muss. Dabei hilft jedoch das Tool `typeperf.exe`.

## Alle möglichen ObjectName anzeigen lassen

    $ typeperf.exe -q

Man erhält eine sehr lange Ausgabe. Die Counter können dabei folgendermaßen aussehen:

* `\Arbeitsspeicher\Seitenfehler/s`: Hier ist `Arbeitsspeicher` der `ObjectName`, `Seitenfehler/s` ist der eigentliche Counter (einzutragen unter `Counters`). Da es hier nur eine Instanz gibt, muss unter Instances `------` eingetragen werden (s.o.)
* `\Netzwerkschnittstelle(*)\Gesamtanzahl Bytes/s`: Das `(*)` macht deutlich, dass diese Counter für verschiedene Instanzen (hier: verschiedene Netzwerkkarten) verfügbar sind. `ObjectName` ist dann nur `Netzwerkschnittstelle`. Als Counter würde `Gesamtanzahl Bytes/s` eingetragen werden. Die gewünschten Instanzen müssen im nächsten Schritt herausgefunden werden. Alternativ kann man auch mit `*` alle Instanzen abfragen.

# Alle möglichen Instanzen herausfinden

    $ typeperf.exe -qx Netzwerkschnittstelle

Man erhält eine Auflistung der Counter für alle möglichen Instanz-Ausprägungen. In einer Hyper-V Maschine könnte diese Ausgabe unter anderem folgende Zeile sein:

    \Netzwerkschnittstelle(Microsoft Hyper-V Network Adapter)\Gesamtanzahl Bytes/s

Hier ist nun die Instanz `Microsoft Hyper-V Network Adapter` abzulesen. Diese kann unter `Instances` eingetragen werden, wenn nur diese Netzwerkkarte überwacht werden soll.

---
Quellen:

* https://github.com/influxdata/telegraf/blob/master/docs/WINDOWS_SERVICE.md
* https://github.com/influxdata/telegraf/tree/master/plugins/inputs/win_perf_counters