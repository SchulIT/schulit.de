---
title: E-Mail Weiterleitungen deaktivieren
type: static
---

Es kann sinnvoll sein, E-Mail-Weiterleitungen global (oder für einzelne Benutzer bzw. Benutzergruppen) zu deaktivieren. Das Weiterleiten von Dienstmails an private E-Mail Adressen wäre ein solches Beispiel.

<!--more-->

Microsoft selbst bietet [mehrere Wege](https://techcommunity.microsoft.com/t5/exchange-team-blog/the-many-ways-to-block-automatic-email-forwarding-in-exchange/ba-p/607579) an, E-Mail-Benachrichtigungen zu deaktivieren. Alle haben Vor- und Nachteile.

Damit die Benutzer er gar nicht die Möglichkeit in der Outlook Web App haben, Weiterleitungen einzurichten, haben wir die Option mittels RBAC deaktiviert. Dazu muss die PowerShell genutzt werden:

```powershell
PS> New-ManagementRole -Parent MyBaseOptions -Name DenyForwarding
```

Anschließend löscht man mithilfe der Managementregel die entsprechenden Funktionalitäten zum Erstellen einer Weiterleitung:

```powershell
PS> Set-ManagementRoleEntry DenyForwarding\New-InboxRule -RemoveParameter -Parameters ForwardTo, RedirectTo, ForwardAsAttachmentTo
PS> Set-ManagementRoleEntry DenyForwarding\Set-InboxRule -RemoveParameter -Parameters ForwardTo, RedirectTo, ForwardAsAttachmentTo
PS> Set-ManagementRoleEntry DenyForwarding\Set-Mailbox -RemoveParameter -Parameters DeliverToMailboxAndForward,ForwardingAddress,ForwardingSmtpAddress
```

Die entsprechenden Befehle sind im Microsoft Blog-Eintrag weiter erläutert.

Nun muss die Regel von den entsprechenden Benutzerrollen zugewiesen werden. Da wir keine besonderen Benutzerrollen verwenden, nutzt man die "Default Role Assignment Policy":

{{< img src="/images/office365/exchange/prohibit-mail-forwarding/assign-role.png" >}}

----
Quelle: https://techcommunity.microsoft.com/t5/exchange-team-blog/the-many-ways-to-block-automatic-email-forwarding-in-exchange/ba-p/607579