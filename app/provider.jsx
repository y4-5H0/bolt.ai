"use client"
import React, {useState} from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { MessagesContext } from '@/context/MessagesCintext'
import { UserDetailContext } from '@/context/UserDetailContext'

function provider({children}) {
    const [messages, setMessages] = useState()
    const [userDetail, setUserDetail] = useState()
  return (
    <div>
        <GoogleOAuthProvider clientId="<your_client_id>">
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
        <MessagesContext.Provider value={{messages, setMessages}}>
        <NextThemesProvider
        attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
        {children}
        </NextThemesProvider>
        </MessagesContext.Provider>
        </UserDetailContext.Provider>
        </GoogleOAuthProvider>
    </div>
  )
}

export default provider