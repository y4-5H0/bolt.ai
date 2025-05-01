import Lookup from '@/data/Lookup'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function Bottom() {
  return (
    <div className='flex flex-col items-center justify-center mt-36 xl:mt-52 gap-5'>
        <h2 className='font-bold text-4xl'>{Lookup.HERO_HEADING}</h2>
        <p className='text-gray-400 font-medium'>{Lookup.HERO_DESC}</p>

        <div>
            <textarea placeholder={Lookup.INPUT_PLACEHOLDER} />
            <ArrowRight className='absolute right-4 top-2 text-gray-400' size={20} />
        </div>
    </div>
  )
}

export default Bottom