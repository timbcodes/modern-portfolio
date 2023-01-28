import resumeGetters from "./getters";

export default {
  state: {
    resume: [
      {
        id: 1,
        company: "Borderland Software",
        position: "Founder",
        location: "Grand Forks, ND",
        startDate: "05/2022",
        endDate: "Present",
        description:
          "Founded the very first author-owned writing platform where content creators get to share in 100% of the profit they generate. Took Kirja from a blank page to a very advanced stage of development with a projected release date of February 1st, 2023.",
      },
      {
        id: 2,
        company: "Marvin Windows and Doors",
        position: "Senior Software Engineer",
        location: "Grafton, ND",
        startDate: "08/2021",
        endDate: "05/2022",
        description:
          "Principal software engineer for the Marvin Windows and Doors facility in Grafton, North Dakota. As the lead member of the onsite operations systems integration and engineering team and the only software engineer, our team designed, architected, and developed software products that would help automate processes and collect data from over 1700 end users on the production floor as well as in the front office. Our team built two key products during this time: Overwatch and Interface.",
      },
      {
        id: 3,
        company: "Atlas IT and Consulting",
        position: "Senior Software Engineer",
        location: "Elkhart, IN",
        startDate: "07/2017",
        endDate: "07/2021",
        description:
          "Senior software engineering consultant for the team heading up Jayco/Newell Motor Coach's innovative new Aurora touchscreen owner control tablet for the company's high-end line recreational motor coaches. Aurora was an embedded touchscreen controller built into the RV unit and used JavaScript, Express, and Node to call RESTful API endpoints that would operate PLC controllers to allow the owner to operate the vehicle's functionality from a single location, such as climate control settings, generator functions, slide-outs, lighting, and more.",
      },
      {
        id: 4,
        company: "Celadon Trucking",
        position: "Software Engineer",
        location: "Indianapolis, IN",
        startDate: "08/2012",
        endDate: "06/2017",
        description:
          "Worked on a small internal “Skunk Works” style development team responsible for building the company’s new flagship software suite, Driveaway. Driveaway Consisted of three core modules: customer shipment tracking, driver dispatch, and load planning.",
      },
      {
        id: 5,
        company: "Tim Bradford Trucking",
        position: "Owner Operator",
        location: "West Paducah, KY",
        startDate: "09/2007",
        endDate: "06/2012",
        description:
          "Owned a 48-state long haul truck transport company that employed over 30 people in the Western Kentucky region. Using our team of dedicated, safe, and professional drivers, we were able to provide flatbed, Conestoga, heavy haul, RTV, step deck, hopper bottom, and temperature controlled full truckload transportation services to all 48 states and Canada. Our size allowed us to be able to respond nimbly to our smallest customers, while our large asset base allowed us to weather the financial storm by providing trailer pool services to major companies such as US Steel, Alcoa, Manac Canada, Fontaine, Wabash National, General Motors, John Deere, Hyundai, Kroger, Walmart, Sherwin Williams, and more. Operated with our own authority, BOC(3) filing, and self-insurance.",
      },
    ],
  },
  getters: resumeGetters,
};
