import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'


const LoadingDialog = ({ loading }) => {
  return (
    <AlertDialog open={loading}>

      <AlertDialogContent>
        <AlertDialogHeader>
          
          <AlertDialogDescription>
            
          </AlertDialogDescription>
        </AlertDialogHeader>
       <div className='flex flex-col items-center py-10'>
        <Image src={'/loader.gif'} width={100} height={100} alt='loader'/>
        <h2>Please wait ... AI is working on your course</h2>
       </div>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default LoadingDialog