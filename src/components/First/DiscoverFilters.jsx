import React from 'react'
import { discover } from '../../data'

const DiscoverFilters = () => {
  return (
    <div className='sticky t-[6rem]'>
        <div className='border-b border-gray-400 pb-4'>
            <h2 className='font-semibold'>Discover what matters to you </h2>
            <div className='my-2 flex items-center gap-1 flex-wrap'>{discover.map((item, i) => (
                <button key={i}
                className='bg-green-500 py-2 px-3 text-sm rounded-full'> {item} </button>
            ))} </div>
        <button className='text-green-900 text-sm py-3 font-semibold hover:text-black items-center'>Explore more!</button>
        </div>
    </div>
  )
}

export default DiscoverFilters