import SkillsAll from '@/components/skills/SkillsAll'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  
  
  return (
    <div>
      <div>
        {/* picture */}
        <Image height={800} width={1200} className='max-w-full ' alt='skills' src={"/images/skill.jpg"}></Image>
      </div>
      <div>
        {/* All skills below */}
       <SkillsAll></SkillsAll>
      </div>
    </div>
  )
}

export default Skills