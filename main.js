const { app, BrowserWindow, ipcMain, screen } = require('electron');

function createWindow() {
    // Ermittelt die volle Bildschirmgröße deines Monitors
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const mainWindow = new BrowserWindow({
        width: width,        // Fenster so breit wie der Monitor
        height: height,      // Fenster so hoch wie der Monitor
        transparent: true,   // Macht den Hintergrund unsichtbar
        frame: false,        // Entfernt den Windows-Rahmen
        hasShadow: false,    // Kein Fensterschatten
        alwaysOnTop: true,   // Bleibt über allen anderen Programmen
        resizable: false,    // Fenstergröße bleibt Vollbild
        
        // HIER IST DAS NEUE ICON (Taskleiste & Fenster):
        icon: __dirname + '/assets/icon.ico', 

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Standardmäßig kann man durch das Fenster durchklicken (auf Icons/Desktop)
    mainWindow.setIgnoreMouseEvents(true, { forward: true });

    mainWindow.loadFile('index.html');

    // Steuerung der Klicks: Das HTML sendet Signale, wenn die Maus 
    // über dem Ei ist, um Klicks dort zu erlauben.
    ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
        const win = BrowserWindow.fromWebContents(event.sender);
        win.setIgnoreMouseEvents(ignore, { forward: true });
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => { 
    if (process.platform !== 'darwin') app.quit();
});