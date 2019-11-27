---
title: "Leihgeräte für Schülerinnen und Schüler"
date: 2019-11-27T17:00:00
tags: ["windows", "mdm", "intune", "autopilot" ]
author: "Marcel Marnitz"
type: post
archive: "2019/11"
---

Bereits länger planen wir, einzelnen Schülerinnen und Schülern bei Bedarf ein schulisches Leihgerät auszuhändigen, mit dem sie zuhause digital arbeiten können. Dies ist insbesondere bei der Facharbeit in der Qualifikationsphase notwendig. Da kürzlich die erste Anfrage zu einem Leihgerät eingegangen ist, musste ein technisches Konzept her.

<!--more-->

Für die Rechner in der Schule ist dank SCCM bereits ein Konzept vorhanden, wie Geräte aufgesetzt werden. Die Besonderheit von Leihgeräten ist jedoch, dass sie auch außerhalb der Schule funktionieren müssen. Dennoch sollten sie möglichst einfach aufsetzbar und anschließend administrierbar sein.

# Probleme

Innerhalb der Schule werden unsere Geräte mittels SCCM aufgesetzt. Das ist natürlich für Leihgeräte sehr unpraktisch, da die Geräte nicht zu jeder Zeit eine Verbindung zu unserem Active Directory aufbauen können. Ein Aufsetzen mittels SCCM wurde daher schnell verworfen, was jedoch einige Probleme aufgeworfen hat.

## Problem: Aktivierung von Windows

Die Aktivierung von Windows-Clients innerhalb der Schule geschieht über unser Active Directory (Stichwort "Active Directory-basierte Aktivierung"). Sobald ein Gerät in unsem Active Directory registriert wird, aktivieren sich Windows. Ein klassischer KMS-Server läuft bei uns nicht mehr. Es ergeben sich daher drei Möglichkeiten, das Windows zu aktivieren.

**Möglichkeit 1:** Mittels der Windows-Lizenz, die mit dem Gerät kommt. Da wir die Leihgeräte jedoch ohne Windows-Lizenz erhalten haben, ist diese Möglichkeit grundsätzlich ausgeschlossen. 

**Möglichkeit 2:** Kurzer Beitritt im Active Directory. Da wir sehr viele Gruppenrichtlinien einsetzen, die möglicherweise nicht sauber beim Austritt aus dem Active Directory entfernt werden, haben wir diese Möglichkeit als sehr unsauber empfunden und daher verworfen. 

**Möglichkeit 3:** MAK-Schlüssel statt KMS-Schlüssel verwenden. Da wir Volumenlizensierung nutzen, gibt es im VLSC auch einen Multiple Activation Key für Windows 10 Education. Mit diesem Schlüssel kann man bis zu 100 Aktivierungen vornehmen -- ganz ohne Active Directory und KMS. Da wir nicht so viele Leihgeräte verteilen, haben wir uns für diese Methode entschieden. Übrigens: sollten die 100 Aktivierungen ausgeschöpft sein, kann man sie telefonsich zurücksetzen lassen.

## Problem: Automatische Installation von Programmen

Die Rechner in der Schuler erhalten ein vorab angepasstes Windows, welches bereits alle Programme für den Unterricht installiert hat. Da das Aufsetzen mittels SCCM wegfällt, ergeben sich auch hier mehrere Alternativen.

**Möglichkeit 1:** Programme händisch installieren :scream:.

**Möglichkeit 2:** Ein angepasstes Windows-Image erstellen, aufzeichnen und verteilen. Das kann entweder komplett händisch geschehen oder mithilfe des Microsoft Deployment Toolkits. Während ersteres sehr aufwändig und zeitintensiv ist, kann einem das MDT hier sehr helfen. Allerdings ist ein Mischbetrieb SCCM und MDT nur bedingt möglich (das MDT lässt sich zwar ins SCCM integrieren, aber auch dann muss der Rechner während des Aufsetzens im Directory registriert werden). 

**Möglichkeit 3:** Microsoft Intune. Mithilfe von Intune kann man -- ähnlich wie beim SCCM -- Programme auf registrierten Geräten automatisch installieren. Da wir praktischerweise auch Intune-Lizenzen besitzen (die gibt über den FWU-Vertrag kostenlos), wird diese Lösung genutzt. Die Geräte müssen dazu im Azure Active Directory registriert werden, was auch das folgende Problem lösen wird.

## Problem: Verwaltbarkeit durch Administrator

Da sich die Geräte nicht in unserem Active Directory befinden und somit nicht mittels SCCM administrieren lassen, brauchen wir eine Alternative. Bei Microsoft heißt diese alternative Kombination Azure Active Directory und Intune. Ersteres ist ein Online-Active Directory, welches wir ohnehin bereits über Office 365 nutzen. Zweiteres ist ein Mobile Device Management (MDM), mit dem man unter anderem Windows-Geräte über das Internet verwalten kann. 

Die Geräte werden über das Azure Active Directory als schuleigene Geräte gepflegt, die sich außerhalb des Schulnetzwerkes befinden. Über Intune können wir Einschränkungen auf dem Gerät vornehmen, sodass Schülerinnen und Schüler nur eingeschränkt Zugriff auf das Gerät haben.

# Unsere Lösung

Nachdem Azure Active Directory und Intune bereits als Lösung ausgewählt wurden, musste lediglich ein letztes Problem gelöst werden. Die Geräte sollen so eingerichtet werden, dass der Benutzer keinen Administratorzugriff auf das Gerät hat. Nun ist es aber so, dass der erste Nutzer standardmäßig Administrator ist. Das letzte Puzzlestück ist daher Windows Autopilot. Damit lässt sich auch dieses Problem lösen, da der erste Nutzer dann als Standardnutzer eingerichtet werden kann (ohne Administratorrechte). 

Der trickreiche Part ist, das Gerät für Autopilot zu registieren. Das automatische Installieren von Anwendungen ist solange einfach, wie man entweder nur eine MSI-Installationsdatei besitzt oder eine Anwendung aus dem Store installiert werden soll. Die Installation von Office 365 ProPlus ist ebenfalls simpel. Anderenfalls wird es etwas aufwändiger. Da wir aktuell nur beim Adobe Reader vor diesem Problem standen, haben wir uns kurzerhand für einen alternativen PDF-Reader entschieden (Foxit Reader bietet bspw. eine MSI-Installationsdatei an). Das Anlegen der Einstellungen für das Gerät (ähnlich zu Gruppenrichtlinien im Active Directory) ist ein Kinderspiel.

Ein erster Test in einer virtuellen Maschine war erfolgreich. Der zweite Test mit einem echten Gerät ebenso. Dabei haben wir Glück, dass Windows alle Treiber automatisch installiert, sodass auch hier kein Zutun notwendig ist. 

## Überblick

1. Das Gerät muss zunächst (und das ist der aufwändige Part) für AutoPilot registriert werden. 
2. Das Gerät wird mit einem frischen Windows 10 Education installiert.
3. Bei der ersten Einrichtung (OOBE) merkt das Gerät, dass es bei Autopilot registriert ist.
4. Die Schülerin oder der Schüler meldet sich mit seinen Office 365-Zugangsdaten am Gerät an.
5. Das Gerät ist dann im Azure Active Directory und bei Intune registriert. Nach kurzer Zeit werden Anwendungen (bei uns sind das Firefox, Chrome, Office 365 ProPlus, PDF24 und der Foxit-Reader) automatisch installiert.

# Fazit

Das Einlesen und Einrichten von Azure Active Directory, Intune und insbesondere Autopilot hat einen ganzen Nachmittag in Anspruch genommen (Anleitungen dazu folgen in den nächsten Tagen und Wochen). Inklusive Testen ergab sich ein Zeitaufwand von knapp einem Tag. Wir hoffen, dass sich der initiale Aufwand gelohnt hat und sich die nächsten Leihgeräte entsprechend in kürzester Zeit aufsetzen lassen. Auch sind wir gespannt, wie praxistauglich unsere Lösung ist.

# Alternativ-Lösung Co-Management

Viele der Probleme hätte man auch mittels Co-Management (Intune+SCCM) lösen können. Dabei wird das Gerät sowohl in unserem Active Directory als auch im Azure Active Directory  sowie im SCCM und bei Intune registriert, sodass das Gerät sowohl innerhalb der Schule als auch Zuhause funktionsfähig ist und von uns verwaltet werden kann.

Nach unserem Verständnis wird dazu jedoch ein sogenanntes Cloud Management Gateway benötigt, damit das Gerät von außerhalb auf das SCCM zugreifen kann. Ein solches CMG läuft in einer virtuellen Maschine auf Azure, was jedoch dauerhaft Kosten erzeugt, sodass wir von dieser Lösung aktuell absehen müssen.