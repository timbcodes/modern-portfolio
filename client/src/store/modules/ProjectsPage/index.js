import projectGetters from "./getters";

export default {
  state: {
    currentProjects: [
      {
        id: 1,
        title: "Kirja",
        image: "kirja.png",
        description:
          "Project Kirja is a entirely new type of blogging platform. Designed to compete with sites like Medium, Substack, and Ghost, Kirja is a blogging platform that is designed to be easy to use, and easy to navigate, and provide a fair, transparent profit structure to content creators. Kirja revolves around an ad-free community-based sharing of ideas.",
        link: "https://kirja.io",
        website: "kirja.io",
        launchDate: "Planned Launch: Quarter 1, 2023",
        status: "In Development",
      },
      {
        id: 2,
        title: "OnSuite",
        image: "onsuite.png",
        description:
          "OnSuite is a desktop-based application aimed directly at the wood products manufacturing industry. OnSuite provides a suite of modules and tools designed to make the manufacturing process more efficient, and helps with impoving employee retention by streamlining repetitive data collection processes.",
        link: null,
        website: "borderlandsoftware.com",
        launchDate: "Planned Launch: Quarter 4, 2023",
        status: "In Development",
      },
    ],
    completedProjects: [
      {
        id: 3,
        title: "Interface",
        image: "interface.png",
        description:
          "Interface was the first iteration of Borderland's suite of modules designed to streamline floor operations in the wood products manufacturing industry. The rights to Interface were purchased by Marvin Windows and Doors in 2022. Interface will be phased out in 2025 and is being replaced by the OnSuite family of applications.",
        link: null,
        website: "borderlandsoftware.com",
        launchDate: "Launched: November 2021",
        status: "Supported, Not Currently on Sale",
      },
    ],
  },
  getters: projectGetters,
};
