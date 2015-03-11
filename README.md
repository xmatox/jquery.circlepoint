# jquery.circlepoint v1.0.2
jQuery Plugin for interactive point circles

### Demo
An exemple on the [demo page](http://circlepoint.thomas-abadie.net/demo.html "Demo")

### Usage
First, include the jQuery and circlepoint javascript files.

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.circlepoint.min.js" type="text/javascript"></script>
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
    $(".circlepoint_options").circlepoint({
        nbPoint: 8,                             // points / nombre de points
        totalSize: 50,                          // width / largueur (px)
        input: false,                           // input id : false for hide it / false pour le désactiver
        input_value: 0,                         // input value
        input_fontSize: 15,                     // input font size
        sizePointSup: 10,                       // size of the main points / taille des points principaux (px)
        sizePointInf: 5,                        // size of secondary points / taille des points secondaires (px)
        sizePoint: 3,                           // size of the other points / taille des autres points (px)
        typePoint: "rond",                      // type of dots / type de points (rond / carre)
        bgdColorSup: "#123456",                 // color of the main points / couleur des points principaux
        bgdColorInf: "#987645",                 // color secondary points / couleur des points secondaires
        bgdColor: "#741852",                    // color of the other points / couleur des autres points
        bgdColorHover: "#FFCC00",               // color of points on mouse hover / couleur des points au survol
        changeAction: null                      // change event
    });
});
```
or with options and change event

```html
$(function($) {
    $(".circlepoint_options_event").circlepoint({
        nbPoint: 32,                             // points / nombre de points
        totalSize: 200,                          // width / largueur (px)
        input: "circlepoint_input",              // input id : false for hide it / false pour le désactiver
        input_value: 0,                          // input value
        input_fontSize: 20,                      // input font size
        sizePointSup: 20,                        // size of the main points / taille des points principaux (px)
        sizePointInf: 10,                        // size of secondary points / taille des points secondaires (px)
        sizePoint: 5,                            // size of the other points / taille des autres points (px)
        typePoint: "rond",                       // type of dots / type de points (rond / carre)
        bgdColorSup: "#0884FF",                  // color of the main points / couleur des points principaux
        bgdColorInf: "#EC151D",                  // color secondary points / couleur des points secondaires
        bgdColor: "#219D19",                     // color of the other points / couleur des autres points
        bgdColorHover: "#FFCC00",                // color of points on mouse hover / couleur des points au survol
        changeAction: function () {              // change event
            $(".circlepoint_options_event__text").html("You choose : "+$( this ).val()+" degrees");
        }
    });
});
```


