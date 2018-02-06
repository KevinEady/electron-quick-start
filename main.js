
console.log("Running with argv",process.argv);
const electron = require('electron')
// Module to control application life.
const app = electron.app

app.on('ready', () => {
  setTimeout( app.quit, 100);
})
