'use strict';

let originalBoard = [0,1,2,3,4,5,6,7,8];


let winningCombos =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let squareUsed = [];

let playerXChoice;
let playerOChoice;
let turns=1;
let whoPlay;

let playerX;
let playerO;

const getPlayer = function() {
  if(playerTurn%2===0){
    playerO;
  } else {
    playerX;
  }
};

const displayPlayer = function(){
  if(getPlayer()==="playerO") {
    console.log("Go Player O");
  } else {
  	console.log("Go Player X");
  }
};

displayPlayer();

const turnCount = function(){
  turn++;
};

const boxClicked = function(boxId){
  if(getPlayer===playerO){
  document.getElementById(boxId).value="O";
} else {
  document.getElementById(boxId).value="X";
};


const checkWin = function();
