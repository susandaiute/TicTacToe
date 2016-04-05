'use strict';

let originalBoard = [0,1,2,3,4,5,6,7,8];


let winningCombos =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let squareUsed = [];

let playerXChoice;
let playerOChoice;
let playerTurn=1;
let whoPlay;

let playerX;
let playerY;

const getPlayer = function() {
  if(playerTurn%2===0){
    playerY;
  } else {
    playerX;
  }
};



const boxClicked = function(boxId){
  document.getElementById(boxId).text == "X";
};







const checkWin = function(){};




module.exports=true;
