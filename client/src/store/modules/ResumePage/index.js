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
          "Founded a startup for developing software targeted at the manufacturing industry. Our flagship product is OnSuite, a composite set of modules and tools for increasing manufacturing efficiencies on the production floor by collecting information about products and components as they move through the build process. OnSuite also collects data from users on the floor to help engineers and supervisors have a greater insight into the manufacturing process. OnSuite, along with its admin console O.CON are currently used in production at a major wood products manufacturer in the upper Midwest and has been proving itself to be a valuable asset in helping their company deal with supply chain shortages, increase quality control, prevent near miss safety incidents, track maintenance issues, manage rework issues, and increase total customer satisfaction.",
      },
      {
        id: 2,
        company: "Marvin Windows and Doors",
        position: "Senior Software Engineer",
        location: "Grafton, ND",
        startDate: "08/2021",
        endDate: "05/2022",
        description:
          "Principal solo software engineer for the Marvin Windows and Doors Grafton, ND facility. As the sole member of the onsite systems integration and engineering team, the software products that were developed in this role served over 1700 end users both on the production floor and in the front office. The role here revolved around the building of three key applications: Overwatch, Systems Multitool, and Interface. These applications collected data from the machines on the floor (CNC routers, mills, lathes, automated pallet robots, robotic saws, EMS systems, MLC monitors, PLC controllers, ACDs, MBMs, et Al.) and fed that data into the applications for dissemination. The applications would then work with our ERP database to help plan and dispatch orders, monitor breakdown and rework issues, track maintenance tickets, display metrics, generate reports, and more.",
      },
      {
        id: 3,
        company: "Atlas IT and Consulting",
        position: "Senior Software Engineer",
        location: "Elkhart, IN",
        startDate: "07/2017",
        endDate: "07/2021",
        description:
          "The primary focus of our team’s development efforts revolved around creating digital control systems for our client’s high-end recreational vehicles built by companies such as Jayco, Newell, TMC, Forrest River, Airstream, MCI, and others. Our flagship product was a touchscreen module that could be installed in the vehicle to interact with PLC controllers integrated with the RV’s electrical systems to control primary functions such as climate control, generator standby and run modes, slide-out operation, engine start and idle, door lock operation, and others. Secondary to the touch screen were native iOS and Android mobile applications that could mirror the primary screen’s functionality and could allow the vehicle to be controlled remotely assuming the RV had internet connection.",
      },
      {
        id: 4,
        company: "Celadon Trucking",
        position: "Software Engineer",
        location: "Indianapolis, IN",
        startDate: "08/2012",
        endDate: "06/2017",
        description:
          "Worked on a small internal “Skunk Works” style development team responsible for building the company’s Driveaway software suite. This application encompassed three main functions: driver dispatching and customer tracking, freight tonnage and load planning, and electronic driver logs (using Qualcomm’s API endpoints along with their in-cab satellite-based monitoring systems) to meet FMCSA compliance requirements. This application was able to pull real time data on available loads and tonnage from DAT, CH Robinson, and Landstar load boards and compare with our truck availability to help dispatchers and load planners work in conjunction to maximize truck capacity, coordinate with drivers to ensure home time requirements were met, increase fuel efficiencies, allow the maintenance department to keep up with PMs and prevent breakdowns, and maximize truck uptime.",
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
