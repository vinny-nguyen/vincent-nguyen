import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { Cedarville_Cursive } from "next/font/google";

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: ["400"],
});

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between mt-6">
          <Link 
          href="/" 
          className={`
            text-5xl font-semibold tracking-tight 
            bg-clip-text bg-cover bg-center
            ${cedarville.className}`}
          style={{
            backgroundImage: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
            textShadow: "rgba(0, 0, 0, 0.3) 0px 0px 15px",
          }}
          >
            {metaData.title}
          </Link>
          {/* <strong 
            className=
            "text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-cover bg-center px-2 py-0"
            style={{
              backgroundImage: "url('/pictures/ottawa.jpeg')",
              textShadow: "rgba(252, 192, 0, 0.35) 0px 0px 15px",
            
            }}
            >
            Vincent
          </strong>! 👋 */}
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-50 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200
              flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
