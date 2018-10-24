---
title: Netzwerk-Freigaben
type: static
ordering: 3
---

Das SCCM benötigt einige Netzwerkfreigaben, auf denen Dateien freigegeben werden.

<!--more-->

Alle Freigaben befinden sich im Ordner `C:\SCCM`. Hier kann natürlich ein beliebiger Ordner gewählt werden (gerne auch auf einer anderen Festplatte/Partition). 

### Übersicht

| Freigabe | Ordner | Beschreibung |
|---|---|---|
| \\\\SCCM01\Applications | C:\SCCM\Applications | Hier werden Anwendungen hinterlegt. |
| \\\\SCCM01\Drivers | C:\SCCM\Drivers | Hier werden Treiber hinterlegt. |
| \\\\SCCM01\OS | C:\SCCM\OS | Hier werden Betriebssystemabbilder hinterlegt. |
| \\\\SCCM01\Scripts | C:\SCCM\Scripts | Hier werden PowerShell-Skripte hinterlegt. | 
| \\\\SCCM01\Updates | C:\SCCM\Updates | Hier werden Updates hinterlegt. |

### Sicherheit konfigurieren

Die Zugriffsberechtigungen für die jeweiligen Ordner müssen folgendermaßen festgelegt werden. Dazu die Erweiterten Sicherheitseinstellungen für den jeweiligen Ordner öffnen (Rechtsklick auf den Ordner → Eigenschaften → Tab "Sicherheit" → "Erweitert").

#### Berechtigungen

Der Besitzer der jeweiligen Ordner sollte der Benutzer `sccmadmin` (also der SCCM Administrator-Account) sein. Weiterhin sollte dieser Benutzer sowie `SYSTEM` Vollzugriff auf "diesen Ordner, Unterordner und Dateien" haben.

#### Freigabe

Unter dem Reiter "Freigabe" müssen die folgenden Berechtigungen erteilt werden:

* `sccmadmin` hat `Vollzugriff`
* `Jeder` kann `Lesen`

