var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;
var splash  = null;

app.on('ready', function(){
  splash = new BrowserWindow({width: 500, height: 500, frame: false, transparent:true});
  splash.loadUrl('file://' + __dirname + '/Splash.html');
  setTimeout(function(){
  splash.close();
  mainWindow = new BrowserWindow({width: 430, height: 600 });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
},5000);


});
