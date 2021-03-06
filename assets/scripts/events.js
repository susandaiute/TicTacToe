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
  $('#signInForm').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#sign-out').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#updatePassword').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.updatePassword(authUi.updateSuccess, authUi.failure, data);
  });
  $('.getGames').on('click', function (event) {
    event.preventDefault();
    authApi.index(authUi.indexSuccess, authUi.failure);
  });

};




module.exports = {
  addHandlers,
};
