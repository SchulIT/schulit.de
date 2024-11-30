---
title: Office aktualisieren
ordering: 3
type: static
summary: Das Einspielen von Updates bedarf leider einiger regelmäßiger Handgriffe, wenn man die Updates zentral steuern möchte und nicht über das Office CDN herunterladen möchte oder kann.
---

# Vorbereitung

Zunächst muss dem WSUS mitgeteilt werden, dass das SCCM Updates für Office 2019 herunterladen möchte. Dazu unter "Verwaltung" > "Übersicht" > "Standortkonfiguration" > "Standorte" den SCCM-Server auswählen und die Standortkomponente "Softwareupdatepunkt" konfigurieren (Button ist im Ribbon zu finden). Dort muss im Reiter "Produkte" das Produkt "Office 365 Client" ausgewählt werden (ja, das muss man für Office 2019 auswählen).

{{< img src="/images/sccm/office-2019/updates/wsus.png" >}}

Anschließend mit "OK" bestätigen.

# Updates synchronisieren

