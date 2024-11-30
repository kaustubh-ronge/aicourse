import React from 'react'
import { HiOutlineBookOpen, HiOutlineChartBar, HiOutlineClock, HiOutlinePlayCircle } from 'react-icons/hi2'

const CourseDetail = ({ course }) => {
    return (
        <div className='border p-6 rounded-xl shadow-sm mt-3'>
            <div className='grid grid-cols-2 md:grid-cols-4'>
                <div className='flex gap-2'>
                    <HiOutlineChartBar className='text-4xl text-red-700' />
                    <div>
                        <h2 className='text-xs text-gray-500'>Skill Level</h2>
                        <h2 className='font-medium text-lg'>{course?.level}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlineClock className='text-4xl text-red-700' />
                    <div>
                        <h2 className='text-xs text-gray-500'>Duration</h2>
                        <h2 className='font-medium text-lg'>{course?.courseOutput?.totalDuration}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlineBookOpen className='text-4xl text-red-700' />
                    <div>
                        <h2 className='text-xs text-gray-500'>No of chapters</h2>
                        <h2 className='font-medium text-lg'>{course?.courseOutput?.noOfChapters}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlinePlayCircle className='text-4xl text-red-700' />
                    <div>
                        <h2 className='text-xs text-gray-500'>video included</h2>
                        <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail