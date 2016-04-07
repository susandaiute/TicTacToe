'use strict';


const users = (form) => {
  console.log('Start request');
  $.ajax({
    method: 'POST',
    url: 'http://tic-tac-toe.wdibos.com',
    //for debugging: url: 'http://httpbin.org/post',
    processData: false,
    data: form,
  })
  .done(function(data) {
    console.log(data);
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
});
};


module.exports = {
  users,
};
