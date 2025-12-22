"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

import Footer from '@/components/Footer';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "4dceb5f7-feba-4f87-b2f8-2e30a341b545");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <div className='relative mt-5 flex justify-center items-center gap-6'>
                <ShootingStars className=' fixed inset-0 -z-10 pointer-events-none' />
                <StarsBackground className=' fixed inset-0 -z-20 pointer-events-none' />

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" } }} className=' w-full max-w-xl p-8     rounded-3xl  '>

                    {/* <StarsBackground className='pointer-events-none' /> */}
                    <h3 className=' text-2xl pb-3'>
                        Let's work together
                    </h3>

                    <h2 className='text-6xl  font-semibold'>
                        Get in Touch
                    </h2>

                    <form className='w-full max-w-xl py-4' onSubmit={onSubmit}>
                        <div className='grid grid-cols-1 mt-3 mb-8'>
                            <label htmlFor="">Name</label>
                            <Input type="name" name='name' placeholder='Enter your name' required className='flex-1 pl-5 border-[0.5px] p-2 outline-none border-gray-400 mb-3' />

                            <label htmlFor="">Email</label>
                            <Input type="email" name='email' placeholder='Enter your email' required className='flex-1 pl-5 border-[0.5px] p-2 outline-none border-gray-400' />
                        </div>
                        <label htmlFor="">Message</label>
                        <Textarea name="message" cols={20} placeholder='Type your Message' className='outline-none border-[0.5px] w-full max-w-full resize-none p-3 border-gray-400'></Textarea>

                        <div className='flex justify-start'>
                            <Button variant="ghost" className='mt-3 p-5 cursor-pointer rounded-full flex items-center'>Submit </Button>
                        </div>

                        <motion.p initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.5, duration: 1, ease:"easeIn"}}} className='text-center'>{result}</motion.p>
                    </form>

                </motion.div>

                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" } }} className='flex flex-col items-start   justify-end w-full md:w-1/2 lg:w-1/4 px-6 py-0  '>

                        <div className='flex flex-col justify-center gap-8 py-14 '>
                                <div className='flex gap-4 justify-start items-start'>
                                        <FaEnvelope className='w-12 h-12  text-white p-2 '/>
                                        <div>
                                        <span className='text-md'>Email</span>
                                        <p className='text-lg'>khanabd@gmail.com</p>
                                        </div>
                                </div>
                                <div className='flex gap-4 justify-start items-center'>
                                        <FaPhone className='w-12 h-12 text-white p-2 '/>
                                        <div>
                                        <span className='text-md'>Phone</span>
                                        <p className='text-lg'>(+91) 93113-82309</p>
                                        </div>
                                </div>
                                <div className='flex gap-4 justify-start items-center'>
                                        <FaMapMarkerAlt className='w-12 h-12  text-white p-2 '/>
                                        <div>
                                        <span className='text-md'>Location</span>
                                        <p className='text-lg'>Batla House, Okhla, New-Delhi</p>
                                        </div>
                                </div>
                        </div>
                        <Footer />


                 </motion.div>

                 
                 
           
           
            </div>
    )
}

export default Contact