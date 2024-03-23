// eslint-disable-next-line no-unused-vars
import React from 'react'
import Posts from '../common_components/Posts/Posts'
import Users from './UsersToCheck/Users'

const Home = () => {
  return (
    <section className='size flex gap-[5rem] relative'>
      {/* left */}
      <div className='flex-[2] py-10 mb-[4rem]'>
        <Posts />
      </div>
      {/* <div className='hidden md:inline-block md:w-[24rem]  p-10 border-l border-gray-500'>
        <h3>Check out other users</h3>
        <Users />
      </div> */}
    </section>
  )
}

export default Home