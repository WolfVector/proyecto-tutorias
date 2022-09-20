import Head from 'next/head';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { alertConfirm, alertTimerMessage } from '../components/Alert';
import Loading from '../components/Loading';
import electron from "electron"
import Nav from '../components/Nav';

const ipcRenderer = electron.ipcRenderer || false;

function HomeApp() {
    const [loading, setLoading] = useState(null)
    const [alumnosList, setAlumnosList] = useState([])
    const current_key = useRef(null)

    function removeAlumno(matricula) {
        const confirm = alertConfirm("El alumno será eliminado para siempre")
        confirm.fire().then((result) => {
            if (result.isConfirmed) {
                ipcRenderer.send("api-sv-remove-alumno")

                current_key.current = matricula
                setLoading((<Loading />))
            }
        })
    }

    useEffect(() => {
        ipcRenderer.on("api-cl-remove-confirm", (event, res) => {
           // const newAlumnos = fruits.filter((_, i) => i !== index);

            setLoading(null)
            alertTimerMessage("Alumno eliminado", "success")
        })

        ipcRenderer.on("api-cl-get-alumnos", (event, res) => {
            setAlumnosList(res)
        })

        ipcRenderer.send("api-sv-get-alumnos")

        return () => {
            ipcRenderer.removeAllListeners('api-cl-remove-confirm')
            ipcRenderer.removeAllListeners('api-cl-get-alumnos')
        }
    }, [])

    return (
      <Fragment>
        <Head>
            <title>Inicio</title>
        </Head>
        <div>
            {loading}
            <Nav />
            <div className='w-full h-screen border mt-5 py-2 px-2'>
                <div className='flex justify-end gap-x-2'>
                    <Link href='/dashboard'>
                        <a className='bg-blue-500 h-10 py-2 px-2 text-white rounded'>Dashboard</a>
                    </Link>
                    <Link href='/newTutelado'>
                        <a className='bg-green-500 h-10 py-2 px-2 text-white rounded'>Nuevo Tutelado</a>
                    </Link>
                </div>
                <div className='mt-4'>
                    <table>
                        <thead>
                            <tr>
                                <th>Matrícula</th>
                                <th>Periodo</th>
                                <th>Nombre</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alumnosList.map((alumno) => (
                                    <tr key={alumno.matricula}>
                                        <td>{alumno.matricula}</td>
                                        <td>{alumno.ciclo_escolar}</td>
                                        <td>{alumno.nombre}</td>
                                        <td className='text-green-600'><button><AiFillEdit /></button></td>
                                        <td className='text-red-500'><button onClick={() => removeAlumno(alumno.matricula)}><AiFillDelete /></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }
  
  export default HomeApp