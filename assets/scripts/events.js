'use strict';


const getFormFields = require('../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#signUpForm').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    console.log('signupworked');
  });
  $('#sign-out').on('submit', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
};



module.exports = {
  addHandlers,
};
