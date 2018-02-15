const electron = require('electron');
const url = require('url');
const path = require('path');

const{app, BrowserWindow, ipcMain}  = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
 // create new window
	mainWindow = new BrowserWindow({});
 // Load html into window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol: 'file',
		slashes: true
	}));
});

// Catch numbers:add
ipcMain.on('product',function(e, submission){
	//console.log(submission);
	var product = parseFloat(submission); // + parseFloat(number2) + parseFloat(number3);
	//console.log(product);
	mainWindow.webContents.send('product', product);
});