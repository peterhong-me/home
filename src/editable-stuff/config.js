// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Peter",
  middleName: "\"Swaggy P\"",
  lastName: "Hong",
  message: " Passionate about solving complex problems with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/peterhong-me",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/peterhong440/",
    },
    {
      image: "fa-kaggle",
      url: "https://www.kaggle.com/tylertaewook",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/p5hong/",
    },
    {
      image: "fa-dev",
      url: "https://dev.to/tylertaewook",
    },
    {
      image: "fa-medium",
      url: "https://tylertaewook.medium.com/",
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
  message: "I'm a senior at Canyon Crest Academy in San Diego, CA whose background is in semantic web research, knowledge engineering, web development, and data analysis. I'm most passionate about giving back to my community and solving complex engineering problems with both technical and managerial skills. Outside of the classroom, I love a late night run with friends, a 20 mile bike ride, and a Sunday morning read. My biggest pet peeve is when my younger brother leaves my room and does not close the door (especially when I am being productive)!",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Featured Projects",
  gitHubUsername: "peterhong-me", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Throughout my high school career, I've been extremely grateful to have opportunities to lead my peers and make an impact in the Kent community. In my role as the President of Kent Coding Club, I initiated and led a STEM outreach program where members taught local students programming and robotics using mBots. During weekdays, I assisted my peers to understand concepts easily in math/science as Peer Tutor. In addition, I proposed and implemented a demo chatbot application to make the peer tutor signup process much easier.",
  images: [
    {
      img: require("../editable-stuff/cc1.jpeg"),
      label: "Coding Club",
      paragraph: "Teaching how to use foldscopes"
    },
    {
      img: require("../editable-stuff/cc2.jpeg"),
      label: "Coding Club",
      paragraph: "Presenting how to program mBots"
    },
    {
      img: require("../editable-stuff/kentgenomebox.jpeg"),
      label: "Coding Club",
      paragraph: "Presenting how to program mBots"
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
  heading: "Computer Science Research Publications",
  data: [
    {
      role: 'NPDSLINKS: Nexus-PORTAL-DOORS-Scribe Learning Intelligence aNd Knowledge System',
      company: 'peterhong-me/project-NPDSLINKS',
      companylogo: require("../editable-stuff/NPDSLINKS.png"),

      date: 'Jan 2018 – June 2020',
      desc:
        'Independent research project done as part of the Kent School Guild',
      descBullets: [
        'Built a vehicle with a spherical wheel that implements a 4 wheel independent steering/driving system with Arduino and C# Winform Application.',
        'Developed a unique control algorithm in Mathematica and wrote/presented a paper in front of school body; Accepted as one of three members in Kent Guild; Won 7 awards at CT Science Fair; KR. Patent 10-2268833, “Driving System and Method of Vehicle,” June 18, 2021',
      ],
      paper: require("../editable-stuff/TransAI2020LINKS0923.pdf"),
      poster: require("../editable-stuff/TransAI2020LINKSslides.pdf"),
      video: "https://youtu.be/WXjisSnfGTI",
      btnname: "Video"
    },

    {
      role: 'Survey, Analysis, and Requirements for Semantic Enhancement to Support Machine Understanding of Scientific Literature',
      company: 'tylertaewook/sstp-hist-cnn',
      companylogo: require("../editable-stuff/SemanticEnhancement.png"),

      date: 'June 2019 – Aug 2019',
      desc:
        'Paper written and presented as part of the 61st Annual UF SSTP; Assisted ML texture analysis research in Professor Alina Zare’s Machine Learning and Sensing Lab by implementing deep network models in PyTorch and conducted various experiments with different parameters',
      descBullets: [
        'We propose a hybrid model that incorporates a stackable, localized histogram layer on convolutional neural network (CNN) for texture analysis applications.',
        'Instead of using standard histogram operation, we used RBF (Radial Basis Function) to perform a localized binning operation without binning constraints.',
      ],
      paper: require("../editable-stuff/Craig2020SARSE.pdf"),
      poster: require("../editable-stuff/Craig2020SARSE.pdf"),
      video: "https://youtu.be/FZvnE30DoSI",
      btnname: "Fun!Video"
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
