import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const text = `I transform ideas into wireframes and prototypes
    build them into seamless applications
    across web and mobile`;
    const aboutText = `Passionate about turning ideas into real, functional applications, I specialize in building smooth, responsive UI/UX and full-stack solutions. From designing intuitive interfaces to developing robust backend APIs, I bring concepts to life using MERN and Flutter, creating Web and Mobile apps that are both user-friendly and high-performing.
From Design to Code :
⚡ Crafting intuitive UI/UX designs and prototypes that delight users
💻 Developing full-stack web apps with frontend, backend, and RESTful APIs
📱 Creating cross-platform mobile apps with Flutter
🧠 Solving problems, learning new technologies, and experimenting with code
🌐 Building and customizing websites using WordPress`;
    const imgRef = useRef(null);

     useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
   <section id="about" className="min-h-screen bg-black rounded-b-4xl">
    <AnimatedHeaderSection 
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
        />
        <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide
        lg:flex-row md:text-2xl lg:text-3xl text-white/60">
            <img ref={imgRef} src="images/me.png" alt="me" className="w-md rounded-3xl" />
            <AnimatedTextLines text={aboutText} className={"w-full"}/>
        </div>

   </section>
  )
}

export default About
