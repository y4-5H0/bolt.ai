"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

function provider({children}) {
  return (
    <div>
        <NextThemesProvider
        attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
        {children}
        </NextThemesProvider>
    </div>
  )
}

export default provider