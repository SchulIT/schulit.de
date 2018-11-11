---
title: Verteilung
ordering: 2
type: static
---

<!--more-->

# Vorgehensweise

Zunächst muss das Office Deployment Tool heruntergeladen werden. Dabei handelt es sich lediglich um einen Installer, der später genutzt wird, um Office auf einem Computer zu installieren.

Zusätzlich braucht man eine Konfigurationsdatei, welche das ODT nutzt, um (a) Office herunterzuladen und (b) es zu installieren.

Es soll das Verzeichnis `C:\SCCM\Applications\Microsoft Office\2019` verwendet werden , in dem sich am Ende der Anleitung alle Installationsdateien für Office 2019 befinden. 

# Office Deployment Tool

Zunächst muss das Office Deployment Tool heruntergeladen von der [Microsoft Webseite](https://www.microsoft.com/en-us/download/details.aspx?id=49117) heruntergeladen werden. Anschließend das Installationsprogramm starten und die Lizenzbedingungen lesen sowie akzeptieren. Als Verzeichnis `C:\SCCM\Applications\Microsoft Office\2019` angeben. Anschließend in dem Verzeichnis die drei XML-Dateien löschen, es wird lediglich die `setup.exe` benötigt.

# Konfigurations-Datei erstellen

Anschließend erstellt man auf [config.office.com](https://config.office.com) eine Konfigurationsdatei. Diese passt man nach den eigenen Bedürfnissen an.

## Installationsoptionen

Unter "Installation" > "Installationsoptionen" lässt sich einstellen, wie Office installiert werden soll. Hier wählt man am besten eine Freigabe im eigenen Netzwerk (bspw. `\\sccm01\Applications\Microsoft Office\2019`, was dem Verzeichnis `C:\SCCM\Applications\Microsoft Office\2019` auf dem SCCM-Server entspricht). Ein "Fallback auf CDN für fehlende Sprachen" muss nicht aktiviert werden:

{{< img src="/images/sccm/office-2019/deployment/config-install.png" >}}

{{< callout type="info" title="Unbeaufsichtigte Installation" icon="info-circle" >}}
    Möchte man die Installation unbeaufsichtigt durchführen, muss die Option "Dem Benutzer Installation anzeigen" deaktiviert werden (siehe Screenshot).
{{< /callout >}}

## Optionen für Update und Upgrade

Unter "Installation" > "Optionen für Update und Upgrade" konfiguriert man anschließend, wie sich Office aktualisiert. Eine aktualisierung über WSUS ist leider mit Office 2019 nicht mehr möglich. Nutzt man das SCCM, wählt man "Configuration Manager" hier aus. Anderenfalls das CDN, aber dann laden alle Clients das Update separat aus dem Internet herunter. 

## Export

Hat man alles konfiguriert, kann man die Konfigurationsdatei über "Exportieren" (oben) herunterladen. Diesen zur `setup.exe` in den Ordner kopieren.

# Installationsdateien herunterladen

Nun eine Powershell öffnen und in den Ordner mit der `setup.exe` und `configuration.xml`. Folgendes Kommando ausführen:

    PS> .\setup.exe /download configuration.xml

{{< callout type="warning" title="Hinweis" >}}
    Das Programm erzeugt während des Herunterladens keine Ausgabe. 
{{< /callout >}}

Im Anschluss gibt es einen Ordner "Office", welcher ca. 2,4 GB groß ist (Stand: November 2018). 

# Office installieren (ohne SCCM)

Die Installation kann nun auf dem Computer mittels des Kommandos

    PS> .\setup.exe /configure configuration.xml

gestartet werden.

# Office installieren (mit SCCM)

