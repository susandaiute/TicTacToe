'use strict';


const authEvents = require('./events.js');
require('./gameplay');




$(document).ready(function() {
  authEvents.addHandlers();
});
