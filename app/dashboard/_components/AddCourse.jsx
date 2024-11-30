"use client"

import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AddCourse = () => {

  const { user } = useUser();

  return (
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='text-2xl'>Hello, <span className='font-bold'>{user?.fullName}</span></h2>
        <p className='text-sm text-gray-500'>Create new Course with AI and share with friends</p>
      </div>

      <Link href={'/create-course'}>
      <Button>+ Create AI Course</Button>
      </Link>
    </div>
  )
}

export default AddCourse