---
title: RDS-Hosts
type: static
summary: Für Remotedesktopsitzungs-Hosts kann Telegraf unter anderem die Anzahl der angemeldeten Benutzer abfragen und in die InfluxDB speichern. 
---


# Einrichtung

Die Basis-Einrichtung erfolgt wie im Artikel [Windows Server](../windows-server). 

# Konfiguration

Unter `[[inputs.win_perf_counters]]` muss folgendes eingefügt werden:

```
  [[inputs.win_perf_counters.object]]
    ObjectName = "Terminaldienste"
    Instances = ["------"]
    Counters = ["Aktive Sitzungen", "Inaktive Sitzungen"]
    Measurement = "users"
```

Neustart des Telegraf-Dienstes nicht vergessen :wink: Nun werden sowohl die aktiven als auch die inaktiven Sitzungen an InfluxDB gesendet.