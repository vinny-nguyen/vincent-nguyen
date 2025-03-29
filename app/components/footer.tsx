"use client";

import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      {/* <SocialLink href={socialLinks.twitter} icon={FaXTwitter} /> */}
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="block lg:mt-7 mt-8 pb-10 text-[#1C1C1C] dark:text-[#D4D4D4]">
      {/* UW CS Webring Button: */}
      <div className="flex items-center float-right gap-2 mb-4">
        <a 
        href="https://cs.uwatering.com/#vinny-nguyen.vercel.app?nav=prev"
        className="text-xl"
        >←</a>
        <a 
          href="https://cs.uwatering.com/#vinny-nguyen.vercel.app" 
          target='_blank'
          rel="noopener noreferrer">
            {/* Light mode */}
            <img
              src="https://cs.uwatering.com/icon.black.svg"
              alt="CS Webring"
              style={{ width: "24px", height: "auto", opacity: 0.8 }}
              className="dark:hidden"
            />
            {/* Dark mode */} 
            <img
              src="https://cs.uwatering.com/icon.white.svg"
              alt="CS Webring (Dark)"
              style={{ width: "24px", height: "auto", opacity: 0.8 }}
              className="hidden dark:block"
            />
        </a>
        <a 
          href="https://cs.uwatering.com/#vinny-nguyen.vercel.app?nav=next"
          className="text-xl"
        >→</a>
      </div>

      {/* Copyright + Social Media links: */}
      <div className="flex items-center justify-between w-full">
        <div className="text-sm">
          <time>© {YEAR}</time>{" "}
          <a className="no-underline" target="_blank" rel="noopener noreferrer">
            {metaData.title}
          </a>
        </div>
      
        <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
        `}</style>
      
      <SocialLinks />
      </div>
      
    </footer>
  );
}
