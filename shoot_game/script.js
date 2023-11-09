var y1, x1, y2, x2;
var boundY, boundX, position;

function onLoad(){
    y1 = $("#p1").css("top");
    x1 = $("#p1").css("left");
    y2 = $("#p2").css("top");
    x2 = $("#p2").css("left");
    y1 = Number(y1.substring(0,y1.length-2));
    x1 = Number(x1.substring(0,x1.length-2));
    y2 = Number(y2.substring(0,y2.length-2));
    x2 = Number(x2.substring(0,x2.length-2));

    position = $("#GameSpace").position();
    boundY = position.top;
    boundX = position.left;
    var obs1 = $("#obst1").css("top");
}



function popisky(){
    var pop1 = document.getElementById("pop1");
    var pop2 = document.getElementById("pop2");
    pop1.style.visibility = "visible";
    $(pop1).animate({"top":(y1-25)},0);
    $(pop1).animate({"left":(x1-10)},0);
    pop2.style.visibility = "visible";
    $(pop2).animate({"top":(y2-25)},0);
    $(pop2).animate({"left":(x2-10)},0);  
    
}


function movementRight(){
    if(x1<1380){
    var player1 = document.getElementById("p1");
    $(player1).stop().animate({"left":(x1=x1+15)},35);
    console.log("Pravá");
    return false;}
        else return false;
}

function movementLeft(){
    if(x1>0){
    var player1 = document.getElementById("p1");
    $(player1).stop().animate({"left":(x1=x1-15)},35);
    console.log("Levá");
    return false;}
    else return false;
}
function movementUp(){
    if(y1>240){
    var player1 = document.getElementById("p1");
    $(player1).stop().animate({"top":(y1=y1-15)},35);
    console.log("Nahoru");
    return false;}
    else return false;
}
function movementDown(){
    if(y1<735){
    var player1 = document.getElementById("p1");
    $(player1).stop().animate({"top":(y1=y1+15)},35);
    console.log("Dolů");
    return false;}
    else return false;
}
