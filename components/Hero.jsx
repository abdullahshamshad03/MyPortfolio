"use client"
import ParallaxBackground from '@/components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import HeroText from './HeroText'
import { Astronaut } from './ui/astronaut'


const Hero = () => {

  return (
    <section className='flex flex-col items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space relative z-20'>
      <ParallaxBackground />
      <div className='w-full max-w-6xl flex justify-center relative text-white'>
        <HeroText />
      </div>
      
      <div 
        className=' hidden md:block absolute inset-0 pointer-events-none z-0'
        style={{
          width: "100vw",
          height: "100vh"
        }}
      >
        <Canvas 
          camera={{ position: [0, 1, 3] }}
          style={{ width: '100%', height: '100%' }}
        >
          <Astronaut
            scale={0.23}
            position={[1.5, -1.5, 0]}
          />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>

    </section>
  )
}

export default Hero