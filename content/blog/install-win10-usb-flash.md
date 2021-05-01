---
title: Windows 10 Installations-USB-Stick erstellen (UEFI)
date: 2021-04-29T18:00:00
author: "Marcel Marnitz"
type: post
archive: "2020/04"
tags: [ "windows", "osd", "uefi" ]
---

Leider sind die WIM-Dateien der aktuellen Windows 10-ISOs zu groß, um sie auf einen USB-Stick, der mit FAT32 formatiert ist, zu kopieren. Das ist aber notwendig, wenn man einen USB-Stick erstellen möchte, der im UEFI-Modus bootet.

<!--more-->

### GPT-Modus

Zunächst einmal stellt man sicher, dass der USB Stick im GPT-Modus partioniert wird. Am schnellsten geht das mittels PowerShell und dem Tool diskpart. Dazu eine PowerShell im Administrator-Modus starten.

Mittels `list disk` lassen sich alle Datenträger anzeigen. Den Stick erkannt man in der Regel an der Größe. In der Spalte `GPT` muss ein `*` enthalten sein:

```
Windows PowerShell
Copyright (C) Microsoft Corporation. Alle Rechte vorbehalten.

Lernen Sie das neue plattformübergreifende PowerShell kennen – https://aka.ms/pscore6

PS C:\WINDOWS\system32> diskpart

Microsoft DiskPart-Version 10.0.19041.964

Copyright (C) Microsoft Corporation.
Auf Computer: MARCEL-DESKTOP

DISKPART> list disk

  Datenträger ###  Status         Größe    Frei     Dyn  GPT
  ---------------  -------------  -------  -------  ---  ---
  Datenträger 0    Online          465 GB   528 MB        *
  Datenträger 1    Online          465 GB      0 B        *
  Datenträger 3    Online           29 GB    14 GB        *

DISKPART>
```

Ist der Stick nicht im GPT-Modus, so kann man ihn konvertieren. Dazu zunächst mit `sel disk N` den Datenträger auswählen (`N` natürlich ersetzen) und anschließend `convert gpt` ausführen. Es bietet sich an, direkt alle Partionen zu löschen. Dazu den Befehl `clear` verwenden.

### Partionen

Nun erstellt man in der Datenträgerverwaltung zwei Partionen. Die erste Partition ist eine FAT32-Partition (aktuell reichen 1GB aus). Die zweite Partion ist eine NTFS-Partition mit beliebiger Größe (hier: 14GB). Man legt auch direkt für jede Partition einen Laufwerksbuchstaben an:

{{< img src="/images/blog/install-win10-usb-flash/partitions.png" >}}

### Inhalt

#### Boot-Partion (FAT32)

Auf die FAT32-Boot-Partition kopiert man nun alle Verzeichnisse von der ISO-Datei, außer das Verzeichnis `sources`.

{{< img src="/images/blog/install-win10-usb-flash/explorer-boot-partition.png" >}}

Das Verzeichnis `sources` legt man nun händisch an und kopiert nur die Datei `boot.wim` in dieses Verzeichnis.

{{< img src="/images/blog/install-win10-usb-flash/explorer-boot-partition-sources.png" >}}

Auf die NTFS-Partition kopiert man nur das `sources` Verzeichnis und löscht anschließend die `boot.wim`-Datei aus diesem Verzeichnis.

{{< img src="/images/blog/install-win10-usb-flash/explorer-install-partition.png" >}}

Der USB-Stick ist nun fertig.

---
Quelle: [https://techbit.ca/2019/02/creating-a-bootable-windows-10-uefi-usb-drive-using-linux/](https://techbit.ca/2019/02/creating-a-bootable-windows-10-uefi-usb-drive-using-linux/)