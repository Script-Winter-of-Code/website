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
    TechStack: ["JavaScript", "Ruby", "HTML", "CSS"]
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
    TechStack: ["JavaScript", "Jekyll", "HTML", "CSS", "Ruby"]
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
    TechStack: ["HTML", "CSS", "JS", "React", "NextJS"]
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
    TechStack: ["MERN", "ReactJS", "NodeJS", "bootstrap5", "ExpressJS"]
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
    TechStack: ["HTML", "CSS", "JS", "React"]
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
    TechStack: ["Python", "OpenCV", "TensorFlow", "StreamLit", "Image Processing", "Computer Vision"]
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
    TechStack: ["StreamLit", "Python", "HTML", "CSS", "TensorFlow", "TensorFlow.JS"]
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
    TechStack: ["Javascript", "Python"]
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
    TechStack: []
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
    TechStack: ["Python", "OpenCV"]
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
    TechStack: ["Python", "OpenCV", "CNN", "ANN"]
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
  //   TechStack: []
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
    TechStack: ["React", "Flask"]
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
    TechStack: ["Python 3.x", "Git"]
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
    TechStack: ["React", "Node.js"]
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
    TechStack: ["Python", "Flask"]
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
    TechStack: ["Python", "Algorithms"]
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
    TechStack: ["JavaScript", "MySQL Database", "Data Mocking"]
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
    TechStack: ["HTML", "CSS", "Bootstrap", "Algorithms", "Python", "C++"]
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
    TechStack: ["Flutter", "Firebase"]
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
  //   TechStack: []
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
    TechStack: ["Angular8", "MongoDB", "MongoDB", "React", "Express", "NodeJS"]
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
    TechStack: ["Python", "HTML", "CSS", "JavaScript", "Flask", "Markdown"]
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
    TechStack: ["HTML5", "CSS3", "Javascript", "MongoDB", "Nodejs"]
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
    TechStack: ["Django", "HTML", "CSS", "JS", "Bulma CSS"]
  },

  {
    Name: 'Friday',
    Repo: 'https://github.com/avinashkranjan/Friday',
    Owner: 'Avinash Kumar Ranjan',
    profiles: [
      {
        github: 'https://github.com/avinashkranjan',
        linkedin: 'https://www.linkedin.com/in/avinashkranjan/',
      }
    ],
    Description: `Friday - Your Personal Class Manager Assistant, It'll never let you miss another assignment deadline or upcoming test.`,
    TechStack: ["Flutter", "Dart", "HTML", "CSS", "JavaScript", "UI/UX", "Firebase"]
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
    TechStack: ["C", "Python", "Compiler Design"]
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
    TechStack: ["Python", "ML", "Fluttter"]
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
    TechStack: ["Monstack"]
  },

  {
    Name: 'Rotten Scripts',
    Repo: 'https://github.com/HarshCasper/Rotten-Scripts',
    Owner: 'Harsh Bardhan Mishra',
    profiles: [
      {
        github: 'https://github.com/harshcasper',
        linkedin: 'https://www.linkedin.com/in/harshcasper',
      }
    ],
    Description: `Rotten Scripts contains amazing and awesome scripts written in Python, JavaScript, Bash, Powershell, and more. Consider this repository as your personal space to find or add any new script that can make life easier for us and the Open Source community too, as a Developer, and find a utility of coding to burst out of boredom. Get started with coding exhilarating scripts that you can use to download PDFs from an Online Source or just to randomly like everyone's Instagram Post.`,
    TechStack: ["Python", "Javascript", "BASH", "Golang"]
  },

  {
    Name: 'Rajappan',
    Repo: 'https://github.com/kaiiyer/rajappan',
    Owner: 'Kai Iyer',
    profiles: [
      {
        github: 'https://github.com/kaiiyer',
        linkedin: 'https://www.linkedin.com/in/anoop-krishnan47/',
      }
    ],
    Description: `The All in one Security project for Digital Privacy. A step towards a better & secure Internet`,
    TechStack: []
  },

  {
    Name: 'Github Spy',
    Repo: 'https://github.com/YashKumarVerma/github-spy',
    Owner: 'Yash Kumar Verma',
    profiles: [
      {
        github: 'https://github.com/yashkumarverma',
        linkedin: 'https://www.linkedin.com/in/yash-kumar-verma/',
      }
    ],
    Description: `"Do you lead an organization? or are you a maintainer of some open source project? Even if you are neither of the above, there can be instances when you might be required to generate quick reports of any Github organization. This can cover anything as simple as getting the name of all repositories or things a bit tricky like ensuring projects contain a particular structure.
    GithubSpy is the bot that you need. With a robust structure to develop upon, we are looking for contributors willing to add more features."`,
    TechStack: ["JavaScript", "MySQL Database", "Data Mocking"]
  },

 
  {
    Name: 'Friday',
    Repo: 'https://github.com/avinashkranjan/Friday',
    Owner: 'Avinash Kumar Ranjan',
    profiles: [
      {
        github: 'https://github.com/avinashkranjan',
        linkedin: 'https://www.linkedin.com/in/avinashkranjan/',
      }
    ],
    Description: `Since after the pandemic almost everything has been moved on virtual world So has Education. All our classes has been moved online and with that all our assignments, test, exams, Viva are being held on online platform as well, With so many assignments deadlines, upcoming exams dates and being busy with our life we forget the deadlines and exam dates on most occasion. I don't know how many of you but it happens to me frequently. So I came up with this app which once feeded with all the required data it'll remind you of the Assignement deadlines, upcoming exams, unfinished homework. So, you can plan your schedule accordingly.`,
    TechStack: ["Flutter", "Firebase"]
  },

  {
    Name: 'Breast Cancer Predictor',
    Repo: 'https://github.com/srimani-programmer/Breast-Cancer-Predictor/',
    Owner: 'SRI MANIKANTA PALAKOLLU',
    profiles: [
      {
        github: 'https://github.com/srimani-programmer',
        linkedin: 'https://www.linkedin.com/in/srimani-programmer/',
      }
    ],
    Description: `Breast cancer is the most common type of cancer in women. When cancers are found early, they can often be cured. There are some devices that detect breast cancer but many times they lead to false positives, which results in patients undergoing painful, expensive surgeries that were not even necessary. These types of cancers are called benign which do not require surgeries and we can reduce these unnecessary surgeries by using Machine Learning. These predictions will help doctors to do surgeries only when the cancer is malignant, thus reducing unnecessary surgeries for a woman. This project helps us to identify breast cancer in women that helps us to save many lives.`,
    TechStack: ["Python" , "ML", "flask"]
  },

  {
    Name: 'HackStation',
    Repo: 'https://github.com/ashishnagpal2498/hackstation',
    Owner: 'Ashish Nagpal',
    profiles: [
      {
        github: 'https://github.com/ashishnagpal2498',
        linkedin: 'https://www.linkedin.com/in/ashish-nagpal24',
      }
    ],
    Description: `"Ever missed a coding contest because you completely forget about it or misinterpret the timing, worked anonymous number of hours and still aren't able to convince your boss that you're working. Well we get it all covered for you.
    We at HackStation provide a platform to share your work in number. Get your working graph reminders for coding contests and share your work among your peers. All you need to do is tell us who you are ? The project will be divided into two parts depending upon whether the user is a developer or an organization. A separate platform for developers as well as organization. For user the basic options available will be dashboard, coding contest reminders profile, whereas for organization productivity will be divided into teams and graphs shown accordingly."`,
    TechStack: ["Html", "CSS", "bootstrap", "ReactJs" , "MongoDB" , "GraphQL", "Nodejs"]
  },

  {
    Name: 'ChessJS',
    Repo: 'https://github.com/ashishpapanai/chessJS',
    Owner: 'Ashish Papanai',
    profiles: [
      {
        github: 'https://github.com/ashishpapanai',
        linkedin: 'Https://linkedin.com/in/ashishpapanai',
      }
    ],
    Description: `It's a 2300+ ELO Rated JavaScript-based ChessEngine which helps to analyse moves and play with another AI Chess Engine`,
    TechStack: ["Reinforcement Learning", "Vanilla JS", "Web Dev", "GOFAI"]
  },

  {
    Name: 'Realate',
    Repo: 'https://github.com/deluminators/Realate',
    Owner: 'Sanjiban Sengupta',
    profiles: [
      {
        github: 'https://github.com/kahanikaar',
        linkedin: 'https://www.linkedin.com/in/sanjiban-sengupta/',
      }
    ],
    Description: `"real-time real-estate data prediction & analysis
    A robust application providing support for predicting and detecting land quality & cover, its optimal usage for building flats or property, its generative model, and optimal paths to electric/water/sewage reserve."`,
    TechStack: ["Machine Learning", "Django", "React", "Tensorflow", "Pytorch", "Computer Vision", "OpenCV", "GANs"]
  },

  {
    Name: 'ModernBanking-Management-System',
    Repo: 'https://github.com/spandey1296/ModernBanking-Management-System',
    Owner: 'SHIVANT KUMAR PANDEY',
    profiles: [
      {
        github: 'https://github.com/spandey1296',
        linkedin: 'https://www.linkedin.com/in/shivantkumarpandey/',
      }
    ],
    Description: `This is a modern banking project that has the facility to provide all services on a single platform such as internet banking, wealth management, loan facility, and get information about money transfer updates.`,
    TechStack: ["Kotlin"]
  },

  {
    Name: 'CityonBikes',
    Repo: 'https://github.com/preeti13456/CityonBikes',
    Owner: 'Preeti Sharma',
    profiles: [
      {
        github: 'https://github.com/Preeti13456',
        linkedin: 'https://www.linkedin.com/in/preeti-sharma-155a85181/',
      }
    ],
    Description: `"Created a website for renting bikes
    https://cityonbikes.herokuapp.com/"`,
    TechStack: ["html" , "css" , "js", "python", "django"]
  },

  {
    Name: 'StarBook',
    Repo: 'https://github.com/hashirshoaeb/star_book',
    Owner: 'Hashir Shoaib',
    profiles: [
      {
        github: 'https://github.com/hashirshoaeb',
        linkedin: 'https://www.linkedin.com/in/hashirshoaeb/',
      }
    ],
    Description: `“StarBook” is a digital diary, and a mood tracking app. The user will be able to rate his mood for each day and write a short story for him, like how his day was. Color is given to each mood, let’s say, green for a happy mood, red for angry and yellow for a sad mood. The statistics of users will be visualized in a methodical structure. For this the app will form a graph, calendar, each date box is colored with the color of users' aura lets say green for positive spirits. StarBook will cooperate with users to boost their positive energy and train healthy thinking, correspondingly moving towards calmer and patient personality. StarBook will use positive psychology and cognitive behavioral therapy for you to better understand yourself, overcoming stress, anxiety, and depressions. The app is all in all focused to give personalized experience to every individual user, increasing their productivity, objectivity, and emotional health.`,
    TechStack: []
  },

  {
    Name: 'Jagrati WebApp',
    Repo: 'https://github.com/garg3133/JagratiWebApp',
    Owner: 'Priyansh Garg',
    profiles: [
      {
        github: 'https://github.com/garg3133',
        linkedin: 'https://www.linkedin.com/in/priyansh3133/',
      }
    ],
    Description: `"Jagrati is an initiative by the students of IIITDM Jabalpur (started in 2009) to teach poor and under-privileged children of nearby villages at IIITDM Jabalpur, completely free of cost. Before COVID, we had around 100 students, from the 4 villages adopted by us in the vicinity of our institute, who used to come to our institute in the evening to take classes.
    Apart from the basic classes, we also prepare students of Class 5 for Navodaya Entrance Examination and we've received great results in past years where one of our students got selected in Navodaya in 2018, one in 2019 and two in 2020.
    So, this project is a little initiative from my side to help volunteers manage the classes and other day-to-day operations at Jagrati in a better way and make it easier for them to keep track of students, classwork-homework given to them, their attendances and other things and focus more on teaching than these side activities.
    You may find more details about the project here: https://github.com/garg3133/JagratiWebApp"`,
    TechStack: ["HTML", "CSS", "Bootstrap4", "VanillaJS", "Python", "Django"]
  },

  {
    Name: 'Sampark',
    Repo: 'https://github.com/The-Robotics-Forum/sampark',
    Owner: 'The Robertics Forum',
    profiles: [
      {
        github: 'https://github.com/The-Robotics-Forum',
        linkedin: 'https://www.linkedin.com/company/the-robotics-forum/',
      }
    ],
    Description: `This is a free and open source team chat collaboration platform that allows user to communicate securely in Realtime ,Share File, Location and code snippet as well as create private rooms.`,
    TechStack: ["MERN"]
  },
  
  {
    Name: 'Stack Over Flow Tag Predictions',
    Repo: 'https://github.com/Technocolabs100/Stack-Overflow-Tag-Predictions',
    Owner: 'Yasin Shah',
    profiles: [
      {
        github: 'https://www.github.com/Yasin-Shah',
        linkedin: 'https://www.linkedin.com/in/yasin-shah-139970141/',
      }
    ],
    Description: `"Our classifiers performed reasonably well;
they succeeded in predicting at least one
correct tag for many questions correctly, even
if they did not predict every tag correctly.
• Because of the sparsity of the tags present
in our dataset, we were curious as to
whether tag prevalence in the dataset was
strongly correlated with the performance of
that tag’s corresponding classifier.
• However, our analysis showed that a better
criterion for success of a classifier is how
unique its tag is, and if there are other
words in the vocabulary which uniquely
identify it.
• While tags which are easy to predict
usually correspond to some specific
keywords, tags which are difficult to predict
usually cover a larger subject area, are
Our more broad, or have many applications."`,
    TechStack: ["Data Science", "Machine Learning", "Data Analysis", "Deep learning"]
  },
  
  {
    Name: 'Review My Project',
    Repo: 'https://github.com/Technocolabs100/Stack-Overflow-Tag-Predictions',
    Owner: 'Yasin Shah',
    profiles: [
      {
        github: 'https://www.github.com/Yasin-Shah',
        linkedin: 'https://www.linkedin.com/in/yasin-shah-139970141/',
      }
    ],
    Description: `Create a Web Application that User Have to Submit your own Project details like working videos, links, photos, and their code to review by Developer experts.`,
    TechStack: ["HTML", "CSS", "JavaScript", "PHP", "Mangodb", "MySql Database", "React", "NODE JS"]
  },
  
  {
    Name: 'PortfolioFy',
    Repo: 'https://github.com/kaustubhgupta/PortfolioFy',
    Owner: 'Kaustubh Gupta',
    profiles: [
      {
        github: 'https://github.com/kaustubhgupta',
        linkedin: 'https://www.linkedin.com/in/kaustubh-gupta-612767ab/',
      }
    ],
    Description: `As a developer we create hundreds of repositories and hardly 15-20 of them actually make it to final project we deploy and showcase on social media/linkedin. This GitHub action allows you to generate your perfect self updating portfolio with Projects, Hackathons and latest Blogs (optional). An index file is generated by this action which with the help of GitHub pages gets deployed as soon as it is commited the repository.`,
    TechStack: ["Python", "HTML", "CSS", "JS", "GitHub Actions", "API"]
  },
  
   {
    Name: 'Hacking-Scripts',
    Repo: 'https://github.com/Tejas1510/Hacking-Scripts',
    Owner: 'Tejas Sudhir Tapas',
    profiles: [
      {
        github: 'https://github.com/Tejas1510',
        linkedin: 'https://www.linkedin.com/in/tejas-tapas-971847171/',
      }
    ],
    Description: `Hacking Scripts contains amazing and awesome scripts written in Python, JavaScript, Java, Nodejs, and more. The main aim of the repository will be to provide utility scripts that might make everyday life easy.`,
    TechStack: ["Python", "Javascript", "Nodejs", "Java"]
  },
  
  {
    Name: 'Manthan',
    Repo: 'https://github.com/Manthan933/Manthan',
    Owner: 'Avishanker Mishra',
    profiles: [
      {
        github: '#',
        linkedin: '#',
      }
    ],
    Description: `"1. Improve the backend performance using Node.js and Express.js.
2. Improve REST API by latest programming techniques.
3. Form frontend, you have to implement multiple components in react and improve some basic components.
 4. Dockerizing the application with local mogodb and integrate Travis CI with this project ."`,
    TechStack: ["Nodejs", "Reactjs", "Expressjs", "Mongodb", "Docker", "MaterialUI"]
  },
  {
    Name: 'Netra',
    Repo: 'https://github.com/The-Robotics-Forum/netra',
    Owner: 'The Robotics Forum',
    profiles: [
      {
        github: 'https://github.com/The-Robotics-Forum',
        linkedin: 'https://www.linkedin.com/company/the-robotics-forum/',
      }
    ],
    Description: `Android Application used in TRF's Flagship Level 1 Workshop every year.`,
    TechStack: ["Kotlin","OpenCV","Google vision API", "MaterialUI"]
  },
];


// Generates tech stack
const generateStack = stackArray => {
  let result = [];
  for (let stackElement in stackArray) {
    const listItem = `<button onclick="filterStack('${stackArray[stackElement]}')">${stackArray[stackElement]}</button>`;
    result.push(listItem);
  }
  return result.join(' ');
};

var id = 0;

const generateCards = cardDetail => {
  const { Name, Repo, Owner, profiles, Description, TechStack } = cardDetail;

  
  const projectCard = `
  <div class="swiper-slide" id="${id}" onclick="displayProject('${id}','true')">
  <div class="card-num">${id+1}</div>
  <h5><a href="${Repo}" target="_blank">${Name}</a></h5>
    <p class="p-limit">${limitWords(Description, 10)}</p>
    <!--<p class="card-stack">${TechStack}</p>-->
    <!--<a href="${Repo}" target="_blank">Go to Repo</a>-->
    <button class="play-card"><i class="fas fa-play"></i></button>
  </div>
  `;
  id++;
  document.querySelector(".swiper-wrapper").innerHTML += projectCard;
  // return projectCard;
};

// Creates cards through `generateCards()` for each team
const injectCardsToPage = () => {
  // let projectCards = project.map((item) => {
  //   return generateCards(item)
  // })

  // return projectCards;
  projectsData.forEach((item) => {
    generateCards(item);
  })
};

// document.querySelector(".swiper-wrapper").innerHTML = injectCardsToPage(projectsData);
injectCardsToPage();

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
  if (!projectsData[e].TechStack.length) {
    document.querySelector(".proj-info .tech-stack").style.display = "none";
  }
  else {
    document.querySelector(".proj-info .tech-stack").style.display = "block";
  }
}

// function filterStack(el) {
//   var key = el.toLowerCase();
//   $(".swiper-slide").filter(function () {
//     var isSameTechStack = false;
//     var thisStack = projectsData[$(this).attr('id')].TechStack;
//     thisStack.forEach(function (e) {
//       if (e.toLowerCase() == key) {
//         isSameTechStack = true;
//       }
//     })
//     $(this).toggle(isSameTechStack);
//   });
// }

// Element.prototype.toggleHTML = function() { 

//     if ( this.style.display == '' || this.style.display == 'block' ) { 
//         this.style.display = 'none';
//     }else{
//         this.style.display = 'block';
//    }
// }

// function filterStack(el) {
//   var key = el.toLowerCase();
//   document.querySelectorAll('.swiper-slide').forEach(item => {
//     var isSameTechStack = false;
//     var thisStack = projectsData[item.getAttribute("id")].TechStack;
//     thisStack.forEach(e => {
//       if (e.toLowerCase() == key) {
//         isSameTechStack = true;
//       }
//     })
//     item.toggleHTML(isSameTechStack);
//   });
// }

function displayProject(el, isClicked) {
  // if (isClicked == 'true') {
  //   clearInterval(Interval);
  // }
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
// var Interval = setInterval(function playCards() {
//   displayProject(index, 'false');
//   index++;
//   if (index == projectsData.length - 1) {
//     index = 0;
//   }
// }, 4000);
