"use client"
import ParallaxBackground from '@/components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import HeroText from './HeroText'
import { Astronaut } from './ui/astronaut'
import { OrbitControls } from '@react-three/drei'


const Hero = () => {
    
  return (
        <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space relative'>
            <div className='w-full max-w-6xl flex justify-center relative '>
            <HeroText />
            </div>
            <ParallaxBackground />
            <figure className='absolute inset-0 pointer-events-none'
            style = {{
            width: "100vw",
            height: "100vh"  
            }}
            >
            <Canvas camera={
                {position:[0,1,3]}
                }>
                <Astronaut 
                scale={0.23}
                position = {[1.5, -1.5, 0]}
                 />
                <OrbitControls />
            </Canvas>   
            </figure>
        </section>
  )
}

export default Hero