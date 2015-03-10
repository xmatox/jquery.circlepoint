# jquery.circlepoint v1.0.1
jQuery Plugin for interactive point circles

### Usage
First, include the jQuery and circlepoint javascript files.

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.circlepoint.js" type="text/javascript"></script>
```
Next, call the classic function

```html
$(function($) {
    $(".circlepoint").circlepoint();
});
```
or with options

```html
$(function($) {
    $(".circlepoint").circlepoint({
        nbPoint: 16,               // points / nombre de points
        nbSize: 50,                // width / largueur (px)
        sizePointSup: 10,          // size of the main points / taille des points principaux (px)
        sizePointInf: 5,           // size of secondary points / taille des points secondaires (px)
        sizePoint: 3,              // size of the other points / taille des autres points (px)
        typePoint: "rond",         // type of dots / type de points (rond / carre)
        bgdColorSup: "#123456",    // color of the main points / couleur des points principaux
        bgdColorInf: "#987645",    // color secondary points / couleur des points secondaires
        bgdColor: "#741852"        // color of the other points / couleur des autres points
    });
});
```
