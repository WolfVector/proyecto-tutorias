import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow, dbInit, sequelize, validateNewTutor } from './helpers'
import path from "node:path"

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' })

  /*
  process.resourcePath apunta a /resources
  Por lo tanto, aquí estamos creando un directorio llamado 'userData' dentro de /resources
  */
  app.setPath('userData', path.join(process.resourcesPath, 'userdata/'))
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

(async () => {
  await app.whenReady()

  /* Si estamos en "producción", entonces que el path sea /resources 
     En caso contrario /db
  */
  await dbInit((isProd) ? process.resourcesPath : path.join(app.getAppPath(), "db"))

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    //mainWindow.webContents.openDevTools();
  }
})();

/* Si el usuario cierra la aplicación termina el proceso */
app.on('window-all-closed', async () => {
  await sequelize.close()
  app.quit();
});

/*
En esta sección estarán las funciones que manejan las peticiones del cliente
*/

ipcMain.on("api-sv-start-app", async (event, req) => {
  const Tutor = sequelize.models.Tutor //Accede al modelo del tutor
  const data = await Tutor.findAll() //Busca un tutor

  /* Responde al cliente */
  event.sender.send("api-cl-start-app", (data.length > 0) ? true : false)
})

ipcMain.on("api-sv-new-tutor", async (event, req) => {
  const res = {ok: true}
  const err = validateNewTutor(req) //Valida los campos

  if(err.length > 0) { //Si errores, entonces...
    res.ok = false
    res.err = err
  }
  else { //En caso contrario guarda el nuevo tutor
    const Tutor = sequelize.models.Tutor //Accede al modelo del tutor
    await Tutor.create({ nombre: req.name, email: req.email }) //Crea un nuevo tutor y guardalo
  }

  /* Responde al cliente */
  event.sender.send("api-cl-register-res", res)
})

ipcMain.on("api-sv-remove-alumno", async (event, res) => {

  /* Responde al cliente */
  event.sender.send("api-cl-remove-confirm")
})
