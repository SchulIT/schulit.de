---
title: Office aktivieren
type: static
summary: Office erstellt bei der Installation eine Installations-ID für den aktuellen Computer. Hat man Office bereits in das Betriebssystemabbild integriert, so muss diese ID nun erneuert werden (sonst wird die ID auf allen Computern verwendet). 
---

{{< callout type="warning" title="Wichtig" >}}
    Diese Anleitung bezieht sich auf Office 2016 (32-bit) auf einem 64-bit Betriebssystem. Es ergeben sich folgende Änderungen, falls eine andere Konfiguration genutzt wird:

    <ul>
        <li>64-bit Office auf 64-bit Windows oder 32-bit Office auf 32-bit Windows: <code>C:\Program Files (x86)</code> → <code>C:\Program Files</code></li>
        <li>Office 2013: <code>Office16</code> → <code>Office15</code></li>
        <li>Office 2010: <code>Office16</code> → <code>Office14</code></li>
    </ul>
{{< /callout >}}

{{< callout type="danger" title="Wichtig" >}}
    Diese Anleitung setzt voraus, dass sich Office mittels KMS oder AD-basierter Aktivierung eigenständig aktivieren kann.
{{< /callout >}}

# Office zurücksetzen

In der Tasksequenz muss ein neuer Schritt erstellt werden. Dazu unter "Hinzufügen" > "Allgemein" > "Befehlszeile ausführen" anklicken. Anschließend den Schritt in die Sektion "Betriebssystem einrichten" verschieben (Drag & Drop) und folgendermaßen konfigurieren:

* Name: Office 2016 zurücksetzen
* Befehlszeile: `"C:\Program Files (x86)\Microsoft Office\Office16\OSPPREARM.EXE"`

{{< img src="/images/sccm/osd/task-sequence/activate-office/ts-1.png" >}}

Optional im Reiter "Optionen" die Option "Bei Fehler fortsetzen" aktivieren.

# Office aktivieren

In der Tasksequenz muss ein neuer Schritt erstellt werden. Dazu unter "Hinzufügen" > "Allgemein" > "Befehlszeile ausführen" anklicken und den Schritt nach dem Schritt "Office 2016 zurücksetzen" positionieren (Drag & Drop). Anschließend den Schritt in die Sektion "Betriebssystem einrichten" und nach den Schritt "Office 2016 zurücksetzen" verschieben (Drag & Drop) und folgendermaßen konfigurieren:

* Name: Office 2016 aktivieren
* Befehlszeile: `cscript "C:\Program Files (x86)\Microsoft Office\Office16\ospp.vbs" /act`

{{< img src="/images/sccm/osd/task-sequence/activate-office/ts-2.png" >}}

Optional im Reiter "Optionen" die Option "Bei Fehler fortsetzen" aktivieren.

{{< callout type="success" title="Fertig" icon="check" >}}
    Bei der ausgewählten Tasksequenz wird Office 2016 zurückgesetzt und neu aktiviert.
{{< /callout >}}