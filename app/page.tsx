"use client"
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { socialLinks } from "./config";
import ProfileImageModal from "./components/profile-modal";
import { FiDownload } from "react-icons/fi";

export default function Page() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const OpenModal = () => setIsModalOpen(true);
  const CloseModal = () => setIsModalOpen(false);

  return (
    <section>
      <div className="relative w-48 h-48 mx-auto sm:float-right sm:ml-5 sm:mb-5 top-[-30px]">
        <Image
          src="/pictures/vincentnguyenguitar.png"
          alt="Vincent Nguyen"
          className="
            rounded-full w-full h-full relative border-4
          border-stone-200 dark:border-stone-700
          bg-stone-50 dark:bg-stone-800 shadow-lg 
            block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto
            hover:grayscale-0 cursor-pointer
            transition-transform duration-300 hover:scale-105
            group-hover:opacity-0"
          // className="w-48 h-48 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800"
          unoptimized
          width={160}
          height={160}
          priority
          onClick={OpenModal}
        />

        {/* <Image
            src="/pictures/vincentnguyenguitarzoom.png"
            alt="Retro Vincent Nguyen"
            className="rounded-full w-full h-full absolute inset-0 border-4 border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 shadow-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            unoptimized
            width={160}
            height={160}
            priority
        /> */}

        <img className="
        absolute bottom-[-10px] right-[-10px] 
        sm:bottom-[-30px] sm:right-[-20px] 
        w-14 sm:w-20 text-4x1 block dark:hidden
        transition-transform duration-300 hover:scale-150" style={{ opacity: 1, transform: "scale(1.1)" }}
          draggable="false"
          alt="🔥"
          loading="lazy"
          width={80}
          height={80}
          decoding="async"
          src="/pictures/fire.png"
          // style={{ color: "transparent" }}   
        />

        <img className="
        absolute bottom-[-10px] right-[-10px]
        sm:bottom-[-30px] sm:right-[-20px] 
        w-14 sm:w-20 text-4x1 hidden dark:block
        transition-transform duration-300 hover:scale-150" style={{ opacity: 1, transform: "scale(1.1)" }}
          draggable="false"
          alt="🪐"
          loading="lazy"
          width={80}
          height={80}
          decoding="async"
          src="/pictures/saturn.png"
          // style={{ color: "transparent" }}   
        />
      </div>

      <ProfileImageModal
        isOpen = {isModalOpen}
        onClose = {CloseModal}
        imageUrl="/pictures/vincentnguyenguitar.png"
      />

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi there, I'm Vincent! 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Growing up in <a href="https://www.google.com/maps/place/Fredericton,+NB/@45.9454324,-66.7486524,18635m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4ca4220ba498fb2b:0xe7de2f297a415db4!8m2!3d45.9635895!4d-66.6431151!16zL20vMDJ3NzA!5m2!1e1!1e4?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" target="_blank">Fredericton, New Brunswick</a>
          , I'm currently studying CS @ <a href="https://cs.uwaterloo.ca/" target="_blank">University of Waterloo</a>.
        </p>
        <p>
          Currently: <br></br>
          • Software Engineer Intern @ <a href="https://en.wikipedia.org/wiki/Stealth_startup" target="_blank">Stealth Startup</a> 😎<br></br>
          • Software Developer @ <a href="https://www.uwaft.ca/" target="_blank">UWaterloo EcoCAR Team</a> ⚡<br></br>
          • Web Developer @ <a href="https://electriummobility.com/" target="_blank">Electrium Mobility</a> 🚵
        </p>

        <button 
          onClick={() => window.open("/vincent.pdf", "_blank")}
          className="px-8 py-2 lg:mt-5 mt-0 lg:mb-5 mb-10 flex items-center gap-2 rounded-md bg-stone-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-stone-500"><span>Download my Resume</span><FiDownload/></button>

        {/* <p>
          Outside of school, you'll find me: <br></br>  
          • Playing sports 🏉🏋️<br></br>
          • Playing <a href="https://www.youtube.com/@vincent.nguyen7/featured" target="_blank">music</a> & singing 🎹🎸<br></br>
          • Shooting <a href="photos">pictures</a> 📸<br></br>
          • Biking 🚵
        </p> */}
        <p>
          Feel free to take a look at my{" "}
          <a href="photos">
            Photos
          </a>
          !
        </p>
        <p>↳ OR check out <a href="projects">what I've built</a>!</p>
      </div>
    </section>
  );
}
