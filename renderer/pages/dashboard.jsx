import Head from 'next/head'
import { Fragment } from 'react'
import Nav from '../components/Nav'

function dashboard() {
  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Nav />

      <div className='mt-5 ml-2'>
        Dashboard
      </div>
    </Fragment>
  )
}

export default dashboard