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

//function for addition
/*function addition(number1, number2){
	var product = number1 + number2;
	return product; */
//}

// Catch numbers:add
ipcMain.on('product',function(e, number1, number2){
	//console.log(number1, number2);
	var product = parseFloat(number1) + parseFloat(number2);
	//console.log(product);
	mainWindow.webContents.send('product', product);
});




	
	