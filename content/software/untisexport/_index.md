---
title: UntisExport
type: section
ordering: 1000
github: https://github.com/schulit/untisexport
license:
    text: MIT
    link: https://github.com/SchulIT/untisexport/blob/master/LICENSE.md
docs: https://github.com/schulit/untisexport#readme
download: https://www.nuget.org/packages/SchulIT.UntisExport/
summary: Mithilfe der UntisExport-Bibliothek kann die Untis GPN-Datei ausgelesen werden.
---

{{< features >}}
    {{< feature icon="fas fa-check" header="Untis 2021" >}}
        Das Tool unterstützt stets die aktuelle Untis Version - aktuell ist dies Untis 2021.
    {{< /feature >}}

    {{< feature icon="fab fa-windows" header=".NET Standard Bibliothek" >}}
        Die Bibliothek kann in jedem .NET und .NET Core Projekt verwendet werden. Die Bibliothek kann über NuGet eingebunden werden.
    {{< /feature >}}

    {{< feature icon="fas fa-download" header="Untis-Daten auslesen" >}}
        Die Bibliothek liest die Daten direkt aus der GPN-Datei aus. Es werden keine separaten
        Untis-Module benötigt.
    {{< /feature >}}

    {{< feature icon="fas fa-tachometer-alt" header="Schneller als Untis selbst" >}}
        Das Einlesen der GPN-Datei dauert weniger als fünf Sekunden und ist somit deutlich schneller als Untis selbst.
    {{< /feature >}}

    {{< feature icon="fas fa-hands-helping" header="Unterstützung erwünscht" >}}
        Aktuell unterstützt die Bibliothek nur Untis-Dateien mit Perioden. Es ist aber möglich, den bestehenden Quelltext so zu erweitern, dass auch Untis-Dateien ohne Perioden unterstützt werden.
    {{< /feature >}}

    {{< feature icon="fas fa-balance-scale" header="MIT-Lizenz" >}}
        Der Quelltext ist auf GitHub öffentlich und unter der MIT-Lizenz lizensiert. Eine Portierung (bspw. nach Java) ist somit unkompliziert möglich.
    {{< /feature >}}
{{< /features >}}

{{< callout type="info" title="Disclaimer">}}
    Diese Bibliothek wird weder von der <a href="https://www.untis.at/">Untis GmbH</a> entwickelt noch offiziell unterstützt. 
{{< /callout >}}