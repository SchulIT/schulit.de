---
title: Installationsdateien aktualisieren
type: static
summary: Grundsätzlich aktualisieren sich unsere Programme entweder eigenständig (im Falle von Chrome und Firefox), über das SCCM (Windows, Office, Adobe Reader, Flash) oder eben gar nicht. Um die Menge an Aktualisierungen zu reduzieren und um frische Computer auch mit der neuesten Programmversion auszustatten, sollte man ab und an die Installationsdateien auf dem SCCM durch die neuen Installer ersetzen.
---

Wichtig zu beachten ist dabei, dass hier nur die Installationsdateien aktualisiert werden. Ist ein Programm bereits auf einem Computer installiert, erfolgt kein automatisches Update. Am Beispiel von Google Chrome wird dies demonstriert.

# Variante 1: Installer liegt als MSI-Datei vor

## Installationsdatei herunterladen

Zunächst muss die neue Installationsdatei heruntergeladen und auf dem Dateisystem abgelegt werden. Die alte Datei kann gelöscht werden.

{{< img src="/images/sccm/applications/update-application/msi-1.png" caption="Neue und alte MSI-Datei - die alte Datei kann gelöscht werden" >}}

{{< callout type="info" title="Installer mit mehreren Dateien" >}}
    Werden mehrere Installationsdateien benötigt als eine einzige Datei, so sollte man alle Dateien und Ordner im Installationsverzeichnis löschen und anschließend durch die neuen Dateien austauschen.
{{< /callout >}}

In den Einstellungen sicherstellen, dass das Programm nicht blockiert wird, weil es aus dem Internet stammt:

{{< img src="/images/sccm/applications/update-application/msi-pre.png" >}}

## Neue Version im SCCM einbinden 

In der SCCM Konsole unter "Softwarebibliothek" > "Übersicht" > "Anwendungsverwaltung" > "Anwendungen" einen Doppelklick auf die entsprechende Anwendung machen. Im Dialog die Versionsnummer ändern:

{{< img src="/images/sccm/applications/update-application/msi-2.png" >}}

Anschließend muss die MSI-Installationsdatei neu eingebunden werden. Hintergrund ist der, dass sich der Produkt-Code des Programmes mit dem neuen Installer geändert hat. Hat das SCCM noch den alter Produkt-Code hinterlegt, scheitern Installation und Deinstallation.

Man kann diese zwar auch handisch ändern (an mehreren Stellen), aber das neue Einbinden ist etwas intuitiver. Dazu zunächst in den Reiter "Bereitstellungstypen" wechseln. Dort zunächst die Bereitstellung auswählen und auf "Löschen" klicken. 

{{< img src="/images/sccm/applications/update-application/msi-3.png" >}}

Nun auf Hinzufügen klicken. Im sich öffnenden Assistenten die neue Installationsdatei auswählen und auf "Weiter" klicken:

{{< img src="/images/sccm/applications/update-application/msi-4.png" >}}
{{< img src="/images/sccm/applications/update-application/msi-5.png" >}}

Jetzt kann bis zum Ende auf "Weiter" klicken. Hinweis: Falls man die Anwendung nur für 32- oder 64-bit Computer freigeben möchte, so muss man dies im Abschnitt "Anforderungen" kenntlich machen.

Der Assistent sollte mit einer Erfolgsmeldung abschließen:

{{< img src="/images/sccm/applications/update-application/msi-7.png" >}}

Es sollte nun wieder ein Bereitstellungstyp vorhanden sein:

{{< img src="/images/sccm/applications/update-application/msi-8.png" >}}

### Inhalte neu verteilen

Zum Abschluss muss dem SCCM noch mitgeteilt werden, dass sich die Installationsdateien auf der Netzwerkfreigabe geändert haben. Dazu in den Tab "Inhaltsorte" wechseln und den SCCM-Server auswählen. Anschließend auf "Neu verteilen" klicken:

{{< img src="/images/sccm/applications/update-application/msi-9.png" >}}

Die Meldung mit einem "OK" bestätigen.

{{< img src="/images/sccm/applications/update-application/msi-10.png" >}}

Nun aktualisiert das SCCM im Hintergrund die Dateien. Den Fortschritt kann man über den Button "Inhaltsstatus" einsehen (siehe unten).

# Variante 2: Installer liegt nicht als MSI-Datei vor

## Installationsdateien auf dem Dateisystem aktualisieren

Zunächst muss die neue Installationsdatei heruntergeladen und auf dem Dateisystem abgelegt werden. Die alte Datei kann gelöscht werden.

{{< img src="/images/sccm/applications/update-application/exe-1.png" caption="Die alte Installationsdatei" >}}
{{< img src="/images/sccm/applications/update-application/exe-2.png" caption="Die neue Installationsdatei" >}}

{{< callout type="info" title="Installer mit mehreren Dateien" >}}
    Werden mehrere Installationsdateien benötigt als eine einzige Datei, so sollte man alle Dateien und Ordner im Installationsverzeichnis löschen und anschließend durch die neuen Dateien austauschen.
{{< /callout >}}

In den Einstellungen sicherstellen, dass das Programm nicht blockiert wird, weil es aus dem Internet stammt:

{{< img src="/images/sccm/applications/update-application/exe-pre.png" >}}

## SCCM aktualisieren

Nun muss im SCCM noch die Versionsnummer geändert werden (für die Kosmetik). Anschließend muss das SCCM die neue(n) Installationsdatei(en) in die interne Bibliothek aufnehmen sowie an alle Verteilungspunkte versenden.

### Versionsnummer ändern

In der SCCM Konsole unter "Softwarebibliothek" > "Übersicht" > "Anwendungsverwaltung" > "Anwendungen" einen Doppelklick auf die entsprechende Anwendung machen. Im Dialog die Versionsnummer ändern:

{{< img src="/images/sccm/applications/update-application/exe-3.png" >}}

Anschließend mit "Übernehmen" bestätigen.

## Inhalt neu verteilen

Anschließend noch den Inhalt neu verteilen. Dazu in den Eigenschaften in den Tab "Inhaltsorte" wechseln. Dort den Verteilungspunkt anklicken und auf "Neu verteilen" klicken:

{{< img src="/images/sccm/applications/update-application/exe-4.png" >}}

Anschließend mit "OK" bestätigen.

{{< img src="/images/sccm/applications/update-application/exe-5.png" >}}

Es folgt keine weitere Bestätigung, da der Vorgang nur angestoßen wurde. Den aktuellen Status sieht man, wenn man auf Inhaltsstatus klickt:

{{< img src="/images/sccm/applications/update-application/exe-6.png" >}}
{{< img src="/images/sccm/applications/update-application/exe-7.png" >}}