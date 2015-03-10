/*
* Circlepoint v1.0.2
* jQuery Plugin for interactive point circles
* https://github.com/xmatox/jquery-circlepoint
*
* Copyright (c) 2015 Thomas Abadie
* Released under the MIT license
*/
(function( $ ) {
    // default settings:
    var circlepoint_input = "circlepoint_input_"+Math.floor((Math.random() * 10000000) + 1)
    var defaults = {
        nbPoint: 16,                        // nombre de points
        totalSize: 60,                      // largueur (px)
        input: circlepoint_input,           // input id, false pour le désactiver
        input_value: 0,                     // input id, false pour le désactiver
        input_fontSize: 15,                 // input id, false pour le désactiver
        sizePointSup: 10,                   // taille des points principaux (px)
        sizePointInf: 6,                    // taille des points secondaux (px)
        sizePoint: 4,                       // taille des autres points (px)
        typePoint: "rond",                  // type de points (rond / carre)
        bgdColorSup: "#333",                // couleur des points principaux
        bgdColorInf: "#666",                // couleur des points secondaux
        bgdColor: "#999",                   // couleur des autres points
        bgdColorHover: "#FFCC00",           // couleur des points au survol
        changeAction: null                  // change event
    };
    jQuery.fn.circlepoint = function( options ) {
        options = $.extend({}, defaults, options);
        return this.each(function() {

            var elem = $( this );
            elem.css("position","relative");
            var totalSize = options.totalSize;
            elem.css("height",totalSize);
            elem.css("width",totalSize);
            var size = (totalSize-options.sizePointSup)/2;
            if(options.input){
                var new_input = "<input id='"+options.input+"' value='"+options.input_value+"'>";
                var this_input = $(new_input).appendTo(elem);
                var input_size = (totalSize-(options.sizePointSup*2));
                var input_fontSize = options.input_fontSize;
                var input_height = input_fontSize+2;
                var input_posX = options.sizePointSup;
                var input_posY = (totalSize/2)-(input_height/2);
                this_input.css("position","absolute");
                this_input.css("border",0);
                this_input.css("margin",0);
                this_input.css("padding",0);
                this_input.css("text-align","center");
                this_input.css("font-weight","bold");
                this_input.css("vertical-align","middle");
                this_input.css("background","none");
                this_input.css("font-size",input_fontSize+"px");
                this_input.css("width", input_size+"px");
                this_input.css("height", input_height+"px");
                this_input.css("left", input_posX+"px");
                this_input.css("top", input_posY+"px");
                this_input.on( "changeAction", options.changeAction);
                this_input.change(function(){
                    this_input.trigger("changeAction");
                });
            }
            var nbPoint = options.nbPoint;
            var stepPoint = nbPoint/4;
            var stepPoint2 = nbPoint/8;
            points=getCirclePoints(size,size,size,nbPoint);
            $.each(points,function(i,p){
                var bgdColor = options.bgdColor;
                var bgdColorHover = options.bgdColorHover;
                var sizePoint = options.sizePoint;
                var this_size = options.sizePoint;
                if((i%stepPoint) == 0){
                    bgdColor = options.bgdColorSup;
                    sizePoint = options.sizePointSup;
                    this_size = options.sizePointSup;
                }else if((i%stepPoint2) == 0){
                    bgdColor = options.bgdColorInf;
                    sizePoint = options.sizePointInf;
                    this_size = options.sizePointInf;
                }
                var random_id = Math.floor((Math.random() * 10000000) + 1);
                var newPoint = "<div id='jcp__point_"+random_id+"'></div>";
                var this_x = options.sizePointSup/2+p.x-this_size/2;
                var this_y = options.sizePointSup/2+p.y-this_size/2;
                var this_angle = p.angle-180;
                if(this_angle == -180) this_angle = 180;
                this_angle = Math.round(this_angle*100)/100;
                var this_point = $(newPoint).appendTo(elem);
                this_point.css('top',this_x+'px').css('left',this_y+'px');
                this_point.css("position","absolute");
                if(options.typePoint == "rond") this_point.css("border-radius","50%");
                this_point.css("background-color",bgdColor);
                this_point.css("height", sizePoint+"px");
                this_point.css("width", sizePoint+"px");
                this_point.css("cursor", "pointer");
                this_point.attr("data-angle", this_angle);
                this_point.hover(function(){
                    this_point.css("background-color",bgdColorHover);
                }, function() {
                    this_point.css("background-color",bgdColor);
                });
                this_point.click(function(){
                    var click_angle = $(this).attr("data-angle");
                    if(options.input){
                        $("#"+options.input).val(click_angle);
                        $("#"+options.input).trigger("changeAction");
                    }
                });
            });
        });
    };
    function getCirclePoints(centerX,centerY,radius,segments){
        var totalPoints=new Array();
        for(var i=0;i<segments;i++){
            var angle_radian = i*2*Math.PI/segments;
            var angle_degree = angle_radian * 180 / Math.PI;
            x=centerX+radius*Math.sin(angle_radian);
            y=centerY+radius*Math.cos(angle_radian);
            totalPoints.push({'x':x,'y':y,'angle':angle_degree});
        }
        return totalPoints;
    };
})( jQuery );