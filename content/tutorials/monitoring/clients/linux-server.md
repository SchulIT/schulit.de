---
title: Linux Server
type: static
summary: Diese Anleitung zeigt, wie man Telegraf auf Linux Servern einrichtet.
---

# Download und Installation

Die einzelnen Schritte zur Installation sind auf der [offiziellen Website](https://www.influxdata.com/time-series-platform/telegraf/)
beschrieben. Dazu auf *Download Telegraf v1.XX.Y* klicken und die Schritte für die 
jeweils eingesetzte Distribution durchführen.

## Ubuntu

Für Ubuntu sehen die Schritte (Januar 2025) wie folgt aus:

```bash
# influxdata-archive_compat.key GPG fingerprint:
#     9D53 9D90 D332 8DC7 D6C8 D3B9 D8FF 8E1F 7DF8 B07E
wget -q https://repos.influxdata.com/influxdata-archive_compat.key
echo '393e8779c89ac8d958f81f942f9ad7fb82a25e133faddaf92e15b16e6ac9ce4c influxdata-archive_compat.key' | sha256sum -c && cat influxdata-archive_compat.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg > /dev/null
echo 'deb [signed-by=/etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg] https://repos.influxdata.com/debian stable main' | sudo tee /etc/apt/sources.list.d/influxdata.list

sudo apt-get update && sudo apt-get install telegraf
```

# Konfigurationsdatei

Bei uns kommt folgende Konfigurationsdatei zum Einsatz:


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

[[inputs.cpu]]
  percpu = true
  totalcpu = true
  collect_cpu_time = false
  report_active = false

[[inputs.disk]]
  ignore_fs = ["tmpfs", "devtmpfs", "devfs", "iso9660", "overlay", "aufs", "squashfs"]
[[inputs.mem]]
[[inputs.system]]
```

# Weitere Metriken

Für weitere Metriken kann die Suchmaschine des Vertrauens genutzt werden :wink: