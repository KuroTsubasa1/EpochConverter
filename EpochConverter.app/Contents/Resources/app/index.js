var app = require('app');
var clipboard = require('clipboard');
var Menu = require("menu");
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

var template = [{
        label: "Application",
        submenu: [
            { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]}, {
        label: "Edit",
        submenu: [
            { label: "Undo", accelerator: "Command+Z", selector: "undo:" },
            { label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:" },
            { type: "separator" },
            { label: "Cut", accelerator: "Command+X", selector: "cut:" },
            { label: "Copy", accelerator: "Command+C", selector: "copy:" },
            { label: "Paste", accelerator: "Command+V", selector: "paste:" },
            { label: "Select All", accelerator: "Command+A", selector: "selectAll:" }
        ]}
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});
