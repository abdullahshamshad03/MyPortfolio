"use client"
import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
const Footer = ({containerStyles, iconStyles}) => {
    const socials = [
        {icon: FaGithub, path: "https://github.com/abdullahshamshad03"},
        {icon: FaLinkedin, path: "https://www.linkedin.com/in/abdullah2309/"},
    ]
  return (
    <div className="${containerStyles} p-2 flex gap-4" >
       { socials.map((social, index)=>{
        const Icon = social.icon;
            return <Link key={index} href={social.path} target='_blank' className={iconStyles}>
                <Icon className='text-4xl' />
            </Link>
        })}
    </div>
  )
}

export default Footer