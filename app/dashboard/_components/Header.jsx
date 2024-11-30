import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        <Image src={'/favicon.svg'} height={80} width={80} alt='logo' />
        <UserButton />
    </div>
  )
}

export default Header