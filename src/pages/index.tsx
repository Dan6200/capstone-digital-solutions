import React from 'react'
import Navbar from '../components/Navbar'

const IndexPage: React.FC = () => {
  return (
    <div>
      <Navbar />
		  <h1 className='text-4xl font-bold p-5'>Hello, World!</h1>
    </div>
  )
}

export default IndexPage
