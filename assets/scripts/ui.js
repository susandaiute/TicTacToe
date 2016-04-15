'use strict';

const app = require('./app-data.js');
const api = require('./api.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  api.create(createSuccess, failure);
};

const signOutSuccess = (data) => {
  app.user = null;
  console.log(app);
};

const updateSuccess = function (){
  console.log('update worked');
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const createSuccess = function (data) {
  app.game = data.game;
  console.log(app);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  updateSuccess,
};
