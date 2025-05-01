import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 '>
        <Image src="/logo.png" alt="Logo" width={40} height={40}  />
        <div className='flex gap-5'>
            <Button variant='ghost'>Sign In</Button>
            <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Header