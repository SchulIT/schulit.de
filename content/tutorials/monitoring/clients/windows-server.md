---
title: Windows Server
type: static
summary: Diese Anleitung zeigt, wie man Telegraf auf Windows Servern einrichtet.
---

# Download und Installation

Zunächst Telegraf von der [offiziellen Website](https://www.influxdata.com/time-series-platform/telegraf/) herunterladen. Die ZIP-Datei entpacken und den Inhalt (`telegraf.conf` und `telegraf.exe`) z.B. in den Ordner `C:\Program Files\Telegraf` kopieren.

# Basis-Konfiguration

Unsere Konfiguration sieht folgendermaßen aus (die Parameter für die InfluxDB wie Server-IP, Benutzername und Passwort wurden geschwärzt):

```toml
[agent]
  interval = "5s"
  metric_batch_size = 1000
  metric_buffer_limit = 10000

[[outputs.influxdb_v2]]
  urls = ["http://<IP zur InfluxDB>:8086"]
  token = "<TOKEN>" # Token, mit dem in das Bucket geschrieben werden darf
  organization = "Schule" # ggf. anpassen
  bucket = "monitoring"

[[inputs.win_perf_counters]]
  [[inputs.win_perf_counters.object]]
    ObjectName = "Processor"
    Instances = ["_Total"]
    Counters = ["% Processor Time"]
    Measurement = "win_cpu"
  
  [[inputs.win_perf_counters.object]]
    ObjectName = "Memory"
    Counters = ["Available Bytes", "Committed Bytes", "% Committed Bytes In Use"]
    Instances = ["------"] 
    Measurement = "win_mem"
	
  [[inputs.win_perf_counters.object]]
    ObjectName = "System"
    Instances = ["------"]
    Counters = ["System Up Time"]
    Measurement = "win_system"

  [[inputs.win_perf_counters.object]]
    ObjectName = "LogicalDisk"
    Instances = ["C:"] # Wenn weitere Partitionen überwacht werden sollen, hier eintragen!
    Counters = ["Free Megabytes", "% Free Space"]
    Measurement = "win_disk"
```

Dabei werden die Windows Performance Counters (siehe [Manual](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/win_perf_counters)) verwendet, um die entsprechenden Daten auszulesen. In diesem Falle:

* Die gesamte Prozessorlast (ObjectName="Processor")
* Verwendeten und verfügbaren Arbeitsspeicher (ObjectName="Memory")
* Uptime des Servers (ObjectName="System")
* Freier Speicherplatz von Laufwerk `C:` (ObjectName="LogicalDisk")

# Dienst einrichten

Nun eine Eingabeaufforderung starten und folgenden Befehl ausführen:

    $ "C:\Program Files\Telegraf\telegraf.exe" service install

Nun überprüfen, ob der Dienst auch tatsächlich angelegt wurde. Auch überprüfen, 
ob der Dienst automatisch startet. Entweder über die Dienstübersicht von Windows 
starten oder mittels

    $ "C:\Program Files\Telegraf\telegraf.exe" service start

# Telegraf debuggen

Zwecks Debugging kann Telegraf einfach von der Eingabeaufforderung gestartet werden:

    $ "C:\Programme\Telegraf\telegraf.exe" --config "C:\Programme\Telegraf\telegraf.conf" --debug

# Weitere Performance Counter

Obwohl früher der Zugriff auf die Performance Counter in der Systemsprache stattgefunden
hat, scheint dies aktuell (Stand Januar 2025) nicht mehr zu funktionieren. Entweder man
recherchiert die entsprechenden Performance Counter mit der Suchmaschine seines Vertrauens
oder man nutzt ein englisches Windows. Alternativ kann man auch die Windows Sandbox nutzen.
Das Tool `typeperf.exe` listet alle möglichen Objektnamen (`ObjectName`):

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