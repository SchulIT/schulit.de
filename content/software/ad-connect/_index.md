---
title: Active Directory Connect Client
ordering: 21
type: section
github: https://github.com/SchulIT/adconnect-client
docs: https://adconnect-client.readthedocs.io/
download: https://github.com/SchulIT/adconnect-client/releases
license:
    text: MIT
    link: https://github.com/SchulIT/adconnect-client/blob/master/LICENSE.md
summary: Mithilde des Active Directory Connect Clients können Benutzer aus dem lokalen Active Directory in das Sigle-Sign-On synchronisiert werden.
menus:
    main:
        parent: software
        weight: 21
        params:
            short_summary: Bereitstellung von Benutzern aus vorhandenem Active Directory in die zentrale Benutzerverwaltung.

---

{{< features >}}
    {{< feature icon="fas fa-upload" header="Schnelle Bereitstellung" >}}
        Mit wenigen Klicks werden die gewünschten Benutzer aus dem pädagogischen Netzwerk importiert.
    {{< /feature >}}

    {{< feature icon="fas fa-filter" header="Filterung durch OUs">}}
        Eine Filterung der Benutzer anhand von Organisationseinheiten wird unterstützt. So werden nur die gewünschten Benutzer importiert.
    {{< /feature >}}

    {{< feature icon="fab fa-windows" header="Active Directory/LDAP" >}}
        Offiziell wird das Active Directory unterstützt und getestet. Es klappt aber grundsätzlich mit allen LDAP-kompatiblen Verzeichnisdiensten (bspw. Samba).
    {{< /feature >}}
{{< /features >}}