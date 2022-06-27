---
title: "Windows 11 als KMS-Host"
date: 2022-05-30T12:00:00
tags: ["windows", "kms"]
author: "Marcel Marnitz"
type: post
archive: "2022/05"
---

Üblicherweise hostet man einen KMS-Dienst auf einem Windows Server. Man kann jedoch auch einen Windows Client zu einem KMS-Host hochstufen und auf eine zusätzliche Windows Server-Installation verzichten.

<!--more-->

Wie Microsoft selbst schreibt, kann man auch einen Windows Client als KMS-Host verwenden. Damit lassen sich dann entweder Office oder Windows Clients aktivieren, Windows Server lassen sich so nicht aktivieren.

In einem ersten Test erwiesen sich die "RSAT: Volumenaktivierungstools" als nicht zielführend, da sie ihren Dienst mit einer Fehlermeldung quittieren. Stattdessen nutzt muss man das Tool `slmgr.vbs` in einer Eingabeaufforderung mit Administratorrechten bemühen:

```powershell
PS> slmgr.vbs /ipk XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
PS> slmgr.vbs /ato
```

Das erste Kommando sollte mit der folgenden Meldung quittiert werden:

{{< img src=/images/blog/windows-kms-host/product-key-installed.png >}}

Anschließend lässt sich das ganze kontrollieren mittels 

```powershell
PS> slmgr.vbs /dlv
```

Wenn der KMS-Host erfolgreich funktioniert, erhält man folgende Meldung:

{{< img src=/images/blog/windows-kms-host/kms-check.png >}}

Man erkennt den Channel `VOLUMNE_KMS_W10` sowie unten die Anzahl der Aktivierungen.

Anschließend muss noch eine eingehende Firewallregel für den TCP-Port 1388 erstellt und aktiviert werden.

Wir nutzen diesen KMS-Host, um unsere Windows-Tablets zu aktivieren. Diese befinden sich bei uns nicht im Active Directory, sondern nur im Azrue AD. Aufgrund der Beschränkung der MAK-Aktivierungen erscheint uns die Nutzung eines KMS-Hosts hier sinnvoll, welcher bei uns in der DMZ hängt. Einen ganzen Windows Server nur für den KMS-Host zu verwenden, erschien uns etwas übertrieben.

---
Quelle: [Microsoft Docs](https://docs.microsoft.com/de-de/windows-server/get-started/kms-create-host)