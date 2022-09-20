import React from 'react';
import Head from 'next/head';
import electron from 'electron'
import Loading from '../components/Loading';
import { useRouter } from 'next/router';

const ipcRenderer = electron.ipcRenderer || false;

function Home() {
  const router = useRouter()

  React.useEffect(() => {
    ipcRenderer.on("api-cl-start-app", (event, data) => {
      if(data)
        router.push("/homeApp")
      else
        router.push("/newTutor")
    })

    ipcRenderer.send("api-sv-start-app")

    return () => {
      ipcRenderer.removeAllListeners('api-cl-start-app')
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Inicio</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full'>
        <Loading />
      </div>
    </React.Fragment>
  );
}

export default Home;
