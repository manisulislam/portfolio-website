import React from 'react'
import Image from 'next/image';

interface Skill{
    id: number;
    pic: string;
    title: string;
}

const SkillsAll: React.FC = () => {
    const skills: Skill[]=[
        {
          id:1,
          title: "HTML",
          pic: "/images/html.png"
        },
        {
          id:2,
          title: "CSS",
          pic: "/images/css.png"
        },
        {
          id:3,
          title: "JAVASCRIPT",
          pic: "/images/js.png"
        },
        {
          id:4,
          title: "TYPESCRIPT",
          pic: "/images/typescript.png"
        },
        {
          id:5,
          title: "REACT",
          pic: "/images/react.png"
        },
        {
          id:6,
          title: "NEXT JS",
          pic: "/images/nextjs.png"
        },
        {
          id:7,
          title: "NODEJS",
          pic: "/images/nodejs.png"
        },
        {
          id:8,
          title: "EXPRESSJS",
          pic: "/images/expressjs.png"
        },
        {
          id:9,
          title: "MONGODB",
          pic: "/images/mongodb.png"
        },
        {
          id:10,
          title: "DATA STRUCTURES",
          pic: "/images/ds.png"
        },
        {
          id:11,
          title: "ALGORITHM",
          pic: "/images/algorithm.jpg"
        },
      ]
  return (
    <div className=' grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 m-24'>
        {
          skills.map((skill)=>(
            <div key={skill.id} className='rounded border-gray-500 border-[1px] p-2'>
              <Image width={100} height={100} src={skill.pic} alt={skill.title}></Image>
              <h2 className='mt-4'>{skill.title}</h2>
            </div>
          )
            
        )
        }
    </div>
  )
}

export default SkillsAll 