'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
require('./gameplay');


//Sign In
$(document).ready(function() {
  $('.save-btn').on('click', function(e) {
    e.preventDefault();
    let text = $('#exampleInputEmail1').val();
    console.log(text);
  });
});

//Sign Up
$(document).ready(function() {
  $('.save-btn').on('click', function(e) {
    e.preventDefault();
    let text = $('#exampleInputEmailsignUp').val();
    console.log(text);
  });
});
