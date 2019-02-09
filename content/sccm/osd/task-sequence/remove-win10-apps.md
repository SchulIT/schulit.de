---
title: Windows 10 Apps löschen
type: static
---

Die Windows 10 Apps sind lästig und bei unseren verbindlichen Profilen (für Schüler) ohnehin nicht nützlich, sondern verzögern nur unnötig die Anmeldung am Computer. Daher können die Apps beim Aufspielen des Betriebssystems restlos entfernt werden.

<!--more-->

# Das Deinstallations-Skript

Das benötigte PowerShell-Skript herunterladen und unter `\\SCCM01\Scripts\Windows 10 Apps` ablegen. Dieses Skript löscht alle Windows 10 Apps außer den Store und den Taschenrechner.

{{< file url="/files/sccm/osd/task-sequence/remove-win10-apps/RemoveWindows10Apps.ps1" name="RemoveWindows10Apps.ps1" >}}

# Skript paketieren

Nun muss ein Paket mit dem PowerShell-Skript erstellt werden.

## Paket erstellen

Dazu nach "Softwarebibliothek" > "Übersicht"> "Anwendungsverwaltung" > "Pakete" navigieren und ein neues Paket erstellen. Dort zunächst einige Informationen eintragen:

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/step-1.png" >}}

Als Typ wählt man "Kein Programm erstellen" aus:

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/step-2.png" >}}

Nun solange auf "Weiter" klicken bis der Vorgang abgeschlossen ist:

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/finsih.png" >}}

## Paket verteilen

Nun muss das Paket noch an den Verteilungspunkt gesendet werden. Dazu das Paket auswählen und oben "Inhalt verteilen" anklicken. Im ersten Schritt des Assistenten muss nichts geändert werden:

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/distribute-1.png" >}}

Nun wählt man den Verteilungspunkt aus (klick auf "Hinzufügen" > "Verteilungspunkt"). Dort wählt man den SCCM-Server aus:

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/distribute-2.png" >}}

Anschließend mit "OK" bestätigen und dann solange auf "Weiter" klicken, bis der Vorgang abgeschlossen ist:

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/distribute-finish.png" >}}

# Tasksequenz

Im Tasksequenz-Editor erzeugt man einen neuen Schritt "PowerShell-Skript ausführen":

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/ts-1.png" >}}

Diesen Schritt verschiebt man in den Bereich "Betriebssystem einrichten". Dann konfiguriert man Name, Wählt das zuvor erstellte Paket aus, ergänzt den Skriptnamen und wählt als Ausführungsrichtlinie "Bypass" aus:

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/ts-2.png" >}}

Optional kann man im Reiter "Optionen" noch festlegen, dass die Tasksequenz bei Fehlern fortgesetzt wird:

{{< img src="/images/sccm/osd/task-sequence/remove-win10-apps/ts-3.png" >}}

{{< callout type="success" title="Fertig" icon="check" >}}
    Bei der ausgewählten Tasksequenz werden nun alle Windows 10 Apps entfernt.
{{< /callout >}}

---
Quelle für `RemoveWindows10Apps.ps1`: [GitHub](https://github.com/SCConfigMgr/ConfigMgr/blob/master/Operating%20System%20Deployment/Invoke-RemoveBuiltinApps.ps1)