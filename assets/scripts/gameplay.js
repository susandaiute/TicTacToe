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

const turnCount = function(){
  turns++;
};

const getPlayer = function() {
  if(turns%2===0){
    return "playerO";
  } else {
    return "playerX";
  }
};

const boxClicked = function(){
  if(getPlayer()==="playerO") {
    console.log("Go Player O");
    document.getElementById(boxId).value="O";
 } else {
  	console.log("Go Player X");
    document.getElementById(boxId).value="X";
  }
};




const checkWin = function(){

};
