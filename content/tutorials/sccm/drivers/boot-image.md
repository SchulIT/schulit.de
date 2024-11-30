---
title: Treiber in Boot-Image einbinden
type: static
ordering: 2
summary: Manchmal kann es notwendig sein, einen Treiber bereits ins Boot-Image einzubinden, sodass der Treiber bereits während der Installation des Betriebssystems genutzt werden kann.
---

Um den Treiber ins Boot-Image einzubinden, im SCCM zu "Softwarebibliothek" > "Übersicht" > "Betriebssysteme" > "Startabbilder" navigieren. Dort das gewünschte Boot-Image doppelt anklicken und in den Tab "Treiber" wechseln. Auf den "Hinzufügen"-Button klicken:

{{< img src="/images/sccm/drivers/boot-image/step-1.png" >}}

Nun den oder die gewünschten Treiber auswählen. Standardmäßig werden nur Treiber für Netzwerk und Festplatten(controller) angezeigt. Durch Entfernen des Häckchens werden alle vorhandenen Treiber angezeigt:

{{< img src="/images/sccm/drivers/boot-image/step-2.png" >}}

Anschließend mit "OK" bestätigen und auf "Übernehmen" klicken. Es erscheint die Meldung, dass das Boot-Image neu erstellt werden muss. Diese mit "OK" bestätigen:

{{< img src="/images/sccm/drivers/boot-image/step-3.png" >}}

Nun dem Assistenten folgen:

{{< img src="/images/sccm/drivers/boot-image/step-4.png" >}}
{{< img src="/images/sccm/drivers/boot-image/step-5.png" caption="In der Zusammenfassung werden alle einzubindenden Treiber aufgelistet." >}}
{{< img src="/images/sccm/drivers/boot-image/finish.png" >}}

{{< callout type="success" title="Fertig" icon="check" >}}
    Der oder die Treiber ist/sind nun im Boot-Image eingebunden.
{{< /callout >}}