"use client";

import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJs, FaJava, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiExpress, SiFastapi, SiScikitlearn, SiPandas } from "react-icons/si";
import { RiGraduationCapLine } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"

const Resume = () => {

  const about = {
    title: "About me",
    description: "Passionate about Web Development with hands-on experience in building responsive and user-focused applications using modern frontend and backend technologies. Alongside this, I have practical exposure to data analysis and machine learning fundamentals, enabling me to integrate data-driven features into applications. Currently pursuing Computer Science Engineering at Jamia Hamdard University with a CGPA of 8 and above. Actively involved in IEEE JHSB, where I have demonstrated leadership by managing committee members, mentoring new volunteers, and contributing to strategic planning and technical initiatives for the society's growth.",

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
    description: (
      <>
        I completed my secondary (Class 10) and senior secondary (Class 12) education with a strong academic foundation in science and mathematics. I am currently pursuing my Bachelor of Technology (B.Tech) and am in my final year, where my academic focus has been on computer science–related subjects, problem-solving, and applied technology.
        <br />
        Alongside my formal education, I have strengthened my practical skills by completing basic and intermediate Machine Learning certifications from Kaggle, gaining hands-on experience in Python, data analysis, and model building. I am an active IEEE member and currently serve as the Vice Chairperson of IEEE JHSB, where I have been involved in organizing technical events, coordinating academic activities, and contributing to student-led initiatives.
      </>
    ),
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
      },
      {
        institution: "Intro to Machine Learning",
        degree: "Kaggle",
        duration: "2025",
        
      },
      {
        institution: "Intermediate Machine Learning",
        degree: "Kaggle",
        duration: "2025",
        
      },
    ]
  }

  const skills = {
    title: "My Skills",
    description: "Motivated and detail-oriented developer with hands-on experience in web development and machine learning fundamentals. Skilled in building responsive web applications using HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS, along with backend development using Node.js, Express.js, and FastAPI. Proficient in Python, Pandas, Scikit-learn, and data analysis, with experience working on real-world projects and deploying applications. Eager to learn, contribute, and grow in a collaborative, industry-driven environment.",

    categories: [
      {
        title: "Languages",
        skills: [
          { name: "Python", icon: <FaPython /> },
          { name: "JavaScript", icon: <FaJs /> },
          { name: "Java", icon: <FaJava /> },
        ]
      },
      {
        title: "Frameworks & Tools",
        skills: [
          { name: "React.js", icon: <FaReact /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "TailwindCSS", icon: <SiTailwindcss /> },
          { name: "FastAPI", icon: <SiFastapi /> },
          { name: "Express.js", icon: <SiExpress /> },
          { name: "Node.js", icon: <FaNodeJs /> },
          { name: "HTML5", icon: <FaHtml5 /> },
          { name: "CSS3", icon: <FaCss3Alt /> },
        ]
      },
      {
        title: "Database & Tools",
        skills: [
          { name: "MySQL", icon: <SiMysql /> },
          { name: "MongoDB", icon: <SiMongodb /> },
          { name: "Git", icon: <FaGitAlt /> },
        ]
      },
      {
        title: "Machine Learning/AI",
        skills: [
          { name: "Pandas", icon: <SiPandas /> },
          { name: "Scikit-Learn", icon: <SiScikitlearn /> },
        ]
      },
    ]
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-8 px-4 lg:px-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <TabsList className="flex flex-row lg:flex-col items-stretch mx-0 w-full lg:max-w-[380px] gap-4 lg:gap-6 bg-transparent overflow-x-auto">
            <TabsTrigger value={"about"} className="text-white data-[state=active]:text-black cursor-pointer whitespace-nowrap">About Me</TabsTrigger>
            <TabsTrigger value={"education"} className="text-white cursor-pointer data-[state=active]:text-black whitespace-nowrap">Education</TabsTrigger>
            <TabsTrigger value={"skills"} className="text-white cursor-pointer data-[state=active]:text-black whitespace-nowrap">My Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[60vh] lg:h-[80vh] w-full lg:w-full">
            {/* About Tab */}
            <TabsContent value="about">
              <motion.div 
                className="flex flex-col gap-6 lg:gap-[30px] text-left"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" }
                }}
              >
                <h3 className="text-3xl lg:text-4xl font-bold">{about.title}</h3>
                <p className="max-w-full lg:max-w-[600px] text-white/85 mx-0 text-sm lg:text-base">{about.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-y-6 max-w-full lg:max-w-[620px] mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex flex-col sm:flex-row lg:flex-row justify-start gap-2 sm:gap-4 lg:gap-4 items-start sm:items-center lg:items-center">
                        <span className="text-white/70 text-sm lg:text-base">{item.fieldName}</span>
                        <span className="text-lg lg:text-xl break-all">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <motion.div 
                className="flex flex-col gap-6 lg:gap-[30px] text-left"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" }
                }}
              >
                <h3 className="text-3xl lg:text-4xl font-bold">{education.title}</h3>
                <p className="max-w-full lg:max-w-[600px] text-white/85 mx-0 text-sm lg:text-base">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-[30px] max-w-full lg:max-w-[620px] mx-0 pr-4">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="flex flex-col bg-[#242425] gap-1 px-6 lg:px-10 py-6 rounded-3xl items-start justify-center">
                          <span className="text-red-700 text-sm lg:text-base">{item.duration}</span>
                          <span className="text-white/70 text-sm lg:text-base">{item.institution}</span>
                          <span className="text-lg lg:text-xl">{item.degree}</span>
                          <span className="text-lg lg:text-xl">{item.percentage}</span>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full">
              <motion.div 
                className="flex flex-col gap-6 lg:gap-7.5"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" }
                }}
              >
                <div className="flex flex-col text-left gap-4 lg:gap-7.5">
                  <h3 className="text-3xl lg:text-4xl font-bold">{skills.title}</h3>
                  <p className="text-white/90 mx-0 max-w-full lg:max-w-[600px] text-sm lg:text-base">{skills.description}</p>
                </div>

                <ScrollArea className="h-auto lg:h-[450px]">
                  <div className="flex flex-col gap-8 pr-4">
                    {skills.categories.map((category, catIndex) => (
                      <div key={catIndex} className="flex flex-col gap-4">
                        <h4 className="text-xl lg:text-2xl font-semibold text-red-700">{category.title}</h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-7.5 m-0 lg:m-4">
                          {category.skills.map((item, index) => {
                            return (
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[100px] lg:h-37.5 bg-[#232329] rounded-xl justify-center flex items-center group">
                                      <div className="text-4xl lg:text-6xl group-hover:text-red-700 transition-all duration-300">{item.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{item.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume