
/**
 * Module dependencies.
 */

var express   = require('express');
var routes    = require('./routes');
var user      = require('./routes/user');
var mem       = require('./routes/mem');
var numofcore = require('./routes/numberofcores');
var loadavg   = require('./routes/loadavg');
var osinfo    = require('./routes/osinfo');
var ip        = require('./routes/ip');
var df        = require('./routes/df');
var ps        = require('./routes/ps');
var online    = require('./routes/online');
var bandwidth = require('./routes/bandwidth');
var dns       = require('./routes/dns');
var ping      = require('./routes/ping');
var http      = require('http');
var path      = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.main);
app.get('/mem', mem.main);
app.get('/numofcore', numofcore.main);
app.get('/loadavg', loadavg.main);
app.get('/osinfo', osinfo.main);
app.get('/ip', ip.main);
app.get('/df', df.main);
app.get('/ps', ps.main);
app.get('/online', online.main);
app.get('/bandwidth', bandwidth.main);
app.get('/dns',dns.main);
app.get('/ping', ping.main);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
