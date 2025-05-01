"use client"
import Colors from '@/data/Colors';
import Lookup from '@/data/Lookup'
import { ArrowRight, Link } from 'lucide-react'
import React, {useContext, useState} from 'react'
import { MessagesContext } from '@/context/MessagesCintext'
import { UserDetailContext } from '@/context/UserDetailContext'
import SignInDialog from './SignInDialog';


function Bottom() {
    const [userInput, setUserInput] = useState();
    const {messages, setMessages} = useContext(MessagesContext)
    const {userDetail, setUserDetail} = useContext(MessagesContext)
    const [openDialog, setOpenDialog] = useState(false)

    const onGenerate = (input) => {
        if (!userDetail?.name)
        {
            setOpenDialog(true)
            return ;
        }
        setMessages({
            role: "user",
            content: input
        })
    }


    return (
        
        <div className='flex flex-col items-center justify-center mt-36 xl:mt-52 gap-5'>
            <h2 className='font-bold text-4xl'>{Lookup.HERO_HEADING}</h2>
            <p className='text-gray-400 font-medium'>{Lookup.HERO_DESC}</p>

            <div className='p-5 border rounded-xl max-w-xl w-full mt-3'
            style={{
                backgroundColor: Colors.BACKGROUND
            }}
            >

                <div className='flex gap-2'>
                    <textarea placeholder={Lookup.INPUT_PLACEHOLDER} 
                    onChange={(event) => setUserInput(event.target.value)}
                        className='outline-none bg-transparent w-full h-32 max-h-56 resize-none'
                    />
                  {userInput&&  <ArrowRight 
                  onClick={()=>onGenerate(userInput)}
                  className='bg-red-500 p-2 h-8 w-8 rounded-md cursor-pointer' />}
                </div>
                <div>
                    <Link className='h-5 w-5' />
                </div>
            </div>

            <div className='flex mt-8 flex-wrap max-w-2xl items-center justify-center gap-3'>
             {Lookup?.SUGGSTIONS.map((suggstion, index)=>(
                <h2 key={index}
                onClick={()=>onGenerate(suggstion)}
                className='p-1 px-2 border rounded-full text-sm
                 text-gray-400 hover:text-white  cursor-pointer'
                >{suggstion}</h2>
                ))}   
            </div>

            <SignInDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>

        </div>
    )
}

export default Bottom