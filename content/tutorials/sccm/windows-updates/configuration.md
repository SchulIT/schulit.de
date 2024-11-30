---
title: Konfiguration
type: static
ordering: 2
summary: Im Anschluss an die Installation muss die Rolle konfiguriert werden. Hier wird gezeigt, welche Möglichkeiten der Konfiguration es gibt.
---

Zur Konfiguration muss in der Konsole zu "Verwaltung" > "Übersicht" > "Standortkonfiguration" > "Standorte" navigiert werden. Dort klickt man auf den SCCM-Server und klickt oben im Ribbon auf den Button "Standortkomponenten konfigurieren" und dort auf "Softwareupdatepunkt".

{{< img src="/images/sccm/configure/windows-update/configuration/ribbon.png" >}}

Es öffnet sich ein Fenster mit Konfigurationsoptionen:

{{< img src="/images/sccm/configure/windows-update/configuration/config.png" >}}

# Synchronisierungeinstellungen

Hier kann man auswählen, wie das SCCM Updates synchronisieren soll. In der Regel werden Updates "Über Microsoft Update" synchronisiert. Hat man einen WSUS-Server, von dem das SCCM Updates beziehen soll, kann er alternativ hier eingetragen werden.

# Dateien aktualisieren

Hier lässt sich konfigurieren, ob das SCCM die Express-Updates für Windows 10 bereitstellen soll.

# Klassifizierungen

Hier kann man auswählen, welche Art von Updates synchronisieren soll. Da wir keine Inplace-Upgrades von Windows 10 vornehmen, haben wir die Klassifizierungen "Feature Packs", "Service Packs" und "Upgrades" deaktiviert. 

# Produkte

Hier lassen sich die Produkte auswählen, für die das SCCM Updates synchronisieren soll. 

# Synchronisierungszeitplan

Hier lässt sich einstellen, zu welchen Zeiten das SCCM Updates automatisch synchronisieren soll. Bei uns wird 2x täglich (5 und 17 Uhr) nach Updates gesucht. 

# Ablösungsregeln

Hier lässt sich einstellen, wie das SCCM mit abgelösten Updates umgehen soll. Hier ist es empfehlenswert, dass man abgelöste Updates nicht sofort ablaufen lässt. Anderenfalls kann es zu Problemen bei der Update-Verteilung kommen, da das SCCM keine Updates installiert, die abgelaufen sind. Installiert man Updates nicht rechtzeitig, bleiben Computer ohne Updates. 

Bei uns laufen Updates erst zwei Monate nach der Ablösung ab. So haben wir genug Zeit, um Rechner zu aktualisieren (geschieht bei uns in der Regel ab der zweiten Woche nach Patchday).

Die Aktivierung der WSUS-Bereinigung ist darüber hinaus sinnvoll.

# Sprachen

Hier lassen sich die Sprachen für Updates einstellen. Hier sollte man daher alle Sprachen auswählen, die man verwendet (in der Regel reicht "Deutsch" aus). Die Sprache "Englisch" kann durchaus abgewählt werden, sofern es keine Computer mit englischem Windows gibt.