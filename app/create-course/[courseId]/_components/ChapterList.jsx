import React from 'react'
import { HiOutlineCheckCircle, HiOutlineClock } from 'react-icons/hi2'
import EditChapters from './EditChapters'

const ChapterList = ({ course }) => {
  return (
    <div className='mt-3'>
      <h2 className='font-medium text-xl'>Chapters</h2>
      <div className='mt-2'>
        {
          // If noOfChapters is an array, use map directly
          Array.isArray(course?.courseOutput?.noOfChapters)
            ? course?.courseOutput?.noOfChapters.map((chapter, index) => (
              <div key={chapter.id || index}> {/* Use chapter.id if available */}
                <h2>{index + 1}</h2> {/* Displaying sequence */}
                <p>{chapter}</p> {/* Optional: Display chapter content */}
              </div>
            ))
            : // If noOfChapters is a number, generate an array with that length
            Array.from({ length: course?.courseOutput?.noOfChapters || 0 }).map((_, index) => (
              <div className='border p-5 rounded-lg mb-2 flex items-center justify-between' key={index}>
                <div className='flex gap-5 items-center'>
                  <h2 className='bg-red-700 h-10 w-10 rounded-full text-center p-2 mt-1 flex-none'>{index + 1}</h2> {/* Displaying sequence */}
                  <div>
                    <h2 className='text-lg font-medium'>{course?.courseOutput?.chapters[index]?.chapterName} <EditChapters course={course} index={index} /></h2>
                    <p className='text-sm text-gray-500'>{course?.courseOutput?.chapters[index]?.about}</p>
                    <p className='flex gap-2 text-primary items-center'><HiOutlineClock />{course?.courseOutput?.chapters[index]?.duration}</p>
                  </div>
                </div>
                <HiOutlineCheckCircle className='text-4xl text-gray-300 flex-none'/>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default ChapterList
