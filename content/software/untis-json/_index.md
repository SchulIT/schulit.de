---
title: UntisJson
type: section
ordering: 1099
github: https://github.com/schulit/untis-json
docs: '#verwendung'
license:
    text: MIT
    link: https://github.com/SchulIT/untis-json/blob/master/LICENSE.md
summary: Mithilfe von UntisJson lassen sich der Vertretungsplan sowie der Klausurplan aus dem Untis-GPO-Format in das menschen-leserliche (und weiterverarbeitbare) JSON-Format umgewandelt werden.
deprecated: true
followup:
  name: UntisExport
  url: /software/untisexport
---

## Programm

### Voraussetzungen

Das Programm funktioniert mit Windows und erfordert mindestens das .NET-Framework 4.5. 

### Installation

Das Programm kann als ausführbare-Datei direkt von [GitHub](https://github.com/SchulIT/untis-json/releases) heruntergeladen werden.

### Verwendung

```
UntisJson 2.1.0.0
Copyright © SchulIT 2018

  -i, --input           Required. Input file

  -o, --output          (Default: ) Output file. If not specified, output will
                        be printed to stdout

  -t, --type            Required. Type of input file - can either be 'exams' or
                        'substitutions'

  -v, --verbose         Print details during execution

  -m, --minify          Indicates whether the resulting JSON string will be
                        minified or not

  -e, --exclude0        Flag whether to exclude Untis IDs 0

  -u, --usethreshold    Flag whether to exclude old items

  --help                Display this help screen.
```

### Vertretungsplan

In Untis zunächst die `GPO14.txt` exportieren. Anschließend kann das Programm folgendermaßen verwendet werden (angenommen, die GPO- und EXE-Datei sind im gleichen Verzeichnis):

    $ untis-to-json.exe -i GPO14.txt -o GPO14.json -t substitutions

Die Optionen `-v`, `-m`, `-e` bzw. `-u` können bei Bedarf ergänzt (und kombiniert) werden.

### Klausuren

In Untis zunächst die `GPO17.txt` exportieren. Anschließend kann das Programm folgendermaßen verwendet werden (angenommen, die GPO- und EXE-Datei sind im gleichen Verzeichnis):

    $ untis-to-json.exe -i GPO17.txt -o GPO17.json -t exams

Die Optionen `-v`, `-m`, `-e` bzw. `-u` können bei Bedarf ergänzt (und kombiniert) werden.

## Wichtige Hinweise

## Klassenerkennung bei Klausuren

Damit die Bibliothek die Jahrgangsstufe bei Klausuren erkennen kann, muss der Namen der Klausur mit `A` gefolgt vom Abiturjahgang (ohne `20`) beginnen. Für Januar 2019 würde beispielsweise gelten: `A21-M-GK1-2` wäre eine Klausur des Abiturjahrgangs 2021, was der aktuellen EF entspricht.

Aktuell funktioniert die Klassenerkennung nur für die Oberstufe. 

### Auslegung für NRW

Die Klassenerkennung berücksichtigt aktuell G8-Jahrgänge in NRW (EF, Q1, Q2).

## Bibliothek

## Einbinden

Das Programm steht auch als Bibliothek für .NET zur Verfügung. Es kann über NuGet-Paket [UntisJson](https://www.nuget.org/packages/UntisJson/) eingebunden werden.

### Verwenden

Eine Dokumentation folgt demnächst. Aktuell sollte man den Quelltext studieren :wink:

## Entwicklung

Die Entwicklung findet auf [GitHub](https://github.com/SchulIT/untis-json) statt. Jeder ist herzlich eingeladen, bei der Entwicklung beizutragen.