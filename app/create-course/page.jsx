"use client"
import { Button } from '@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react'
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from "react-icons/hi2";
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '../_context/UserInputContext';
import { GenerateCourseLayout_AI } from '@/configs/AiModel';
import LoadingDialog from './_components/LoadingDialog';
import { CourseList } from '@/configs/schema';
import uuid4 from 'uuid4';
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs/db';
import { useRouter } from 'next/navigation';

const CreateCourse = () => {

    const GenerateCourseLayout = async() => {
        setLoading(true)
        const BASIC_PROMPT = 'Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration:'
        const USER_INPUT_PROMPT = 'Category:' + userCourseInput?.category + ', Topic:' + userCourseInput?.topic + ', Level:' + userCourseInput?.level + ', Duration:' + userCourseInput?.duration + ', NoOfChapters:' + userCourseInput?.noOfChapter + 'in JSON format'
        const FINAL_PROMPT = BASIC_PROMPT+USER_INPUT_PROMPT;
        console.log(FINAL_PROMPT);
        const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
        console.log(result.response?.text());
        console.log(JSON.parse(result.response?.text()));
        setLoading(false)
        SaveCourseLayoutInDb(JSON.parse(result.response?.text()))
    }

    const {user} = useUser();

    const SaveCourseLayoutInDb = async(courseLayout) =>{
        var id = uuid4();
        const result = await db.insert(CourseList).values({
             courseId:id,
             name:userCourseInput?.topic,
             level:userCourseInput?.level,
             category:userCourseInput?.category,
             courseOutput: courseLayout,
             createdBy: user?.primaryEmailAddress?.emailAddress,
             userName: user?.fullName,
             userProfileImage: user?.imageUrl
        })
        console.log("finish")
        setLoading(false)
        router.replace('/create-course/'+id)
    }

    const router = useRouter();

    const [loading, setLoading] = useState(false)

    const StepperOptions = [
        {
            id: 1,
            name: 'Category',
            icon: <HiMiniSquares2X2 className="text-xl" /> // Increase size using Tailwind
        },
        {
            id: 2,
            name: 'Topic & Desc',
            icon: <HiLightBulb className="text-xl" /> // Increase size using Tailwind
        },
        {
            id: 3,
            name: 'Options',
            icon: <HiClipboardDocumentCheck className="text-xl" /> // Increase size using Tailwind
        }
    ]

    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext)

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        console.log(userCourseInput)
    }, [userCourseInput]);

    const checkStatus = () => {
        if (userCourseInput?.length == 0) {
            return true;
        }
        if (activeIndex == 0 && (userCourseInput?.category.length == 0 || userCourseInput?.category == undefined)) {
            return true;
        }
        if (activeIndex == 1 && (userCourseInput?.topic?.length == 0 || userCourseInput?.topic == undefined)) {
            return true
        }
        else if (activeIndex == 2 && (userCourseInput?.level == undefined || userCourseInput?.duration == undefined || userCourseInput?.displayVideo == undefined || userCourseInput?.noOfChapter == undefined)) {
            return true
        }
        return false
    }

    return (
        <div>
            {/* stepper */}
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl text-red-700 font-medium'>Create Course</h2>
                <div className='flex mt-10'>
                    {StepperOptions.map((item, index) => (
                        <div className='flex items-center' key={item.id}>
                            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                                {/* Add size classes here */}
                                <div className={`bg-gray-200 rounded-full text-white font-bold p-4
                                    ${activeIndex >= index && 'bg-red-700'}`}>
                                    {item.icon}
                                </div>
                                <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                            </div>
                            {index != StepperOptions?.length - 1 && <div className={`h-1 w-[50px] md:w[100px] rounded-full lg:w-[170px] 
                            ${activeIndex > index ? 'bg-red-300' : 'bg-gray-300'}`}></div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className='px-10 md:px-20 lg:px-44 mt-10'>

                {/* component */}

                {activeIndex == 0 ? <SelectCategory /> :
                    activeIndex == 1 ? <TopicDescription /> :
                        <SelectOption />
                }


                {/* Next Previous Button */}

                <div className='flex justify-between mt-10'>
                    <Button disabled={activeIndex == 0} onClick={() => setActiveIndex(activeIndex - 1)}  >Previous</Button>
                    {activeIndex < 2 && <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>}
                    {activeIndex == 2 && <Button disabled={checkStatus()} onClick={() => GenerateCourseLayout()}>Generate Course Layout</Button>}
                </div>
            </div>
            <LoadingDialog loading={loading} />
        </div>
    )
}

export default CreateCourse;