function sides(literals, ...expressions) {
    var area=expressions[0];
    var perimeter=expressions[1];
    var s1=(perimeter+Math.sqrt(perimeter*perimeter-16*area))/4;
    var s2=(perimeter-Math.sqrt(perimeter*perimeter-16*area))/4;
    var arr=[s1,s2];
    return arr.sort();
}