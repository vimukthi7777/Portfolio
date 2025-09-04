
import { Canvas } from '@react-three/fiber';
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Robo } from "../components/Robo";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth:853});
    const text = `I help growing brands and startups gain an
                           unfair advantage through premium
                           results driven webs/apps`;

        
  return (
    <section
        id="home"
        className="flex flex-col justify-end min-h-screen overflow-hidden">
            <AnimatedHeaderSection 
                subTitle={"404 No Bugs Found"} 
                title={"Vimukthi"} 
                text={text} 
                textColor={"text-black"}
                />
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
