"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
    console.log(pathname)
  return (
    <nav className="flex gap-8">
      {  links.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-red-700 border-b-2 border-red-700" } capitalize font-medium hover:text-red-700 transition-all`}>{link.name}</Link>
        })}
    </nav>
  )
}

export default Navbar