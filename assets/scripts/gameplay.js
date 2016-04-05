'use strict';

let originalBoard = [0,1,2,3,4,5,6,7,8];


let winningCombos =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


let turns=1;


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
    document.getElementById(boxId).value="O";
    turnCount();
    console.log("Go Player X");
 } else {
    document.getElementById(boxId).value="X";
    turnCount();
    console.log("Go Player O");
  }
};




const checkWin = function(){

};

module.exports=true;
