//define color button
var color0 = document.querySelectorAll("button")[0];
var color1 = document.querySelectorAll("button")[1];
var color2 = document.querySelectorAll("button")[2];
var color3 = document.querySelectorAll("button")[3];
var color4 = document.querySelectorAll("button")[4];
var color5 = document.querySelectorAll("button")[5];

//define top backfround
var titlebg = document.querySelector("div");

//define Newcolors
var newColors  = document.querySelectorAll("a")[0];
//define answer remind
var ansRespand = document.querySelectorAll("a")[1];
//define easy & hard
var easy = document.querySelectorAll("a")[2];
var hard = document.querySelectorAll("a")[3];
var level1 = 0;
var level2 = 1;
var colorEasy = 3;
var colorHard = 6;
//default game level is hard
var gameLevel = colorHard;

//define title RGB
var textRed   = document.querySelectorAll("span")[0];
var textGreen = document.querySelectorAll("span")[1];
var textBlue  = document.querySelectorAll("span")[2];

//global value
var ansRedValue = 0;
var ansGreenValue = 0;
var ansBlueValue = 0;
var colorAns = 0;
var endGame = false;

function getRandomColor(){
    var Num = Math.round(Math.random() * 255);
    return Num;
}

function setNewColors(){
    var ansNum = Math.round(Math.random() * (gameLevel-1));
    var color = 0;
    var redValue = 0;
    var greenValue = 0;
    var blueValue = 0;
    var buttonNum = gameLevel;
    ansRespand.style.display = "none";
    titlebg.setAttribute("style", "background-color: rgba(0, 68, 255, 0.692)");
    newColors.textContent = "NEW COLORS";
    for (var i = 0; i < buttonNum;i++){
        redValue = getRandomColor();
        greenValue = getRandomColor();
        blueValue = getRandomColor();
        if(i == ansNum){
            colorAns = i;
            textRed.textContent = redValue;
            textGreen.textContent = greenValue;
            textBlue.textContent = blueValue;
            ansRedValue = redValue;
            ansGreenValue = greenValue;
            ansBlueValue = blueValue;
            console.log(redValue + ", " + greenValue + ", " + blueValue);
        }
        color = "background-color:rgb("+ redValue + ", " + greenValue + ", " + blueValue + ")";
        document.querySelectorAll("button")[i].setAttribute("style",color); 
        document.querySelectorAll("button")[i].disabled = false;    
    }
    endGame = false;
}

function setButtonBgColor(){
    var color = 0;
    var buttonNum = gameLevel;
    color = "background-color:rgb(" + ansRedValue + ", " + ansGreenValue + ", " + ansBlueValue + ")";
    titlebg.setAttribute("style", color);
    for (var i = 0; i < buttonNum; i++) {
        document.querySelectorAll("button")[i].setAttribute("style", color);
        document.querySelectorAll("button")[i].disabled = false;
    }
    
}

function setGameLevel (level) {
    if(level == level1){
        gameLevel = colorEasy;
        easy.classList.add("gamelevelbg");
        hard.classList.remove("gamelevelbg");
        document.querySelectorAll("div")[5].setAttribute("style", "display: none;");
        setNewColors();
    }else{
        gameLevel = colorHard;
        hard.classList.add("gamelevelbg");
        easy.classList.remove("gamelevelbg");
        document.querySelectorAll("div")[5].setAttribute("style", " ");
        setNewColors();
    }

}

function checkAnswer(ans){
    if(endGame != true){
        if (ans == colorAns) {
            ansRespand.textContent = "Currect!";
            ansRespand.style.display = "list-item";
            newColors.textContent = "Play Again?";
            endGame = true;
            setButtonBgColor();
        } else {
            ansRespand.textContent = "Try Again!";
            ansRespand.style.display = "list-item";
            document.querySelectorAll("button")[ans].setAttribute("style", "background-color:black" );
            document.querySelectorAll("button")[ans].disabled = true;
        }
    }
}

newColors.addEventListener("click", function () { setNewColors(); });
color0.addEventListener("click", function () { checkAnswer(0); });
color1.addEventListener("click", function () { checkAnswer(1); });
color2.addEventListener("click", function () { checkAnswer(2); });
color3.addEventListener("click", function () { checkAnswer(3); });
color4.addEventListener("click", function () { checkAnswer(4); });
color5.addEventListener("click", function () { checkAnswer(5); });
easy.addEventListener("click", function () { setGameLevel(0); });
hard.addEventListener("click", function () { setGameLevel(1); });