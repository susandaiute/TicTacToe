'use strict';


const authEvents = require('./events.js');




$(document).ready(function() {
  authEvents.addHandlers();
});
