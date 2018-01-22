
var home = require('./home');
var bootstrap = require('./bootstrap');
var lodash = require('./lodash');
var moment = require('./moment');


function registerRoutes(app){
    app.use('/', home);
    app.use('/bootstrap', bootstrap);
    app.use('/lodash', lodash);
    app.use('/moment', moment);
}

module.exports = registerRoutes;