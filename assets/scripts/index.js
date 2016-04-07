'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// const getFormFields = require('../../lib/get-form-fields');
const authEvents = require('./events.js');
// const api = require('./api');
// const ui = require('./ui');
// require('./example');
// require('./gameplay');
// require('../../spec/forms.');



$(document).ready(function() {
  authEvents.addHandlers();
});


//Sign In
// $(document).ready(function() {
//   $('.save-btn').on('click', function(e) {
//     e.preventDefault();
//     let text = $('#exampleInputEmail1').val();
//     console.log(text);
//   });
// });

//Sign Up

// $(() => {
//   $('#signUpForm').on('submit', function (e) {
//     let data = getFormFields(this);
//     e.preventDefault();
//     let text = $('#exampleInputEmailsignUp').val();
//     api.myRequest(data, ui.success, ui.failure);
//   });
// });
