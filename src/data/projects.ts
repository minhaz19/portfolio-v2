import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "M-lenz",
    href: "/projects",
    tags: ["React Native", "Redux toolkit", "Tanstack", "Background fetch"],
    image: {
      LIGHT: "/images/projects/m-lenz.jpeg",
      DARK: "/images/projects/m-lenz.jpeg",
    },
  },
  {
    index: 1,
    title: "Woofmeets",
    href: "/projects",
    tags: [
      "Reactjs",
      "Next js",
      "Tailwindcss",
      "React-router-dom",
      "Zustand",
      "Tanstack",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/woof.webp",
      DARK: "/images/projects/woof.webp",
    },
  },
  {
    index: 2,
    title: "Liveness Detection",
    href: "/projects",
    tags: ["React Native", "MLkit"],
    image: {
      LIGHT: "/images/projects/live-0.jpeg",
      DARK: "/images/projects/live-0.jpeg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "M-Lenz",
    favicon: "/images/projects/logos/app_logo.png",
    imageUrl: ["/images/projects/m-lenz.jpeg"],
    description:
      "Lead and Developed this project using React Native under the HawkEyes Digital Monitoring LTD. This is a mobile application for Unilever Market operations employee(CM, MS, DFF, MTCM, WMA) to manage their daily tasks.",
    // sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    // liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Nagad Pulse",
    favicon: "/images/projects/logos/tmr.webp",
    imageUrl: ["/images/projects/nagad.webp", "/images/projects/nagad-2.webp"],
    description:
      "Worked as a React Native developer on this project and Developed four React Native mobile applications for handling Overall (TM) operations for Nagad under the HawkEyes Digital Monitoring LTD.",
    // sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref:
      "https://play.google.com/store/apps/details?id=com.nagadapp",
  },
  {
    name: "Woofmeets",
    favicon: "/images/projects/logos/woofmeet_logo.avif",
    imageUrl: [
      "/images/projects/woof.webp",
      "/images/projects/image_original.webp",
      "/images/projects/image_original (1).webp",
      "/images/projects/image_original (2).webp",
    ],
    description:
      "Woofmeets is a petsmart platform that strives to knit pet monitors, pet sitters, boarders & groomers with pet owners in American cities. Application is made using Nextjs, Tailwindcss and Redux Toolkit.",
    sourceCodeHref: "https://github.com/minhaz19/PettyPaw",
    liveWebsiteHref: "https://woofmeets.com/",
  },
  {
    name: "Speech to Text",
    favicon: "/images/projects/logos/text-to-speech.png",
    imageUrl: ["/images/projects/speechToText.jpeg"],
    description:
      "This project is made using React Native and Google Speech to Text API.",
    sourceCodeHref: "https://github.com/minhaz19/speech-to-text",
    // liveWebsiteHref: "https://portal.testapp.io/apps/install/Pe00BXNZ8WVr7",
  },
  {
    name: "Live Face Detection App",
    favicon: "/images/projects/logos/face-scanner.png",
    imageUrl: ["/images/projects/live-0.jpeg", "/images/projects/live-1.jpeg"],
    description:
      "Detect face and liveness of the face using React Native, Expo and MLKit.",
    sourceCodeHref: "https://github.com/minhaz19/Live-Face-Detection",
    liveWebsiteHref: "https://portal.testapp.io/apps/install/Pe00BXNZ8WVr7",
  },
  {
    name: "Audio and Video Conference",
    favicon: "/images/projects/logos/videoconference.png",
    imageUrl: ["/images/projects/Section 5.webp"],
    description:
      "Audio and Video Conference using React Native and 100ms Live. This project is made using React Native and WebRTC",
    sourceCodeHref: "https://github.com/minhaz19/audio-video-conference",
    // liveWebsiteHref: "https://www.elev3n.com/",
  },
];
