---
title: Active Directory Authentication Server
ordering: 20
type: section
github: https://github.com/SchulIT/adauth-server
docs: https://github.com/SchulIT/adauth-server/blob/master/README.md
download: https://github.com/SchulIT/adauth-server/releases
license:
    text: MIT
    link: https://github.com/SchulIT/adauth-server/blob/master/LICENSE.md
summary: Mithilfe des AD Auth Servers wird ermöglicht, dass Benutzer den Benutzernamen und das Passwort aus dem Active Directory nutzen können.
menus:
    main:
        parent: software
        weight: 20
        params:
            short_summary: Server für Single-Sign-On mit bestehendem Active Directory.
---

{{< features >}}
    {{< feature icon="fas fa-sign-in-alt" header="Single-Sign-On">}}
        Ermöglicht die Nutzung der SchulIT Suite mit Benutzernamen und Passwort aus dem pädagogischen Netzwerk. 
    {{< /feature >}}

    {{< feature icon="fas fa-shield-alt" header="Höchste Sicherheit dank TLS">}}
        Die Verbindung zum Active Directory Authentication Server wird mittels TLS abgesichert. Passwörter können somit während der Übertragung nicht entschlüsselt werden.
    {{< /feature >}}
{{< /features >}}

{{< construction >}}