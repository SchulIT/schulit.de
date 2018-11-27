---
title: Abhängigkeiten installieren
ordering: 3
type: static
---

Das SCCM benötigt einige Serverrollen, um einwandfrei zu funktionieren. Daher sind die folgenden Rollen und Features auf dem SCCM-Server zu installieren.

<!--more-->

Über den Server-Manager folgende Rollen und Features hinzufügen:

# Serverrollen

* Webserver (IIS)

# Features

* .NET Framework 3.5-Features
    * .NET Framework 3.5 (umfasst .NET 2.0 und 3.0)
* .NET Framework 4.6-Features
    * .NET Framework 4.6
    * ASP.NET 4.6
    * WCF-Dienste
        * HTTP-Aktivierung
        * TCP-Portfreigabe
* Intelligenter Hintergrundübertragsungsdienst
    * IIS-Servererweiterung
* Remoteserver-Verwaltungstools
    * Featureverwaltungstools
        * Tools für BITS-Servererweiterungen

# IIS-Rollendienste

* Webserver (IIS)
    * Allgemeine HTTP-Features
        * Standarddokument
        * Verzeichnissuche
        * HTTP-Fehler
        * Statischer Inhalt
        * HTTP-Umleitung
    
    * Leistung
        * Komprimierung statischer Inhalte
        * Komprimierung dynamischer Inhalte
    * Sicherheit
        * Anforderungsfilterung
        * Standardauthentifizierung
        * Authentifizierung durch Clientzertifikatszuordnung
        * IP- und Domäneneinschränkungen
        * URL-Autorisierung
        * Windows-Autorisierung

    * Systemzustand und Diagnose
        * HTTP-Protokollierung
        * Protokollierungstools
        * Anforderungsüberwachung
        * Ablaufverfolgung

    * Anwendungsentwicklung
        * .NET-Erweiterbarkeit 3.5
        * .NET-Erweiterbarkeit 4.6
        * ASP
        * ASP.NET 3.5
        * ASP.NET 4.6
        * ISAPI-Erweiterungen
        * ISAPI-Filter
        * Serverseitige Include-Dateien
* FTP-Server
    * FTP-Dienst
* Verwaltungsprogramme
    * IIS-Verwaltungskonsole
    * IIS 6-Verwaltungsskripts und -Tools

    * Kompatibilität mit der IIS 6-Verwaltung
        * IIS 6-Metabasiskompatibilität
        * IIS 6-Verwaltungskonsole
        * IIS 6-Skripttools
        * IIS 6-WMI-Kompatibilität
    * Verwaltungsdienst