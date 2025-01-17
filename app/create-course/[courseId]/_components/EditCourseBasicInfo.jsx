import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPencilSquare } from 'react-icons/hi2';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';

const EditCourseBasicInfo = ({ course, refreshData }) => {

    const [name, setName] = useState()
    const [description, setDescription] = useState()

    const onUpdateHandler = async() =>{
        course.courseOutput.courseName = name;
        course.courseOutput.description = description;
        console.log(course)
        const result = await db.update(CourseList).set({
            courseOutput: course?.courseOutput
        }).where(eq(CourseList?.id, course?.id)).returning({id:CourseList.id})

        refreshData(true)
        console.log(result)

    }

    useEffect(()=>{
        setName(course?.courseOutput?.courseName);
        setDescription(course?.courseOutput?.description)
    },[course])

  return (
    <Dialog>
      <DialogTrigger><HiPencilSquare /></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit course Title and Description</DialogTitle>
          <DialogDescription>
            <div className="mt-3">
              <label>Course Title</label>
              <Input defaultValue={course?.courseOutput?.courseName}
              onChange={(event)=>setName(event?.target.value)}
              />
            </div>
            <div>
              <label>Description</label>
              <Textarea defaultValue = {course?.courseOutput?.description}
              onChange={(event)=>setDescription(event?.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button onClick = {onUpdateHandler}>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditCourseBasicInfo;
