import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-5 shadow-md'>
        <Image src={'/logo.svg'} width={150} height={500} alt='image' className=''/>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header