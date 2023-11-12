var y1, x1, y2, x2;
var v, h;
var preMoveX, preMoveY;
var speed=5;
var sLine;
function onLoad(){
    y1 = $("#p1").css("top");
    x1 = $("#p1").css("left");
    y2 = $("#p2").css("top");
    x2 = $("#p2").css("left");
    y1 = Number(y1.substring(0,y1.length-2));
    x1 = Number(x1.substring(0,x1.length-2));
    y2 = Number(y2.substring(0,y2.length-2));
    x2 = Number(x2.substring(0,x2.length-2));
    h=$("#p1").css("height");
    h=Number(h.substring(0,h.length-2));
    v=$("#p1").css("width");
    v=Number(v.substring(0,v.length-2));
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


{//PLAYER1


function movementRight(){
    if(x1<1370&&Object.values(Keys).reduce((a, item) => a + item, 0)==1){
    var player1 = document.getElementById("p1");
    $(player1).stop().animate({"left":(x1=x1+speed)},20);
    console.log("Pravá");
    movementRight.called=true;
    return false;}
        else return false;
}

function movementLeft(){
    if(x1>10&&Object.values(Keys).reduce((a, item) => a + item, 0)==1){
    var player1 = document.getElementById("p1");
    $(player1).stop().animate({"left":(x1=x1-speed)},20);
    console.log("Levá");
    movementLeft.called=true;
    return false;}
    else return false;
}
function movementUp(){
    if(y1>240&&Object.values(Keys).reduce((a, item) => a + item, 0)==1){
    var player1 = document.getElementById("p1");
    $(player1).stop().animate({"top":(y1=y1-speed)},20);
    console.log("Nahoru");
    movementUp.called = true;
    return false;}
    else return false;
}
function movementDown(){
    if(y1<730&&Object.values(Keys).reduce((a, item) => a + item, 0)==1){
    var player1 = document.getElementById("p1");
    $(player1).stop().animate({"top":(y1=y1+speed)},20);
    console.log("Dolů");
    movementDown.called=true;
    return false;}
    else return false;
}
function diagMovement(){
    var player1 = document.getElementById("p1");
    var norm=Math.sqrt(speed*speed*2)/2
    if(Keys.up && Keys.right && y1>240 && x1<1370){
        $(player1).stop().animate({"top":(y1=y1-norm),"left":(x1=x1+norm)},20);
    }else if(Keys.up && Keys.left && y1>240 && x1>10){
        $(player1).stop().animate({"top":(y1=y1-norm),"left":(x1=x1-norm)},20);
    }else if(Keys.down && Keys.right && y1<730 && x1<1370){
        $(player1).stop().animate({"top":(y1=y1+norm),"left":(x1=x1+norm)},20);
    }else if(Keys.down && Keys.left && y1<730 && x1>10){
        $(player1).stop().animate({"top":(y1=y1+norm),"left":(x1=x1-norm)},20);
    }
}

function crosshair(){
    sLine = document.getElementById("sLine");
if(movementRight.called){
    sLine.style.rotate = 0 + "deg";
    sLine.style.marginRight = x1+speed;
    sLine.style.left = x1+speed;
    sLine.style.top = y1+5;
    sLine.style.right = 0;
    sLine.style.width="auto";
    //$(sLine).stop().animate({"left":(x1+speed), "top":(y1+5)},20);
    movementRight.called=false;
}else if(movementLeft.called){
    sLine.style.rotate = 0 + "deg";
    sLine.style.marginRight = 1380-x1;
    sLine.style.left = 0;
    sLine.style.width="auto";
    sLine.style.top = y1+5;
   // $(sLine).stop().animate({"right":(x1+speed), "top":(y1+5)},20);
    movementLeft.called=false;
}else if(movementUp.called){
    sLine.style.rotate = 90 + "deg";
    //sLine.style.left = 0;
    sLine.style.marginRight=0;
    //sLine.style.marginTop=x1;
    //sLine.style.top=
   // sLine.style.right = 0;
   var ofset=230;
   sLine.style.left=(x1-1505+y1/2);
   sLine.style.width=(y1-235);
   sLine.style.top=ofset+(y1-ofset)/2;
    //$(sLine).stop().animate({"top":(ofset+(y1-ofset)/2)},20,);
    movementUp.called=false
}if(movementDown.called){
    sLine.style.rotate = 90 + "deg";
    //sLine.style.left = 0;
    sLine.style.marginRight=0;
    //sLine.style.marginTop=x1;
    //sLine.style.top=
   // sLine.style.right = 0;
   var ofset=748;
   sLine.style.left=(x1-1013-y1/2);
   sLine.style.width=(-y1+750);
   sLine.style.top=ofset+(y1-ofset)/2;
    //$(sLine).stop().animate({"top":(ofset+(y1-ofset)/2)},20,);
    movementDown.called=false
}
}

}

{//PLAYER2

}

{//OBSTACLES
function collision(){
    var player1 = document.getElementById("p1");
for(let i = 0; i<Obst.length; i++){
    if(Obst[i].x1<=x1&&Obst[i].x2>=x1&&Obst[i].y1<=y1&&Obst[i].y2>=y1||Obst[i].x1<=x1+v&&Obst[i].x2>=x1+v&&Obst[i].y1<=y1&&Obst[i].y2>=y1||Obst[i].x1<=x1&&Obst[i].x2>=x1&&Obst[i].y1<=y1+h&&Obst[i].y2>=y1+h||Obst[i].x1<=x1+v&&Obst[i].x2>=x1+v&&Obst[i].y1<=y1+h&&Obst[i].y2>=y1+h){
        $(player1).stop().animate({"top":(preMoveY),"left":(preMoveX)},0);
        x1=preMoveX;
        y1=preMoveY;
    }
  }
}
}

