---
title: GPOs für Windows 10
type: static
summary: Hier werden weitere GPOs speziell für Windows 10 gesammelt.
---

# Anmeldebildschirm
## Animation verhindern

Möchte man die lästige bunte Animation bei der ersten Anmeldung eines Nutzers an einem Windows 10-Computer verhindern, muss die folgende Einstellung getroffen werden:

| Richtlinie | Einstellung |
|---|---|
| System/Anmeldung > Animation bei der ersten Anmeldung | Aktiviert |

## Kein Hintergrundbild anzeigen

Das Hintergrundbild lässt sich aktuell noch nicht per GPO löschen. Man kann sich jedoch eines Tricks bedienen und den entsprechenden Eintrag in der Registry anlegen lassen. Dazu erstellt man unter Computerkonfiguration > Einstellungen > Windows-Einstellungen > Registrierung ein neues Registrierungselement:

* Aktion: Erstellen
* Struktur: `HKEY_LOCAL_MACHINE`
* Schlüsselpfad: `SOFTWARE\Policies\Microsoft\Windows\System`
* Name: `DisableLogonBackgroundImage`
* Werttyp: REG_DWORD
* Wertdaten: `1`

## Letzten Benutzernamen nicht anzeigen

Damit der letzte Benutzername nicht angezeigt wird, ändert man die Richtlinie "Interaktive Anmeldung: Letzten Benutzernamen nicht anzeigen" (zu finden unter Computerkonfiguration > Windows-Einstellungen > Windows-Einstellungen > Sicherheitseinstellungen > Sicherheitsoptionen):

{{< img src="/images/active-directory/gpo/anmeldung.png" >}}

# Verhindern, dass Drucker hinzugefügt oder gelöscht werden können

Mithilfe der folgenden Richtlinien wird verhindert, dass Drucker hinzugefügt bzw. gelöscht werden können (zufinden unter Benutzerkonfiguration > Richtlinien > Administrative Vorlagen):

| Richtlinie | Einstellung |
|---|---|
| Systemsteuerung/Drucker > Hinzufügen von Druckern verhindern | Aktiviert |
| Systemsteuerung/Drucker > Löschen von Druckern verhindern | Aktiviert |

# OneDrive deaktivieren

Windows 10 kommt mit integriertem OneDrive-Client. Dieser lässt sich über die folgenden Richtlinien deaktivieren:

| Richtlinie | Einstellung |
|---|---|
| Windows-Komponenten/OneDrive > Verwendung von OneDrive für die Dateispeicherung verhindern | Aktiviert |

# Remotedesktopverbindungen zulassen

Möchte man mittels RDP auf Clientcomputer zugreifen, sollten diese auch RDP-Verbindungen entgegennehmen können:

| Richtlinie | Einstellung |
|---|---|
| Windows-Komponenten/Remotedesktopdeienste/Remotedesktopsitzungs-Host/Verbindungen > Remoteverbindungen für Benutzer mithilfe der Remotedesktopdienste zulassen | Aktiviert |

