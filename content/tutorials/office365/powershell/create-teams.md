---
title: Teams erstellen
type: static
---

Wir erstellen alle Teams zentral mittels PowerShell. Damit auch Klassenteams erstellt werden können, muss die Modul-Vorschau des PowerShell-Moduls installiert sein.

<!--more-->

# Vorbereitung

Zunächst muss das Vorschau-Modul installiert werden. Dies ist [hier](../install-teams-preview) erklärt.

# Team erstellen

Das Cmdlet `New-Team` wird zur Erstellung genutzt. Es hat folgende Parameter:

* `-DisplayName`: Anzeigename des Teams - wir nutzen folgendes Schema:
    * Sek I: `Klasse(n) Fach (Schuljahr)`, bspw. `6B Mathematik (2020/21)`
    * Sek II: `Jgst. Kurs (Schuljahr)`, bspw. `Q1 IF-LK1 (2020/21)`
* `-MailNickName`: Hiermit lässt sich die E-Mail-Adresse des Teams festlegen - wir nutzen folgendes Schema:
    * Sek I: `fachkuerzel-klasse-schuljahr`, bspw. `6b-m-202021`
    * Sek II: `kurs-jgst-schuljahr`, bspw. `if-lk1-q1-202021`
* `-Template`: Hiermit kann man entweder Klassenteams (`EDU_Class`) oder PLC-Teams (`EDU_PLC`) erstellen
* `-Owner`: Besitzer des Teams (ist die Lehrkräft) - bei mehreren Lehrkräften kann man später weitere hinzufügen

Beispiel:

```powershell
PS> $team = New-Team -DisplayName "IF-LK1 Q1 (2020/21)" -MailNickname "if-lk1-q1-202021" -Owner "lehrer@schulit.de" -Tempalte "EDU_Class"
```

Nun wird ein Team sowie die untergeordnete Office 365-Gruppe erstellt.

# Nacharbeiten

## Eigenschaften setzen

Es ist ratsam, die Sprache für die Office 365-Gruppe festzulegen. Außerdem ist es wichtig, dass alle Mitglieder automatisch Kalenderereignisse sehen und somit zusagen können.

```powershell
PS> Set-UnifiedGroup -Identity $team.GroupId -AlwaysSubscribeMembersToCalendarEvents -AutoSubscribeNewMembers -Language "de-DE"
```

{{< callout type="warning" title="Besprechungen in Teams" >}}
    Führt man das obige Cmdlet nicht aus, so werden Besprechungen nicht automatisch im Teams-Kalender der Schülerinnen und Schüler angezeigt, wenn man eine Besprechung (in einem Kanal) plant.
{{< /callout >}}

Weiterhin ist es ratsam, dass die Gruppe in Outlook ausgeblendet wird. Anderenfalls wird die Liste an Gruppen in Outlook mit der Zeit sehr lang:

```powershell
PS> Set-UnifiedGroup -Identity $team.GroupId -HiddenFromExchangeClientsEnabled:$true
```

## Schülerinnen und Schüler hinzufügen

Dazu wird das Cmdlet `Add-TeamUser` genutzt.

## weitere Lehrkräfte hinzufügen

Dazu wird ebenfalls das Cmdlet `Add-TeamUser` mit der Option `-Role Owner` genutzt.

# Skript

Wir nutzen folgendes Skript, um die Teams anzulegen. Dazu wird eine JSON-Datei benötigt, welche alle gewünschten Teams beinhaltet. 

## JSON-Datei

Die JSON-Datei hat dabei folgendes Muster:

```json
{
    "academicyear": "202021",
    "teams": [
        {
            "name": "M-6B",
            "display_name": "6B Mathematik (2020\/21)",
            "owner": "lehrer@schulit.de",
            "members": [
                "student1@schulit.de",
                "student2@schulit.de",
                "..."
            ]
        },
        {
            "name": "M-6C",
            "display_name": "6C Mathematik (2020\/21)",
            "owner": "lehrer@schulit.de",
            "additional_owner": "lehrerin@schulit.de",
            "members": [
                "student1@schulit.de",
                "student2@schulit.de",
                "..."
            ]
        }
    ]
}
```

Der Wert `additional_owners` ist optional und kann genutzt werden, wenn mehrere Lehrkräfte das Team verwalten sollen.

Das passende PowerShell-Skript sieht folgendermaßen aus:

```powershell
##### CONFIG
$jsonFile = "teams.json" # Pfad zur JSON-Datei (s.o.)
$credential = Get-Credential
$type = "EDU_Class" # Kurs

##### IMPORT MODULES
Import-Module MSOnline
Import-Module MicrosoftTeams

##### AUTHENTICATE AGAINST OFFICE 365
Connect-MsolService -Credential $credential
Connect-MicrosoftTeams -Credential $credential
Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true

##### READ JSON
$json = Get-Content $jsonFile | ConvertFrom-Json

$skip = $false
# Nach dem Erstellen von vielen Teams scheitert das Erstellen weiterer Teams
# Dann das Team notieren, bei dem ein Fehler aufgetreten ist.
# !!! ACHTUNG: ZUVOR DAS TEAM MIT DEM FEHLER ÜBER DAS ADMIN CENTER LÖSCHEN!!!
$skipUntil = "m-6b-202021"

##### CREATE GROUPS+TEAMS
foreach($team in $json.teams) {
    $nickname = $team.name.ToLower() + "-" + $json.academicyear

    if($skip -eq $true) {
        if($skipUntil -eq $nickname) {
            $skip = $false
        }

        if($skip) {
            continue
        }
    }

    $owner = $team.owner 
    $members = $team.members
    $displayName = $team.display_name
    $additionalOwners = @{}

    if(Get-Member -InputObject $team -Name "additional_owners" -MemberType Properties) {
        $additionalOwners = $team.additional_owners
    }
    
    Write-Host "Pruefe, ob das Team $nickname bereits existiert..."

    $team = Get-Team -MailNickName $nickname -ErrorAction SilentlyContinue

    if($null -eq $team) {
        Write-Host "Team anlegen..."
        
        $team = New-Team -MailNickName $nickname -DisplayName $displayName -Template $type -Owner $owner

        if($null -eq $team) {
            Write-Error "Team konnte nicht angelegt werden. STOPP."
            break
        } else {
            Write-Host "Team angelegt."
        }
    } else {
        Write-Host "Team existiert bereits."

        Write-Host "Gruppen-Einstellungen setzen"

        Set-UnifiedGroup -Identity $team.GroupId -AlwaysSubscribeMembersToCalendarEvents -AutoSubscribeNewMembers -Language "de-DE"

        Write-Host "Lehrkraft hinzufuegen..."
        Add-TeamUser -GroupId $team.GroupId -User $owner -Role Owner

        Write-Host "Weitere Lehrkraefte hinzufuegen..."
        foreach($teacher in $additionalOwners) {
            Write-Host ">" $teacher
            Add-TeamUser -GroupId $team.GroupId -User $teacher -Role Owner
        }
        
        Write-Host "Lernende hinzufuegen..."
        foreach($student in $members) {
            Write-Host ">" $student
            Add-TeamUser -GroupId $team.GroupId -User $student
        }

        Write-Host "Gruppe in Outlook ausblenden..."

        Set-UnifiedGroup -Identity $team.GroupId -HiddenFromExchangeClientsEnabled:$true

        Write-Host "Gruppe wird in Outlook ausgeblendet."
    }
}
```