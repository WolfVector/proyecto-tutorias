import React from 'react'

function Expectativas(props) {
  function sendNewTutelado() {

  }

  return (
    <div className='px-10'>
      <div className='font-bold text-xl'>
        Expectativas  
      </div>

      <div className='flex justify-start gap-x-2 mt-5 text-white'>
        <button className='px-2 py-2 w-32 bg-blue-500 rounded text-sm' onClick={props.previousStep}>Atrás</button>
        <button className='px-2 py-2 w-32 bg-green-500 rounded text-sm' onClick={sendNewTutelado}>Enviar</button>
      </div>
    </div>
  )
}

export default Expectativas