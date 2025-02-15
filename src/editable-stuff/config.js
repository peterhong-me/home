// Navigation Bar SECTION
const navBar = {
  show: true,
};



// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hi, I'm Peter",
  middleName: " ",
  lastName: "Hong",
  message: " | Researcher | Tech Entrepreneur | Founder | Writer | Triathlete | ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/peterhong440/",
    },
    {
      image: "fa-github",
      url: "https://github.com/peterhong-me",
    },
    {
      image: "fa-strava",
      url: "https://www.strava.com/athletes/89204263",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/p5hong/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/peterhong.png"),
  imageSize: 375,
  message: "Hi! My name is Peter Hong, and I'm a senior at Canyon Crest Academy in sunny San Diego, CA. I'm a published computational researcher, co-organizer of a virtual hackathon, technical writer, and founder of an online business and technology publication with an international audience. Outside of the classroom, I love a late-night run with friends, a 10-mile bike ride, and a Sunday morning read. My biggest pet peeve is when my younger brother leaves my room and does not close the door (especially when I am being productive)!",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Featured Projects",
  gitHubUsername: "peterhong-me", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Experience",
  message:
    "Throughout my high school career, I've been extremely grateful to have opportunities to lead others and make an impact on my community. In my role as co-organizer for CoastalHacks, I primarily worked on obtaining sponsorships from local organizations, larger companies, and other nonprofits in order to provide the most optimal experience for participants. As head basketball coach of multiple Master Sports youth basketball teams, I fostered a culture of inclusivity, collaboration, and dedication whether in practices or during games. As founder and editor-in-chief of Fusion Insider, I am responsible for managing and leading a team of 25+ staff members to produce quality articles on a consistent basis.",
  images: [
    {
      img: require("../editable-stuff/hackathonworkshoppic.png"),
      label: " ",
      paragraph: " "
    },
    {
      img: require("../editable-stuff/basketball.png"),
      label: "League Champions",
      paragraph: "Winning Master Sports Youth Basketball League Championship"
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "LaTeX", value: 90 },
    { name: "HTML/CSS", value: 75 },
    { name: "GitHub/Git", value: 85 },
    { name: "Java", value: 65 },
    { name: "C#", value: 90 },
    { name: "Swift", value: 65 },
    { name: "Protégé", value: 85 },
    { name: "semantic web", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 85 },
    { name: "Leadership", value: 90 },
    { name: "Dependability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Let's Get In Touch!",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "peterhong.me@gmail.com",
};

const experiences = {
  show: true,
  heading: "Research Publications",
  data: [
    {
      role: 'NPDSLINKS: Nexus-PORTAL-DOORS-Scribe Learning Intelligence aNd Knowledge System',
      company: 'peterhong-me/project-NPDSLINKS',
      companylogo: require("../editable-stuff/NPDSLINKS.png"),

      date: 'July 2020 – September 2020',
      desc:
        'Paper written and presented as part of the IEEE 2nd International Conference on Transdisciplinary Artificial Intelligence (TransAI), published at IEEE Xplore Page',
      descBullets: [
        'Introduced LINKS applications with focus on algorithms and analysis of data.',
        'Developed NPDS cyberinfrastructure with definitions and standards on quality descriptors and quantitative measures to evaluate data records. ',
      ],
      paper: require("../editable-stuff/TransAI2020LINKS0923.pdf"),
      poster: require("../editable-stuff/TransAI2020LINKSslides.pdf"),
    },

    {
      role: 'Survey, Analysis, and Requirements for Semantic Enhancement to Support Machine Understanding of Scientific Literature',
      company: 'peterhong-me/project-SemanticEnhancement',
      companylogo: require("../editable-stuff/SemanticEnhancement.png"),

      date: 'October 2020 – December 2020',
      desc:
        'Paper written and published in inaugural issue of Brainiacs Journal of Brain Imaging and Computing Sciences',
      descBullets: [
        'Proposed a novel semantic enhancement workflow process for Brainiacs Journal of Brain Imaging and Computing Sciences. ',
        'Conducted literature survey on status of semantic web for brain sciences/health and proposed implications of survey findings.',
      ],
      paper: require("../editable-stuff/Craig2020SARSE.pdf"),
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
