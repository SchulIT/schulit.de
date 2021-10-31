---
title: "Nachträgliche AutoPilot-Registrierung bei neuen Geräten"
date: 2021-10-31T10:30:00
tags: ["autopilot", "mdm", "intune"]
author: "Marcel Marnitz"
type: post
archive: "2021/10"
---

Neue Geräte können auch ohne AutoPilot-Registrierung seitens des Händler händisch in 
AutoPilot registriert werden. Dazu sind nur wenige Handgriffe notwendig. Das System bleibt 
dabei in der OOBE-Umgebung, sodass das Gerät anschließend an den Nutzer ausgegeben werden
kann. Der Zeitaufwand beträgt ca. fünf Minuten pro Gerät.

<!--more-->

Die Registrierung der Geräte erfolgt im Audit Mode, welcher u.a. das Verändern des Windows 
Images vor der Auslieferung an den Benutzer erlaubt [1].

{{< img src="/images/blog/autopilot-oobe-audit-mode/oobe.png" >}}

Wenn das neue Gerät zum ersten Mal gestartet ist, muss die Kombination Strg+Shift+F3 
gedrückt werden. Das Gerät startet nun neu und bootet in den Audit Mode:

{{< img src="/images/blog/autopilot-oobe-audit-mode/audit-1.png" >}}
{{< img src="/images/blog/autopilot-oobe-audit-mode/audit-2.png" >}}

Diese Umgebung startet mit einem lokalen Administrator-Acconut (siehe oben). Das Fenster 
"Systemvorbereitungsprogramm 3.14" bleibt geöffnet.
 
Um nun die AutoPilot-Regsitrierung vorzunehmen, muss eine PowerShell (mit Administratorrechten)
gestartet werden.

{{< img src="/images/blog/autopilot-oobe-audit-mode/powershell-1.png" >}}

Nun führt man nacheinander folgende Skripte [2] aus:

```powershell
Install-Script -Name Get-WindowsAutopilotInfo -Force
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
Get-WindowsAutoPilotInfo -Online
```

Die ersten beiden Skripte muss man mit einem "J" bestätigen.

{{< img src="/images/blog/autopilot-oobe-audit-mode/powershell-2.png" >}}
{{< img src="/images/blog/autopilot-oobe-audit-mode/powershell-3.png" >}}

Bei der Ausführung des letzten Skriptes muss man sich mit einem Administratoraccount bei
Microsoft 365 anmelden.

{{< img src="/images/blog/autopilot-oobe-audit-mode/sign-in.png" >}}

Anschließend wird das Gerät in AutoPilot registriert. Dieser Vorgang kann einige Zeit in
Anspruch nehmen und wird mit "All devices synced" quittiert:

{{< img src="/images/blog/autopilot-oobe-audit-mode/success.png" >}}

Nach wenigen Augenblicken ist das Gerät in AutoPilot registriert und kann einem Profil
zugewiesen werden.

{{< img src="/images/blog/autopilot-oobe-audit-mode/endpoint-manager.png" >}}

Um das Gerät nun wieder herunterzufahren, wird im "Systemvorbereitungsprogramm" (das Fenster
ist seit dem Start geöffnet) verwendet. Dort die Option "Herunterfahren" wählen. Das Häckchen
"Verallgemeinern" ist nicht zu setzen.

{{< img src="/images/blog/autopilot-oobe-audit-mode/shutdown.png" >}}

Nachdem das AutoPilot-Profil bereitgestellt wurde, kann das Gerät ausgegeben werden:

{{< img src="/images/blog/autopilot-oobe-audit-mode/first-boot-1.png" >}}
{{< img src="/images/blog/autopilot-oobe-audit-mode/first-boot-2.png" >}}

---
Quellen:

[1] [Microsoft Docs: Boot Windows to Audit mode or OOBE](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/boot-windows-to-audit-mode-or-oobe)  
[2] [Microsoft Docs: Manually register devices with Windows Autopilot](https://docs.microsoft.com/de-de/mem/autopilot/add-devices#collecting-the-hardware-hash-from-existing-devices-using-powershell)