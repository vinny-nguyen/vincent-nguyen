import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section // Convert ALL photos to .png files
    >
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Photos 📸</h1>

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/IMG_2763.png", alt: "QNC Rock Garden" },
          { src: "/photos/IMG_2179.png", alt: "Green Stairs" },
          { src: "/photos/IMG_3058.png", alt: "Strawhat" },
          { src: "/photos/IMG_2251 (2).png", alt: "Stop Sign" },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/IMG_3050.png", alt: "Fall Lampost" },
          { src: "/photos/IMG_3129.png", alt: "Autumn Leaves" },
          { src: "/photos/IMG_3191.png", alt: "REV Leaves" },
          { src: "/photos/IMG_3189.png", alt: "MKV Leaves" },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/FreddyYacht.png", alt: "Fall Lampost" },
          { src: "/photos/FreddySunset.png", alt: "REV Leaves" },
          { src: "/photos/NiagaraBoat.png", alt: "Autumn Leaves" },
          { src: "/photos/ChurchSunset.png", alt: "MKV Leaves" },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/Goose.png", alt: "REV Leaves" },
          { src: "/photos/NiagaraRock.png", alt: "Autumn Leaves" },
        ]}
      />

      {/* <ImageGrid
        columns={2}
        images={[
          { src: "/photos/Vancouver.png", alt: "Vancouver" },
          { src: "/photos/Hiking.jpg", alt: "Hiking" },
          { src: "/photos/Roger.png", alt: "Roger" },
          { src: "/photos/Sloth.jpg", alt: "Sloth" },
        ]}
      /> */}

      {/* <ImageGrid
        columns={2}
        images={[
          { src: "/photos/Snowtree.jpg", alt: "Snowtree" },
          { src: "/photos/Latenightwinterwalk.jpg", alt: "Late Night Winter Walk" },
          { src: "/photos/Rock Garden.jpg", alt: "Rock Garden" },
          { src: "/photos/Snowstorm.jpg", alt: "Snowstorm" },
        ]}
      /> */}

      {/* <ImageGrid
        columns={2}
        images={[
          { src: "/photos/IMG_3127.png", alt: "Biking Guy" },
          { src: "/photos/IMG_2633.png", alt: "Falling Leaves" },
          { src: "/photos/IMG_2991.png", alt: "Golden Hour" },
          { src: "/photos/IMG_2994.jpg", alt: "Golden Physics" },
        ]}
      /> */}

    </section>
  );
}
