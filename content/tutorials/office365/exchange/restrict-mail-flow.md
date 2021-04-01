---
title: E-Mail Verkehr einschränken
type: static
---

Es kann sinnvoll sein, den E-Mail-Verkehr von Schülerinnen und Schülern einzuschränken. Beispielsweise um zu verhindern, dass

* Schülerinnen und Schüler keine E-Mails an Personen außerhalb der Organisation (Schule) senden dürfen
* Schülerinnen und Schüler keine E-Mails von Personen außerhalb der Organisation (Schule) empfangen dürfen

<!--more-->

Um den Nachrichtenfluss zu steuern, muss das Exchange Admin Center aufgesucht werden. Dort gibt es links den Punkt *Nachrichtenfluss*. Dort lassen sich entsprechend Regeln erstellen.

# Voraussetzung

Um die Regeln sauber einzelnen Benutzergruppen zuordnen zu können, sollte eine Gruppe existieren, welche alle Schülerinnen und Schüler enthält.

# E-Mail-Versand einschränken

Über das +-Icon erstellt man eine neue Regel:

{{< img src="/images/office365/exchange/restrict-mail-flow/new-rule.png" >}}

Die konfiguriert man wie folgt:

{{< img src="/images/office365/exchange/restrict-mail-flow/restrict-egress.png" >}}

Wie im Beispiel sichtbar, lassen sich auch Ausnahmen definieren. 

# E-Mail-Empfang einschränken

Über das +-Icon erstellt man eine neue Regel:

{{< img src="/images/office365/exchange/restrict-mail-flow/new-rule.png" >}}

Die konfiguriert man wie folgt:

{{< img src="/images/office365/exchange/restrict-mail-flow/restrict-ingress.png" >}}

Wie im Beispiel sichtbar, lassen sich auch Ausnahmen definieren. 

{{< callout type="warning" title="E-Mail-Weiterleitungen" >}}
    Hat eine Person (bspw. eine Lehrkraft) eine E-Mail-Weiterleitung eingerichtet, so wird das Weiterleitungsziel (also die Ziel-E-Mail-Adresse) bei diesen Regeln berücksichtigt. E-Mails an Postfächer mit einer Weiterleitung werden dann abgelehnt (es sei denn, es wurde eine Ausnahme eingepflegt).
{{< /callout >}}