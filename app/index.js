import { app, BrowserWindow } from 'electron';
import loadDevtool from 'electron-load-devtool';
import path from 'path';
import url from 'url';

import express from 'express';

import AppConfig from './js/config/app';

let exapp = express();
let port = AppConfig.webport || 8080;
exapp.use(express.static('app'));
exapp.listen(port);

let win = null;
process.env.NODE_ENV = process.env_NODE_ENV ? process.env.NODE_ENV : 'development';

function createWindow() {
	win = new BrowserWindow({ width: 800, height: 600 });
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'app.html'),
		protocol: 'file:',
		slashes: true
	}));

	loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});