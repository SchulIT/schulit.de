---
title: Treiber ins SCCM importieren
type: static
toc: false
ordering: 1
summary: Diese Anleitung zeigt, wie man neue Treiber in das SCCM importiert.
---

# Vorbereitung

Zunächst die Treiber von der Herstellerseite herunterladen und in ein geeignetes Verzeichnis ablegen, welches über eine Freigabe erreichbar ist (`C:\SCCM\Drivers\Hersteller-oder-Beschreibung`).

# Importieren

Zunächst in der SCCM Konsole zu "Softwarebibliothek" > "Übersicht" > "Betriebssysteme" > "Treiber" navigieren und oben links auf den Button "Treiber importieren" klicken. Es erscheint nun ein Assistent zum Importieren von Treibern:

Zunächst den Pfad auswählen, wo sich die Treiber befinden (der Import-Assistent durchsucht alle Unterverzeichnisse rekursiv):

{{< img src="/images/sccm/drivers/import/step-1.png" >}}

Anschließend mit "Weiter" bestätigen und warten, bis das SCCM alle Treiber gefunden hat:

{{< img src="/images/sccm/drivers/import/step-2.png" >}}

{{< callout type="info" title="Basiswissen: Treiber-Kategorien" icon="info-circle" >}}
    <p>
        Da man in der Regel Treiber für mehrere Geräte einpflegen muss, ist es ratsam, dass man importierte Treiber kategorisiert. Hier bietet sich an, mindestens eine Kategorie für jeden Gerätetypen festzulegen. Das ist besonders interessant für das automatische Installieren von Treibern bei der Installation des Betriebssystems: über Kategorien lassen sich später gesteuert nur eine Teilmenge aller verfügbaren Treiber installieren!
    </p>

    <p>
        <strong>Faustregel:</strong> mindestens eine Kategorie pro Gerätetyp. Bei uns gibt es auch eine Kategorie für nVidia-Grafikkarten und eine für Intel Netzwerkkarten.
    </p>
{{< /callout >}}

Nun sollten die Treiber (mindestens) einer Kategorie zugeordnet werden. Dazu auf den Button "Kategorien" klicken:

{{< img src="/images/sccm/drivers/import/step-3.png" >}}

Hier kann man jetzt eine vorhandene Kategorie auswählen oder eine neue erstellen:

{{< img src="/images/sccm/drivers/import/step-4.png" >}}

Anschließend mit "OK" bestätigen und die Kategorien nochmals überprüfen:

{{< img src="/images/sccm/drivers/import/step-5.png" >}}

Anschließend mit "Weiter" fortfahren. Nun muss ein Paket erstellt werden, was den Treiber beinhaltet (ähnlich wie die Softwareupdate-Pakete). Auch hier gilt die Faustregel der Kategorien:

{{< img src="/images/sccm/drivers/import/step-6.png" >}}

Möchte man ein neues Paket erstellen, so klickt man auf den entsprechenden Button und gibt dem Paket einen sinnvollen Namen. Anschließend muss noch ein Pfad angegeben werden, an dem das Paket gespeichert werden soll. Hier muss ebenfalls eine Freigabe gewählt werden. Bei uns gibt es unter `\\SCCM01\Drivers` den Ordner `Packages` (siehe Screenshot):

{{< img src="/images/sccm/drivers/import/step-7.png" >}}

Anschließend wieder alles kontrollieren:

{{< img src="/images/sccm/drivers/import/step-8.png" >}}

{{< callout type="info" title="Basiswissen: Treiber ins Startabbild importieren" icon="info-circle" >}}
    Es ist möglich, Treiber bereits in das Startabbild zu integrieren. Dies ist nötig, wenn Windows PE einen Treiber (für Netzwerk oder SATA-Controller) nicht mitbringen. Ist das nicht der Fall, sollten die Treiber nicht in das Startabbild integriert werden.
{{< /callout >}}

Mit "Weiter" fortfahren. Nun kann man die Treiber noch in das Startabbild einbinden. Dazu das gewünschte Startabbild auswählen:

{{< img src="/images/sccm/drivers/import/step-9.png" >}}

Mit "Weiter" fortfahren und die Zusammenfassung überprüfen:

{{< img src="/images/sccm/drivers/import/step-10.png" >}}

Anschließend mit "Weiter" fortfahren. Das SCCM importiert nun die Treiber:

{{< img src="/images/sccm/drivers/import/step-11.png" >}}

Nach wenigen Augenblicken ist es damit fertig:

{{< img src="/images/sccm/drivers/import/step-finish.png" >}}

{{< callout type="success" title="Fertig" icon="check" >}}
    Die Treiber sind nun im SCCM eingebunden und können bei der Installation eines Betriebssystems installiert werden. 
{{< /callout >}}