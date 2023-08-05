import Image from 'next/image'
import React from 'react'

const HomeSection2 = () => {
  return (
   <div>
    <h1 className='text-3xl m-12 text-center text-orange-500 font-semibold'>__About me</h1>
     <div className='grid md:grid-cols-2 sm:grid-cols-1 m-12 gap-8'>
        <div>
            {/* writings */}
            <h2 className='text-2xl font-semibold '> Hi there! My name is <span className='text-2xl text-orange-500 font-semibold '>Md Anisul Islam,</span> </h2>
          <p> and I am a passionate Full Stack Developer with a focus on web development. Since 2021, I have been on an exciting journey, delving into the world of programming and technology.My fascination with the possibilities that coding offers led me to explore various programming languages and frameworks. I find joy in building interactive and user-friendly web applications that bring ideas to life.My learning journey has been a mix of formal education and self-learning experiences. I have completed online courses and participated in bootcamps to expand my knowledge and sharpen my skills in web development.As a problem solver at heart, I enjoy tackling complex challenges and finding innovative solutions.My commitment to continuous learning drives me to stay updated with the latest trends and technologies.</p>
        </div>
        <div>
            {/* image */}
            <Image height={300} width={300} alt='Anis image' src={"/images/anisImage.png"}></Image>
        </div>
    </div>
   </div>
  )
}

export default HomeSection2