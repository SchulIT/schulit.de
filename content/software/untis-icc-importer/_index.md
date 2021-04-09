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
menu:
    main:
        parent: Software
        weight: 32
---

{{< features >}}
    {{< feature icon="fas fa-file-import" header="Import aus GPN-Datei" >}}
        Das Programm liest die Untis-Datei ohne Umwege aus. Es werden keine zusätzlichen Untis-Module benötigt.
    {{< /feature >}}

    {{< feature icon="fas fa-times" header="Kein MultiUser-Support" >}}
        MultiUser-Installationen mit einer separaten Datenbank werden leider nicht unterstützt.
    {{< /feature >}}

    {{< feature icon="fab fa-windows" header="Windows 10 & Server" >}}
        Das Programm ist sowohl unter Windows 10 als auch unter Windows Server 2016/2019 lauffähig.
    {{< /feature >}}
{{< /features >}}

{{< story header="Einstellungsmöglichkeiten" description="Der Import von Klausurschreibenden wird genauso untersützt wie das Überschreiben von Fächerkürzeln (falls eine Angleichung nicht möglich ist).">}}
    {{< img src="/images/software/untis-icc-importer/settings.png" zoom=true >}}
{{< /story >}}