import React from 'react'
import PrevNext from './PrevNext'

function SemestreAnterior(props) {
  return (
    <div className='px-10'>
      <div className='font-bold text-xl'>
        Análisis Del Semestre Anterior  
      </div>

      <PrevNext props={props} />
    </div>
  )
}

export default SemestreAnterior