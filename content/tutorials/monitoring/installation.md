---
title: Installation
type: static
ordering: 2
summary: Hier finden sich Anleitungen zur Installation von Grafana in Kombination mit InfluxDB.
---


# Voraussetzungen

Für das Monitoring wird ein kleiner Computer oder Server benötigt (im Grunde reicht sogar ein Raspberry Pi :wink:). Dabei ist es egal, ob dieser Rechner mit Windows oder Linux betrieben wird. 
Wir betreiben einen virtuellen Server (auf Ubuntu-basis) und installieren sowohl InfluxDB als auch Grafana mittels Docker (bzw. Portrainer).

# Anleitungen

## Installation auf Windows

Hierzu die Suchmaschine des Vertrauens befragen :wink: 

## Installation auf Linux

Zur Installation unter Linux sollten sowohl Grafana als auch InfluxDB über den Paketmanager der eingesetzten Distribution installiert werden.

## Installation mit Docker Compose

Wir setzen das Monitoring übrigens mithilfe von Docker um :wink: Unser Compose-Stack sieht folgendermaßen aus:

```yaml
services:
  influxdb: 
    image: influxdb:latest
    restart: always
    ports:
      - 8086:8086
    networks:
      - monitoring
    volumes:
      - influx-data:/var/lib/influxdb2
      - influx-config:/etc/influxdb2
  grafana:
    image: grafana/grafana:latest
    restart: always
    depends_on:
      - influxdb
    ports:
      - 3000:3000
    networks:
      - monitoring
    volumes:
      - grafana-data:/var/lib/grafana

networks:
  monitoring: 

volumes:
  influx-data: ~
  influx-config: ~
  grafana-data: ~
```

# Einrichten

## InfluxDB Datenbank erstellen

Man navigiert nun mit dem Browser zu `http://<IP>:8086` und sieht einen Setup-Assistenten für die InfluxDB.
Nachdem man auf dem Willkommensbildschirm auf Fortfahren geklickt hat, gibt man initialie Benutzerdaten ein:

{{< img src="/images/monitoring/influxdb/setup-1.png" >}}

...

Nachdem man die Daten mit "Continue" bestätigt hat, erhält man ein Operator-Token:

{{< img src="/images/monitoring/influxdb/setup-2.png" >}}

{{< callout type="danger" title="Wichtig" >}}
    Das angezeigte Token wird später benötigt, um Aktionen über die CLI zu tätigen. Es sollte daher sicher aufbewahrt werden.
{{< /callout >}}

## Token erstellen

Als nächstes erstellt man zwei Tokens:

* ein Token zum Schreiben in die Buckets für Telegraf
* ein Token zum Lesen des Buckets für Grafana

{{< callout type="danger" title="Wichtig" >}}
    Die angezeigten Token sicher aufbewahren. Sie werden nur einmal in der GUI angezeigt.
{{< /callout >}}

Dazu navigiert man links im Menü zum Punkt *Load Data ➜ API Tokens* und erstellt ein neues
Custom-Token:

{{< img src="/images/monitoring/influxdb/setup-3.png" >}}

Zunächst für das Telegraf-Token:

{{< img src="/images/monitoring/influxdb/setup-4.png" >}}

Anschließend erstellt man ein weiteres Custom-Token für Grafana:

{{< img src="/images/monitoring/influxdb/setup-5.png" >}}

# Grafana einrichten

Grafana lauscht auf Port `3000`, daher muss man zur Adresse `http://<IP>:3000` navigieren.
Die Standardzugangsdaten sind `admin` und `admin`. Anschließend wird man aufgefordert, dass
Passwort zu ändern.

Nun navigiert man zu *Connections ➜ Add new connection* und klickt auf *InfluxDB*

{{< img src="/images/monitoring/grafana/add-datasource-1.png" >}}

Hier fügt man nun folgende Informationen ein:

* Name: `influxdb` (grundsätzlich frei wählbar)
* Query Language: `Flux`
* HTTP ➜ URL: `http://influxdb:8086` (Zur Erinnerung: `influxdb` ist der Name des Containers im Docker Stack, s.o.)
* InfluxDB Details ➜ Organization: `Schule` (hier die beim InfluxDB Setup eingetragene Organisation eintragen)
* InfluxDB Details ➜ Token: `...` (hier das Grafana-Token aus dem vorherigen Schritt eintragen)
* InfluxDB Details ➜ Default Bucket: `monitoring` (stammt ebenfalls aus dem InfluxDB Setup, s.o.)

Anschließend mit *Save & Test* alles abspeichern. Es sollte eine grüne Erfolgsmitteilung
erscheinen.