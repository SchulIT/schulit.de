---
title: Prototyp aufzeichnen
type: static
ordering: 3
summary: Ist die Windows-Installation etwas komplizierter (oder man möchte viele Nicht-MSI-Programme installieren), bietet es sich an, zunächst einen Prototypen zu erstellen und diesen im Anschluss aufzuzeichnen.
---

Das Vorgehen lässt sich in die folgenden Schritte aufteilen:

1. Windows (vom ISO) installieren
2. Software installieren & ggf. konfigurieren
3. Updates installieren
4. Aufräumen
5. Prototypen aufzeichnen

# Vorbemerkungen

Damit die Installation möglichst frei ist von unnötigem Ballast (wie Treiber), sollte der Prototyp keine physikalische Maschine sein, sondern eine virtuelle Maschine. Dabei bietet sich Hyper-V an, es kann aber auch ein anderer Hypervisor (VirtualBox, VMWare, ...) genutzt werden.

Das Arbeiten mit einer virtuellen Maschine bietet außerdem den Vorteil, dass der Prototyp nicht ständig von Grund auf erstellt werden muss. Vor dem Aufzeichnen kann ein Prüfpunkt erstellt werden, zu dem man im Anschluss an das Aufzeichnen (Schritt 5) zurückkehrt. Anschließend kann man den Prototypen nach Belieben weiter verwenden, um bspw. weitere Programme oder aktuellere Updates zu installieren.

# Schritt 1: Windows installieren

Zunächst muss die gewünschte Windows Version installiert werden. Die Aktivierung kann entweder über einen KMS-Schlüssel oder einen beliebigen Schlüssel geschehen. Da Windows beim Aufzeichnen zurückgesetzt wird, ist der Product Key nicht mehr in Windows hinterlegt. Nutzt man die [Aktivierung über Active Directory](https://docs.microsoft.com/de-de/windows/deployment/volume-activation/activate-using-active-directory-based-activation-client), hat man zwei Möglichkeiten: entweder man belässt das Windows unaktiviert oder man fügt den Prototypen der Domäne hinzu. Letzteres ist insofern unpraktisch, als das es ggf. nach dem Zurücksetzen zu Problemen kommen kann (der Prototyp ist seiner Meinung nach Teil der Domäne / die Domäne hat den Rechner aber beim Aufzeichnen aus der Domäne geworfen). 

# Schritt 2: Software installieren

Nun nach belieben Software installieren und diese ggf. konfigurieren. Dabei ist zu beachten, ob die Software ggf. eine eindeutige Installations-ID erstellt wie es beispielsweise Office tut. In diesem Fall muss geprüft werden, wie diese Installations-ID beim Aufspielen des Images auf die Zielcomputer erneuert werden kann.

# Schritt 3: Updates installieren

Zwar lassen sich Updates auch beim Aufspielen des Images auf die Zielcomputer installieren, aus Zeitgründen ist es jedoch ratsam, bereits alle aktuellen Updates zu installieren. Dazu kann man einfach die Windows Boardmittel nutzen. 

{{< callout type="info" title="Tipp" >}}
    Auch nach Updates für andere Microsoft Produkte (wie Office) suchen lassen!
{{< /callout >}}

# Schritt 4: Aufräumen

Um die Größe des Image zu reduzieren, sollten einige Aufräum-Maßnahmen ergriffen werden:

* Datenträgerbereinigung aufrufen und alles säubern (als Administrator starten!)
* Downloads-Ordner leeren
* Papierkorb leeren
* Autostart überprüfen

{{< callout type="danger" title="Wichtig" >}}
    Es sollte sichergestellt werden, dass kein Benutzer ohne Kennwort auf dem Computer existiert (abgesehen evtl. vom Administrator-Benutzer, dessen Passwort bei der Installation des Betriebssystems später gesetzt wird).
{{< /callout >}}

# Schritt 5: Prototyp aufzeichnen

## Aufzeichnungs-ISO erstellen

Zunächst muss eine ISO-Datei erstellt werden, welche die nötigen Tools zum Aufzeichnen des Prototypen mitbringt. Dazu muss in der SCCM Konsole unter "Softwarebibliothek" > "Übersicht" > "Betriebssysteme" > "Tasksequenzen". 

{{< collapse id="manual-capture" link="Schritte anzeigen" >}}
    {{< img caption="Schritt 1: Capture Medien auswählen" src="/images/sccm/osd/manual-capture/boot-media/step-1.png" >}}
    {{< img caption="Schritt 2: Einen Pfad für die Medien-Datei angeben" src="/images/sccm/osd/manual-capture/boot-media/step-2.png" >}}
    {{< img caption="Schritt 3: Startabbild (hier das passende auswählen: x64 für 64-bit, x86 sonst) und Verteilungspunkt auswählen" src="/images/sccm/osd/manual-capture/boot-media/step-3.png" >}}
    {{< img caption="Schritt 4: Zusammenfassung bestätigen" src="/images/sccm/osd/manual-capture/boot-media/step-4.png" >}}
    {{< img caption="Schritt 5: Warten..." src="/images/sccm/osd/manual-capture/boot-media/step-5.png" >}}
    {{< img caption="Fertig." src="/images/sccm/osd/manual-capture/boot-media/finish.png" >}}
    {{< img caption="Anschließend findet man die entsprechende ISO-Datei in dem in Schritt 2 auswählten Pfad" src="/images/sccm/osd/manual-capture/boot-media/result.png" >}}
{{< /collapse >}}

{{< callout type="info" title="Info" >}}
    Die Aufzeichnungs-ISO muss nicht vor jedem aufzeichnen erneut erstellt werden. Sobald man das Windows ADK aktualisiert hat, sollte man jedoch auch eine neue ISO-Datei erstellen.
{{< /callout >}}

## Virtuellen Computer sichern

Sofern der Prototyp eine virtuelle Maschine ist, sollte diese nun heruntergefahren werden. Anschließend einen Prüfpunkt erstellen. Die Maschine anschließend wieder starten.

## Aufzeichnen

Nun die Aufzeichnungs-ISO einlegen und die Datei "LaunchMedia.cmd" starten. Anschließend dem Assistenten folgen:

{{< img caption="Schritt 1: Aufzeichnungstool starten" src="/images/sccm/osd/manual-capture/capture/step-1.png" >}}
{{< img caption="Schritt 2: Zunächst auf Weiter klicken" src="/images/sccm/osd/manual-capture/capture/step-2.png" >}}
{{< img caption="Schritt 3: Nun das Ziel für die WIM-Datei festlegen (auf dem SCCM-Server) und die Anmeldedaten eintragen" src="/images/sccm/osd/manual-capture/capture/step-3.png" >}}
{{< img caption="Schritt 4: optionale Informationen eintragen" src="/images/sccm/osd/manual-capture/capture/step-4.png" >}}
{{< img caption="Schritt 5: Zusammenfassung überprüfen und mit Fertig stellen den Aufzeichnungsprozess starten" src="/images/sccm/osd/manual-capture/capture/step-5.png" >}}
{{< img caption="Zunächst wird sysprep vom SCCM ausgeführt..." src="/images/sccm/osd/manual-capture/capture/step-6.png" >}}
{{< img caption="... und anschließend wird der Computer neugestartet." src="/images/sccm/osd/manual-capture/capture/step-7.png" >}}
{{< img caption="Windows PE startet und zeichnet den Rechner auf. Dieser Prozess dauert einige Zeit." src="/images/sccm/osd/manual-capture/capture/step-8.png" >}}
{{< img caption="Irgendwann ist das Aufzeichnen fertig" src="/images/sccm/osd/manual-capture/capture/finish.png" >}}

## Virtuelle Maschine zurücksetzen

Die virtuelle Maschine kann nun auf den Zeitpunkt vor dem Aufzeichnen zurückgesetzt werden. So kann man fortan mit diesem Prototypen arbeiten und weiter modifizieren (bspw. Installation weiterer Programme oder Updates).

# Weitere Schritte

* [Abbild ins SCCM einbinden](../add-wim/)
* [Task-Sequenz erstellen oder bearbeiten](../basic-task-sequence)

{{< callout type="success" title="Fertig" >}}
    Das Image kann nun mithilfe einer Task-Sequenz verteilt werden!
{{< /callout >}}

