---
title: ServiceCenter
ordering: 3
type: section
github: https://github.com/schulit/servicecenter
docs: https://docs.schulit.de/sc/
license:
    text: MIT
    link: https://github.com/SchulIT/servicecenter/blob/master/LICENSE
summary: Mit dem ServiceCenter können Lehrkräfte Probleme mit den IT-Systemen mitteilen. Somit haben sowohl die IT-Abteilung als auch Lehrkräfte die Möglichkeit, sich einen Überblick über den aktuellen Status der IT zu verschaffen.
menus:
    main:
        parent: software
        weight: 3
        params:
            short_summary: Ticket-System zum Melden von nicht funktionierenden Geräten im pädagogischen Netzwerk.
---

{{< features >}}
    {{< feature icon="fas fa-exclamation-circle" header="Problemverwaltung">}}
        Im ServiceCenter werden Probleme mit schulischer Hard- und/oder Software gemeldet werden. Dabei stehen die IT-Beauftragten mittels Kommentarfunktion im Austausch mit der eintragenden Lehrkraft.
    {{< /feature >}}

    {{< feature icon="far fa-question-circle" header="Statusabfrage">}}
        Lehrkräfte können sich vor dem Unterricht über die technsiche Lage in beliebigen Räumen informieren und entsprechend handeln.
    {{< /feature >}}

    {{< feature icon="fas fa-bullhorn" header="Ankündigungen">}}
        Für beliebige Räume können Ankündigungen, die beispielsweise auf Wartungsarbeiten hinweisen, erstellt werden.
    {{< /feature >}}

    {{< feature icon="fas fa-book-open" header="Wiki">}}
        Im Wiki können technsiche Anleitungen abgelegt werden. Die stehen dann Lehrkräften oder IT-Beauftragten zur Verfügung.
    {{< /feature >}}

    {{< feature icon="fas fa-chart-pie" header="Auswertung">}}
        IT-Beauftragte können auswerten, welches Gerät oder welcher Problemtyp besonders häufig vorkommt und entsprechende Maßnahmen ergreifen.
    {{< /feature >}}
{{< /features >}}


{{< story header="Gesamt-Statusübersicht" description="Mithilfe der Statusübersicht sieht man auf den ersten Blick, in welchen Räumen es Probleme gibt.">}}
    {{< img src="/images/software/servicecenter/overview.png" zoom=true >}}
{{< /story >}}

{{< story header="Probleme melden" description="Personen (Lehrkräfte, Mitarbeitende, Lernende, ...) können jederzeit Probleme melden. Für jedes Problem werden Gerät und Problemtyp abgefragt. Bei Bedarf kann auch eine Priorität angegeben werden." align="right" >}}
    {{< img src="/images/software/servicecenter/new-problem.png" zoom=true >}}
{{< /story >}}

{{< story header="Problemübersicht" description="In der Übersicht für die IT-Fachlehrkraft werden alle offenen Probleme aufgelistet, sodass diese (hoffentlich zeitnah 😉) bearbeitet werden können." >}}
    {{< img src="/images/software/servicecenter/overview-admin.png" zoom=true >}}
{{< /story >}}

{{< story header="Problemdetails" description="Über die Kommentar-Funktion können Rückfragen zum Problem gestellt werden oder es können wichtige Details zum Problem hinterlegt werden (bspw. für spätere Bearbeitung des Problems). Das Hochladen von Screenshots ist ebenfalls möglich." align="right">}}
    {{< img src="/images/software/servicecenter/show-problem.png" zoom=true >}}
{{< /story >}}

{{< story header="Wiki" description="Im Wiki kann eine eigene Wissensdatenbank aufgebaut werden, sodass Probleme schneller behoben werden können." >}}
    {{< img src="/images/software/servicecenter/wiki.png" zoom=true >}}
{{< /story >}}