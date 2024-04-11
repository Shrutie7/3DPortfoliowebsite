import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import tcs from "../assets/company/tcs.png";
import ntpc from "../assets/company/ntpc.png";
import java from "../assets/tech/javaa.png";
import springboot from "../assets/tech/springboot.png";
import postgresql from "../assets/tech/postgresql.png";
import Screenshot1 from "../assets/Screenshot (306).png";
import Screenshot2 from "../assets/Screenshot (309).png";
import Screenshot3 from "../assets/Screenshot (308).png";
import Project1 from "../assets/Project1.png";
import Project5 from "../assets/Project5.png";
import Project4 from "../assets/Screenshot (314).png";
import Project3 from "../assets/Screenshot (312).png";
import Project2 from "../assets/Screenshot (315).png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "postgreSQL",
    icon: postgresql,
  },

  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

  {
    title: "Frontend Developer",
    company_name: "Tata consultancy services, TCS",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      " Spearheaded development of critical websites for CAIR, DRDO, and Ministry of Defense, Government of India.",
      "Implemented robust security with Keycloak and JWT authentication, ensuring data integrity and confidentiality, seamlessly integrated with REST APIs.",
      "Leveraged ReactJS for UI development, applying lazy loading for enhanced website performance.",
      "Ensured application reliability through comprehensive Jest unit testing, achieving nearly 80% test coverage.",
      "Utilized Redux toolkit for efficient state management, maintaining a consistent application state.",
      "Employed Tailwind CSS and Bootstrap for building responsive User Interfaces.",
      "Developed REST APIs using Java, Spring Boot, Hibernate, and PostgreSQL database.",
      "Collaborated closely with testing teams to identify and resolve bugs, contributing to high-quality end products.",
    ],
  },
  {
    title: "Summer Trainee Intern",
    company_name: "National Thermal Power Corp, NTPC Korba",
    icon: ntpc,
    iconBg: "#383E56",
    date: "June 2019 - August 2019",
    points: [
      "Hands-on experience in areas including power plant operations, maintenance of Turbine Maintenance Dept,Boiler Maintenance Dept, Plant Auxiliary Maintenance,followed by plant visits and environmental sustainability",
      "Learnt how the day to day operation of a thermal power plant is managed, how to maintain a plant & how to operate a plant",
      "Participated in training programs, workshops, and projects designed to provide exposure to the operations and functions of a leading power generation company",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Efficient, creative, and reliable - Shruti is an invaluable frontend developer. Their commitment to quality and ability to meet deadlines make them a standout member of any project. Highly Recommended!",
    name: "Ramachandran P",
    designation: "Project Manager",
    company: "Tata Consultancy Services, TCS",
    image: Screenshot1,
  },
  {
    testimonial:
      "Highly skilled frontend developer with a knack for creating seamless user experiences. Shruti combines technical expertise with a creative eye to deliver exceptional results. A valuable asset to any team!",
    name: "Yaseen AT",
    designation: "Frontend Developer",
    company: "Tata Consultancy Services, TCS",
    image: Screenshot2,
  },
  {
    testimonial:
      "A versatile developer who excels in frontend development and played a key role in our REST API development. Their dedication to delivering polished user interfaces and robust backend solutions is commendable.",
    name: "Damodhar Reddy",
    designation: "Backend Developer",
    company: "Tata Consultancy Services, TCS",
    image: Screenshot3,
  },
];

const projects = [
  {
    name: "Netflix GPT",
    description:
      "A comprehensive and Responsive web Application where users can have netflix along with gpt, utilizes google firebase for user authentication, also utilizes Open AI for personalized search for movies , TMDB api to fetch movies and tv series data , multilingual gpt search page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: Project1,
    source_code_link: "https://github.com/Shrutie7/Netflix-gpt-App",
  },
  {
    name: "YouFit",
    description:
      "A Gym application with role-based user authentication . Created a scalable UI for Admin,Owner,Trainer and users where owner can create trainers and users, users can book class, give feedback,trainers can create posts , users, trainers can relocate, resign gym.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "keyCloak",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "springBoot",
        color: "blue-text-gradient",
      }
    ],
    image: Project2,
    source_code_link: "https://github.com/Shrutie7/YouFit",
  },
  {
    name: "ChatterBox",
    description:
      "A Social media Application that has features of a social media platform including create post,delete, edit post follow unfollow users like,dislike posts with both feed, timeline posts , utilized web sockets to build chat functionality where users can chat.",
    tags: [
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb Atlas",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "web sockets",
        color: "green-text-gradient",
      },
      {
        name: "context API",
        color: "blue-text-gradient",
      }
    ],
    image: Project3,
    source_code_link: "https://github.com/Shrutie7/ChatterBox",
  },
  {
    name: "Streamify",
    description:
      "A video streaming platform where users can stream videos,search for videos,make nested comments integrated YouTube Data APIs. Implemented debouncing for efficient search and web polling for live chat.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "web Polling",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      }
    ],
    image: Project4,
    source_code_link: "https://github.com/Shrutie7/youtubeClone",
  },
  {
    name: "BiteEase",
    description:
      "A food ordering application where users can view multiple offers, search and filter food options order from famous restaurants,adding to cart and placing order,contact and about sections, utilizes swiggy live api.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ContextAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Project5,
    source_code_link: "https://github.com/Shrutie7/BiteEase",
  },
];

export { services, technologies, experiences, testimonials, projects };
