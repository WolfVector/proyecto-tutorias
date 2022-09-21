import { Sequelize } from "sequelize"
import { migrate } from "./models"
import path from "node:path"
import fs from "fs";

let DB_PATH;
const DB_NAME = "tutorias.db"
let sequelize;

/* Inicializa lo necesario para conectarte a la base de datos */
async function dbInit(deploy_path) {
    dbMakeDirectory(deploy_path) //Si el archivo no existe, entonces crealo
    await dbConnect() //Conecta a la base de datos

    if(sequelize) {
        await dbMigrations()
    }
}

function dbMakeDirectory(deploy_path = null) {
    DB_PATH = path.join(deploy_path, DB_NAME) //Crea el path /resources/tutorias.db
    if(!fs.existsSync(DB_PATH)) //Si el archivo no existe, entonces crealo
        fs.closeSync(fs.openSync(DB_PATH, 'w'));
}

/* Conecta a la base de datos */
async function dbConnect() {    
    sequelize = new Sequelize({
        dialect: "sqlite",
        storage: DB_PATH
    })

    try {
        await sequelize.authenticate()
        console.log("Conectado a la base de datos")
    } catch(err) {
        console.log(err)
        sequelize = null
    }

    return sequelize
}

/* Crea las tablas si estas no existen */
async function dbMigrations() {
    /* Crea los modelos/tablas */
    const models = {}
    for(let [key, value] of Object.entries(migrate)) {
        models[key] = sequelize.define(key, value)
    }

    /* Define las asociaciones (llaves foraneas) */
    models["SemestreAnterior"].belongsTo(models["Alumno"])
    models["SemestreAnterior"].hasMany(models["Nota"])
    models["SemestreAnterior"].belongsTo(models["DiagnosticoGeneral"])

    models["Propositos"].belongsTo(models["PlanDeAccion"])
    models["Propositos"].belongsTo(models["Compromisos"])

    models["Tutelado"].belongsTo(models["SemestreAnterior"])
    models["Tutelado"].belongsTo(models["Propositos"])
    models["Tutelado"].belongsTo(models["Expectativas"])

    /* Si la tabla no existe, entonces creala  */
    for(let [key, ] of Object.entries(models))
        await models[key].sync() //Creará la tabla en caso de que no exista
}

export {
    dbInit,
    dbConnect,
    DB_PATH,
    DB_NAME,
    sequelize
}
