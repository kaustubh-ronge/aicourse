import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { HiPencilSquare } from 'react-icons/hi2'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { db } from '@/configs/db'
import { eq } from 'drizzle-orm'
import { CourseList } from '@/configs/schema'


const EditChapters = ({ course, index }) => {
 

    useEffect(() => {
    setName(Chapters[index].chapterName)
    setAbout(Chapters[index].about)
    }, [course])

    const onUpdateHandler =async () =>{
        course.courseOutput.chapters[index].chapterName = name;
        course.courseOutput.chapters[index].about = about;
        const result = await db.update(CourseList).set({
            courseOutput: course?.courseOutput
        }).where(eq(CourseList?.id, course?.id)).returning({id:CourseList.id})
        
        console.log(result)

    }

    const [name, setName] = useState();
    const [about, setAbout] = useState()

    const Chapters = course?.courseOutput?.chapters;
    return (
        <Dialog>
            <DialogTrigger><HiPencilSquare /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        <div className="mt-3">
                            <label>Course Title</label>
                            <Input defaultValue={Chapters[index].chapterName
                            }
                                onChange={(event) => setName(event?.target.value)}
                            />
                        </div>
                        <div>
                            <label>Description</label>
                            <Textarea defaultValue={Chapters[index].about}
                                onChange={(event) => setAbout(event?.target.value)}
                            />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button onClick={onUpdateHandler}>Update</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default EditChapters