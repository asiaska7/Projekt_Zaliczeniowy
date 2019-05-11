var numSquares = 6;
var colors = generate(numSquares);
var picked = pickColor();
var title = document.getElementById("colDisp");
title.textContent = picked;
var squares = document.querySelectorAll(".square");
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares=3;
    colors = generate(numSquares);
    picked = pickColor();
    title.textContent = picked;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        } else {
            squares[i].style.display="none";
        }
    }

});

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares=6;
    colors = generate(numSquares);
    picked = pickColor();
    title.textContent = picked;
    result.textContent = "";
    for(var i=0; i<squares.length; i++){
        
            squares[i].style.background=colors[i];
        
            squares[i].style.display="block";
        
    }
});

newGame.addEventListener("click", function(){
    colors = generate(numSquares);
    picked = pickColor();
    title.textContent = picked;
    result.textContent = "";
    h1.style.backgroundColor = "#232323";
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === picked){
            result.textContent = "Correct!"
            winColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play again?"
        }else{
            this.style.backgroundColor = "#232323";
            result.textContent = "Try Again!"
        }
    });
}

function winColor(color){
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color; 
    }    
};

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generate(num){
    var arr = []
    for(i=0; i<num; i++){
       arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}