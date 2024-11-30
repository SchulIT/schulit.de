---
title: Benutzerverwaltung & Single-Sign-On 
ordering: 1
type: chapter
github: https://github.com/schulit/idp
docs: https://docs.schulit.de/idp
license:
    text: AGPL-3.0
    link: https://github.com/SchulIT/idp/blob/master/LICENSE
summary: Die Benutzerverwaltung ist das Herzstück für SchulIT Anwendungen, da hierüber alle Benutzer verwaltet werden. Das Single-Sign-On erlaubt das Anmelden an den verschiedenen Anwendungen.
menus:
    main:
        parent: software
        weight: 1
        params:
            short_summary: Die zentrale Benutzerplattform für SchulIT Anwendungen und viele weitere Software (bspw. Wordpress, Snipe IT, uvm.).
---

{{< features >}}
    {{< feature icon="fas fa-users" header="Zentrale Benutzerverwaltung" >}}
        Alle Benutzer der SchulIT Suite werden an einem zentralen Ort verwaltet.
    {{< /feature >}}

    {{< feature icon="fas fa-user-tag" header="Rechteverwaltung" >}}
        Einzelne Dienste oder Rollen können über Benutzertypen und -gruppen gesteuert werden.
    {{< /feature >}}

    {{< feature icon="fa fa-th" header="Eine Anmeldung - viele Dienste" >}}
        Mittels SAML-Protokoll wird man bei allen freigeschalteten Anwendungen automatisch angemeldet. Das funktioniert auch mit externen Anwendungen, die SAML untersützen.
    {{< /feature >}}

    {{< feature icon="fas fa-qrcode" header="Selbst-Registrierung über Codes " >}}
        Über Registrierungscodes können Personen (bspw. Eltern) ihre Registrierung selbstständig vornehmen.
    {{< /feature >}}

    {{< feature icon="fas fa-upload" header="Benutzerimport" >}}
        Benutzer können mittels CSV-Datei oder über eine API-Schnittstelle automatisiert importiert werden.
    {{< /feature >}}

    {{< feature icon="far fa-address-book" header="Active Directory Anbindung" >}}
        Eine Anbindung an ein lokales Active Directory ist möglich, sodass die ein Lehrkräfte und Lernende aus dem Active Directory importiert werden können.
    {{< /feature >}}

{{< /features >}}
