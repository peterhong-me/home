// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hi, I'm Peter",
  middleName: "\"Swaggy P\"",
  lastName: "Hong",
  message: " Passionate about solving complex problems with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/peterhong-me",
    },
    {
      image: "fa-laptop",
      url: "https://linktr.ee/coastalhacks",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/peterhong440/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/p5hong/",
    },
    {
      image: "fa-newspaper-o",
      url: "https://www.fusioninsider.org/",
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
//      i.e: profilePictureLink: require("../editable-stuff/peterhong.jpg"),
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
  message:
    "I’m a senior at Canyon Crest Academy in San Diego, CA with interests in computer science (semantic web) research, web development, and machine learning. I'm most passionate about giving back to the community and solving complex engineering problems with both technical and managerial skills. I love a late night run with friends and a Sunday morning read. My biggest pet peeve is when my younger brother leaves my room and does not close the door.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "GitHub Repositories",
  gitHubUsername: "peterhong-me", //i.e."johnDoe12Gh"
  reposLength: 10,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/basketball.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/basketball.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
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
  heading: "Get In Touch",
  message:
    "If you have any questions, want to chat, or just want to say hi, please feel free to email me at",
  email: "peterhong440@gmail.com",
};

const experiences = {
  show: true,
  heading: "Research Publications",
  data: [
    {
      role: 'NPDSLINKS: Nexus-PORTAL-DOORS-Scribe Learning Intelligence aNd Knowledge System',
      company: 'peterhong-me/project-NPDSLINKS',
      companylogo: require('../editable-stuff/NPDSLINKS.png'),
      date: 'July 2020 – September 2020',
    },
    
    /*
    {
      role: 'Survey, Analysis, and Requirements for Semantic Enhancement to Support Machine Understanding of Scientific Literature',
      companylogo: require('../assets/img/basketball.png'),
      date: 'May 2017 – May 2018',
    },   */
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };




/*
const experiences = {
  show: false,
  heading: "Computer Science Research Publications",
  data: [
    {
      role: 'NPDSLINKS: Nexus-PORTAL-DOORS-Scribe Learning Intelligence aNd Knowledge System',
      company: 'peterhong-me/project-NPDSLINKS',
      companylogo: require("../editable-stuff/NPDSLINKS.png"),

      date: 'July 2020 – September 2020',
      desc:
        'Paper written and presented as part of the IEEE 2nd International Conference on Transdisciplinary Artificial Intelligence (TransAI), published at IEEE Xplore Page',
      descBullets: [
        'Built a sdlkfalskdfjslkfjslkdafjlaskdflsakdfdasfdsfdsfadsfs',
        'Built a sdlkfalskdfjslkfjslkdafjlaskdflsakdfdasfdsfdsfadsfs',
      
      ],
      paper: require("../editable-stuff/TransAI2020LINKS0923.pdf"),
      slides: require("../editable-stuff/TransAI2020LINKSslides.pdf"),
    },

    {
      role: 'Survey, Analysis, and Requirements for Semantic Enhancement to Support Machine Understanding of Scientific Literature',
      company: 'peterhong-me/project-SemanticEnhancement',
      companylogo: require("../editable-stuff/SemanticEnhancement.png"),

      date: 'October 2020 – December 2020',
      desc:
        'Paper written and published in inaugural issue of Brainiacs Journal of Brain Imaging and Computing Sciences',
      descBullets: [
        'Built a sdlkfalskdfjslkfjslkdafjlaskdflsakdfdasfdsfdsfadsfs',
        'Built a sdlkfalskdfjslkfjslkdafjlaskdflsakdfdasfdsfdsfadsfs',
      ],
      paper: require("../editable-stuff/Craig2020SARSE.pdf"),


    },
  ]
}

*/


