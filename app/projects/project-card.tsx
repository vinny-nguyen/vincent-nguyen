import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
// import { LucideExternalLink } from "lucide-react";

interface ProjectCardProperties {
    title: string;
    description: string;
    url: string;
    github: string;
    tags: string[];
    picture: string;
}

export function ProjectCard({
    title,
    description,
    url,
    github,
    tags,
    picture,
}: ProjectCardProperties) {
    return
    <div className="border text-card-foreground group rounded-none border-none bg-accent/60">

    </div>
}