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

$('.container').on('click', 'div', function (e) {
    e.preventDefault();
    alert($(this).attr('id'));
});

const boxTaken = function (){
  if (($('#1').html!=='O') || ($('#1').html !=='X')) {
    let taken=true;
  }
};

const boxClicked = function() {
  if((getPlayer()==="playerO") && (taken!==true)) {
    $('#1').html('O');
    turns++;
    alert("Go Player X");
 } else if((getPlayer()==="playerX") && (taken!==true)) {
    $('#1').html('X');
    turns++;
    alert("Go Player O");
  } else alert("Cell Unavailable");
};

$('#1').on("click", boxClicked);










//const checkWin = function(){};

module.exports=true;
