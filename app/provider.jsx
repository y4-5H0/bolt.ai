"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { MessagesContext } from '@/context/MessagesCintext'

function provider({children}) {
    const [messages, setMessages] = useState()
    const [userDetail, setUserDetail] = useState()
  return (
    <div>
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
    </div>
  )
}

export default provider