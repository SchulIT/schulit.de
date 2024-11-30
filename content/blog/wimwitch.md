---
title: Angepasste Windows-Installation mit WIM Witch erstellen
date: 2021-04-30T18:00:00
author: "Marcel Marnitz"
type: post
archive: "2020/04"
tags: [ "windows", "osd", "mdm", "intune" ]
summary: Um viele identische Geräte mit einem frischen Windows 10 zu installieren, kann man WIM Witch verwenden. Die mit WIM Witch erstellte WIM-Datei lässt sich anschließend per USB Stick installieren.
---

# Idee

Die Idee von WIM Witch ist es, eine angepasste `install.wim`, also ein angepasstes Windows 10 Installationsimage, zu erzeugen. Eine kleine Übersicht über die Features ist im Post zu[angepassten Windows-Installation erstellen](/blog/custom-windows-install) zu finden.

# WIM Witch installieren

WIM Witch ist keine klassische Windows-Anwendung sondern vielmehr eine GUI für viele PowerShell-Cmdlets. 

Die Installation erfolgt über die PowerShell. Diese startet man zunächst als Administrator und führt anschließend aus:

```powershell
PS> Install-Script -Name WIMWitch
```

Nun ist WIM Witch installiert. Einen Startmenü-Eintrag oder ein Desktop-Icon sucht man vergebens, da es sich um ein PowerShell-Skript handelt.

# WIM erstellen
### Schritt 1: Arbeitsverzeichnis erstellen

Für jeden Gerätetyp legt man ein eigenes Arbeitsverzeichnis an (bspw. `D:\Schulgeräte\HP Convertables`). Anschließend startet man eine PowerShell (das Arbeitsverzeichnis ist egal).

Über den Befehl WIMWitch.ps1 bereitet man nun das Arbeitsverzeichnis vor.

```powershell
PS C:\Users\Marcel> WIMWitch.ps1
```

Das Skript startet und meldet:

```
##########################################################

             ***** Starting WIM Witch *****
                      version 3.0.0

##########################################################

WIM Witch starting in C:\Program Files\WindowsPowerShell\Scripts
Checking for installation status
WIM Witch does not appear to be installed in this location.
Would you like to install WIM Witch here?
(Y/N):
```

Man bestätigt mit `N`, da man ein eigenes Verzeichnis auswählen möchte. Das Verzeichnis `C:\Program Files\WindowsPowerShell\Scripts` ist ungeeignet.

Anschließend wählt man den vorhin erstellten Ordner aus. Nun erstellt das Skript das Arbeitsverzeichnis:

```
Installing WIM Witch in: D:\Schulgeräte\HP Convertables
WIM Witch script copied to installation path
Created folder: CompletedWIMs
Created folder: Configs
Created folder: drivers
Created folder: jobs
Created folder: logging
Created folder: Mount
Created folder: Staging
Created folder: updates
Created folder: imports
Created folder: imports\WIM
Created folder: imports\DotNet
Created folder: Autopilot
Created folder: backup
=============================================
WIM Witch has been installed to D:\Schulgeräte\HP Convertables
Start WIM witch from that folder to continue.

Exiting...
```

Nun startet man eine PowerShell-Sitzung **mit Administrator-Rechten** und startet WIM Witch:

```powershell
PS D:\Schulgeräte\HP Convertables> .\WIMWitch.ps1
```

### Schritt 2: WIM importieren

Zunächst wählt man die aus dem VLSC heruntergeladene ISO-Datei aus und wählt die zu importierenden Dinge aus (Install.wim & .NET Binaries). Als Namen für die importierte WIM eignet sich `install.wim`, aber man kann auch einen anderen Namen verwenden.

{{< img src=/images/blog/wimwitch/1-import.png >}}

### Schritt 3: WIM konfigurieren

#### Edition auswählen

Im Reiter "Source WIM" wählt man nun die Windows 10 Edition aus, die man installieren möchte. Im schulischen Umfeld ist das in der Regel "Windows 10 Education".

{{< img src=/images/blog/wimwitch/2-select-wim.png >}}
{{< img src=/images/blog/wimwitch/2-select-wim-edition.png >}}

#### Windows Updates herunterladen

Im Reiter "Update Catalog" prüft man zunächst, ob die Versionen von OSDUpdate und OSDSUS aktuell sind bzw. überhaupt installiert sind. 

{{< img src=/images/blog/wimwitch/3-wsus-update-necessary.png >}}

Falls man mindestens eine der Programme aktualisieren oder installieren muss, muss man WIM Witch neu starten. **Wichtig:** Auch die PowerShell beenden und erneut (mit Administratorrechten, s.o.) starten.

Nun wählt man die Windows 10 Version aus, für die man Updates installieren möchte. Optionale und dynamische Updates lassen sich ebenfalls aktivieren (ist bei uns aber nicht aktiviert).

{{< img src=/images/blog/wimwitch/3-wsus-select-and-download.png >}}

Anschließend klickt man auf "Download" und wartet den Download ab:

{{< img src=/images/blog/wimwitch/3-wsus-downloading.png >}}

{{< callout type="warning" title="Hinweis" >}}
    Die Updates sind bisher nur heruntergeladen und werden (noch) nicht in die WIM-Datei integriert. Dazu muss unter "Customizations" die Option "Enable Updates" und ggf. "Include Optional" aktiviert werden.
{{< /callout >}}

#### Treiber herunterladen

Als nächstes gibt man das Verzeichnis an, in dem die Treiber zu finden sind. Diese muss man zunächst von der Herstellerseite herunterladen. Große Hersteller wie [HP](https://hpia.hpcloud.hp.com/downloads/driverpackcatalog/HP_Driverpack_Matrix_x64.html) oder [Dell](https://www.dell.com/support/kbdoc/de-de/000124139/dell-command-deploy-driver-packs-for-enterprise-client-os-deployment?lang=en) bieten an, ganze Treiberpakete für ihre Geräte herunterzuladen.

Es empfiehlt sich, die entpackten Treiber im Arbeitsverzeichnis unter `drivers` abzulegen.

{{< img src=/images/blog/wimwitch/4-drivers-prepare.png >}}

Anschließend hinterlegt man im Reiter "Drivers" das Verzeichnis im WIM Witch und aktiviert die Treiber-Integration:

{{< img src=/images/blog/wimwitch/4-drivers-select.png >}}

#### Ergänzungen (.NET Framework / OneDrive / Updates)

Unter "Customizations" muss zunächst die Option "Enable Updates" (bei Bedarf auch "Include Optional" ausgewählt werden.). Nur so werden auch die zuvor heruntergeladenen Updates integriert.

Möchte man noch das .NET Framework integrieren und/oder den OneDrive Client aktualisieren (beides empfiehlt sich), klickt man die entsprechenden Checkboxen an.

{{< img src=/images/blog/wimwitch/5-customizations.png >}}

#### Apps entfernen

Standardmäßig kommt Windows 10 mit einigen vorinstallierten Apps, die man bereits aus der WIM entfernen sollte. Diese werden dann bei der Anmeldung des Benutzers nicht installiert.

Dazu klickt man im Reiter "App Removal" die Checkbox an und wählt die gewünschten Apps aus. Wir entfernen:

* Wetter App (Microsoft.BingWeather)
* Hilfe holen (Microsoft.GetHelp)
* Erste Schritte (Microsoft.Getstarted)
* Solitär-Collection (Microsoft.MicrosoftSolitaireCollection)
* Office Hub (Microsoft.MicrosoftOfficeHub)
* Sticky Notes (Microsoft.MicrosoftStickyNotes)
* People-App (Microsoft.People)
* Skype (Microsoft.SkypeApp)
* Mail-App (Microsoft.windowscommunicationsapps)
* Feedback-App (Microsoft.WindowsFeedbackHub)
* Ihr Smartphone (Microsoft.YourPhone)
* Mixed Reality Portal (Microsoft.MixedReality.Portal)

{{< img src=/images/blog/wimwitch/6-app-removal.png >}}

#### Konfiguration speichern

Es ist sehr (!!) hilfreich, wenn man sich die aktuelle Konfiguration unter "Save/Load" einmal abspeichert.

#### WIM erstellen

Ist man fertig, navigiert man zum Reiter "Make It So". Dort prüft man zunächst unten rechts, ob die gewünschten Dinge in die WIM übernommen werden. Anderenfalls prüft man die entsprechenden Reiter.

Als WIM-Namen bietet sich wieder `install.wim` an. Diese Datei wird automatisch im Arbeitsverzeichnis unter `CompletedWIMs` abgelegt und muss anschließend auf den Installations-USB-Stick übertragen werden.

{{< img src=/images/blog/wimwitch/7-make-it-so.png >}}

Nachdem man auf "Make it so!" klickt, sieht man den aktuellen Fortschritt im PowerShell-Fenster. Der Vorgang dauert nun - abhängig von den ausgewählten Einträgen und der Anzahl der Treiber - einige Zeit.

{{< img src=/images/blog/wimwitch/8-finish.png >}}