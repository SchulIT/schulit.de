---
title: Fehlersuche für OSD einrichten
type: static
summary: Beim Deployment eines Betriebssystems geht nicht immer alles reibungslos vonstatten. Daher sollte man sich die Möglichkeit einräumen, während des Deployments (bspw. beim Auftreten eines Fehlers) Anwendungen auszuführen.
---

{{< callout type="info" title="Hinweis" >}}
    Die folgenden Schritte müssen für alle Startabbilder durchgeführt werden!
{{< /callout >}}

In der SCCM-Konsole zu "Softwarebibliothek" > "Übersicht" > "Betriebssysteme" > "Startabbilder" navigieren und einen Rechtsklick auf das Startabbild machen und "Eigenschaften" auswählen. Im Fenster in den Tab "Anpassung" wechseln.

Dort die Option "Befehlsunterstützung aktivieren (nur Test)" aktivieren und mit "OK" bestätigen.

Es erscheint das folgende Popup:

{{< img src="/images/sccm/configure/tutorials/debug/deploy.png" >}}

Hier auf "Ja" klicken und dem Assistenten folgen. Anschließend sind die Änderungen übernommen.