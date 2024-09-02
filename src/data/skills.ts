import { SiNextdotjs } from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import androidStudioicon from "@/public/icons/android-studio-icon.svg";
import xcodeSvg from "@/public/icons/app-store.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      // {
      //   name: "HTML",
      //   icon: HtmlSvg,
      // },
      // {
      //   name: "CSS",
      //   icon: CsssSvg,
      // },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "React Native",
        icon: ReactjsSvg,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
      },
    ],
  },
  // {
  //   sectionName: "Backend",
  //   skills: [
  //     {
  //       name: "Nodejs",
  //       icon: NodejsSvg,
  //     },
  //     {
  //       name: "Express",
  //       icon: SiExpress,
  //     },
  //     {
  //       name: "Socket.io",
  //       icon: SiSocketdotio,
  //     },
  //     {
  //       name: "Flask",
  //       icon: SiFlask,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Databases and ORMs",
  //   skills: [
  //     {
  //       name: "MongoDB",
  //       icon: MongoDBSvg,
  //     },
  //     {
  //       name: "Postgress",
  //       icon: PostgressSvg,
  //     },
  //     {
  //       name: "Prisma",
  //       icon: SiPrisma,
  //     },
  //   ],
  // },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      // {
      //   name: "Docker",
      //   icon: DockerSvg,
      // },
      // {
      //   name: "AWS",
      //   icon: AwsSvg,
      // },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Android Studio",
        icon: androidStudioicon,
      },
      {
        name: "Xcode",
        icon: xcodeSvg,
      },
    ],
  },
];
