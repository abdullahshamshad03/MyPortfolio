"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "./ui/button"

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "project",
        path: "/project"
    },
    {
        name: "journey",
        path: "/journey"
    },
    {
        name: "contact",
        path: "/contact"
    }
]

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
                {links.map((link, index) => {
                    return (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${link.path === pathname && "text-red-700 border-b-2 border-red-700"} capitalize font-medium hover:text-red-700 transition-all text-sm lg:text-base`}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
            
            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col gap-1.5 z-50 relative"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-8 px-8 max-w-md w-full">
                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-6 text-center w-full">
                                {links.map((link, index) => {
                                    return (
                                        <Link 
                                            href={link.path} 
                                            key={index} 
                                            onClick={() => setIsOpen(false)}
                                            className={`${link.path === pathname && "text-red-700"} text-2xl capitalize font-medium hover:text-red-700 transition-all`}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                })}
                            </nav>

                            {/* Download CV Button in Mobile Menu */}
                            <div className="mt-4 w-full flex justify-center">
                                <Button 
                                    asChild 
                                    variant="ghost" 
                                    className="w-full max-w-xs px-8 py-6 text-lg hover:bg-red-700 hover:text-white transition-colors border border-white/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <a href="/college_resume.pdf" download> 
                                        Download CV
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar