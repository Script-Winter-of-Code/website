"use strict";

const projectsData = [
  {
    Name: 'CircuitVerse',
    Repo: 'https://github.com/CircuitVerse/CircuitVerse',
    Owner: 'Shivansh Srivastava',
    profiles: [
      {
        github: 'https://github.com/Shivansh2407',
        linkedin: 'https://www.linkedin.com/in/shivansh-srivastava24/',
      }
    ],
    Description: `CircuitVerse is a free, open-source platform which allows users to construct digital logic circuits online. We also offer the Interactive Book which teaches users on the fundamentals of modern, digital circuits.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Interactive Book',
    Repo: 'https://github.com/CircuitVerse/Interactive-Book',
    Owner: 'Shivansh Srivastava',
    profiles: [
      {
        github: 'https://github.com/Shivansh2407',
        linkedin: 'https://www.linkedin.com/in/shivansh-srivastava24/',
      }
    ],
    Description: `The aim of this project is to create an online interactive guide for digital logic design. The primary goal is to develop an open sourcebook with quality content that teaches digital logic design. It will enable students to learn digital design by interacting with circuits, truth table, and other interactive elements as they proceed through the book. The professors and students all over the world can read and contribute to the same.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Awesome Portfolio Website',
    Repo: 'https://github.com/smaranjitghose/awesome-portfolio-websites',
    Owner: 'Smaranjit Ghose',
    profiles: [
      {
        github: 'https://github.com/smaranjitghose',
        linkedin: 'https://www.linkedin.com/in/smaranjitghose/',
      }
    ],
    Description: `An open-source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world`,
    TechStack: ["HTML", "CSS", "JS"]
  },
  
  {
   Name: 'Internship Onboarding Platform',
    Repo: 'https://github.com/praveenscience/Internship-LMS-FrontEnd',
    Owner: 'Praveen Kumar Purushothaman',
    profiles: [
      {
        github: 'https://github.com/praveenscience',
        linkedin: 'https://www.linkedin.com/in/praveentech/',
      }
    ],
    Description: `A nice way to onboard new interns to projects and teach them too.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Doc2Pen',
    Repo: 'https://github.com/smaranjitghose/doc2pen',
    Owner: 'Smaranjit Ghose',
    profiles: [
      {
        github: 'https://github.com/smaranjitghose',
        linkedin: 'https://www.linkedin.com/in/smaranjitghose/',
      }
    ],
    Description: `Doc2Pen started as a pet project to help my fellow batchmates cope up with the needs of doing several handwritten assignments amidst the pandemic. Now are expanding as a small yet bonded open source project that aims to make the academic lives of our students easier, one function at a time. I am looking forward to integrating features like drawing, UML, quiz, a platform to practice timed responses for exams like TOEFL, GRE, IELTS [especially the Writing part. I personally need this as I had 1 day to study and score a 115/120] and in the far future an open-source plagiarism checker [because Grammarly cannot be trusted fully for research work and Turnitin is mostly available to faculties]`,
    TechStack: ["React JS", "Django"]
  },
  
  {
    Name: 'Face Mask Detection',
    Repo: 'https://github.com/chandrikadeb7/Face-Mask-Detection',
    Owner: 'Chandrika Deb',
    profiles: [
      {
        github: 'https://github.com/chandrikadeb7',
        linkedin: 'https://www.linkedin.com/in/chandrika-deb/',
      }
    ],
    Description: `Face Mask Detection system built with OpenCV, Keras/TensorFlow using Deep Learning and Computer Vision concepts in order to detect face masks in static images as well as in real-time video streams.`,
    TechStack: ["Python", "Deep Learning", "Computer Vision"]
  },


  {
    Name: 'ArtCV',
    Repo: 'https://github.com/smaranjitghose/ArtCV',
    Owner: 'Smaranjit Ghose',
    profiles: [
      {
        github: 'https://github.com/smaranjitghose',
        linkedin: 'https://www.linkedin.com/in/smaranjitghose/',
      }
    ],
    Description: `ArtCV is an initiative to create a platform that makes use of Computer Vision, Image Processing, and Deep Learning [ mostly GANS and Variational Autoencoders] under the hood to provide us with various artistic outputs for any image. We are also exploring Bio-medical benefits using Ishihara Discs. This can be described as a measure to re-create something similar to PRISMA but with the power of the open source, without any associated bloatware and an added benefit of letting others learn Computer Vision while contributing to the project and getting to know about latest techniques which otherwise remain sealed in research papers posted every month!`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'img_ai_app boilerplate',
    Repo: 'https://github.com/smaranjitghose/img_ai_app_boilerplate',
    Owner: 'Smaranjit Ghose',
    profiles: [
      {
        github: 'https://github.com/smaranjitghose',
        linkedin: 'https://www.linkedin.com/in/smaranjitghose/',
      }
    ],
    Description: `This project [ I have kept the name weird but it makes sense ] is for creating an open-source template that any developer, data scientist, researcher, or hobbyist can use for building a prototype of their Artificial Intelligence model(algorithm) dealing with images and performing tasks like Image Classification, Object Detection, Post Estimation, etc and then host it easily using services like Heroku, AWS, GCP and others. We believe the 2020s are the years where ML models need to come out of the Jupyter Notebooks for some and every reason and we want to make the process simpler for a lot of people who get intimidated or don't have much time to do it from scratch. [ Currently, we are just laser-focused on Deep Learning based approach and that too Image Classification. But with the passage of time, we intend to make it more generalized]`,
    TechStack: ["HTML", "CSS", "JS"]
  },
    
  

  {
    Name: 'Alexa-skills-starters',
    Repo: 'https://github.com/garimasingh128/Alexa-skills-starters',
    Owner: 'Garima Singh',
    profiles: [
      {
        github: 'https://github.com/garimasingh128',
        linkedin: 'https://www.linkedin.com/in/garima-singh-34042a177/',
      }
    ],
    Description: `👣 Awesome Alexa skills
    🧐 A collection of super-cool Amazon Alexa skills for starters!! ✨
    Author License Platform Maintained

    💻 What are Amazon alexa skills? 👣
    Alexa is Amazon’s Voice Service, accessed through Amazon Echo. After the set up process, you simply say the word ‘Alexa’ and Echo will light up and Alexa will respond. You can change this 'wake word' to either 'Amazon' or 'Echo'. Alexa can help you with music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, as well as providing weather, traffic and other real-time information.

    💻 What’s a skill?
    Alexa skills are like apps. You can enable and disable skills, using the Alexa app or a web browser, in the same way that you install and uninstall apps on your smart phone or tablet. Skills are voice-driven Alexa capabilities. You can add Alexa skills to your Echo to bring products and services to life. You can view available skills and enable or disable them using your Alexa app.

    💻 Where do I find my skills?
    You'll find all the skills on your Alexa app. If you're looking for the EDF Energy Alexa skill to complete the account linking process, type 'EDF Energy' in the search box. You can then follow the account linking process. Account has been linked, but can't find the EDF Energy Alexa skill? In your Alexa app visit 'My Skills' and search for 'EDF Energy' there.

    ✍  Skills developed
    Cakewalk - A starter template for beginners
    My inspirations - Suggests quotes and thoughts
    Touristy - Tells info about tourist places of Australia
    Hello world - my hosted skill`,
    TechStack: ["React JS", "Django"]
  },

  {
    Name: 'FantomsAR-shopping-app',
    Repo: 'https://github.com/som23ya/FantomsAR-shopping-app',
    Owner: 'Somya Upadhyay',
    profiles: [
      {
        github: 'https://github.com/som23ya',
        linkedin: 'https://www.linkedin.com/in/somya-upadhyay-5b2028166/',
      }
    ],
    Description: `"Our intention is to give shoppers of our storefront the option of AR features with an android application. A complete virtual store that gives users the chance to experience the masks, clothing, and other commodities in AR.
    As of this year, Google has recently announced many more ARCore features to be made available over the web(which is currently pending public release) and Android. Having implemented ARkit and Arcore, we felt it’s time to get the word out there on the true capabilities of these features."`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  // {
  //   Name: 'Building the MVP',
  //   Repo: 'https://github.com/fnplus/footsteps-app',
  //   Owner: 'Abhishek Uniyal',
  //   profiles: [
  //     {
  //       github: 'https://github.com/xlogix',
  //       linkedin: 'https://www.linkedin.com/in/abhishek-uniyal/',
  //     }
  //   ],
  //   Description: `"We envisioned the project to solve the problems faced by a 21st-century learner. A learner in the internet age finds herself/himself in a flood of resources from search engines. Although s/he finds links to learn, they're not always from the best teachers/best-rated ones since it's the website with the best SEO (search engine optimization) that shows the topmost results. On top of that, there are so many free resources available on the internet made by experts in their field and yet we are forced to pay for the outdated courses promoted by big companies and universities.
  //   With Footsteps app & [browser extension](https://github.com/fnplus/footsteps-extension), we take a subject knowledge expert (mentor) first approach to solve the problem of finding the best resources to learn. It works by having the domain experts save their learning journey with our web app and browser extension & making it available for everyone else to follow. Every resource is called a 'footstep' (added chronologically) and a collection of footsteps makes up a learning path. The learner can ""save"" the learning paths to his learning journey and keep a track of his progress. The app also suggests other recommended paths rated well by other learners in the Footsteps Community."`,
  //   TechStack: ["HTML", "CSS", "JS"]
  // },

  // {
  //   Name: 'HeartOk',
  //   Repo: 'https://github.com/deepshi4156/HeartOk',
  //   Owner: 'Deepshi Sharma',
  //   profiles: [
  //     {
  //       github: 'https://github.com/akshitagupta15june/lane_detection_opencv',
  //       linkedin: 'https://www.linkedin.com/in/deepshi-sharma-386941182/',
  //     }
  //   ],
  //   Description: `Basic idea of the project is to provide help to heart patients that they can predict what are chances of risk to them. For this , a web application has been created where they will input their details and probability of heart risk will be displayed. If the probability is higher, patients can contact to doctor also through the app. End users will be doctor as well as patient. Doctors can also manage data of various patients and have a look at their medical history.`,
  //   TechStack: ["React JS","Django"]
  // },

  {
    Name: 'Lane Detection using OpenCV',
    Repo: 'https://github.com/akshitagupta15june/lane_detection_opencv',
    Owner: 'Akshita Gupta',
    profiles: [
      {
        github: 'https://github.com/akshitagupta15june',
        linkedin: 'https://www.linkedin.com/in/akshita-gupta-a4a895187',
      }
    ],
    Description: `The lane detection has proved to be an efficient technique to prevent accidents in Intelligent Transportation Systems.The review on lane detection has shown that the most of the researchers has neglected the problem of the fog and noise in images. Thus noise and fog may reduce the accuracy of the existing systems.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Face-X',
    Repo: 'https://github.com/akshitagupta15june/Face-X',
    Owner: 'Akshita Gupta',
    profiles: [
      {
        github: 'https://github.com/akshitagupta15june',
        linkedin: 'https://www.linkedin.com/in/akshita-gupta-a4a895187',
      }
    ],
    Description: `AI BASED FACIAL RECOGNITION ATTENDANCE SYSTEM`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  // {
  //   Name: 'Github Profile Analyser',
  //   Repo: 'https://github.com/Aakansha99/Github-Profile-Analyser',
  //   Owner: 'Aakansha Jain',
  //   profiles: [
  //     {
  //       github: '',
  //       linkedin: 'https://www.linkedin.com/in/aakansha-jain99/',
  //     }
  //   ],
  //   Description: `"In this application, you can analyze your GitHub profile, compare your profile with some other profile and create a ready-made resume on the basis of your GitHub profile.
  //   The idea is simple, you just fill up your username and it will analyze your profile, it will include: -
  //   Repository size
  //   Creation
  //   Languages on which the profile has worked upon
  //   Stars on all repositories

  //   PDF will be populated with the following: -
  //   Profile image
  //   User name
  //   Links to the following: -
  //   User location via Google Maps
  //   User GitHub profile
  //   User Blog
  //   User bio
  //   Number of public repos
  //   Number of followers
  //   Number of GitHub stars
  //   Number of users following

  //   You can even save a PDF from it locally in your device. We will use ReactJS for developing it and GitHub graphql and REST APIs and react-to-pdf library to make it functional.

  //   This application can also compare 2 different profiles with each other and give their comparison in visualization.

  //   Features:
  //   Responsive
  //   Getting data from GitHub API (using fetch)
  //   Autocomplete Search
  //   Comparison between two GitHub Profiles
  //   Debouncing for minimizing the API Calls."`,
  //   TechStack: ["Flutter", "Firebase", "SQlite"]
  // },

  {
    Name: 'QP-Generator',
    Repo: 'https://github.com/Team-Tomato/QP-Generator',
    Owner: 'Akbar Habeeb B',
    profiles: [
      {
        github: 'https://github.com/AkbarHabeeb',
        linkedin: 'https://www.linkedin.com/in/akbarhabeebb/',
      }
    ],
    Description: `Question paper generator helper, wiki: https://github.com/Team-Tomato/QP-Generator/wiki`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'PyDataStructs',
    Repo: 'https://github.com/codezonediitj/pydatastructs',
    Owner: 'Gagandeep Singh',
    profiles: [
      {
        github: 'https://github.com/czgdp1807/',
        linkedin: 'https://www.linkedin.com/in/czgdp1807/',
      }
    ],
    Description: `"Currently, the project aims to be a Python package for various data structures in computer science. Besides, we are also working on including parallel algorithms. To the best of our knowledge, a well-designed library/package which has covered most of the data structures and algorithms including their parallel implementation doesn't exist. In future, i.e, after a few releases of the package when the software design will become stable, we also aim to provide APIs for the code in C++ and Java as well."`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Water Monitoring System',
    Repo: 'https://github.com/vinitshahdeo/Water-Monitoring-System/',
    Owner: 'Vinit Shahdeo',
    profiles: [
      {
        github: 'https://github.com/vinitshahdeo/',
        linkedin: 'https://www.linkedin.com/in/vinitshahdeo/',
      }
    ],
    Description: `Water Monitoring System is an web based Liquid Level Monitoring system that has mechanisms to keep the user alerted in case of liquid overflow or when tank depletes.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Port Scanner',
    Repo: 'https://github.com/vinitshahdeo/PortScanner',
    Owner: 'Vinit Shahdeo',
    profiles: [
      {
        github: 'https://github.com/vinitshahdeo/',
        linkedin: 'https://www.linkedin.com/in/vinitshahdeo/',
      }
    ],
    Description: `A go-to tool for scanning network. Scan all the open ports for a given host with just one click.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'eduAlgo',
    Repo: 'https://github.com/Abhijit2505/eduAlgo',
    Owner: 'Abhijit Tripathy',
    profiles: [
      {
        github: 'https://github.com/Abhijit2505',
        linkedin: 'https://www.linkedin.com/in/abhijit-tripathy-415912187/',
      }
    ],
    Description: `This is a very simple python package made up with python script to contain & study different algorithms for educational purposes. This project has been a part of FOSS Hack 2020 and PyCon India 2020 Devsprint before as well. The PyPI package can ve viewed here - https://pypi.org/project/eduAlgo/`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Dolos',
    Repo: 'https://github.com/ACM-VIT/dolos',
    Owner: 'Yash Kumar Verma',
    profiles: [
      {
        github: 'https://github.com/yashkumarverma/',
        linkedin: 'https://www.linkedin.com/in/yash-kumar-verma/',
      }
    ],
    Description: `Ever wanted to get random data for that app you were building but didn't want to bloat your requests with unwanted data? We're here to help. Dolos is a server written in javascript which generates random data in the exact structure as is required by the user, at a blazing speed by serving only what's requested. Everything without using complex technologies like graphql. Perfect for beginners.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Algorithmic Treasure',
    Repo: 'https://github.com/Abhijit2505/Algorithmic-Treasure-Original',
    Owner: 'Abhijit Tripathy',
    profiles: [
      {
        github: 'https://github.com/Abhijit2505',
        linkedin: 'https://www.linkedin.com/in/abhijit-tripathy-415912187',
      }
    ],
    Description: `Many a times when interview approaches, the interview preparing students start searching for different Data Structures and algorithm problems in the internet. This project is a website that has many previously asked interview questions and their solutions.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'AapKaVaidya',
    Repo: 'https://github.com/Harshit564/AapKaVaidya',
    Owner: 'Harshit Singh',
    profiles: [
      {
        github: 'https://github.com/Harshit564',
        linkedin: 'https://www.linkedin.com/in/harshit-singh-lko/',
      }
    ],
    Description: `A flutter based application for easy interaction between patients and doctors. During a Pandemic many of the patients are looking to get regular health check-ups but moving outside in such conditions seems risky.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  // {
  //   Name: 'Blogger',
  //   Repo: 'https://github.com/harsh-9in/Blogger',
  //   Owner: 'Harsh Kumar',
  //   profiles: [
  //     {
  //       github: 'https://github.com/harsh-9in',
  //       linkedin: 'https://www.linkedin.com/in/harsh-kumar-1a287617a/',
  //     }
  //   ],
  //   Description: `Blogger is a Python-based web application. It will be a full-stack website with multiple features. Being selected in Contributor's Hack 20 it has got a lot of contribution and has many more features to add. It will be a good project for beginners as well as advanced programmers.
  //   Tech Stack
  //   Frontend:  HTML,CSS,Bootstrap
  //   Backend:  Django(Python framework)
  //   Github Repo-
  //   https://github.com/harsh-9in/Blogger`,
  //   TechStack: ["Flutter", "Firebase", "SQlite"]
  // },

  {
    Name: 'Canvasboard',
    Repo: 'https://github.com/Canvasbird/canvasboard',
    Owner: 'Kajol Kumari',
    profiles: [
      {
        github: 'https://github.com/Kajol-Kumari',
        linkedin: 'https://www.linkedin.com/in/kajol-kumari-73245b166/',
      }
    ],
    Description: `It's a way to ease the online teaching process and make it more interactive and prodctive. For more details, do checkout https://github.com/Canvasbird/canvasboard`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Amazing-Python-Scripts',
    Repo: 'https://github.com/avinashkranjan/Amazing-Python-Scripts',
    Owner: 'Avinash Kumar Ranjan',
    profiles: [
      {
        github: 'https://github.com/avinashkranjan',
        linkedin: 'https://www.linkedin.com/in/avinashkranjan/',
      }
    ],
    Description: `A curated collection of Amazing Python scripts from Basics to Advance with automation task scripts. This is your Personal space to find or add any new script that can make Life Easier as a Developer, and to find a utility of coding to burst out of boredom.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Scrum-Management',
    Repo: 'https://github.com/Harshita248/Scrum-Management',
    Owner: 'Harshita Raj',
    profiles: [
      {
        github: 'https://github.com/Harshita248',
        linkedin: 'https://www.linkedin.com/in/harshita-raj',
      }
    ],
    Description: `The idea of the project is to customize all the ongoing projects under one roof. The website includes certain columns which is like working, in progress, done ,etc and once the student enters his/her details into the Website with the currently working project his details will be stored on the database and will show on the first column. After that when the Project comes in progress the cards of the column will shift to another column. We also have an admin login and signup where an admin can be assigned as a mentor to the particular student which he accepts by clicking the accept button shown in the popup window. This way it will work for different organisations . I thought to make it real for my coding club but now it's for all organization . This project is in progress as of now and I would like to include this in this open source program.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Snippet Share',
    Repo: 'https://github.com/PragatiVerma18/Snippet-Share',
    Owner: 'Pragati Verma',
    profiles: [
      {
        github: 'https://github.com/PragatiVerma18',
        linkedin: 'https://www.linkedin.com/in/pragativerma18/',
      }
    ],
    Description: `This is a code snippet sharing app that lets you share syntax-highlighted code snippets with easy copy-paste options and a secure secret code and a unique URL.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Avinash Kumar Ranjan',
    Repo: 'https://github.com/avinashkranjan/Friday',
    Owner: 'Friday',
    profiles: [
      {
        github: 'https://github.com/avinashkranjan',
        linkedin: 'https://www.linkedin.com/in/avinashkranjan/',
      }
    ],
    Description: `Friday - Your Personal Class Manager Assistant, It'll never let you miss another assignment deadline or upcoming test.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'CodeTrophs',
    Repo: 'https://github.com/CodeTrophs/Frontend',
    Owner: 'Arya Soni',
    profiles: [
      {
        github: 'https://github.com/aryasoni98',
        linkedin: 'https://www.linkedin.com/in/aryasoni/',
      }
    ],
    Description: `Become a part of an innovative and highly sought after platform. Does the idea of open source excite you but not sure where to begin or which project to choose? Often feel confused and uncomfortable while using GitHub, and can’t think of any available alternative? Well, you have arrived at the correct place ""CodeTrophs"" is an open source platform targeted solely for beginners to help them contribute to real life projects, from developing new ideas and approaches, to exploring the world of open sourcing.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'sim-C',
    Repo: 'https://github.com/cimplec/sim-c',
    Owner: 'Siddhartha Dhar Choudhury',
    profiles: [
      {
        github: 'https://github.com/frankhart2018',
        linkedin: 'https://www.linkedin.com/in/siddhartha-dhar/',
      }
    ],
    Description: `Often people have trouble programming in C (especially beginners) due to its low level syntax and unavailability of stable third party libraries. We present sim-C a high-level front end for C which creates a dynamically typed syntax for C. User can write code in this high level syntax and then compile it to optimized C code. sim-C does not process the code and simply translates it to C thus, there is no possibility of the code running slowly. So, with sim-C users can write code faster using the high level syntax and at the same time be able to harness the power and speed of a C program. Let us make C cool again.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Spotify Recommendation Engine',
    Repo: 'https://github.com/ucalyptus/Spotify-Recommendation-Engine',
    Owner: 'Sayantan Das',
    profiles: [
      {
        github: 'https://github.com/ucalyptus',
        linkedin: 'https://www.linkedin.com/in/ucalyptus/',
      }
    ],
    Description: `This is a rapid prototyped presentation of how a Spotify Recommendation Engine should work . A system that recommends songs from your existing playlists using Spotify API and a bit of classical machine learning techniques.
    Vision
    To create a flutter clone of Spotify that uses the Recommendation Engine this project is based upon. A lightweight app with basic functionalities of Spotify i.e A Music Player, a playlist that belongs to the user, OAuth capabilities. Playlist functionality is important as it will serve as the basis for future music recommendations based on the features it houses. Goal is to use an implicit matrix factorisation model (originally proposed by Spotify's research team) for usage.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },

  {
    Name: 'Community-website',
    Repo: 'https://github.com/HITK-TECH-Community/Community-Website',
    Owner: 'Kajol Kumari',
    profiles: [
      {
        github: 'https://github.com/Kajol-Kumari',
        linkedin: 'https://www.linkedin.com/in/kajol-kumari-73245b166',
      }
    ],
    Description: `Being from tier-2 and tier-3 colleges, you often face the problem of knowledge gap in our college days. But once you begin walking in the path of tech, you discover a place where people are just like you. 😇✨ We are a group of HITK students trying to fill the knowledge gap and help you find your place of discovery by sharing you the opportunities and resources at the right time!⏱️ This project aims to build the official site for the community page so that any student can use the resources shared by us.`,
    TechStack: ["Flutter", "Firebase", "SQlite"]
  },
];


// Generates tech stack
const generateStack = stackArray => {
  let result = [];
  for (let stackElement in stackArray) {
    const listItem = `<button>${stackArray[stackElement]}</button>`;
    result.push(listItem);
  }
  return result.join(' ');
};

var id = 0;

const generateCards = cardDetail => {
  const { Name, Repo, Owner, profiles, Description, TechStack } = cardDetail;

  const projectCard = `
  <div class="swiper-slide" onclick="displayProject('${id}','true')">
    <h5><a href="${Repo}" target="_blank">${Name}</a></h5>
    <p class="p-limit">${limitWords(Description, 10)}</p>
    <!--<p class="card-stack">${TechStack}</p>-->
    <!--<a href="${Repo}" target="_blank">Go to Repo</a>-->
    <button class="play-card"><i class="fas fa-play"></i></button>
  </div>
  `;
  id++;
  return projectCard;
};

// Creates cards through `generateCards()` for each team
const injectCardsToPage = (project) => {
  let members = project.map((item) => {
    return generateCards(item)
  })

  return members;
};


//Team
document.querySelector(".swiper-wrapper").innerHTML = injectCardsToPage(projectsData);

const projParagraph = document.querySelector(".proj-info .proj-descrp .descrp");
const projNameAndRepo = document.querySelector(".proj-info .proj-descrp .proj-project");
const projAuthorInfo = document.querySelector(".proj-info .proj-author");
const projTechStack = document.querySelector(".proj-info .tech-stack");
const authorProfileLink = document.querySelectorAll(".proj-info .proj-author .author-links a");

function changeProjectsDetail(e) {
  document.querySelector(".proj-info .proj-descrp .descrp p").innerHTML = `${projectsData[e].Description}`
  document.querySelector(".proj-info .proj-descrp .proj-project a").setAttribute("href", `${projectsData[e].Repo}`);
  document.querySelector(".proj-info .proj-descrp .proj-project h2").innerHTML = `${projectsData[e].Name}`
  document.querySelector(".proj-info .proj-author .author h2").innerHTML = `${projectsData[e].Owner}`
  authorProfileLink[0].setAttribute("href", `${projectsData[e].profiles[0].github}`);
  authorProfileLink[1].setAttribute("href", `${projectsData[e].profiles[0].linkedin}`);
  document.querySelector(".proj-info .tech-stack .stack-btns").innerHTML = `${generateStack(projectsData[e].TechStack)}`;
}

function displayProject(el, isClicked) {
  if (isClicked == 'true') {
    clearInterval(Interval);
  }
  const getStack = generateStack(projectsData[el].TechStack);

  projParagraph.className = "descrp fadeOutRight";
  projNameAndRepo.className = "proj-project fadeOutRight";
  projAuthorInfo.className = "proj-author fadeOutRight";
  projTechStack.className = "tech-stack fadeOutRight";

  setTimeout(function () {
    changeProjectsDetail(el);
    projParagraph.className = "descrp fadeInRight";
    projNameAndRepo.className = "proj-project fadeInRight";
    projAuthorInfo.className = "proj-author fadeInRight";
    projTechStack.className = "tech-stack fadeInRight";
  }, 500);
}

function limitWords(textToLimit, wordLimit) {
  var finalText = "";
  var text2 = textToLimit.replace(/\s+/g, ' ');
  var text3 = text2.split(' ');
  var numberOfWords = text3.length;

  if (numberOfWords > wordLimit) {
    for (var k = 0; k < wordLimit; k++)
      finalText = finalText + " " + text3[k] + " ";

    return finalText + "…";
  }
  else return textToLimit;
}

changeProjectsDetail(0);

var index = 1;
var Interval = setInterval(function playCards() {
  displayProject(index, 'false');
  index++;
  if (index == projectsData.length - 1) {
    index = 0;
  }
}, 4000);
