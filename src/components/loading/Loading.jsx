import React from 'react'

const Loading = () => {
  return (
    <div className='fixed inset-0 grid place-items-center bg-white z-30'>
      <img src="/loading.gif" alt="loadingbuffer" />
    </div>
  )
}

export default Loading