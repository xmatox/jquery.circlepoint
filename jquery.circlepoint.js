/*
* Circlepoint v0.1
* jQuery Plugin for interactive point circles
* https://github.com/xmatox/jquery-circlepoint
*
* Copyright (c) 2015 Thomas Abadie
* Released under the MIT license
*/
(function( $ ) {
    jQuery.fn.circlepoint = function( options ) {
        // default settings:
        var defaults = {
            nbPoint: 16,                // nombre de points
            nbSize: 100,                // largueur (px)
            sizePointSup: 20,           // taille des points principaux (px)
            sizePointInf: 10,           // taille des points secondaux (px)
            sizePoint: 5,               // taille des autres points (px)
            typePoint: "rond",          // type de points (rond / carre)
            bgdColorSup: "#333",        // couleur des points principaux
            bgdColorInf: "#666",        // couleur des points secondaux
            bgdColor: "#999"            // couleur des autres points
        };
        var o = $.extend( {}, defaults, options );
        return this.each(function() {
            var elem = $( this );
            elem.css("position","relative");
            var size = o.nbSize/2;
            var nbPoint = o.nbPoint;
            var stepPoint = nbPoint/4;
            var stepPoint2 = nbPoint/8;
            points=getCirclePoints(size,size,size,nbPoint);
            $.each(points,function(i,p){
                var sup_class = "";
                var this_size = o.sizePoint;
                if((i%stepPoint) == 0){
                    sup_class = 'jcp__point__sup';
                    this_size = o.sizePointSup;
                }else if((i%stepPoint2) == 0){
                    sup_class = 'jcp__point__inf';
                    this_size = o.sizePointInf;
                }
                var newPoint = "<div class='jcp__point "+sup_class+"'></div>";
                var this_x = p.x-this_size/2;
                var this_y = p.y-this_size/2;
                $(newPoint).appendTo(elem).css('top',this_x+'px').css('left',this_y+'px');
            });
            $(".jcp__point").css("position","absolute");
            if(o.typePoint == "rond") $(".jcp__point").css("border-radius","50%");
            $(".jcp__point").css("background-color",o.bgdColor);
            $(".jcp__point").css("height", o.sizePoint+"px");
            $(".jcp__point").css("width", o.sizePoint+"px");
            $(".jcp__point__inf").css("background-color",o.bgdColorInf);
            $(".jcp__point__inf").css("height",o.sizePointInf);
            $(".jcp__point__inf").css("width",o.sizePointInf);
            $(".jcp__point__sup").css("background-color",o.bgdColorSup);
            $(".jcp__point__sup").css("height",o.sizePointSup);
            $(".jcp__point__sup").css("width",o.sizePointSup);
        });
    };
    function getCirclePoints(centerX,centerY,radius,segments){
        var totalPoints=new Array();
        for(var i=0;i<segments;i++){
            x=centerX+radius*Math.sin(i*2*Math.PI/segments);
            y=centerY+radius*Math.cos(i*2*Math.PI/segments);
            totalPoints.push({'x':x,'y':y});
        }
        return totalPoints;
    };
})( jQuery );