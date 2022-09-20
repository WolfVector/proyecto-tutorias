import React from 'react'
import { Blocks } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='fixed w-full h-screen grid grid-col-1 z-10 place-items-center backdrop-blur-sm bg-white/30'>
        <div className='mx-auto my-0'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                />
        </div>
    </div>
  )
}

export default Loading