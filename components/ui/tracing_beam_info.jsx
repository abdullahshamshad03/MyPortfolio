"use client";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export function TracingBeamInfo() {
    return (
        <TracingBeam className="px-0 md:px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {Content.map((item, index) => (
                    <div 
                        key={`content-${index}`} 
                        className="mb-8 md:mb-10 bg-[#232329]/50 border-white/80 border-2 p-4 md:p-6 shadow-md shadow-[#d60209]/50 hover:shadow-xl transition-shadow rounded-2xl"
                    >
                        {/* Badge */}
                        <div className="flex justify-end mb-2">
                            <h2 className="text-white w-fit text-xs md:text-sm font-semibold px-3 md:px-4 py-1 bg-gray-700/20 rounded-full border">
                                {item.badge}
                            </h2>
                        </div>

                        {/* Title */}
                        <p className={twMerge(
                            geistMono.className, 
                            "text-xl md:text-2xl text-[#cf151b] mb-3 md:mb-4 font-bold"
                        )}>
                            {item.title}
                        </p>

                        {/* Academics and Duration */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center mb-4">
                            <p className="text-base md:text-lg font-semibold m-0 text-white">
                                {item.academics}
                            </p>
                            <span className="border text-gray-300 w-fit text-xs px-2 py-1 rounded-full whitespace-nowrap">
                                {item.duration}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="text-sm md:text-base lg:text-lg text-white/80 prose prose-sm dark:prose-invert max-w-none">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const Content = [
    {
        title: "Class 10th",
        description: (
            <>
                <p>
                    I completed my 10th grade from the CBSE board with a consistent academic record. I actively participated in extracurricular activities alongside academics. These experiences helped me develop teamwork, discipline, and leadership skills.
                </p>
            </>
        ),
        badge: "Schooling",
        academics: "Cambridge School",
        duration: "2019-2020"
    },
    {
        title: "Class 12th",
        description: (
            <>
                <p>
                    I completed my 12th grade from the CBSE board with Physics, Chemistry, and Mathematics (PCM). I maintained consistent academic performance with a strong focus on problem-solving and analytical thinking. This foundation strengthened my logical reasoning and quantitative skills.
                </p>
            </>
        ),
        badge: "Schooling",
        academics: "Cambridge School",
        duration: "2021-2022"
    },
    {
        title: "B.Tech CSE",
        description: (
            <>
                <p>
                    I am pursuing a B.Tech in Computer Science and Engineering, maintaining a CGPA of 8+. Along with web development, I have developed a strong interest in data-driven domains, particularly data science. Through coursework and hands-on projects, I continue to build practical skills in programming, problem-solving, and analytical thinking.
                </p>
            </>
        ),
        badge: "College",
        academics: "Jamia Hamdard",
        duration: "2024-2026"
    },
    {
        title: "Membership Lead - IEEE JHSB",
        description: (
            <>
                <p>
                    As the Membership Lead of IEEE JHSB, I managed and maintained accurate member data while leading initiatives to strengthen member engagement. I actively promoted the IEEE Membership Drive, contributing to increased participation and awareness within the student community. This role enhanced my organizational, communication, and leadership skills.
                </p>
            </>
        ),
        badge: "Leadership",
        academics: "Jamia Hamdard",
        duration: "2023-2024"
    },
    {
        title: "Vice-Chairperson - IEEE JHSB",
        description: (
            <>
                <p>
                    As the Vice Chairperson of IEEE JHSB, I played a key role in planning and coordinating technical events, workshops, and hackathons. I worked closely with the core team to ensure smooth execution of activities while mentoring members and supporting strategic initiatives. This role strengthened my leadership, decision-making, and team management skills.
                </p>
            </>
        ),
        badge: "Leadership",
        academics: "Jamia Hamdard",
        duration: "2025-present"
    },
    {
        title: "Calling Team Lead",
        description: (
            <>
                <p>
                    As the Calling Team Lead in the Placement Cell, I coordinated a team responsible for student–company communication and outreach. I ensured accurate information dissemination, maintained records, and supported smooth coordination during placement activities. This role enhanced my communication, leadership, and organizational skills.
                </p>
            </>
        ),
        badge: "Leadership",
        academics: "Jamia Hamdard",
        duration: "2024-2025"
    },
];