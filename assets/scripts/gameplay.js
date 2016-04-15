'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

////Keeps tracks of how many moves have been made
let turns=0;

/////////Checks for win by Player O
const checkWinO = function () {
  if ($('#0').hasClass("chosenO") && $('#1').hasClass("chosenO") && $('#2').hasClass("chosenO") ||
$('#3').hasClass("chosenO") && $('#4').hasClass("chosenO") && $('#5').hasClass("chosenO") ||
$('#6').hasClass("chosenO") && $('#7').hasClass("chosenO") && $('#8').hasClass("chosenO") ||
$('#0').hasClass("chosenO") && $('#3').hasClass("chosenO") && $('#6').hasClass("chosenO") ||
$('#1').hasClass("chosenO") && $('#4').hasClass("chosenO") && $('#7').hasClass("chosenO") ||
$('#2').hasClass("chosenO") && $('#5').hasClass("chosenO") && $('#8').hasClass("chosenO") ||
$('#0').hasClass("chosenO") && $('#4').hasClass("chosenO") && $('#8').hasClass("chosenO") ||
$('#2').hasClass("chosenO") && $('#4').hasClass("chosenO") && $('#6').hasClass("chosenO")) {
  alert('Player O has won!');
} else {
  return false;
}};

////////Checks for win by Player X
const checkWinX = function () {
  if ($('#0').hasClass("chosenX") && $('#1').hasClass("chosenX") && $('#2').hasClass("chosenX") ||
$('#3').hasClass("chosenX") && $('#4').hasClass("chosenX") && $('#5').hasClass("chosenX") ||
$('#6').hasClass("chosenX") && $('#7').hasClass("chosenX") && $('#8').hasClass("chosenX") ||
$('#0').hasClass("chosenX") && $('#3').hasClass("chosenX") && $('#6').hasClass("chosenX") ||
$('#1').hasClass("chosenX") && $('#4').hasClass("chosenX") && $('#7').hasClass("chosenX") ||
$('#2').hasClass("chosenX") && $('#5').hasClass("chosenX") && $('#8').hasClass("chosenX") ||
$('#0').hasClass("chosenX") && $('#4').hasClass("chosenX") && $('#8').hasClass("chosenX") ||
$('#2').hasClass("chosenX") && $('#4').hasClass("chosenX") && $('#6').hasClass("chosenX")) {
  alert('Player X has won!');
} else {
  return false;
}};


///////Checks for a tie
const checkTie = function(){
  if(turns===9 && checkWinX()===false && checkWinO()===false){
    alert('Tie');
  }
};

////////Checks whose turn it is
const getPlayer = function() {
 if(turns%2===0) {
   return "playerO";
  } else {
   return "playerX";
  }
};
//////////

const updateGamePlay = function(boxId) {
  let index = boxId;
  let value;
  if (getPlayer() === "playerO") {
    value = "X";
  } else {
    value = "O";
  }
  api.updateGame(ui.success, ui.failure, index, value);
}; 

///////Adds 'taken' class to box that was clicked and changes box text to either
///// X or O.  Then, increments turns by 1.  Checks for a win and then a tie.
////Alerts next player.  Will alert that cell is unavailable if needed.
const boxClicked = function(boxId) {
  updateGamePlay(boxId);
  if(!$('.gametile#' + boxId).hasClass('taken') && getPlayer()==='playerO') {
    $('.gametile#' + boxId).html('O');
    $('.gametile#' + boxId).addClass('taken chosenO');
    turns++;
    checkWinO();
    checkTie();
    $('.turnAlert').html('Go Player X');
 } else if( !$('.gametile#' + boxId).hasClass('taken')&& getPlayer()==='playerX') {
    $('.gametile#' + boxId).html('X');
    $('.gametile#' + boxId).addClass('taken chosenX');
    turns++;
    checkWinX();
    checkTie();
    $('.turnAlert').html('Go Player O');
  } else {alert("Cell Unavailable");
 }
};

/////Gets Id of a box that was clicked and passes that into boxClicked function
$('.gametile').on('click', function (){
  let boxId = $(this).attr('id');
  boxClicked(boxId);
});
