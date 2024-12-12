---
title: SchILD ICC Importer
type: section
ordering: 32
github: https://github.com/schulit/schild-icc-importer
docs: https://github.com/SchulIT/schild-icc-importer/blob/master/README.md
download: https://github.com/SchulIT/schild-icc-importer/releases
license:
    text: MIT
    link: https://github.com/SchulIT/schild-icc-importer/blob/master/LICENSE.md
gallery:
    - /images/software/schild-icc-importer/programm.png
summary: Das Importtool für den Datenimport ins ICC aus SchILD NRW (Lernende, Lehrkräfte, Klassen, Klassenleitungen, Lerngruppen, Unterrichte).
menus:
    main:
        parent: software
        weight: 32
        params:
            short_summary: Software zum Importieren von Stammdaten aus SchILD NRW ins ICC.
---

{{< features >}}
    {{< feature icon="fas fa-database" header="Import aus MS SQL-Server" >}}
        Das Programm liest die SchILD-Datenbank direkt über Microsoft SQL ein und 
        importiert die Daten aus dieser.
    {{< /feature >}}

    {{< feature icon="fas fa-code-branch" header="Import aus MySQL-Server" >}}
        Das Programm liest die SchILD-Datenbank direkt vom MySQL oder MariaDB-Server ein und
        importiert die Daten aus dieser.
    {{< /feature >}}

    {{< feature icon="fas fa-code-branch" header="Import aus Access-Datenbank" >}}
        Sofern das Access-Passwort für die SchILD-Datenbank bekannt ist, kann die SchILD-Datenbank
        aus der SchILD-Accessdatei importiert werden.
    {{< /feature >}}

    {{< feature icon="fab fa-windows" header="SchILD 2.x" >}}
        Das Tool unterstützt stets die aktuelle Version von SchILD. Aktuell unterstützt das Tool die neuesten Versionen aus dem 2.x-Zweig.
    {{< /feature >}}

    {{< feature icon="fa-solid fa-triangle-exclamation" header="SchILD 3.x/SVWS" >}}
        Das Tool wird perspektivisch durch das SVWS Import Tool abgelöst, welches sich noch in der 
        Entwicklung befindet.
    {{< /feature >}}
{{< /features >}}

{{< callout type="info" title="Disclaimer">}}
    Diese Software wird weder vom <a class="font-semibold underline hover:no-underline" href="https://www.svws.nrw.de/">Ministerium für Schule und Bildung des Landes Nordrhein-Westfalens</a> entwickelt noch offiziell unterstützt.
{{< /callout >}}