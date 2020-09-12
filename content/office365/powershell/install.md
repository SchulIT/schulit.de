---
title: Einrichten
type: static
---

Um die PowerShell für Office 365 nutzen zu können, müssen einige PowerShell-Module installiert werden.

<!--more-->

# Installation der Module

Zur Installation der Module ist eine PowerShell mit Administratorrechten notwendig:

```powershell
PS> Install-Module -Name AzureAD
PS> Install-Module -Name ExchangeOnlineManagement
PS> Install-Module -Name MicrosoftTeams
```

Tipp: Zur Erstellung von Klassenteams, muss (Stand Sommer 2020) die Vorschau des Teams-Moduls installiert werden. Die Installation ist [hier](../install-teams-preview) erläutert.

Bei der Installation wird man gefragt, ob man (a) Module aus der PSGallery installieren möchte und (b) das jeweilige Modul wirklich installieren muss.

Das Windows PowerShell-Modul für Skype for Business Online kann man [hier](https://www.microsoft.com/de-de/download/details.aspx?id=39366) herunterladen.

# Verbinden zu Office 365

Sind alle Module installiert, kann das folgende PowerShell-Skript genutzt werden, um eine Verbindung zu Office 365 herzustellen:

```powershell
Write-Output "Module importieren..."
Import-Module MSOnline
Import-Module MicrosoftTeams
Import-Module SkypeOnlineConnector

Write-Output "Anmeldedaten abfragen..."
$credential = Get-Credential

Write-Output "Verbindung zu Office 365 herstellen..."
Connect-MsolService -Credential $credential

Write-Output "Verbindung zu Exchange Online herstellen..."
Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true

Write-Output "Verbindung zu Teams herstellen..."
Connect-MicrosoftTeams -Credential $credential

Write-Output "Verbindung zu Skype for Business herstellen..."
$sfbSession = New-CsOnlineSession -Credential $credential
Import-PSSession $sfbSession
```

Man wird zweimal nach den Administrator-Zugangsdaten gefragt. Anschließend lassen sich alle
PowerShell Cmdlets nutzen, die zur Verwaltung von Office 365 zur Verfügung stehen.