import React from 'react'

const nav = ["Alumno", "Semestre Anterior", "Propósitos", "Compromisos", "Expectativas"]

function NavStep(props) {
  return (
    <div className='flex bg-teal-500 gap-x-8 mb-6 mx-10'>
        {
          nav.map((step, index) => (
            <button className={`text-sm mr-4 text-white py-1 px-2 hover:bg-teal-400 ${(props.currentStep == index + 1) ? 'bg-teal-600' : ''}`} onClick={()=> props.goToStep(index + 1)} key={step}>
              {step}
            </button>
          ))
        }
    </div>
  )
}

export default NavStep