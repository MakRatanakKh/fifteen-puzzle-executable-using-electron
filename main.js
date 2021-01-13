const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;
let childWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        icon: __dirname + "/img/puzzle_logo.png",
        frame: true,
        center: true,
        title: "Fifteen Puzzle Game",
        resizable: true,
        width: 976,
        height: 567,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile("index.html");
    mainWindow.removeMenu();
    // mainWindow.webContents.openDevTools();
};

const createAboutWindow = () => {
    childWindow = new BrowserWindow({
        icon: __dirname + "/img/puzzle_logo.png",
        frame: true,
        center: true,
        resizable: false,
        width: 339,
        height: 566,
        webPreferences: {
            nodeIntegration: true,
        },
        autoHideMenuBar: true,
        parent: createWindow,
    });

    childWindow.loadFile("about.html");
    // childWindow.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on("exit-message", () => {
    app.quit();
});

ipcMain.on("open-about-message", () => {
    createAboutWindow();
});