---
title: Einstellungen für Mozilla Firefox
type: static
---

Seit Firefox 60 unterstützt dieser auch die Konfiguration mittels GPOs. 

<!--more-->

# Download und Installation

Die Richtlinien lassen sich [bei GitHub](https://github.com/mozilla/policy-templates/releases) herunterladen. Dort kann dann jeweils das aktuelle Richtlinien-Set herunterladen werden. Aus dem Ordner `windows` alle Dateien sowie die Ordner `de-DE` und `en-US` nach `C:\Windows\SYSVOL\domain\Policies\PolicyDefinitions` (auf dem Domaincontroller) kopieren.

# Richtlinien

Alle Richtlinien finden sich unter Computerkonfiguration > Richtlinien > Administrative Vorlagen.

| Richtlinie | Einstellung |
|---|---|
| Mozilla/Firefox > Als Hintergrundbild einrichten deaktivieren | Aktiviert |
| Mozilla/Firefox > Feedback Commands deaktivieren | Aktiviert |
| Mozilla/Firefox > Firefox Standardbrowser Überprüfung deaktivierenn | Aktiviert |
| Mozilla/Firefox > Firefox Studien deaktivieren | Aktiviert |
| Mozilla/Firefox > Firefox-Konto deaktivieren | Aktiviert |
| Mozilla/Firefox > Schutz vor Aktivitäten Verfolgung | Aktiviert |
| Mozilla/Firefox > Telemetry deaktivieren | Aktiviert |
| Mozilla/Firefox > Zugriff auf about:config verhindern | Aktiviert |
| Mozilla/Firefox > Zugriff auf about:profiles verhindern | Aktiviert |
| Mozilla/Firefox > Zugriff auf Add-ons Manager verhindern | Aktiviert |
| Mozilla/Firefox > Zugriff auf Informationen zur Fehlerbehebung verhindern | Aktiviert |
| Mozilla/Firefox/Addons > Add-On Installation deaktivieren | Aktiviert |
| Mozilla/Firefox/Zertifikate > Windows Zertifikatsspeicher benutzen | Aktiviert |