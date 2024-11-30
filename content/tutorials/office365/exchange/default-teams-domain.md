---
title: E-Mail Domäne für Teams festlegen
type: static
summary: Da beim Erstellen eines Teams auch eine E-Mail Adresse angelegt wird, möchten wir die Standarddomain für Teams auf eine Subdomain ändern. So müllt man sich die Hauptdomain nicht zu.
---


# Vorbereitung

Die Domain muss in Office 365 hinterlegt sein. Dazu muss sie im Admin-Center unter Einstellungen > Domänen angelegt werden.

# Regel erstellen

Nachdem das folgende PowerShell-Cmdlet ausgeführt wurde, haben Teams automatisch den E-Mail-Suffix `@teams.schulit.de` (anpassen nicht vergessen!):

```powershell
PS> New-EmailAddressPolicy -Name "Teams-Domain" -RecipientFilter "RecipientTypeDetails -eq 'GroupMailbox'" -EnabledEmailAddressTemplates "SMTP:@teams.schulit.de" -Priority 1
```