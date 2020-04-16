# Prüfungsvorbereitung

Erstellen Sie eine Webseite mit den folgenden Eigenschaften.

## Teil 1: HTML

Erstellen Sie ein HTML Dokument mit den folgenden Elementen. Verwenden Sie, wo möglich, semantisch sinnvolle HTML-Elemente.

1. Der Titel der Webseite lautet "Prüfungsvorbereitung".
2. Die Webseite wird auf Mobilgeräten beim ersten Aufruf ohne Zoom geladen.
3. Die Webseite hat einen Kopfbereich mit einer Überschrift, die "Prüfungsvorbereitung" lautet.
4. Die Webseite hat einen Hauptbereich.
	1. Darin ist eine geordnete Liste mit drei Listenelementen. Die Listenelemente haben die IDs "question-1", "question-2" bzw. "question-3". Jedes Listenelement hat die Klasse "question".
	2. Ebenfalls im Hauptbereich ist ein div-Element mit der ID "part-3".
5. Die Webseite hat einen Fußbereich. Darin ist das heutige Datum und Ihr Name.

Beantworten Sie die folgenden Fragen indem Sie die Frage und Antwort in den Listenelementen mit der ensprechenden ID schreiben:

Frage 1 (question-1): Welche zwei Möglichkeiten eines AJAX-Calls ohne Bilbiotheken haben wir gelernt?
Frage 2 (question-2): Was ist der Unterschied zwischen Local und Session Storage?
Frage 3 (question-3): Welchen Vorteil bieten Responsive Images für Mobilgeräte?

## Teil 2: CSS

Fügen Sie ein Stylesheet hinzu mit dem folgenden Styling:

1. Der Hauptbereich der Seite hat die Hintergrundfarbe aquamarine.
2. Die Klasse question hat einen schwarzen Rahmen mit einer Strichstärke von 2 Pixel.
3. Das Element mit der ID "question-1" hat einen oberen äußeren Abstand von der doppelten Schriftgröße des Root-Elements

## Teil 3: JavaScript

Erzeugen Sie die Ausgabe von Teil 3 innerhalb vom Element mit der ID "part-3".
Holen Sie per AJAX den Inhalt der Datei 2021.json. Darin enthalten ist eine Liste von Feiertagen im Jahr 2021. Stellen Sie die Feiertage in einer ungeordneten Liste dar. Jeder Feiertag soll in der Form DATE: DESCRIPTION dargestellt werden. Verwenden Sie dazu die Eigenschaften date bzw description aus den Daten.

Die Daten sehen beispielhaft so aus:

```json
[
	{"date": "2021-05-01", "description": "Staatsfeiertag"},
	{"date": "2021-12-31", "description": "Silvester"}
]
```
