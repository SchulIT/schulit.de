---
title: Treiber installieren
type: static
toc: false
summary: Diese Anleitung zeigt, wie man Treiber während des Aufspielens des Betriebssystems automatisch installiert.
---

Im Tasksequenzen-Editor einen neuen Schritt "Treiber automatisch installieren" (unter "Hinzufügen" > "Treiber") auswählen und mindestens in den Bereich "Betriebssystem installieren" (ganz am Schlus) hinzufügen. Bei uns gibt es einen separaten Ordner für die Treiber-Installation (ist nur Kosmetik). Dort ändert man zunächst den Namen des Schrittes und wählt anschließend die Kategorie aus, aus der Treiber installiert werden sollen (siehe [Treiber ins SCCM importieren](/sccm/drivers/import-drivers/)). Es können auch mehrere Kategorien ausgewählt werden:

{{< img src="/images/sccm/osd/task-sequence/apply-drivers/ts-1.png" >}}

Anschließend in den Reiter "Optionen" wechseln. Hier kann man optional noch die Option "Bei Fehler fortsetzen" aktivieren. Außerdem lässt sich hier festlegen, bei welchen Geräten die Treiber installiert werden sollen. Das ist ratsam, damit die passenden Treiber auch nur auf den gewünschten Geräten installiert werden. Dazu fügt man eine WMI-Bedingung hinzu:

{{< img src="/images/sccm/osd/task-sequence/apply-drivers/ts-2.png" >}}

Hier gibt der knifflige Teil. Man braucht die Modellbezeichnung, die man über die WMI auslesen kann. Für unsere OptiPlex 760 sieht die WMI-Abfrage dann folgendermaßen aus: 

    SELECT * FROM Win32_ComputerSystem WHERE Model LIKE "%OptiPlex 760%"

Diese Abfrage liefert alle Computer, deren Modell `OptiPlex 760` enthält.

{{< img src="/images/sccm/osd/task-sequence/apply-drivers/ts-3.png" >}}

{{< collapse id="find-model" link="Modell herausfinden" >}}
    Um das Modell eines Rechners herauszufinden, kann man auf dem entsprechenden Gerät den folgenden PowerShell-Befehl ausführen:

    <pre>Get-WmiObject -query "Select * FROM Win32_ComputerSystem"</pre>

    Dort wird unter anderem das Modell des Rechners angezeigt.
{{< /collapse >}}

{{< collapse id="query-mainboard" link="Alternative: WMI-Abfrage mit Mainboard statt Modell" >}}
    Hat man stattdessen einen Computer, der keine Modellbezeichnung hat, kann man stattdessen auch eine Erkennung über das Mainboard machen.

    Mithilfe des Befehls 

    <pre>Get-WmiObject -query "Select * FROM Win32_BaseBoard"</pre>

    werden Informationen zum Mainboard angezeigt. Analog ergibt sich dann folgender WMI-Befehl für die Tasksequenz (<code>PRODUCT</code> durch das entsprechende Produkt ersetzen):

    <pre>Select * FROM Win32_BaseBoard WHERE Product = "PRODUCT"</pre>
{{< /collapse >}}
