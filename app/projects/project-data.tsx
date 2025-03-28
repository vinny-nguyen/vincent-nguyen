export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  summary: string;
  tags: string[];
  picture: string;
}

export const projects: Project[] = [
  {
    title: "TheRiffler", 
    year: 2025,
    description: "Hack Canada 2025 Finalist 🏆", 
    url: "https://github.com/vinny-nguyen/TheRiffler", 
    summary: "", 
    tags: [],
    picture: "", 
  },
  {
    title: "OuiCare",
    year: 2025,
    description: "DeltaHacks XI",
    url: "https://github.com/shadielfares/deltahacks",
    summary: "",
    tags: [],
    picture: "",
  },
  {
    title: "WatClub",
    year: 2024,
    description: "UW CS Club Best Project 🏆",
    url: "https://github.com/Brucewang15/WatClub",
    summary: "",
    tags: [],
    picture: "",
  },
  {
    title: "IntroSpectacle",
    year: 2024,
    description: "Hack the North 2024",
    url: "https://github.com/vinny-nguyen/IntroSpectacle",
    summary: "",
    tags: [],
    picture: "",
  },
];
