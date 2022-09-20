import React from 'react'
import electron from "electron"
import { alertMessage } from '../components/Alert';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ipcRenderer = electron.ipcRenderer || false;

function Register() {
    const router = useRouter()
    const nameRef = React.useRef(null)
    const emailRef = React.useRef(null)

    const handleSubmit = event => {
        event.preventDefault() 
        
        const form_data = {
            name: nameRef.current.value,
            email: emailRef.current.value
        }

        ipcRenderer.send("api-sv-new-tutor", form_data)
    }

    React.useEffect(() => {
        ipcRenderer.on("api-cl-register-res", (event, res) => {
            if(res.ok)
                router.push("/homeApp")
            else
                alertMessage(res.err, "error")
        })

        return () => {
            ipcRenderer.removeAllListeners('api-cl-register-res')
        }
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>Nuevo Tutor</title>
            </Head>
            <div className='bg-white mx-auto my-0 w-1/2  rounded py-2 shadow-xl mt-32 pb-5 grid grid-col-1 place-items-center'>
                <div className='font-bold text-xl text-gray-900'>Nuevo Tutor</div>
                <div className='mt-6 w-1/3'>
                    <form>
                        <div>
                            <label className='block text-sm'>Nombre</label>
                            <input type="text" ref={nameRef} className="bg-gray-50 mb-6 w-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-sm px-2 py-2" />
                        </div>

                        <div>
                            <label className='block text-sm'>Email</label>
                            <input type="text" ref={emailRef} className="bg-gray-50 border w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-sm px-2 py-2" />
                        </div>

                        <div className='mt-6'>
                            <button onClick={handleSubmit} className='text-white w-full bg-blue-500 hover:bg-blue-700 rounded-lg px-2 py-2 text-sm'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register