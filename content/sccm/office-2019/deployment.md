---
title: Verteilung
ordering: 2
type: static
toc: false
---

Die Verteilung von Office 2019 ist mithilfe des SCCMs mit wenigen Mausklicks erledigt. 

<!--more-->

In der SCCM Konsole navigiert man zu "Softwarebibliothek" > "Übersicht" > "Office 365-Clientverwaltung". Hier darf man sich nicht davon täuschen lassen, dass überall von Office 365 gesprochen wird. 

In der Übersicht klickt man auf den Button "Office 365-Installationsprogramm":

{{< img src="/images/sccm/office-2019/deployment/step-1.png" >}}

Es öffnet sich der Assistent für Microsoft Office 365-Clientinstallation:

{{< img src="/images/sccm/office-2019/deployment/step-2.png" >}}

Dort trägt man zunächst den Namen der Anwendung ein, unter die gewünschte Office 2019-Variante angelegt wird. Außerdem wählt man einen Inhaltsordner, welcher einer Freigabe auf dem SCCM-Server entsprechen sollte. **Wichtig:** Der Ordner muss leer sein!

Anschließend bestätigt man mit "Weiter" und öffnet das Office-Anpassungstool:

{{< img src="/images/sccm/office-2019/deployment/step-3.png" >}}

Im Anpassungstool konfiguriert man nun das Office Paket. Dort lassen sich die verschiedenen Office-Versionen (Standard oder Professional für Office 2019 oder Office 365), Sprachen und Office-Anwendungen auswählen, die installiert werden sollen. Auch lässt sich die Aktivierungsmethode (KMS oder MAK) auswählen. Das Logging sowie Anpinnen an die Taskbar haben wir deaktiviert. 

{{< img src="/images/sccm/office-2019/deployment/step-4.png" >}}

Hat man alles konfiguriert, klickt man oben rechts auf "Überprüfen" und schaut, ob alle Angaben korrekt sind:

{{< img src="/images/sccm/office-2019/deployment/step-5.png" >}}

Ist etwas nicht korrekt, schließt man die Überprüfung und korrigiert die Angaben. Anderenfalls auf "Übermitteln" klicken und im Assistenten auf "Weiter" klicken. 

Nun kann man die Anwendung direkt bereitstellen, wenn man möchte (in diesem Fall entscheiden wir uns gegen eine unmittelbare Bereitstellung).

{{< img src="/images/sccm/office-2019/deployment/step-6.png" >}}

Man überprüft alle Angaben...

{{< img src="/images/sccm/office-2019/deployment/step-7.png" >}}

... und dann startet schließlich auch der Download:

{{< img src="/images/sccm/office-2019/deployment/step-8.png" >}}

{{< img src="/images/sccm/office-2019/deployment/step-9.png" >}}