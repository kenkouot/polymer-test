// Start sails and pass it command line arguments
var optimist = require('optimist');
require('sails').lift(optimist.argv);
