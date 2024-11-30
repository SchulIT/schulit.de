---
title: SCCM aktualisieren
ordering: 1
type: static
summary: Alle sechs Monate veröffentlicht Microsoft die neueste Version des System Center Configuration Manager.
---

# Vorbereitungen

{{< callout type="danger" title="Wichtig" >}}
    Um bei einem Fehler im Update-Vorgang das SCCM wiederherstellen zu können, sollte zunächst ein Prüfpunkt des SCCMs (in Hyper-V) erstellt werden.
{{< /callout >}}

Updates werden über die SCCM Konsole heruntergeladen und werden auch dort angekündigt. Diese werden unter "Verwaltung" > "Übersicht" > "Updates und Wartung" angezeigt:

{{< img src="/images/sccm/maintenance/sccm-update/step-1.png" >}}

# Installation

{{< callout type="info" title="Info" >}}
    Das Vorgehen unterscheidet sich nur geringfügig, wenn man ein großes Funktionsupdate (alle 6 Monate) oder einen Hotfix (bei Gelegenheit) einspielt.
{{< /callout >}}

Durch klick auf "Updatepaket installieren" wird die Installation gestartet:

{{< img src="/images/sccm/maintenance/sccm-update/step-2.png" >}}
{{< img src="/images/sccm/maintenance/sccm-update/step-3.png" >}}
{{< img src="/images/sccm/maintenance/sccm-update/step-4png" >}}
{{< img src="/images/sccm/maintenance/sccm-update/step-5.png" >}}
{{< img src="/images/sccm/maintenance/sccm-update/step-6.png" >}}

Die Installation wird nun im Hintergrund ausgeführt.

{{< callout type="warning" title="Hinweis" >}}
    Ein Funktionsupdate kann durchaus eine gute Stunde benötigen, bis es fertig ist. Hotfixes sind in der Regel binnen 10-20 Minuten installiert.
{{< /callout >}}

## Überwachung des Installationsfortschrittes (GUI)

Zu "Überwachung" > "Übersicht" > "Update- und Wartungsstatus" navigieren:

{{< img src="/images/sccm/maintenance/sccm-update/step-7.png" >}}

Dort das Update auswählen und auf "Status anzeigen" klicken:

{{< img src="/images/sccm/maintenance/sccm-update/step-8.png" >}}

Hier lässt sich fortan der Installationsfortschritt überprüfen.

## Überwachung des Installationsfortschrittes (Log)

Alternativ lässt sich die Installation mit CMTrace überwachen: Das SCCM schreibt sehr detailliert in die Datei `C:\Program Files\Microsoft Configuration Manager\Logs\CMUpdate.log`, was es gerade tut.

# Überprüfen

Nach dem Neustart die SCCM Konsole starten. Falls ein Fenster aufploppt, was über eine neue Version der SCCM Konsole informiert, sollte dieses mit "OK" bestätigt werden:

{{< img src="/images/sccm/maintenance/sccm-update/alert.png" >}}

Nun kurz warten, bis eine neue Version der SCCM Konsole installiert wurde.

Nun zu "Überwachung" > "Übersicht" > "Systemstatus" > "Standortstatus" navigieren:

{{< img src="/images/sccm/maintenance/sccm-update/step-check.png" >}}

Hier sollte nach Möglichkeit alles grün sein (eventuell nach ein paar Minuten erneut überprüfen durch Klicken auf "Aktualisieren").

{{< callout type="success" title="Fertig" >}}
    Der SCCM Server wurde erfolgreich aktualisiert.
{{< /callout >}}