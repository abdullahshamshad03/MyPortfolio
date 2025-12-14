"use client"
import { motion } from 'motion/react'
import { FlipWords } from './ui/flip-words'

const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"]
    const variants = {
        hidden: {opacity:0, x: -50},
        visible: {opacity:1, x:0}
    }
    return (

        <div className='relative z-10 mx-auto mt-40 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text '>
            {/* desktop View */}
            <div className='hidden flex-col md:flex c-space text-white'>
                <motion.h1 
                variants={variants}
                initial = "hidden"
                animate = "visible"
                transition={{delay:1}}
                className='text-4xl font-medium text-neutral-300' >Hi, I am Abdullah</motion.h1>
            </div>
            <div className='flex flex-col items-start'>
                <motion.p 
                variants={variants}
                initial = "hidden"
                animate = "visible"
                transition={{delay:1.2}}
                className='text-5xl font-medium text-neutral-300'>A Developer <br /> Dedicated to Crafting</motion.p>
                <motion.div
                variants={variants}
                initial = "hidden"
                animate = "visible"
                transition={{delay:1.5}} 
                >
                    <FlipWords
                     className='font-black text-8xl text-white' words={words} />
                </motion.div>
                <motion.p 
                variants={variants}
                initial = "hidden"
                animate = "visible"
                transition={{delay:1.8}}
                className='text-4xl font-medium text-neutral-300'>Web Solutions</motion.p>
            </div>
            
        </div>
    )
}

export default HeroText