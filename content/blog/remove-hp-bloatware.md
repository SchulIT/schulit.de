---
title: "HP Bloatware entfernen"
date: 2021-04-17T14:00:00
author: "Marcel Marnitz"
type: post
archive: "2020/04"
tags: [ "windows", "hp", "mdm", "intune" ]
---

Unsere neuen Leihgeräte für Schülerinnen und Schüler sind Geräte von HP. Diese beinhalten jedoch
einige HP Software, die weder die Schule noch unsere Schülerinnen und Schüler benötigen. Einige
Software ist zusätzlich sehr aufdringlich. Da wir die Laptops nicht händisch sauber neuinstallieren wollen, soll die Software über Intune entfernt werden.

<!--more-->

# Idee

Die Software wird mittels eines PowerShell-Skriptes deinstalliert. Dazu müssen jedoch zwei Skripte verwendet werden:

* `Remove-Bloatware.ps1` entfernt jene HP Software, die als MSI vorliegt. Hinzu entfernt die Software alle von HP vorinstallierten Apps (provisioned apps), die bei der Anmeldung eines neuen Benutzers für diesen installiert werden.
* `Remove-BloatwareForCurrentUser.ps1` entfernt die vorinstallierten Apps für den aktuellen Benutzer. Die Unterscheidung ist notwendig, da dieses Skript im Benutzerkontext laufen muss.

# Ermitteln der App-IDs

Die Deinstallation der MSI-Anwendungen ist unproblematisch, da diese mithilfe ihres Namens deinstalliert werden können.

Bei den Windows Apps hingegen müssen die App IDs herausgefunden werden. Dazu ist das Cmdlet `Get-AppxPackage` hilfreich:

```powershell
PS> Get-AppxPackage | Select -Property PackageFullName

PackageFullName
---------------
windows.immersivecontrolpanel_10.0.2.1000_neutral_neutral_cw5n1h2txyewy
Microsoft.UI.Xaml.2.0_2.1810.18004.0_x64__8wekyb3d8bbwe
Microsoft.Wallet_2.4.18324.0_x64__8wekyb3d8bbwe
...
```

Hier wählt man nun alles aus, was man entfernen möchte. Einige Apps haben wir auf dem Gerät belassen, da diese vielleicht später einmal praktisch sein könnten (bspw. die App zur Steuerung einer LED auf der Außenseite des Bildschirms).

**Wichtig:** Anschließend ist das Start-Layout ziemlich chaotisch. Es bietet sich daher an, ein vorgefertiges Start-Layout zu verteilen.

# Skripte

Remove-Bloatware.ps1

{{< callout type="warning" title="Wichtig">}}
    Bei der Einrichtung des Skriptes in Intune muss die Option "Dieses Skript mit den Anmeldeinformationen des angemeldeten Benutzers ausführen" auf <strong>Nein</strong>  gesetzt werden.
{{< /callout >}}

```powershell
$provisioned = @(
    'AD2F1837.bulbDigitalPortfolioforHPSchoolPack_1.1.4.0_neutral_~_v10z8vjag6ke6',
    'AD2F1837.HPClassroomManager_1.0.32.0_x64__v10z8vjag6ke6',
    'AD2F1837.HPEasyClean_2020.1217.1232.0_neutral_~_v10z8vjag6ke6',
    'AD2F1837.HPPCHardwareDiagnosticsWindows_1.6.8.0_x64__v10z8vjag6ke6',
    'AD2F1837.HPPowerManager_2020.507.1541.0_neutral_~_v10z8vjag6ke6',
    'AD2F1837.HPPrimeGraphingCalculator_2.1.14527.0_neutral_~_v10z8vjag6ke6',
    'AD2F1837.HPPrivacySettings_1.0.42.0_neutral_~_v10z8vjag6ke6',
    'AD2F1837.HPSupportAssistant_9.7.276.0_neutral_~_v10z8vjag6ke6',
    'AD2F1837.myHP_1.3.60205.0_neutral_~_v10z8vjag6ke6',
    'C45DFB17.FluidMathforHPSchoolPack_1.1.217.0_neutral_~_h1wbrfpbf1axt',
    'Kortext.Kortext_1.4.86.0_neutral_~_htp4jyd3mpprc',
    'Microsoft.MicrosoftOfficeHub_18.2008.12711.0_neutral_~_8wekyb3d8bbwe'
)

$msi = @(
    'HP Notifications',
    'HP Client Security Manager'
)

# Step 1: REMOVE MSI
foreach($name in $msi) {
    $app = Get-WmiObject -Class Win32_Product -Filter "Name='$name'"

    if($app -ne $null) {
        $app.Uninstall()
    }
}

# Step 2: REMOVE PROVISIONED APPS
$provisionedApps = Get-AppxProvisionedPackage -Online
foreach($name in $provisioned) {
    $app = $provisionedApps | Where-Object { $_.PackageName -eq $name }

    if($app -ne $null) {
        Remove-AppProvisionedPackage -Online -PackageName $name -ErrorAction Continue
    }
}
```

Remove-BloatwareForCurrentUser.ps1:

{{< callout type="warning" title="Wichtig">}}
    Bei der Einrichtung des Skriptes in Intune muss die Option "Dieses Skript mit den Anmeldeinformationen des angemeldeten Benutzers ausführen" auf <strong>Ja</strong> gesetzt werden.
{{< /callout >}}

```powershell
$apps = @(
    'Kortext.Kortext_1.4.86.0_x86__htp4jyd3mpprc',
    'AD2F1837.HPPrimeGraphingCalculator_2.1.14527.0_x64__v10z8vjag6ke6',
    'AD2F1837.HPClassroomManager_1.0.32.0_x64__v10z8vjag6ke6',
    'AD2F1837.bulbDigitalPortfolioforHPSchoolPack_1.1.4.0_neutral__v10z8vjag6ke6',
    'AD2F1837.HPSupportAssistant_9.7.276.0_x64__v10z8vjag6ke6',
    'AD2F1837.HPPrivacySettings_1.0.42.0_x64__v10z8vjag6ke6',
    'C45DFB17.FluidMathforHPSchoolPack_1.1.217.0_x64__h1wbrfpbf1axt',
    'AD2F1837.HPEasyClean_2.1.10.0_x64__v10z8vjag6ke6',
    'AD2F1837.myHP_1.3.60205.0_x64__v10z8vjag6ke6',
    'Microsoft.MicrosoftOfficeHub_18.2008.12711.0_x64__8wekyb3d8bbwe'
)

foreach($name in $apps) {
    Remove-AppxPackage -Package $name -ErrorAction Continue
}
```
