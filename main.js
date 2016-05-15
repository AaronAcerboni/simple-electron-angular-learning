const Electron      = require('electron')
const app           = Electron.app
const BrowserWindow = Electron.BrowserWindow

var window

app.on('ready', () => {
    window = new BrowserWindow({width: 800, height: 600})
    // Turn off default menu as we will declare it on the 
    // renderer browser side
    window.setMenu(null)
    window.loadURL(`file://${__dirname}/src/index.html`)
    window.webContents.openDevTools()
    window.on('closed', () => {
        // derefence window
        window = null
    })
})

app.on('window-all-closed', () => {
    // On OS X it is common for applications and 
    // their menu bar to stay active until the user
    // quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the
  // app when the dock icon is clicked and there are no
  // other windows open.
  if (win === null) {
    createWindow();
  }
})

function createWindow () {
    
}