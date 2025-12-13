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
                    Portfolio<span className='text-red-700 font-bold'>.</span>
                </h1>
            </Link>
            
            <div className='hidden xl:flex gap-8 items-center'>
            <Navbar />
            <Link href={"/contact"}> <Button>Hire me</Button> </Link>
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