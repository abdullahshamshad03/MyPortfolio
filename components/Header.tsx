import Link from 'next/link'
import { Button } from './ui/button'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='py-6 md:py-8 relative z-50 bg-background'>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
            {/* Logo */}
            <Link href="/">
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                    Portfolio<span className='text-red-700 font-bold'>.</span>
                </h1>
            </Link>

            {/* Navbar */}
            <Navbar />

            {/* Download CV Button - Desktop Only */}
            <div className='hidden md:flex items-center'>
                <Button asChild variant="ghost">
                    <a href="/college_resume.pdf" download> 
                        Download CV
                    </a>
                </Button> 
            </div>
        </div>
    </header>
  )
}

export default Header