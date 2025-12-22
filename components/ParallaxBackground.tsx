import React from 'react'
import Header from './Header'

const parallaxBackground = () => {
  return (
    <div>
        <section className='absolute inset-0 bg-black/40 pointer-events-none'>
            <div className='relative h-screen overflow-y-hidden'>
                {/* Background Sky */}
                <div className='absolute inset-0 w-full h-screen -z-50' 
                style={{
                    backgroundImage: "url(/assets/sky.jpg)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }}
                />
                {/* Mountain Layer 3 */}
                <div className='absolute inset-0 w-full h-screen -z-40' 
                style={{
                    backgroundImage: "url(/assets/mountain-3.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"  
                }}
                     />
                {/* Planets */}
                <div className='absolute inset-0 w-full h-screen -z-30' 
                style={{
                    backgroundImage: "url(/assets/planets.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"  
                }} />
                {/* Mountain Layer 2 */}
                <div className='absolute inset-0 w-full h-screen -z-20' 
                style={{
                    backgroundImage: "url(/assets/mountain-2.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"  
                }} />
                {/* Mountain Layer 1 */}
                <div className='absolute inset-0 w-full h-screen -z-10' 
                style={{
                    backgroundImage: "url(/assets/mountain-1.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"  
                }} />
            </div>
        </section>
    </div>
  )
}

export default parallaxBackground