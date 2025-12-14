"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const contact = () => {
    const [result, setResult] = useState("");

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4dceb5f7-feba-4f87-b2f8-2e30a341b545");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
    return (
        <div className='relative w-full px-[12%] py-4 bg-background mt-5 '>
            <h3 className=' text-xl pb-3 text-center'>
                Connect With Me
            </h3>

            <h2 className='text-5xl font-semibold text-center'>
                Get in Touch
            </h2>
            <form className='max-w-2xl mx-auto ' onSubmit={onSubmit}>
                <div className='grid grid-cols-auto mt-10 mb-8'>
                    <label htmlFor="">Name</label>
                    <Input type="name" name='name' placeholder='Enter your name' required className='flex-1 pl-5 border-[0.5px] p-2 outline-none border-gray-400 mb-3' />

                    <label htmlFor="">Email</label>
                    <Input type="email" name='email' placeholder='Enter your email' required className='flex-1 pl-5 border-[0.5px] p-2 outline-none border-gray-400' />
                </div>
                <label htmlFor="">Message</label>
                <Textarea name="message" cols={6} placeholder='Type your Message' className='outline-none border-[0.5px] w-full resize-none p-3 border-gray-400'></Textarea>

                <div className='flex justify-center'>
                    <Button variant="ghost" className='mt-3 p-5 cursor-pointer rounded-lg flex items-center' >Submit </Button>
                </div>

                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}

export default contact