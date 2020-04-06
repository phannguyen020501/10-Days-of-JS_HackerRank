function Polygon(gons){
   this.perimeter=function(){
        var perimeter=0;
        for(var gon of gons){
            perimeter+=gon;
        }
        return perimeter;
   }

