import React from 'react'
import PrevNext from './PrevNext'

function Alumno(props) {
  return (
    <div className='px-10'>
      <div className='font-bold text-xl'>
        Alumno
      </div>

      <PrevNext props={props} firstForm={true} />
    </div>
  )
}

export default Alumno