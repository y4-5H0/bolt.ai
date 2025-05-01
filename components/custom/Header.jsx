import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

function Header() {
  return (
    <div>
        <Image src="/logo.png" alt="Logo" width={40} height={40}  />
        <div>
            <Button>Sign In</Button>
            <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Header