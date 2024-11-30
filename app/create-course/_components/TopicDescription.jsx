import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

const TopicDescription = () => {
    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
    const handleInputChange = (fieldName, value) => {
        setUserCourseInput(prev => ({
            ...prev,
            [fieldName]: value
        }))
    }

    return (
        <div className='max-20 lg:max-44'>
            {/* Input Topic  */}
            <div className='mt-5'>
                <label>
                    Write a Topic for which you want to generat a course (e.g. Python, java, C++,Yoga etc):
                </label>
                <Input placeholder={'Topic'} className="h-14 text-xl"
                    defaultValue={userCourseInput?.topic}
                    onChange={(e) => handleInputChange('topic', e.target.value)}
                />
            </div>
            <div className='mt-5'>
                <label>Tel us more about your course what you want to include in the course (Optional)</label>
                <Textarea placeholder="About Your Course"
                    className="h-24 text-xl"
                    defaultValue={userCourseInput?.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                />
            </div>
            {/* Text Area Desc  */}
        </div>
    )
}
export default TopicDescription




