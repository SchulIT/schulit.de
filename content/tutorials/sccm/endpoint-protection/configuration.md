---
title: Endpoint Protection einrichten
ordering: 2
type: static
static: Mithilfe der Endpoint Protection lässt sich der Windows Defender mithilfe des SCCM verwalten.
---

# Endpoint Protection freischalten

In der SCCM Konsole zu "Verwaltung" > "Übersicht" > "Clienteinstellungen" navigieren. Dort eine neue "Benutzerdefinierte Geräteclienteinstellung(en) erstellen". Der Einstellung einen sinnvollen Namen geben und außerdem "Endpoint Protection" anklicken.

{{< img src="/images/sccm/configure/endpoint-protection/step-1.png" >}}

Anschließend den Reiter "Endpoint Protection" (links) anklicken. Nun lässt sich Endpoint Protection folgendermaßen konfigurieren:

{{< img src="/images/sccm/configure/endpoint-protection/step-2.png" >}}

**Hinweis:** Die Option "Endpoint Protection-Clientinstallation und Neustarts außerhalb der Wartungsfenster zulassen." kann auch bei "Nein" belassen werden. Falls man den Endpoint Protection-Client im laufenden Betrieb installieren möchte und die Rechner nicht auch abends/nachts laufen, sollte hier "Ja" ausgewählt werden. Nutzt man die Betriebssystem-Installation des SCCMs, lässt sich der Client ohnehin bereits während der Installation installieren, sodass diese Option praktisch keine Auswirkungen hat.

TODO: Bereitstellen!

# Endpoint Protection konfigurieren

Die weitere Konfiguration der Endpoint Protection erfolgt über Richtlinien für Antischadsoftware, welche man unter "Assets und Konformität" > "Übersicht" > "Endpoint Protection" > "Richtlinien für Antischadsoftware" findet.

{{< callout type="danger" title="Wichtig" >}}
    Wie auch bei den Clientrichtlinien sollte man stehts Richtlinien separieren. **Faustregel:** Die Standardrichtlinie nicht ändern. Gewünschte Änderungen über neue Richtlinien regeln!
{{< /callout >}}

## Hyper-V Hosts

Für Hyper-V Hosts gibt es von Microsoft [Empfehlungen](https://support.microsoft.com/en-us/help/3105657/recommended-antivirus-exclusions-for-hyper-v-hosts), wie man Endpoint Protection konfigurieren sollte. Diese können mithilfe der folgenden XML-Datei importiert werden.

{{< file url="/files/sccm/endpoint-protection/hyper-v.xml" name="hyper-v.xml" >}}

Anschließend muss die Richtlinie für die Gerätesammlung "Hyper-V" bereitgestellt werden.

## Domain Controller

Für Domain Controller gibt es von Microsoft Empfehlungen, wie man Endpoint Protection konfigurieren sollte. Diese können mithilfe der folgenden XML-Datei importiert werden.

{{< file url="/files/sccm/endpoint-protection/domain-controllers.xml" name="domain-controllers.xml" >}}

Anschließend muss die Richtlinie für die Gerätesammlung "Domain Controllers" bereitgestellt werden.

# Definitionsupdates

Definitionsupdates lassen sich über verschiedene Wege an die Clients verteilen:

* lokal: WSUS, SCCM oder Dateifreigabe
* online: Microsoft Update

## Verteilungswege

### WSUS

Eine sehr praktikable Lösung ist die Verteilung über einen lokalen WSUS-Server. Da ohnehin ein WSUS auf dem SCCM-Server läuft, kann man diesen zur Verteilung der Definitionsupdates nutzen. Dazu nutzt man die Funktion, Updates automatisch zu genehmigen.

Dazu in der WSUS Konsole unter "Optionen" den Punkt "Automatische Genehmigungen" anklicken. Dort eine neue Regel erstellen:

{{< img src="/images/sccm/endpoint-protection/setup/wsus.png" >}}

{{< callout type="info" title="WSUS Konfiguration der Rechner" >}}
    Nutzt man einen WSUS unabhängig vom SCCM, so muss den Windows Clients mittels GPO mitgeteilt werden, welchen WSUS Server sie kontaktieren müssen. Dies ist in Kombination mit dem SCCM nicht nötig, da der SCCM Client automatisch den WSUS auf den Windows Clients hinterlegt.
{{< /callout >}}

### SCCM

Entscheidet man sich für die Verteilung über das SCCM müssen die Updates über die SCCM Konsole in irgendeiner Weise für die Clients freigeschaltet werden (siehe [Updates](/sccm/updates/)).

{{< callout type="info" title="Unsere Erfahrung" >}}
    Da das manuelle Bereitstellen der Definitionsupdates nicht zufriedenstellend ist, lassen die Updates mithilfe einer <a href="/sccm/updates/adr">automatischen Bereitstellungsregel</a> verteilen. Hier ist jedoch der Nachteil, dass die Computer grundsätzlich nur außerhalb der Geschäftszeiten nach Updates suchen und diese installieren. An Schulen laufen die Rechner in der Regel während des Schulbetriebs (also insb. während der Geschäftszeiten), sodass Updates effektiv nicht eingespielt werden!
{{< /callout >}}

### Microsoft Update

Am wenigsten Arbeit hat man bei der Bereitstellung der Updates durch Microsoft Update. Allerdings werden die Updates dann pro Rechner über die Internetleitung heruntergeladen. 

{{< callout type="danger" title="Wichtig" >}}
    Entscheidet man sich für die Verteilung der Updates über Microsoft Update sollte man sicherstellen, dass die Clients auch Microsoft Update erreichen können. Firewallregeln oder Gruppenrichtlinien können verhindern, dass Rechner auf Microsoft Update zugreifen können.
{{< /callout >}}

## Richtlinie erstellen

Egal für welchen Verteilungsweg man sich entscheidet, man muss eine Richtlinie erstellen, mit der dieser Weg den Clients bekanntgemacht wird. Dazu eine neue Richtlinie erstellen:

{{< img src="/images/sccm/endpoint-protection/setup/step-1.png" >}}

In den eigentlichen Einstellungen für die Definitionsupdates diese dann nach eigenen Wünschen konfigurieren. Unsere Konfiguration sieht folgedermaßen aus:

{{< img src="/images/sccm/endpoint-protection/setup/step-2.png" >}}

Unter "Quelle festlegen" legt man dann den gewünschten Weg (siehe oben) fest:

{{< img src="/images/sccm/endpoint-protection/setup/step-3.png" >}}

Anschließend muss die Richtlinie für die Sammlung "Alle Systeme" bereitgestellt werden.

{{< callout type="success" title="Fertig" icon="check">}}
    Endpoint Protection ist nun fertig konfiguriert und einsatzbereit.
{{< /callout >}}