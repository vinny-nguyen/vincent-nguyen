"use client";
import React from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

interface ProfileImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export default function ProfileImageModal({
  isOpen,
  onClose,
  imageUrl,
}: ProfileImageModalProps) {
  if (!isOpen) return null;

  return (
    <CSSTransition
    in={isOpen}
    timeout={300}
    classNames="modalImage"
    unmountOnExit
    >

    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
      "
      onClick={onClose} // clicking the overlay closes the modal
    >
      {/* Blur/dim overlay */}
      <div
        className="
          absolute inset-0
          bg-black/50
          backdrop-blur-sm
        "
      />

      {/* Image container */}
      <div
        className="relative p-4 z-50"
        onClick={(e) => e.stopPropagation()} // prevent overlay click 
      >
        <Image
          src={imageUrl}
          alt="Vincent Nguyen Zoom"
          width={600}
          height={600}
          className="
          rounded-full object-cover w-600 h-600 relative border-4
        border-stone-200 dark:border-stone-700 
        bg-stone-50 dark:bg-stone-800 shadow-lg 
          lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto 
          sm:float-right sm:ml-5 sm:mb-5
          hover:grayscale-0"
        />
      </div>
    </div>
    </CSSTransition>
  );
}
