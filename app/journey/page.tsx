"use client"
import { TracingBeam } from '@/components/ui/tracing-beam'
import { TracingBeamInfo } from '@/components/ui/tracing_beam_info'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <motion.div initial={{opacity:0}} animate = {{opacity:1, transition: {delay:0.5, duration:0.6, ease:"easeInOut"}}} >
      
       < TracingBeamInfo />
        

    </motion.div>
  )
}

export default page