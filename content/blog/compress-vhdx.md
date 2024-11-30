---
title: "VHDX komprimieren"
date: 2019-01-14T12:00:00
tags: ["hyperv"]
author: "Marcel Marnitz"
type: post
archive: "2019/01"
summary: Bei VHDX-Festplatten mit dynamischer Größe wächst die eigentliche Größe auf dem Datenträger mit der Belegung der virtuellen Festplatte. Löscht man Dateien in der virtuellen Festplatte, wird der Speicherplatz jedoch nicht auf dem Host-Betriebssystem freigegeben (die VHDX-Datei wird nicht kleiner).
---

Mit einem PowerShell-Cmdlet lässt sich jedoch die VHDX-Datei auf die eigentliche Größe komprimieren:

{{< highlight powershell >}}
PS> Mount-VHD -Path <VHDX-Datei> -ReadOnly
PS> Optimize-VHD -Path <VHDX-Datei> -Mode Full
PS> Dismount-VHD -Path <VHDX-Datei>
{{< /highlight >}}

---
Quelle: [Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/hyper-v/optimize-vhd?view=win10-ps)