---
title: pfSense WLAN Codes
ordering: 11
type: section
github: https://github.com/SchulIT/wlan-codes
docs: https://docs.schulit.de/wlan-codes
license:
    text: MIT
    link: https://github.com/SchulIT/wlan-codes/blob/master/LICENSE
summary: Bietet eine einfache Plattform für Lehrkräfte, um WLAN Codes für das Captive Portal der pfSense abzurufen. Die Codes werden durch den Administrator eingetragen und werden nicht mehr zum Abruf bereitgestellt, sobald sie eine Lehrkraft angefordert hat.
menus:
    main:
        parent: software
        weight: 11
        params:
            short_summary: Voucher vom Captive Portal der pfSense im Kollegium bereitstellen.

---

{{< features >}}
    {{< feature icon="fas fa-upload" header="Codes importieren">}}
        Codes aus der pfSense können als CSV-Datei importiert werden.
    {{< /feature >}}

    {{< feature icon="fas fa-download" header="Abrufen von Codes" >}}
        Benutzer (vor allem Lehrkräfte) können WLAN Codes der gewünschten Dauer abrufen.
    {{< /feature >}}

    {{< feature icon="fa-solid fa-user-shield" header="Rechteverwaltung" >}}
        Über Rollen kann definiert werden, für welche Dauer Codes von einem Benutzer abgerufen werden können.
    {{< /feature >}}
{{< /features >}}
