"use strict";

const favClassesDataSet = {
  linkedIn: 'fa fa-linkedin',
  twitter: 'fa fa-twitter',
  github: 'fa fa-github',
  facebook: 'fa fa-facebook'
};

const mapProfileLinksToFavClasses = profileName => {
  return favClassesDataSet[profileName];
};

const teamData = [
  {
    name: 'Jai Sadana',
    position: 'Founder & CEO',
    image: 'jai.jpeg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/jaisadana',
      }
    ]
  },

  {
    name: 'Abhishek Mankuskar',
    position: 'Program Leader',
    image: 'IMGBG.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/abhishek-mankuskar-03790018b/',
        github: 'https://github.com/abhishekmankuskar',
        twitter: 'https://twitter.com/home'
      }
    ]
  },

  {
    name: 'Rachitt Shah',
    position: 'Program manager',
    image: 'rachitt_shah.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/rachitt-shah',
        github: 'https://github.com/godslayer201',
        twitter: 'https://twitter.com/rachittshah'
      }
    ]
  },

  {
    name: 'Priyal Bhatewara',
    position: 'Program manager',
    image: 'priyal_Bhatewara.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/priyal-bhatewara/',
        github: 'https://github.com/priyalbhatewara123',
        twitter: 'https://twitter.com/priyalbhatewara'
      }
    ]
  },

  {
    name: 'Nistha Gupta',
    position: 'Program manager',
    image: 'Nistha.png',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/nistha-gupta-611a21190/',
        github: 'https://github.com/Nistha-tech',
        twitter: 'https://twitter.com/NisthaGupta7'
      }
    ]
  },

  {
    name: 'Shivani Chauhan',
    position: 'Graphics Designer',
    image: 'Shivani_chauhan.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/xdshivani',
        github: 'https://github.com/xdshivani',
        twitter: 'https://twitter.com/xdshivani'
      }
    ]
  },

  {
    name: 'Utkarsh Srivastava',
    position: 'Graphic Designer',
    image: 'Utkarsh_Srivastava.jpeg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/utkarsh-srivastava-544a81181/',
        twitter: 'https://twitter.com/UTKARSH88063212',
      }
    ]
  },

  {
    name: 'Chetna Grover',
    position: 'Graphics Designer',
    image: 'Chetna.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/chetna-grover-613a581a4',
        github: 'https://github.com/chetnagrover00',
      }
    ]
  },

  {
    name: 'Kashish Goyal',
    position: 'Web Developer',
    image: 'kashish_goyal.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/kashish-goyal-327209192',
        github: 'https://github.com/Kashish-max',
      }
    ]
  },

  {
    name: 'Yogesh Chhabra',
    position: 'Web Developer',
    image: 'Yogesh_Chhabra.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/yogesh-chhabra-735096189/',
        github: 'https://github.com/yogesh-1952',
      }
    ]
  },

  {
    name: 'Shubha Sharma',
    position: 'Web Developer',
    image: 'ShubhaSharma.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/shubhasharma0208',
        github: 'https://github.com/shubha028',
        twitter: 'https://twitter.com/shubha0208'
      }
    ]
  },

  {
    name: 'Taranpreet Kalra',
    position: 'Content writer',
    image: 'Taranpreet_Kalra.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/taranpreet-kalra/',
        twitter: 'https://twitter.com/taranpreet_99'
      }
    ]
  },

  {
    name: 'Vanshika goel',
    position: 'Outreach',
    image: 'Vanshika.jpg',
    profiles: [
      {
        linkedIn: 'https://www.linkedin.com/in/vanshika-goel-406291198',
        github: 'https://github.com/vanshika-goel0109',
      }
    ]
  },
];


// Generates links  for social handles

const generateProfileLinks = profileObject => {
  let result = [];
  for (let profile in profileObject) {
    const classtoAdd = mapProfileLinksToFavClasses(profile);
    const listItem = `
              <a href="${profileObject[profile]}" target="__blank">
                <i class="${classtoAdd}"></i>
              </a>`;
    result.push(listItem);
  }
  return result.join(' ');
};

// Generates HTML for each team members from array
const generateCards = cardDetail => {
  const { name, position, image, profiles } = cardDetail;

  const getProfilesLinksDynamic = generateProfileLinks(profiles[0]);

  const teamCard = `
  <card data-image="./img/Team/${image}">
    <h1 slot="header">${name}</h1>
    <p slot="content">
        ${getProfilesLinksDynamic}
        <br>
        <span>${position}</span>
    </p>
  </card>`;
  Team.innerHTML += teamCard;
  // return teamCard;
};

// Creates cards through `generateCards()` for each team
const injectCardsToPage = () => {
  // let members = team.map((item) => {
  //   return generateCards(item)
  // })

  // return members;
  teamData.forEach(teamMember => {
		generateCards(teamMember);
  });
  
};


//Team
// Team.innerHTML = injectCardsToPage(teamData);
injectCardsToPage();
