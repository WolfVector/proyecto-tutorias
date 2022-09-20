import React from 'react'
import PrevNext from './PrevNext'

function Compromisos(props) {
  return (
    <div className='px-10'>
      <div className='font-bold text-xl'>
        Compromisos
      </div>

      <PrevNext props={props} />
    </div>
  )
}

export default Compromisos