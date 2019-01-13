---
title: Einstellungen für Google Chrome
type: static
---

Google Chrome lässt sich lobenswerterweise mittels GPOs steuern, sodass mittels GPO Einstellungen vom Administrator vorgenommen werden können, welche nicht durch den Nutzer änderbar sind.

<!--more-->

# Download und Installation

Die Richtlinien für Google Chrome lassen sich [hier bei Google](https://cloud.google.com/chrome-enterprise/browser/download/) herunterladen. Dabei wird ein Bundle (Browser als MSI-Installer + ADMX-Vorlagen) heruntergeladen. Nach dem Download aus dem Ordner `Configuration\admx` alle Dateien sowie die Ordner `en-us` und `de-de` nach `C:\Windows\SYSVOL\domain\Policies\PolicyDefinitions` (auf dem Domaincontroller) kopieren.

# Richtlinien

Alle Richtlinien finden sich unter Computerkonfiguration > Richtlinien > Administrative Vorlagen.

| Richtlinie | Einstellung |
|---|---|
| Google/Google Chrome > "Person hinzufügen" im Nutzermanager aktivieren | Deaktiviert |
| Google/Google Chrome > Anmeldung in Chrome zulassen | Deaktiviert |
| Google/Google Chrome > Apps weiter im Hintergrund ausführen, wenn Google Chrome geschlossen ist | Deaktiviert |
| Google/Google Chrome > Berichte mit Nutzungs- und Absturzdaten erstellen | Deaktiviert |
| Google/Google Chrome > Browserverlauf bei erster Ausführung aus Standardbrowser importieren | Deaktiviert |
| Google/Google Chrome > Drittanbieter-Cookies blockieren | Aktiviert |
| Google/Google Chrome > Gespeicherte Passwörter bei erster Ausführung aus Standardbrowser importieren | Deaktiviert |
| Google/Google Chrome > Google Cloud Print-Proxy aktivieren | Deaktiviert |
| Google/Google Chrome > Lesezeichen bei erster Ausführung aus Standardbrowser importieren | Deaktiviert |
| Google/Google Chrome > Senden von Dokumenten an Google Cloud Print aktivieren | Deaktiviert |
| Google/Google Chrome > Startseite bei erster Ausführung aus Standardbrowser importieren | Deaktiviert |
| Google/Google Chrome > Suchmaschinen bei erster Ausführung aus Standardbrowser importieren | Deaktiviert |
| Google/Google Chrome > Synchronisierung der Daten mit Google deaktivieren | Aktiviert |
| Google/Google Chrome > Web Store auf der "Neuer Tab"-Seite und im App Launcher ausblenden | Aktiviert |
