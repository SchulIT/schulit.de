---
title: Öffentlichen Ordner leeren
date: 2021-03-29T00:00:00
tags: ["intune", "mdm"]
author: "Marcel Marnitz"
type: post
archive: "2021/03"
---

Wir verwenden unsere Tablets zwar im Shared PC-Modus, erlauben jedoch den Zugriff auf den lokalen Speicher. Das ist notwendig, damit die OneDrive-Synchronisation klappt. Leider kann es dann dazu kommen, dass der öffentliche Ordner durch die Benutzer zugemüllt wird.

<!--more-->

Die Lösung ist ein PowerShell-Skript, welches die entsprechenden Ordner des öffentlichen Benutzers löscht. Netter Nebeneffekt: Lästige Desktop-Shortcuts werden mitentfernt und müssen somit nicht [vorab im Installer entfernt werden](../msi-transforms), da viele von ihnen in `C:\Users\Public\Desktop` abgespeichert sind.

```poweshell
$folders = @("Pictures", "Documents", "Downloads", "Music", "Videos", "Desktop")
$publicPath = "C:\Users\Public"

foreach($folder in $folders) {
    $path = Join-Path -Path $publicPath -ChildPath $folder
    Remove-Item -Path ($path+"\*") -Force
}
```