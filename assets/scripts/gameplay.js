'use strict';

let originalBoard = [0,1,2,3,4,5,6,7,8];


let winningCombos =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


let turns=0;
let taken;

const getPlayer = function() {
 if(turns%2===0) {
   return "playerO";
  } else {
   return "playerX";
  }
};

const boxClicked = function(boxId) {
  $('.gametile#' + boxId).html('O');
  if(getPlayer()==="playerO") {
    $('.gametile#' + boxId).html('O');
    turns++;
    alert("Go Player X");
 } else if(getPlayer()==="playerX") {
    $('.gametile#' + boxId).html('X');
    turns++;
    alert("Go Player O");
  } else {alert("Cell Unavailable");
 }
};


$('.gametile').on('click', function (){
  let boxId = $(this).attr('id');
  boxClicked(boxId);
});










//const checkWin = function(){};

module.exports=true;
