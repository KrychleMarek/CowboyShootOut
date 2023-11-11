<html>
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <script
  src="https://code.jquery.com/jquery-3.7.1.js"
  integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
  crossorigin="anonymous"></script>
    <script src="script.js"></script>
    </head>
    <body onload="onLoad()" onload="main()" >
        <header><h1>Cowboy duel</h1></header>
    <div id="flex">
        <div id="GameControl">
            <h2>Nastavení</h2>
            <button id="start" type="button" onclick="popisky(), obstacles()" >START</button>
        </div>
        <div id="GameSpace">
            <div id="obst1"></div>
            <div id="obst2"></div>
            <div id="obst3"></div>
            <div id="obst4"></div>
            <div id="obst5"></div>
            <div id="p1"></div>
            <div id="p2"></div>
            <p id="pop1"> Player 1</p>
            <p id="pop2"> Player 2</p>
        </div>
        <script>//input
        //var preMoveX;
        //var preMoveY;
        //var preMove = true;
        {
    var player1 = document.getElementById("p1");
    var Keys = {
    up: false,
    down: false,
    left: false,
    right: false
    };
 window.onkeydown = function(e){
       /* if(preMove){
            preMoveX = player1.style.left;
            preMoveY = player1.style.top;
            preMove = false;
        }*/
        var kc = e.keyCode;
         e.preventDefault();
    
         if(kc === 37) Keys.left = true;
         if(kc === 38) Keys.up = true;
         if(kc === 39) Keys.right = true;
         if(kc === 40) Keys.down = true;
     };
     window.onkeyup = function(e){
        preMove = true;  
         var kc = e.keyCode;
         e.preventDefault();
    
         if(kc === 37) Keys.left = false;
         if(kc === 38) Keys.up = false;
         if(kc === 39) Keys.right = false;
         if(kc === 40) Keys.down = false;
    };
    function main(){
        move();
    }
 function move(){
    preMoveX=x1;
    preMoveY=y1;
    if(Keys.up){
        movementUp();
    }
    
    if(Keys.down){
        movementDown();
    }
    
    if(Keys.left) {
        movementLeft();
    }
    
    if(Keys.right){
        movementRight();
    }

    if(Keys.up&&Keys.right||Keys.up&&Keys.left||Keys.down&&Keys.right||Keys.down&&Keys.left){
        diagMovement();
    }
}
setInterval(function(){
    
    move();collision();
}, 25);}
        </script>

        <script>//Obstacles
            var Obst1 = {
                x1: $('#obst1').position().left,//levá
                x2: $('#obst1').position().left+$("#obst1").width(), //pravá
                y1: $('#obst1').position().top,//horní
                y2: $('#obst1').position().top+$("#obst1").height() //spodní
            };
            var Obst2 = {
                x1: $('#obst2').position().left,
                x2: $('#obst2').position().left+$("#obst2").width(),
                y1: $('#obst2').position().top,
                y2: $('#obst2').position().top+$("#obst2").height()
            };
            var Obst3 = {
                x1: $('#obst3').position().left,
                x2: $('#obst3').position().left+$("#obst3").width(),
                y1: $('#obst3').position().top,
                y2: $('#obst3').position().top+$("#obst3").height()
            };
            var Obst4 = {
                x1: $('#obst4').position().left,
                x2: $('#obst4').position().left+$("#obst4").width(),
                y1: $('#obst4').position().top,
                y2: $('#obst4').position().top+$("#obst4").height()
            };
            var Obst5 = {
                x1: $('#obst5').position().left,
                x2: $('#obst5').position().left+$("#obst5").width(),
                y1: $('#obst5').position().top,
                y2: $('#obst5').position().top+$("#obst5").height()
            };
            var Obst = [];
            Obst.push(Obst1, Obst2, Obst3, Obst4, Obst5);
            console.log(Obst1);
            console.log(Obst2);
            console.log(Obst3);
            console.log(Obst4);
            console.log(Obst5);
        </script>
    </div>
    </body>
    <footer>
        <p>2023 &#169 Marek Stejskal</p>
    </footer>
    
</html>


