import { useRef } from "react"
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from '@react-three/fiber';
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Robo } from "../components/Robo";

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth:853})
    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const aboutText = `I help growing brands and startups gain an
                       unfair advantage through premium
                       results driven webs/apps`;
        useGSAP(() => {
            const tl = gsap.timeline();
            tl.from(contextRef.current, {
                y: "50vh",
                duration: 1,
                ease: "circ.out",
            });
            tl.from(
                headerRef.current,
                {
                    opacity: 0,
                    y: "200",
                    duration: 1,
                    ease: "circ.out",
                },
                "<+0.2"
            );
        }, []);

        
  return (
    <section
        id="home"
        className="flex flex-col justify-end min-h-screen overflow-hidden">
            <div ref={contextRef}>
                <div style={{clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"}}>
                    <div
                    ref={headerRef}
                    className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
                        <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">404 No Bugs Found</p>
                        <div className="px-10">
                            <h1 className="flex flex-col flex-wrap gap-12  text-black uppercase banner-text-responsive sm:gap-16 md:block">Vimukthi</h1>
                        </div>
                    </div>
                </div>
                <div className="relative px-10 text-black">
                    <div className="absolute inset-x-0 border-t-2" />
                    <div className="py-12 sm:py-16 text-end">
                        <AnimatedTextLines text={aboutText} className="font-light uppercase value-text-responsive"/>
                    </div>
                </div>
            </div>
            <figure className="absolute inset-0 -z-50" style={{width: "100vw", height: "100vh"}}>
  <Canvas
    shadows
    camera={{
      position: isMobile ? [0, 5, 10] : [0, 3, 12],
      fov: isMobile ? 35 : 40,
      near: 0.1,
      far: 50
    }}
  >
    <ambientLight intensity={0.5} /> 
    <Float speed={1}>
      <Robo
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, -0.8, 0] : [0, -2, 0]}
      />
    </Float>
    
  </Canvas>
</figure>

    </section>
  )
}

export default Hero
