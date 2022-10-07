## Documentación
---

### Pantalla de inicio
La primera vez que la aplicación se ejecuta pedirá al tutor que se registre. En futuras ejecuciones ya no será necesario este paso, la aplicación se encarga de detectar si un tutor ya existe en la base de datos e inicia sesión automaticamente.

De esta forma es más simple para el usuario y no será necesario un admin.

### Estructura del proyecto

- `/renderer/pages`: es el directorio donde van las páginas
- `/renderer/components`: directorio donde reside código html reusable
- `/main/background.js`: archivo js que se encarga de inicar la aplicación y recibir peticiones del cliente
- `/main/helpers`: directorio donde residen los archivos que se encargan de la conexión a la base de datos, la definición de las tablas, y  validaciones
- `/dist`: directorio que se genera al compilar el programa. Ahí residirá el ejecutable.

### Funciones y componentes que te pueden ser util

En el directorio `/renderer/components` se encuentran funciones y código html que te pueden ser util a la hora de agilizar la creación de alguna página. Dentro de la carpeta están los componentes:
- **Alert.jsx**: contiene funciones para mostrar mensajes de alerta.
- **Nav.jsx**: contiene el código html del nav superior que se observa en todas las páginas
- **Loading.jsx**: código html para mostrar una animación de "cargando"
- **Alumno.jsx**: este archivo contendrá el código para el formulario de los datos del alumno
- **SemestreAnterior.jsx**: este archivo contendrá la primera parte del formulario de tutorías
- **Propositos.jsx**: este archivo contendrá la segunda parte del formulario de tutorías
- **Compromisos.jsx**: este archivo contendrá la tercera parte del formulario de tutorías
- **Expectativas.jsx**: este archivo contendrá la cuarta parte del formulario de tutorías
- **NavStep.jsx**: archivo que contiene el código html del nav que se muestra en el formulario
- **PrevNext.jsx**: archivo que define el código html de los botones 'Atrás' y 'Siguiente'

### Debug (como abrir la consola para imprimir datos)
Algo que debe quedar claro es que en este tipo de aplicaciones existen dos tipos de consolas: la del server y la del cliente. La del server son las dos pantallas negras que se muestran al inicio. Para mostrar algo en dichas pantallas debes poner `console.log("tu mensaje o también puede ser una variable")` en algunos de los archivos que se encuentran en la carpeta `main`.

Ahora, para mostrar mensajes en el cliente es similar, pero la funcion la debes de llamar en los archivos que se encuentran en la carpeta `renderer`. Dicha carpeta almacena el código cliente. Para ver estos mensajes debes presionar `Shift + Ctrl + I` o `F12`. Esto abrirá una consola parecida a la del navegador web Chrome. Ahí podras visualizar todo los mensajes que utilices para debuguear.

### Base de datos
Utilicé la libreria <a href="https://sequelize.org/docs/v6/getting-started/">Sequelize</a> para trabajar rápido con la base de datos. Es un ORM, si han trabajado con Laravel entonces no creo que se les complique mucho.

En el ambiente de prueba la base de datos reside en `/db`. En producción la base de datos reside en el directorio del ejecutable que se generó `/dist/win-unpacked/resources/tutorias.db`. Sólo se compartirá `/win-unpacked` con el usuario final.

#### Definición de la base de datos
Las definicines de las llaves foraneas las puedes encontrar en `/main/helpers/migrations.js` en la función `dbMigrations`.

```javascript
const migrate = {
    Tutor: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    Alumno: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        matricula: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        carrera: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        semestre: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        ciclo_escolar: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    Nota: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        materia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grado_dificultad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preferencia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tiempo_dedicado: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    DiagnosticoGeneral: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        disposicion_motivacion: {
            type: DataTypes.BOOLEAN,
        },
        materias_reprobadas: {
            type: DataTypes.BOOLEAN,
        },
        recursando: {
            type: DataTypes.BOOLEAN,
        },
        condicionado: {
            type: DataTypes.BOOLEAN,
        },
        deficientes_habitos: {
            type: DataTypes.BOOLEAN,
        },
        problemas_familiares: {
            type: DataTypes.BOOLEAN,
        },
        escasos_recursos: {
            type: DataTypes.BOOLEAN,
        },
        otras: {
            type: DataTypes.TEXT,
        },
    },
    SemestreAnterior: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        /*
        id_alumno
        id_notas 
        id_diagnostigo_general
        */
        esfuerzo: {
            type: DataTypes.BOOLEAN,
        },
        esfuerzo_porque: {
            type: DataTypes.STRING,
        },
        rendimiento: {
            type: DataTypes.BOOLEAN,
        },
        rendi_poca_motivacion: {
            type: DataTypes.BOOLEAN,
        },
        rendi_poco_estudio: {
            type: DataTypes.BOOLEAN,
        },
        rendi_estudio_sin_metodo: {
            type: DataTypes.BOOLEAN,
        },
        rendi_problemas_personales: {
            type: DataTypes.BOOLEAN,
        },
        rendi_alta_dificultad: {
            type: DataTypes.BOOLEAN,
        },
        rendi_otras: {
            type: DataTypes.TEXT,
        }
    },
    PlanDeAccion: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        admin_tiempo: {
            type: DataTypes.BOOLEAN,
        },
        repasar_materias: {
            type: DataTypes.BOOLEAN,
        },
        circulos_estudio: {
            type: DataTypes.BOOLEAN,
        },
        asistir_asesorias: {
            type: DataTypes.BOOLEAN,
        },
        ejercicios_contenidos: {
            type: DataTypes.BOOLEAN,
        },
        verano: {
            type: DataTypes.BOOLEAN,
        },
        otras: {
            type: DataTypes.TEXT,
        },
        tutor_recomendacion: {
            type: DataTypes.TEXT,
        },
        taller_ciencias: {
            type: DataTypes.BOOLEAN,
        },
        taller_mate: {
            type: DataTypes.BOOLEAN,
        },
        taller_ingles: {
            type: DataTypes.BOOLEAN,
        },
        metodos_estudio: {
            type: DataTypes.BOOLEAN,
        },
        asignaturas_especificas: {
            type: DataTypes.TEXT,
        },
        otras: {
            type: DataTypes.TEXT
        },
        psicopedagogia: {
            type: DataTypes.BOOLEAN
        },
        servicios_salud: {
            type: DataTypes.BOOLEAN
        },
        trabajo_social: {
            type: DataTypes.BOOLEAN
        },
        becas: {
            type: DataTypes.BOOLEAN
        },
        otras: {
            type: DataTypes.TEXT
        }
    },
    Compromisos: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        /* Compromisos del estudiante */
        dedicacion_estudio: {
            type: DataTypes.BOOLEAN
        },
        asistir_clases: {
            type: DataTypes.BOOLEAN
        },
        entregar_trabajos: {
            type: DataTypes.BOOLEAN
        },
        asistir_asesorias: {
            type: DataTypes.BOOLEAN
        },
        circulos_estudio: {
            type: DataTypes.BOOLEAN
        },
        otras: {
            type: DataTypes.TEXT
        },
        /* Compromiso del profesor */
        seguimiento_estudiante: {
            type: DataTypes.BOOLEAN
        },
        gestionar_apoyos: {
            type: DataTypes.BOOLEAN
        },
        dar_asesorias: {
            type: DataTypes.BOOLEAN
        },
        informacion_oporturna: {
            type: DataTypes.BOOLEAN
        },
        otras: {
            type: DataTypes.TEXT
        }
    },
    Propositos: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        /*
        id_plan_accion
        id_compromisos
        */
    },
    Expectativas: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        estatus_estudiante: {
            type: DataTypes.STRING
        },
        expectativa_carrera: {
            type: DataTypes.BOOLEAN
        },
        expectativa_porque: {
            type: DataTypes.TEXT
        },
        obstaculos: {
            type: DataTypes.TEXT
        },
        meta_corto_plazo: {
            type: DataTypes.TEXT
        },
        meta_mediano_plazo: {
            type: DataTypes.TEXT
        },
        meta_largo_plazo: {
            type: DataTypes.TEXT
        },
    },
    Tutelado: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
        /*
        id_semestre_anterior,
        id_propositos
        id_expectativas
        */
    }
} 

export { migrate }
```
