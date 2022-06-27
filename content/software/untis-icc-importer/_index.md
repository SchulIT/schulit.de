---
title: Untis ICC Importer
type: section
ordering: 32
github: https://github.com/SchulIT/untis-icc-importer
docs: https://github.com/SchulIT/untis-icc-importer/blob/master/README.md
download: https://github.com/SchulIT/untis-icc-importer/releases
license:
    text: MIT
    link: https://github.com/SchulIT/untis-icc-importer/blob/master/LICENSE.md
summary: Das Importtool für den Datenimport für das ICC aus Untis (Stunden-, Vertretungs- und Klausurplan, Räume)
gallery:
    - /images/software/untis-icc-importer/programm.png
deprecated: true
---

{{< features >}}
    {{< feature icon="fas fa-file-import" header="Import aus GPN-Datei" >}}
        Das Programm liest die Untis-Datei ohne Umwege aus. Es werden keine zusätzlichen Untis-Module benötigt.
    {{< /feature >}}

    {{< feature icon="fas fa-upload" header="Import mit wenigen Klicks" >}}
        Zu synchronisierende Elemente auswählen, ggf. Datumsbereich oder Perioden auswählen und nach wenigen Augenblicken ist der Import erledigt.
    {{< /feature >}}

    {{< feature icon="fas fa-check" header="Untis 2021" >}}
        Das Tool unterstützt stets die aktuelle Untis Version - aktuell ist dies Untis 2021.
    {{< /feature >}}
{{< /features >}}

{{< story header="Klausurschreibende importieren" description="Auf Wunsch können Klausurschreibende entweder aus Untis übernommen werden oder vom ICC ermittelt werden (durch die Kursbelegung). Es ist ebenso möglich, Ausnahmen zu definieren, sodass man anhand des Klausurnamens die Klausurschreiber entweder aus Untis übernimmt oder vom ICC ermitteln lässt.">}}
    {{< img src="/images/software/untis-icc-importer/settings-1.png" zoom=true >}}
{{< /story >}}

{{< story header="Fächer und Klassen überschreiben" description="Manchmal ist es nicht möglich, dass die Fachbezeichnungen in Untis und der Schulverwaltungssoftware gleich zu halten. Daher ist es möglich, Fächer vor dem Hochladen umzubenennen, damit das ICC diese wiedererkennt. Sind Klassen- oder Jahrgangsstufen-übergreifende Kurse in Untis anders eingepflegt als in der Schulverwaltungssoftware, so lässt sich auch dies über den Importer angeben. So werden die Kurse vom ICC wiedererkannt." align=right >}}
    {{< img src="/images/software/untis-icc-importer/settings-2.png" zoom=true >}}
{{< /story >}}

{{< callout type="info" title="Disclaimer">}}
    Diese Software wird weder von der <a href="https://www.untis.at/">Untis GmbH</a> entwickelt noch offiziell unterstützt.
{{< /callout >}}