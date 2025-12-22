import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Navbar from './Navbar'
const Header = () => {
  return (
    <header className='py-8 relative z-50 bg-background'>
        <div className="container mx-auto flex justify-between items-center ">
            <Link href="/">
                <h1 className='text-4xl font-semibold '>
                    Portfolio<span className='text-[#18CCFC]/85 font-bold'>.</span>
                </h1>
            </Link>
            <Navbar />
            <div className='hidden xl:flex gap-8 items-center cursor-pointer'>
              <Button asChild variant="ghost">
            <a href={"/college_resume.pdf"} download> 
            Download CV
            </a>
            </Button> 
            </div>
            
            
            {/* mobile nav */}
            <div className="xl:hidden">
              mobile view
            </div>

        </div>
    </header>
  )
}

export default Header