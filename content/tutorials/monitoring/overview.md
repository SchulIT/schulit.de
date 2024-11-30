---
title: Übersicht
type: static
ordering: 1
summary: Das Monitoring besteht in der Regel aus drei Komponenten, die hier näher erläutert werden sollen.
---

# Telegraf

Auf den zu überwachenden Geräten läuft der Telegraf-Dienst. Diese in Go geschriebene Software unterstützt sowohl Windows als auch Linux und Mac. Telegraf liest Diagnosedaten aus dem Betriebssystem aus und übermittelt diese in einer Datenbank (InfluxDB). 

# InfluxDB

Alle von Telegraf erhobenen Datensätze werden in einer zentralen InfluxDB gespeichert. 

# Grafana

Mittels Grafana werden die erhobenen Daten schließlich angezeigt. Dazu greift Grafana auf die InfluxDB zu und verwandelt die erhobenen Daten in hübsche Grafen.