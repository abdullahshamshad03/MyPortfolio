"use client";

import { Description } from "@radix-ui/react-dialog";
import { info } from "console";
import { title } from "process";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { RiGraduationCapLine } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { animate, motion } from "framer-motion"


const Resume = () => {

  const about = {
    title: "About me",
    description: "Passionate about Data Science and AI, with hands-on experience in Machine Learning, Data analysis, and Web development. Currently pursuing Computer Science Engineering at Jamia Hamdard University, maintaining a CGPA of 8 and above. Demonstrated leadership in IEEE JHSB by managing committee members, mentored new volunteers, and contributed to strategic planning for society growth."
    ,

    info: [
      {
        fieldName: "Name :",
        fieldValue: "Abdullah Shamshad Khan"
      },
      {
        fieldName: "Phone :",
        fieldValue: "(+91) 9311382309"
      },
      {
        fieldName: "Nationality :",
        fieldValue: "Indian"
      },
      {
        fieldName: "Email :",
        fieldValue: "khanabd2303@gmail.com"
      },

      {
        fieldName: "Freelance :",
        fieldValue: "Available"
      },
      {
        fieldName: "Languages :",
        fieldValue: "English, Hindi"
      },
    ]
  }

  const education = {
    icon: <RiGraduationCapLine />,
    title: "My Education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, velit. Deleniti, unde? In, eius veritatis, necessitatibus quaerat ab nam sed illo, itaque alias quos dolore neque!",

    items: [
      {
        institution: "Jamia Hamdard",
        degree: "B.Tech CSE",
        duration: "2022-2026",
        percentage: "80%"
      },
      {
        institution: "Cambridge School",
        degree: "12th Board",
        duration: "2022",
        percentage: "79%"
      },
      {
        institution: "Cambridge School",
        degree: "10th Board",
        duration: "2020",
        percentage: "78%"
      }
    ]

  }
  const skills = {
    title: "My Skills",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium in dignissimos incidunt ipsum illo reiciendis? Ab aut deserunt praesentium dolorum labore placeat repellat porro provident et, optio libero quis quaerat laudantium voluptatibus natus nobis blanditiis? Est nemo voluptas qui dignissimos, nulla saepe eum possimus! Dolor?",

    skillList: [
      {
        name: "html5",
        icon: <FaHtml5 />
      },
      {
        name: "css",
        icon: <FaCss3Alt />
      },
      {
        name: "java",
        icon: <FaJava />
      },
      {
        name: "node.js",
        icon: <FaNodeJs />
      },
      {
        name: "react.js",
        icon: <FaReact />
      },
      {
        name: "javascript",
        icon: <FaJs />
      },
      {
        name: "tailwind.css",
        icon: <SiTailwindcss />
      },
      {
        name: "next.js",
        icon: <SiNextdotjs />
      },


    ]
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        {
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" }
        }}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-row justify-center items-center gap-12">
          <TabsList className="flex flex-col items-stretch mx-0 w-full  max-w-[380px] gap-6 bg-transparent ">
            <TabsTrigger value={"about"} className="text-white  data-[state=active]:text-black cursor-pointer">About Me</TabsTrigger>
            <TabsTrigger value={"education"} className="text-white cursor-pointer data-[state=active]:text-black">Education</TabsTrigger>
            <TabsTrigger value={"skills"} className="text-white cursor-pointer data-[state=active]:text-black">My Skills</TabsTrigger>
          </TabsList>
        
          <div className=" h-[80vh] w-full">
            {/* content */}

       

            <TabsContent value="about" >
              <div className="flex flex-col gap-[30px] text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/85 mx-0"> {about.description} </p>

                <ul className="grid grid-cols-2 gap-y-6 max-w-[620px] mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex justify-start gap-4 items-center">
                      <span className="text-white/70">{item.fieldName} </span>
                      <span className="text-xl">{item.fieldValue} </span>

                    </li>
                  })}
                </ul>


              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/85 mx-0"> {education.description} </p>
                <ScrollArea className="h-[400px]  ">

                <ul className="grid grid-cols-2 gap-[30px] max-w-[620px] mx-0">
                  {education.items.map((item, index) => {
                    return (<li key={index} className="flex flex-col bg-[#242425] gap-1 h-[184px] px-10 py-6 rounded-3xl items-start justify-center">
                      <span className="text-red-700">{item.duration} </span>
                      <span className="text-white/70">{item.institution} </span>
                      <span className="text-xl">{item.degree} </span>
                      <span className="text-xl">{item.percentage} </span>

                    </li>)
                  })}
                </ul>
                  </ScrollArea>


              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]  ">
                <div className="flex flex-col text-left gap-[30px]">
                  <h3 className="text-4xl font-bold"> {skills.title} </h3>
                  <p className="text-white/90 mx-0 max-w-[600]"> {skills.description}</p>
                </div>
                <ul className="grid grid-cols-4 gap-[30px] m-4 ">
                  {skills.skillList.map((item,index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl justify-center flex items-center group ">
                            <div className="text-6xl group-hover:text-red-700 transition-all duration-300"> {item.icon} </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">
                            {item.name}

                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>

            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume