'use strict';

const app = require('./app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const updatePassword = (updateSuccess, failure, data) => {
console.log(app);
let form = {
  "passwords": {
    "old": data.credentials.oldpassword,
    "new": data.credentials.newpassword
  }
};
$.ajax({
  method : 'PATCH',
  url: app.api + '/change-password/' + app.user.id,
  data: form,
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
}).done(updateSuccess)
.fail(failure);
console.log('patch ran');
};

const games = (success, fail) => {
  console.log('Started request');
  $.ajax({
      method:'GET',
      url: app.api + '/games/' + app.user.id,
  })
  .done(success)
  .fail(fail);
  console.log('Request queued');
};



module.exports = {
  signUp,
  signIn,
  signOut,
  updatePassword
  games,
};
