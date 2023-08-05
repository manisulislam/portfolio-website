import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center mt-16 mb-36 gap-12'>
    
    <div>
      <Image width={540} height={340}alt='contact image' src={"/images/contact.png"}></Image>
      </div>
    <div>
    <h2 className='text-3xl text-orange-500 hover:text-red-500 rounded'>Lets Talk</h2>
    <form className='flex flex-col justify-center items-start gap-3 mt-3'>
    
    
    <input type="text" className='border rounded p-4 w-full border-b-gray-300 ' placeholder='Name'/>
    
    <input type="text" className='border rounded p-4 w-full border-b-gray-300 ' placeholder='Email'/>
    
    <input type="text" className='border rounded py-8 px-4 w-full border-b-gray-300 ' placeholder='Message'/>

    <button type='button' className='py-2 px-2 w-fit bg-orange-300 hover:bg-red-500 rounded text-black hover:text-white'>Submit</button>

    <div className='flex flex-row justify-center itmes-center gap-2'>
      {/* Facebook */}
      <a href="https://www.facebook.com/profile.php?id=100055382937194" target='_blank'>    <button type='button' className='py-2 px-2 w-fit bg-gray-300 hover:bg-blue-900 rounded text-black hover:text-white ease-in-out duration-300 hover:drop-shadow-2xl  '>Facebook</button></a>
 

    {/* likedin */}
    <a href="https://www.linkedin.com/in/manisulislam/" target='_blank'><button type='button' className='py-2 px-2 w-fit bg-gray-300 hover:bg-blue-900 rounded text-black hover:text-white ease-in-out duration-300 hover:drop-shadow-2xl  '>Linkedin</button></a>
    {/* Github */}
    <a href="https://github.com/manisulislam" target='_blank'><button type='button' className='py-2 px-2 w-fit bg-gray-300 hover:bg-black-900 rounded text-black hover:text-white ease-in-out duration-300 hover:drop-shadow-2xl  '>Github</button></a>
    


    {/* whatsapp */}
    <button type='button' title='01608927009' className='py-2 px-2 w-fit bg-gray-300 hover:bg-green-500 rounded text-black hover:text-white'>Whatsapp</button>

    </div>


 
    </form>  
    </div>   
    </div>
  )
}

export default Contact