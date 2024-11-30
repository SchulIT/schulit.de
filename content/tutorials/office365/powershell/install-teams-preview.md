---
title: Vorschau des Teams PowerShell-Modul installieren
type: static
summary: Möchte man auch Teams vom Typ Kurs anlegen, so benötigt man die Vorschau des Microsoft Teams Moduls.
---

# Vorbereitungen

Um Klassen-Teams erstellen zu können, benötigt man (Stand Sommer 2020) die Vorschauversion des Teams-Moduls für die PowerShell.

Damit das Installationsskript korrekt arbeitet, muss zunächst die Ausführungsrichtlinie geändert werden:

```powershell
PS> Set-ExecutionPolicy RemoteSigned
```

Anschließend muss das Installationsskript installiert werden:

```powershell
PS> Install-Module PowerShellGet -Force -AllowClobber
```

# Installation

Nun kann das Modul installiert werden. Zuvor sollte man das alte Modul jedoch löschen:

```powershell
PS> Uninstall-Module MicrosoftTeams # optional
PS> Install-Module MicrosoftTeams -AllowPrerelease -RequiredVersion "1.1.5-preview"
```

Die jeweils aktuelle Version ist [hier](https://www.powershellgallery.com/packages/MicrosoftTeams) aufgelistet. Es ist durchaus möglich, eine neuere Vorschauversion (erkennbar am `-preview` Suffix) zu installieren.

# Nutzung

Um ein neues Klassenteam zu erstellen, nutzt man das `Add-Team` Cmdlet. Dieses ermöglicht mithilfe des `-Template` Parameters, Klassenteams zu erstellen:

```powershell
PS> Add-Team -Template EDU_Class # plus weitere Parameter!
```

---
Quelle: https://docs.microsoft.com/de-de/microsoftteams/teams-powershell-install