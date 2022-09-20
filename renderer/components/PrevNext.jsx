import React from 'react'

function PrevNext({ props, firstForm }) {
  return (
    <div className='flex justify-start gap-x-2 mt-5 text-white'>
      <button className='px-2 w-32 py-2 bg-blue-500 rounded text-sm disabled:bg-slate-300 disabled:text-gray-500' disabled={(firstForm) ? true : false} onClick={props.previousStep}>Atrás</button>
      <button className='px-2 w-32 py-2 bg-blue-500 rounded text-sm' onClick={props.nextStep}>Siguiente</button>
    </div>
  )
}

export default PrevNext