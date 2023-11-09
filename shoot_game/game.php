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
    <body onload="onLoad()">
        <header><h1>Cowboy duel</h1></header>
    <div id="flex">
        <div id="GameControl">
            <h2>Nastavení</h2>
            <button id="start" type="button" onclick="popisky();" >START</button>
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
        <script>
document.onkeydown = press;
function press(e){
    e=e || window.event;
    if(e.keyCode == '39'){
        movementRight();
    }
    else if(e.keyCode == '37'){
        movementLeft();
    }
    else if(e.keyCode == '38'){
        movementUp();
    }else if(e.keyCode = '40'){
        movementDown();
    }
}

</script>
    </div>
    </body>
    <footer>
        <p>2023 &#169 Marek Stejskal</p>
    </footer>
    
</html>


<?php 



?>