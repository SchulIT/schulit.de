---
title: Gemeinsame Postfächer
type: static
draft: true
---

Für manche Bereiche (Vertretungsplan, Stundenplan, ...) werden in der Schule häufig mehrere Personen beauftragt. Sinnvollerweise richtet man für solche Bereiche eigene E-Mail Adressen ein, auf die alle daran beteiligen Personen Zugriff besitzen. In Exchange (Online) sind dies "Freigebene Postfächer".

<!--more-->

# Erstellen des Postfaches

Zunächst zum Exchange Admin Center wechseln und dort zu "Empfänger" > "Freigaben" navigieren. Dort auf das Plus-Icon klicken, um ein neues freigebenes Postfach zu erstellen. Anschließend Anzeigenamen, E-Mail Adresse und Benutzer hinzufügen, die das Postfach verwenden dürfen.

{{< img src="/images/office365/exchange/shared-mailboxes/add.png" >}}

Anschließend mit "Speichern" bestätigen.

# Verwalten des Postfaches

Möchte man später die Benutzer ändern, die das Postfach verwenden dürfen, so kann dies ebenfalls über das Exchange Admin Center gemacht werden. Dazu auf das Postfach doppelklicken und "Postfachstellvertretung" anklicken. Wichtig dabei ist, dass die Listen "Vollzugriff" und "Senden als" synchron gehalten werden (d.h. Benutzer müssen zu beiden Listen hinzugefügt oder gelöscht werden). Fehlt ein Benutzer unter "Senden als", so darf er nicht im Namen des Postfaches E-Mails verwenden. Der Eintrag "NT AUTHORITY\SELF" bei "Senden als" darf nicht gelöscht werden.

# Einrichten des Postfachs (Client)

## Outlook

Wer Outlook auf dem Desktop verwendet und sein Konto als Exchange-Konto angelegt hat, wird das neue Postfach kurze Zeit nach der Erstellung in seinem Outlook-Client sehen und kann es wie ein E-Mail Postfach verwenden.

## Outlook Web App

Die Web App ist scheinbar weniger clever. Hier muss man zum Öffnen des Postfaches oben rechts auf sein Profilbild klicken und auf "Weiteres Postfach öffnen..." klicken. Anschließend trägt man den Namen des Postfaches in den Dialog ein und bestätigt mit Enter. Für den Fall, dass man Zugriff auf dieses Postfach hat, öffnet sich ein neuer Tab und die Outlook Web App zeigt das neue Postfach an.

## Andere Clients

Wer kein Outlook nutzen kann oder möchte, kann sich manuell wie folgt verbinden:

### IMAP-Konfiguration

Parameter   | Wert
------------|-----
Server      | outlook.office365.com
Port        | 143
TLS         | aktiviert
Benutzername| hat das Format: `EigeneEmailAdresse\GemeinsameMailboxAlias`, also bspw. `vorname.nachname@example.org\office365support`
Passwort    | Passwort des eigenen Postfachs

### SMTP-Konfiguration

Parameter   | Wert
------------|-----
Server      | smtp.outlook.com
Port        | 25
TLS         | aktiviert
Benutzername| eigene E-Mail Adresse
Passwort    | Passwort des eigenen Postfachs