"use client"
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { socialLinks } from "./config";

export default function Page() {

  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

  return (
    <section>
      <Image
        src="/vincentnguyenguitar.png"
        alt="Vincent Nguyen"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
        // style={{ borderRadius: '50%'}}
        unoptimized
        width={160}
        height={160}
        priority
      />

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hello! I'm Vincent Nguyen 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Originally from <a href="https://www.google.com/maps/place/Fredericton,+NB/@45.9454324,-66.7486524,18635m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4ca4220ba498fb2b:0xe7de2f297a415db4!8m2!3d45.9635895!4d-66.6431151!16zL20vMDJ3NzA!5m2!1e1!1e4?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" target="_blank">Fredericton, New Brunswick</a>
          . I'm currently studying Computer Science @ <a href="https://www.google.com/maps/dir/Fredericton,+New+Brunswick/University+of+Waterloo,+200+University+Ave+W,+Waterloo,+ON+N2L+3G1/@45.5824289,-76.2330032,784030m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x4ca4220ba498fb2b:0xe7de2f297a415db4!2m2!1d-66.6431151!2d45.9635895!1m5!1m1!1s0x882bf6ad02edccff:0xdd9df23996268e17!2m2!1d-80.5448576!2d43.4722854!3e0!5m2!1e1!1e4?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">University of Waterloo</a>! 💻
        </p>
        <p>
          Currently: <br></br>
          - Software Developer Intern @ <a href="https://en.wikipedia.org/wiki/Stealth_startup" target="_blank">Stealth</a> 😎<br></br>
          - Software Developer @ <a href="https://www.uwaft.ca/" target="_blank">UWaterloo EcoCAR Team</a> ⚡<br></br>
          - Web Developer @ <a href="https://electriummobility.com/" target="_blank">Electrium Mobility</a> 🚵
        </p>
        <p>
          Outside of school, you'll find me: <br></br>
          - Playing sports 🏉⚽<br></br>
          - Playing music & singing 🎹🎸<br></br>
          - Shooting <a href="photos">pictures</a> 📸<br></br>
          - Fishing 🎣<br></br>
          - Biking 🚵<br></br>
        </p>
        <p>
          Feel free to{" "}
          <a href="#contact">
            reach out
          </a>
          !
        </p>
        <p>↳ OR check out <a href="projects">what I've built</a>!</p>
      </div>
    </section>
  );
}
