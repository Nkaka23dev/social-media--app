import React from 'react'

export default function CreatePost() {
  return (
    <section>
      <form className='max-w-2xl mx-auto space-y-6'>
        <input type="text" className='w-full focus:outline-none py-3 px-6 border border-gray-500' placeholder='Enter title...' />
        <textarea placeholder='text goes here' className='w-full h-52 py-3 focus:outline-none px-6 border border-gray-500' name="" id=""></textarea>
        <button onClick={(e) => { e.preventDefault() }} className='w-full text-xl text-white py-4 bg-blue-500 hover:bg-blue-600'>Submit</button>
      </form>
    </section>
  )
}
