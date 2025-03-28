import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Photos</h1>
      {/* <ImageGrid
        columns={2}
        images={[
          { src: "/photos/Vancouver.png", alt: "Vancouver" },
          { src: "/photos/Hiking.jpg", alt: "Hiking" },
          { src: "/photos/Roger.png", alt: "Roger" },
          { src: "/photos/Sloth.jpg", alt: "Sloth" },
        ]}
      /> */}

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/IMG_2763.jpg", alt: "QNC Rock Garden" },
          { src: "/photos/IMG_2179.png", alt: "Green Stairs" },
          { src: "/photos/IMG_3058.jpg", alt: "Strawhat" },
          { src: "/photos/IMG_2251 (2).png", alt: "Stop Sign" },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/IMG_3050.jpg", alt: "Fall Lampost" },
          { src: "/photos/IMG_3129.png", alt: "Autumn Leaves" },
          { src: "/photos/IMG_3191.jpg", alt: "REV Leaves" },
          { src: "/photos/IMG_3189.jpg", alt: "MKV Leaves" },
        ]}
      />

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
