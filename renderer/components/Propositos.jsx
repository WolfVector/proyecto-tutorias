import React from 'react'
import PrevNext from './PrevNext'

function Propositos(props) {
  return (
    <div className='px-10'>
      <div className='font-bold text-xl'>
        Propósitos  
      </div>

      <PrevNext props={props} />
    </div>
  )
}

export default Propositos