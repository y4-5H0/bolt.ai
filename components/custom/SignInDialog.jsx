import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import Lookup from '@/data/Lookup'
import { Button } from '../ui/button'
  

function SignInDialog({openDialog, closeDialog}) {
  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle></DialogTitle>
      <DialogDescription>
        <div className='flex flex-col items-center justify-center gap-3'>
        <h2 className='font-bold text-2xl text-center text-white'>{Lookup.SIGNIN_HEADING}</h2>
        <p className='mt-2 text-center'>{Lookup.SIGNIN_SUBHEADING}</p>
        <Button className='bg-red-500 text-white hover:bg-red-400'>Sign In With Google</Button>

        <p>{Lookup.SIGNIn_AGREEMENT_TEXT}</p>

        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default SignInDialog