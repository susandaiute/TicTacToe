'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const libraryApi = require('./library-api');
const ui = require('./ui');
require('./example');
require('./gameplay');
const authEvents = require('./auth/events.js');


$(() => {
  authEvents.addHandlers();
});




//Sign In
$(document).ready(function() {
  $('.save-btn').on('click', function(e) {
    e.preventDefault();
    let text = $('#exampleInputEmail1').val();
    console.log(text);
  });
});

//Sign Up

$(() => {
  $('#signUpForm').on('submit', function (e) {
    let data = getFormFields(this);
    e.preventDefault();
    let text = $('#exampleInputEmailsignUp').val();
    api.myRequest(data, ui.success, ui.failure);
  });
});
