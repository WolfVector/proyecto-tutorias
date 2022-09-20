import { DataTypes } from "sequelize"

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
