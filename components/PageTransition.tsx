"use client"
import { AnimatePresence, motion } from 'framer-motion'

import React from 'react'

const PageTransition : React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
  return <AnimatePresence mode='wait'>
    <div>
            <motion.div initial = {{opacity: 1 }} animate = {{opacity: 0, transition:{
                delay: 0.5, duration:0.4, ease: "easeInOut"
            }}} 
            className='h-screen w-screen fixed bg-background top-0 pointer-events-none'
             />
                {children}
              

    </div>
       
    </AnimatePresence>
}

export default PageTransition