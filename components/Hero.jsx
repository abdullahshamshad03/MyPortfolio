"use client"
import ParallaxBackground from '@/components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import HeroText from './HeroText'
import { Astronaut } from './ui/astronaut'
import { Suspense } from 'react'


const Hero = () => {

  return (
    <section className='flex flex-col items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space relative z-20'>
      <ParallaxBackground />
      <div className='w-full max-w-6xl flex justify-center relative text-white z-10'>
        <HeroText />
      </div>
      
      <div 
        className='absolute top-0 left-0 pointer-events-none z-0'
        style={{
          width: "100vw",
          height: "100vh"
        }}
      >
        <Canvas 
          camera={{ position: [0, 1, 3] }}
          gl={{ preserveDrawingBuffer: true }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Astronaut
              scale={0.23}
              position={[1.5, -1.5, 0]}
            />
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Hero