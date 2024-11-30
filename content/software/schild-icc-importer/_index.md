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
        Das Programm liest die SchILD-Datenbank direkt über SQL aus. Access-Datenbanken werden nicht unterstützt.
    {{< /feature >}}

    {{< feature icon="fas fa-code-branch" header="Import aus MySQL-Server" >}}
        Die Unterstützung für MySQL kann durch eine Erweiterung der SchildExport-Datenbank ermöglicht werden.
    {{< /feature >}}

    {{< feature icon="fab fa-windows" header="SchILD 2.x" >}}
        Das Tool unterstützt stets die aktuelle Version von SchILD. Aktuell unterstützt das Tool die neuesten Versionen aus dem 2.x-Zweig.
    {{< /feature >}}
{{< /features >}}

{{< callout type="info" title="Disclaimer">}}
    Diese Software wird weder vom <a href="https://www.svws.nrw.de/">Ministerium für Schule und Bildung des Landes Nordrhein-Westfalens</a> entwickelt noch offiziell unterstützt.
{{< /callout >}}