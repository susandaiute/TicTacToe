'use strict';

const getUsersSuccess = (data) => {
  console.log(data.users);
};

const getUsersFail = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};
const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};
const success = (data) => {
  console.log(data);
};
const failure = (error) => {
  console.error(error);
};



module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  getUsersFail,
  getUsersSuccess,
};
