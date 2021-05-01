---
title: Angepasste Windows-Installation erstellen
date: 2021-02-10T00:00:00
tags: [ "windows", "intune", "mdm", "osd"]
author: "Marcel Marnitz"
type: post
archive: "2021/02"
---

Da wir unsere mobilen Endgeräte aus dem Active Directory entfernen und mittels Intune (MDM) verwalten möchten, müssen diese neu aufgesetzt werden. Eigentlich ist vorgesehen, dass die Geräte nach dem Kauf mittels Autopilot registriert und direkt über Intune aufgesetzt werden. Da wir jedoch bereits ein eigenes Windows-Abbild installiert hatten, müssen die Geräte händisch installiert werden.

<!--more-->

Bisher haben wir die Geräte mittels ConfigMgr installiert -- auch unsere Tablets. Diese wollen wir jedoch aus dem Active Directory entfernen und ausschließlich mittels Intune verwalten. Dazu müssen die Geräte jedoch neu installiert werden, allerdings ohne ConfigMgr-Infrastruktur, da diese sehr eng mit dem Active Directory gekoppelt ist (sprich: es findet ein domain-join statt oder es hagelt fehler mangels Zugriffsrechten). 

Mit geeigneten Tools lässt sich zwar auch ein angepasstes Windows Image erstellen, aber das war bereits für die ConfigMgr-Installation [sehr aufwändig](/tutorials/sccm/osd/manual-capture/).

## WIM Witch to the rescue

Einfacher ist es, eine angepasste Windows Installation zu erstellen. Dabei wird die `install.wim` so verändert, das Windows Setup bleibt davon erstmal unangetastet. Das lässt sich zwar auch händisch mittels PowerScript erledigen, es geht jedoch auch komfortabler mit [WIM Witch](https://www.powershellgallery.com/packages/WIMWitch). Dabei werden folgende Aspekte abgedeckt:

* Integration von Windows Updates (erspart den Installationsmarathon von Updates)
* Sprachpakete integrieren (für uns als Schule nicht relevant)
* Integration von Treibern (das muss sonst Händisch gemacht werden!)
* Entfernen von bereits vorab bereitgestellten Apps (sehr praktisch)
* Integration von Features on Demand (insbesondere praktisch für .NET Framework)
* Ausführen von Skripten (für uns nicht relevant, da Intune dies erledigt)
* und noch einiges mehr

Im Grunde braucht es folgende Schritte:

1. Windows 10 ISO aus dem VLSC herunterladen und im Explorer einbinden
2. Arbeitsverzeichnis für WIM Witch erstellen und anschließend das Skript dort einrichten
3. WIM und .NET Framework importieren
4. Updates integrieren
5. Treiber integrieren
6. zu entfernende Apps auswählen (bspw. Hilfe anfordern, Skype oder Erste Schritte)
7. neue WIM erzeugen

Eine genaue Anleitung zur Verwendung inkl. der von uns verwendeten Parameter folgt bald. Bis dahin: [Google fragen](https://www.google.com/search?q=wimwitch) :wink:

Das gesamte Prozedere dauert (ohne Download der ISO-Datei) keine 30 Minuten. Anschließend hat man einen Stick, mit dem man ein sauberes Windows installieren kann.