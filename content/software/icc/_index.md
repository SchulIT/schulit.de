---
title: Information & Communication Center 
ordering: 2
type: section
github: https://github.com/schulit/icc
docs: https://docs.schulit.de/icc
license:
    text: AGPL-3.0
    link: https://github.com/SchulIT/icc/blob/master/LICENSE
summary: Das ICC ist die zentrale Organisationsplatform für den schulischen Alltag. Es bildet den Schulalltag online ab und verknüpft alle verfügbaren Daten zu einer persönlichen Tagesagenda. 
menus:
    main:
        parent: software
        weight: 2
        params:
            short_summary: Die zentrale Organisationsplattform für den Schulalltag, u.a. mit Stunden-, Vertretungs-, Klausur- und Terminplan, Mitteilungen, Klassenbuch uvm.

---

{{< features >}}
    {{< feature icon="fas fa-home" header="Aktuelle Tagesübersicht" >}}
        Die tagesaktelle Agenda stellt den schulischen Tagesablauf auf einen Blick dar. Dazu werden Stunden-, Vertretungs-, Klausur- und Terminplan sowie Mitteilungen übersichtlich kombiniert.
    {{< /feature >}}

    {{< feature icon="fas fa-school" header="Pläne" >}}
        Stundenplan, Vertretungsplan, Klausurplan und Terminplan sind online abrufbar. 
    {{< /feature >}}

    {{< feature icon="fas fa-envelope-open-text" header="Mitteilungen" >}}
        Über das ICC können Mitteilungen zielgruppengerichtet (Lernende, Eltern, Lehrkräfte) versendet werden. Dateianhänge oder Rückmeldungen durch die Benutzer werden ebenfalls unterstützt.
    {{< /feature >}}

    {{< feature icon="fas fa-list" header="Listen" >}}
        Lehrkräfteübersicht, Klassen- und Kurslisten sowie Datenschutzinformationen sind jederzeit abrufbar.
    {{< /feature >}}

    {{< feature icon="far fa-file-alt" header="Dokumente" >}}
        Dokumente können zielgruppenabhängig (Lernende, Eltern, Lehrkräfte) zum Abruf bereitgestellt werden.
    {{< /feature >}}

    {{< feature icon="fas fa-clinic-medical" header="Krankmeldungen" >}}
        Eltern oder volljährige Lernende können sich über das ICC krankmelden. Klassenleitung und Fachlehrkräfte können die Krankmeldung einsehen.
    {{< /feature >}}

    {{< feature icon="fab fa-wikipedia-w" header="Wiki" >}}
        Im integrierten Wiki können Informationen (bspw. Anleitungen) zielgruppengerichtet veröffentlicht werden.
    {{< /feature >}}

    {{< feature icon="fas fa-laptop-house" header="Resourcenreservierung" >}}
        Über die Resourcenübersicht können Räume oder weitere beliebige Resourcen (bspw. Tablets) gebucht werden. Stunden- und Vertretungsplan werden dabei berücksichtigt.
    {{< /feature >}}

    {{< feature icon="fas fa-edit" header="Klassenarbeitsplanung" >}}
        Über die Klassenarbeitsplanung können Studenkoordinatoren Klassenarbeiten erstellen. Diese können anschließend durch die Fachlehrkraft geplant werden.
    {{< /feature >}}

    {{< feature icon="fas fa-tv" header="Public Display" >}}
        Der digitale Vertretungsplan kann mit einigen Extras auf einem öffentlichen Fernseher angezeigt werden.
    {{< /feature >}}

    {{< feature icon="fas fa-book-open" header="Unterrichtsbücher" >}}
        In Unterrichtsbüchern kann der Unterricht digital dokumentiert werden. Dies ersetzt das analoge führen von Klassenbüchern bzw. Kursheften.
    {{< /feature >}}

    {{< feature icon="fas fa-cloud-upload-alt" header="Import aus Schulverwaltung" >}}
        Die Stammdaten können aus SchILD NRW importiert werden. Pläne können aus Untis importiert werden.
    {{< /feature >}}
{{< /features >}}

{{< story header="Tagesaktuelle Agenda" description="Die Startseite des ICCs zeigt neben dem Stundenplan auch Vertretungen und Klausuraufsichten an. Falls Lernende aufgrund einer Krankmeldung, einer Veranstaltung oder Klausur abwesend sein, wird dies angezeigt. Mitteilungen und Termine werden ebenso angezeigt.">}}
    {{< img src="/images/software/icc/dashboard.png" zoom=true >}}
{{< /story >}}


{{< story header="Stundenplan" description="Individuelle Stundenpläne für Lernende, Klassen, Lehrkräfte, Räume und Fächer. Die Mehrfachauswahl der Lehrkräfte macht das Finden von gemeinsamen Freistunden leichter. Mittels ICS-Export kann der Stundenplan in Outlook oder Google Calendar integriert werden." align="right">}}
    {{< img src="/images/software/icc/stundenplan.png" zoom=true >}}
{{< /story >}}

{{< story header="Vertretungsplan" description="Individueller Vertretungsplan für jeden Lernenden und jede Lehrkraft" >}}
    {{< img src="/images/software/icc/vertretungsplan.png" zoom=true >}}
{{< /story >}}

{{< story header="Klausurplan" description="Individueller Klausurplan für jeden Lernenden und jede Lehrkraft. Klausuren und Aufsichten können aus Untis importert werden. Klausuren können auch über die Weboberfläche angelegt werden. Mittels ICS-Export kann der Klausurplan in Outlook oder Google Calendar integriert werden." align="right">}}
    {{< img src="/images/software/icc/klausurplan.png" zoom=true >}}
{{< /story >}}

{{< story header="Terminplan" description="Individueller Klausurplan für jeden Lernenden und jede Lehrkraft. Termine können aus einem externen Tool importiert werden oder über die Weboberfläche erstellt werden. Filterung über Kategorien ist genauso möglich wie das Einblenden von Klausuren. Mittels ICS-Export können Termine in Outlook oder Google Calendar integriert werden.">}}
    {{< img src="/images/software/icc/terminplan.png" zoom=true >}}
{{< /story >}}

{{< story header="Resourcenverwaltung" description="Der analoge Raumbelegplan gehört der Vergangenheit an. Über das ICC lassen sich Räume oder Resourcen (bspw. Tablets) bequem buchen. Dabei werden Stunden- und Vertretungsplan berücksichtigt. Kommt es zu nachträglichen Kollisionen, wird man dank einer E-Mail darüber informiert." align="right">}}
    {{< img src="/images/software/icc/resoucen.png" zoom=true >}}
{{< /story >}}

{{< story header="Dokumente" description="In der digitalen Dokumentenablage können Konzepte, wichtige Ankündigungen und Formalia, Regelungen wie bspw. die Hausordnung oder Lehrpläne hinterlegt werden. Diese können für bestimmte Zielgruppen (Lehrkräfte, Lernende/Eltern bestimmter Klassen) zugänglich gemacht werden.">}}
    {{< img src="/images/software/icc/dokumente.png" zoom=true >}}
{{< /story >}}

{{< story header="Wiki" description="Im Wiki können Anleitungen oder Best Practices abgelegt werden. Diese können für bestimmte Zielgruppen (Lehrkräfte, Lernende, Eltern) zugänglich gemacht werden." align="right">}}
    {{< img src="/images/software/icc/wiki.png" zoom=true >}}
{{< /story >}}

{{< story header="Kurslisten" description="Das Ausdrucken oder Exportieren von Kurslisten ist im ICC mit wenigen Mausklicks gemacht. Kein lästiges Anstehen im Sekretariat.">}}
    {{< img src="/images/software/icc/kurslisten.png" zoom=true >}}
{{< /story >}}

{{< story header="Lehrkräfteübersicht" description="Die Lehrkräfteübersicht gibt Aufschluss darüber, wer welche Fächer unterrichtet bzw. wer für welche Klasse zuständig ist. Darüberhinaus lassen sich über Tags auch Aufgabenfelder der Lehrkräfte darstellen." align="right" >}}
    {{< img src="/images/software/icc/lehrkraefte.png" zoom=true >}}
{{< /story >}}

{{< story header="Datenschutz" description="In der Datenschutzübersicht werden die Datenschutzfelder aus SchILD NRW angezeigt. Wen darf ich fotografieren? Wer möchte nicht namentlich in der Zeitung genannt werden? Alles mit wenigen Klicks tagesaktuell abrufbar." >}}
    {{< img src="/images/software/icc/datenschutz.png" zoom=true >}}
{{< /story >}}

{{< story header="Krankmeldungen" description="Eltern können über das ICC ihr Kind krankmelden. Die Krankmeldung löst eine E-Mail an die Klassenleitung sowie ein beliebiges Postfach aus. In der Tagesübersicht werden Krankmeldungen berücksichtigt." align="right">}}
    {{< slider >}}
        {{< img src="/images/software/icc/krankmeldung.png" zoom=true >}}
        {{< img src="/images/software/icc/krankmeldung-uebersicht.png" zoom=true >}}
    {{< /slider >}}
{{< /story >}}

{{< story header="Unterrichtsbücher" description="Das digitale Klassen- und Kursbuch gibt es als Unterrichtsbuch im ICC. So lässt sich der Unterricht digital dokumentieren. Komfortfunktionen wie fehlende Einträge oder Entschuldigungen inklusive. In der Lernendenübersicht wird für jeden Lernenden dargestellt, wie viele Kommentare, Fehlstunden (entschuldigt/unentschuldigt) oder Verspätungen gesammelt wurden." >}}
    {{< slider >}}
        {{< img src="/images/software/icc/unterrichtsbuch.png" zoom=true >}}
        {{< img src="/images/software/icc/unterrichtsbuch-lernende.png" zoom=true >}}
    {{< /slider >}}
{{< /story >}}

{{< story header="Maximaler Komfort" description="Das ICC arbeitet mit einer großen Datenlage und unterstützt somit Lehrkräfte proaktiv beim Erstellen der Unterrichtsdokumentation. Krank gemeldete Lernende oder Klausurschreibende werden direkt als absent vorgeschlagen. Ebenso wie bereits in vorherigen Stunden als absent gemeldete Lernende. Das ist praktisch." align="right" >}}
    {{< img src="/images/software/icc/unterrichtsbuch-eintrag.gif" zoom=true >}}
{{< /story >}}

{{< story header="Public Display" description="Das ICC lässt sich kompakt auf einem öffentlichen Display (bspw. im Lehrerzimmer oder im Eingangsbereich) anzeigen. Dort werden alle Vertretungen, Klausuren und Klausuraufsichten angezeigt. Zusätzlich werden Tagestexte, Absenzen und Termine angezeigt. Es gibt eine Ansicht für Lehrkräfte und eine Ansicht für Lernende." >}}
    {{< img src="/images/software/icc/display.png" zoom=true >}}
{{< /story >}}

{{< features >}}
    {{< feature icon="fas fa-user-tie" header="Elternaccounts" >}}
        Das ICC unterstützt Elternaccounts. Pro Elternaccount können mehrere Kinder hinterlegt werden (über das Single-Sign-On).
    {{< /feature >}}

    {{< feature icon="fas fa-sliders-h" header="Schuljahresabschnitte" >}}
        Das ICC unterstützt Schuljahresabschnitte (Halbjahre, Semester, ...)
    {{< /feature >}}

    {{< feature icon="fas fa-user-secret" header="Kiosk-Benutzer" >}}
        Über Kiosk-Benutzer kann man lesenden Zugriff auf das ICC ermöglichen, beispielsweise an einem Rechner im Lehrerzimmer.
    {{< /feature >}}

    {{< feature icon="fas fa-clock" header="Stundenplanperioden und A/B-Wochen" >}}
        Das ICC unterstützt Stundenplanperioden sowie periodische Stundenpläne (A-/B-Wochen).
    {{< /feature >}}

    {{< feature icon="fas fa-mobile-alt" header="Responsive Design" >}}
        Das Design des ICC passt sich der Displaygröße an und ist somit auch unterwegs auf dem Smartphone nutzbar.
    {{< /feature >}}

    {{< feature icon="fas fa-download" header="Exportmöglichkeiten" >}}
        Stunden-, Klausur- und Terminplan sind exportierbar und können somit in Outlook oder Google Calender eingebunden werden. Kurslisten sind als CSV-Datei exportierbar.
    {{< /feature >}}

    {{< feature icon="fas fa-upload" header="Import aus SchILD und Untis" >}}
        Die Stammdaten können aus SchILD NRW importiert werden. Pläne können aus Untis importiert werden.
    {{< /feature >}}

    {{< feature icon="fas fa-code-branch" header="Aktive Weiterentwicklung" >}}
        Viele Features sind aus der bisherigen Unterrichtserfahrung gewachsen. Und da sich Schule weiterentwickelt, gilt selbiges auch für das ICC.
    {{< /feature >}}

    {{< feature icon="fas fa-balance-scale" header="AGPL-3.0-Lizenz " >}}
        Der Quelltext des ICC ist auf GitHub öffentlich. Herunterladen, Nutzen und Weitergeben sind explizit erlaubt. Jeder ist willkommen, das ICC weiter zu verbessern.
    {{< /feature >}}
{{< /features >}}