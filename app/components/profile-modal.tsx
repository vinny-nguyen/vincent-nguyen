"use client";
import React from "react";
import Image from "next/image";

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
          alt="Profile Zoom"
          width={600}
          height={600}
          className="rounded-md object-cover"
        />
        {/* Optional close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black/40 rounded-full px-2 py-1"
        >
          X
        </button>
      </div>
    </div>
  );
}
