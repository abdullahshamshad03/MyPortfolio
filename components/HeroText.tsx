"use client"
import { motion } from 'framer-motion'
import { FlipWords } from './ui/flip-words'

const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"]
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <div className='relative z-10 mx-auto mt-20 md:mt-40 px-4 md:px-0 text-center md:text-left rounded-3xl bg-clip-text'>
            {/* Greeting - Hidden on mobile, shown on desktop */}
            <div className='hidden md:flex flex-col c-space text-white mb-4'>
                <motion.h1 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                    className='text-2xl md:text-4xl font-medium text-neutral-300'
                >
                    Hi, I am Abdullah
                </motion.h1>
            </div>

            {/* Main Content */}
            <div className='flex flex-col items-center md:items-start'>
                {/* Mobile Greeting */}
                <motion.h1 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                    className='md:hidden text-3xl sm:text-4xl font-medium text-neutral-300 mb-4'
                >
                    Hi, I am Abdullah
                </motion.h1>

                {/* Developer Text */}
                <motion.p 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}
                    className='text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-300 leading-tight'
                >
                    A Developer <br /> Dedicated to Crafting
                </motion.p>

                {/* Flip Words */}
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5 }}
                    className='my-2 md:my-0'
                >
                    <FlipWords
                        className='font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white' 
                        words={words} 
                    />
                </motion.div>

                {/* Web Solutions Text */}
                <motion.p 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.8 }}
                    className='text-3xl sm:text-4xl md:text-4xl font-medium text-neutral-300'
                >
                    Web Solutions
                </motion.p>
            </div>
        </div>
    )
}

export default HeroText