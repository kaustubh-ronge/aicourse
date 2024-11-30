import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';
import EditCourseBasicInfo from './EditCourseBasicInfo';


const CourseBasicInfo = ({ course, refreshData }) => {



  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="font-bold text-2xl">
            {course?.courseOutput?.courseName} <EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)} />
          </h2>
          <p className="text-sm text-gray-400 mt-3">{course?.courseOutput?.description}</p> {/* Directly render course.id */}
          <h2 className="font-medium mt-2 flex gap-2 items-center text-red-700">
            <HiOutlinePuzzlePiece />
            {course?.category}
          </h2>
          <Button className="w-full mt-5">Start</Button>
        </div>
        <div>
            <label htmlFor='upload-image'>
          <Image
            src={ '/background.webp'}
            height={300}
            width={300}
            alt="bg"
            className="w-full rounded-xl h-[300px] object-cover cursor-pointer"
          /></label>
          <input type="file" id='upload-image' className='opacity-0' />
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;
