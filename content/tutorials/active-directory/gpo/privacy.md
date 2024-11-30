---
title: Datenschutz-Einstellungen
type: static
---

Die folgenden GPOs sollen helfen, den Informationsfluss von Windows und Office 2016 in Richtung Microsoft zu verringern. Diese Liste ist möglicherweise nicht vollständig und wird von Zeit zu Zeit aktualisiert, sobald neue GPOs dazukommen.

<!--more-->

## Windows 10

### Computerrichtlinien

| Richtlinie | Einstellung |
|---|---|
| System/Benutzerprofile > Werbe-ID deaktivieren | Aktiviert |
| System/Betriebssystemrichtlinien > Aktivitätsfeed aktivieren | Deaktiviert |
| System/Betriebssystemrichtlinien > Upload von Benutzeraktivitäten zulassen | Deaktiviert |
| System/Betriebssystemrichtlinien > Veröffentlichen von Benutzeraktivitäten zulassen | Deaktiviert |
| System/Internetkommunikationsverwaltung/Internetkommunikationseinstellungen > Programm zur Verbesserung der Benutzerfreundlichkeit deaktivieren | Aktiviert |
| Windows-Komponenten/App-Datenschutz > Ausführung von Windows-Apps im Hintergrund zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Funksteuerung durch Windows-Apps zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Kommunikation von Windows-Apps mit entkoppelten Geräten zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-Apps Telefonanrufe gestatten | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Aufgaben zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Benachrichtigungen zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Bewegungsdaten zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf das Mikrofon zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf den Kalender zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Diagnoseinformationen anderer Apps zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf die Anrufliste zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf die Kamera zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf E-Mails zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Eyetrackinggeräte zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Kontakte zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Kontoinformationen zulassen	Deaktiviert	 | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Nachrichten zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf Positionsdaten zulassen | Deaktiviert |
| Windows-Komponenten/App-Datenschutz > Windows-App-Zugriff auf vertrauenswürdige Geräte zulassen | Deaktiviert |
| Windows-Komponenten/Datensammlung und Vorabversionen > Benutzersteuerung für Insider-Builds ein-/ausschalten | Deaktiviert |
| Windows-Komponenten/Datensammlung und Vorabversionen > Feedbackbenachrichtigungen nicht mehr anzeigen | Aktiviert |
| Windows-Komponenten/Datensammlung und Vorabversionen > Konfigurieren der Benutzeroberfläche der Telemetrie-Opt-in-Einstellung. | Deaktiviert |
| Windows-Komponenten/Datensammlung und Vorabversionen > Konfigurieren von Telemetrie-Opt-in-Änderungsbenachrichtigungen. | Deaktiviert |
| Windows-Komponenten/Datensammlung und Vorabversionen > Übermitteln des Gerätenamens in Windows-Diagnosedaten zulassen | Deaktiviert |
| Windows-Komponenten/Position und Sensoren > Positionskripting deaktivieren | Aktiviert |
| Windows-Komponenten/Position und Sensoren > Sensoren deaktivieren | Aktiviert |
| Windows-Komponenten/Position und Sensoren > Speicherort deaktivieren | Aktiviert |
| Windows-Komponenten/Position und Sensoren/Windows-Positionssuche > Windows-Positionssuche deaktivieren | Aktiviert |
| Windows-Komponenten/Suche > Cloudsuche zulassen | Deaktiviert |
| Windows-Komponenten/Suche > Cortana auf Sperrbildschirm zulassen | Deaktiviert |
| Windows-Komponenten/Suche > Cortana zulassen | Deaktiviert |
| Windows-Komponenten/Suche > Cortana-Seite auf Windows-Willkommensseite für AAD-Konto zulassen | Deaktiviert |
| Windows-Komponenten/Suche > Das Anpassen von indizierten Speicherorten in der Systemsteuerung verhindern | Aktiviert |
| Windows-Komponenten/Suche > Der Suche und Cortana die Nutzung von Positionsdaten erlauben | Deaktiviert |
| Windows-Komponenten/Suche > Indizieren verschlüsselter Dateien zulassen | Deaktiviert |
| Windows-Komponenten/Suche > Websuche nicht zulassen | Aktiviert |
| Windows-Komponenten/Windows-Fehlerberichterstattung > Keine zusätzlichen Daten senden | Aktiviert |
| Windows-Komponenten/Windows-Fehlerberichterstattung > Windows-Fehlerberichterstattung deaktivieren | Aktiviert |

### Telemetrie

Die Telemetrie-Übertragung zu Microsoft sollte so restriktiv wie möglich gewählt werden. Für die Versionen Enterprise und Education lässt
sich dazu die Option "0 -- Sicherheit" auswählen. Für alle anderen Versionen kann die Option "1 -- Einfach" verwendet werden.

{{< callout type="danger" title="Achtung" icon="exclamation-triangle" >}}
    Die Option "0 – Sicherheit" deaktiviert die Möglichkeit, Updates über Microsoft Update zu beziehen. In diesem Fall bedarf es eines eigenen
    WSUS oder eines SCCMs, um die Windows 10 Geräte mit Updates zu versorgen.
{{< /callout >}}

| Richtlinie | Einstellung |
|---|---|
| Windows-Komponenten/Datensammlung und Vorabversionen > Telemetrie zulassen | Aktiviert |

{{< img src="/images/active-directory/gpo/telemetry.png" >}}

## Benutzerrichtlinien

| Richtlinie | Einstellung |
|---|---|
| Windows-Komponenten/Cloudinhalt > Keine Diagnosedaten zur Personalisierung der Benutzererfahrung verwenden | Aktiviert |
| Windows-Komponenten/Cloudinhalt > Keine Inhalte von Drittanbietern in Windows-Blickpunkt vorschlagen | Aktiviert |

# Office 2016

Folgende Einstellungen wurden für Office 2016 vorgenommen. Sie lassen sich vermutlich auch auf Office 2019 anwenden. Die Richtlinien befinden sich in der Benutzerkonfiguration in den Administrativen Vorlagen.

| Richtlinie | Einstellung |
|---|---|
| Microsoft Office 2016/Datenschutz/Trust Center > Automatisches Empfangen kleiner Updates zur Verbesserung der Zuverlässigkeit | Deaktiviert |
| Microsoft Office 2016/Datenschutz/Trust Center > Einschließen eines Screenshots in das Office-Feedback zulassen | Deaktiviert |
| Microsoft Office 2016/Datenschutz/Trust Center > Office-Feedback senden | Deaktiviert |
| Microsoft Office 2016/Datenschutz/Trust Center > Persönliche Informationen senden | Deaktiviert |
| Microsoft Office 2016/Datenschutz/Trust Center > Programm zur Verbesserung der Benutzerfreundlichkeit aktivieren | Deaktiviert |
| Microsoft Office 2016/Telemetriedashboard > Hochladen von Daten für den Office-Telemetrie-Agent aktivieren | Deaktiviert |
| Microsoft Office 2016/Telemetriedashboard > Telemetrie-Datensammlung aktivieren | Deaktiviert |

---
### Quellen

* https://docs.microsoft.com/de-de/windows/privacy/configure-windows-diagnostic-data-in-your-organization
* https://docs.microsoft.com/en-us/windows/privacy/manage-connections-from-windows-operating-system-components-to-microsoft-services#how-to-configure-each-setting