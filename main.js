//@ts-check
const { app, BrowserWindow } = require('electron')

async function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  setTimeout(() => {
    mainWindow.loadURL("https://example.com")
  }, 3_000);
}

app.whenReady().then(() => {
  createWindow().catch(e => console.error(e))

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
