import Project from "./Project";
import { FaGithub} from "react-icons/fa";
import { MdWeb } from "react-icons/md";


export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">

        <Project
            image="lewe.png"
            description="Lewe Sportlife is a freelance project focused on providing an exceptional experience to squash, paddle, and sportswear enthusiasts. We developed an intuitive web platform with a personalized purchasing process via WhatsApp and a Dashboard to streamline product management and optimize business operations."
            techStack="React,Redux, CSS, JavaScript, Express, PostgreSQL,Sequelize, Node.js"
            buttons={[
             
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/AgPrieto/LeweFront",
              },

              {
                name: "Deploy",
                image: MdWeb,
                link: "https://www.lewesportlife.com/",
              }
             
            ]}
          >
            Lewe Sportlife
          </Project>

          <Project
            image="ola.png"
            description="
            An innovative event support app. It empowers producers to easily promote events through community membership. Features tailored for Administrators include event management and ticket allocation, while Users can browse events, purchase tickets, and provide feedback. SuperAdmin capabilities include managing permissions and handling user reviews"
            techStack="Next.js,Redux, TailwindCSS, JavaScript, Express, PostgreSQL,Sequelize, Node.js"
            buttons={[
             
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/Eventify-PF/Eventify-BackEnd",
              },

              {
                name: "Deploy",
                image: MdWeb,
                link: "https://lighthearted-entremet-b6aec9.netlify.app/",
              }
             
            ]}
          >
            EventifyPro
          </Project>

          <Project
            image="pok.png"
            description=" Single Page Application (SPA) focused on providing information about video games. It consumes data from the API https://rawg.io/. Some of the standout features include: Name search functionality, sorting and filtering by genres, an inclusive form for creating new video games, and the implementation of pagination. Responsive"
            techStack="React, Redux, Css, JavaScript, Nodejs, Express, Sequelize, PostgreSQL"
            buttons={[
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/facuotero/VideoGames-PI",
              },
            ]}
          >
            Videogames API
          </Project>

          <Project
            image="rym2.png"
            description="
            Developed a feature-rich Rick and Morty web app with user registration, secure database handling, and intuitive character navigation. Included Favorites for secure character saving and detailed views for an enhanced user experience."
            techStack="React, Redux, Css, JavaScript, Express, PostgreSQL"
            buttons={[
             
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/facuotero/Rick-Morty",
              },
             
            ]}
          >
            Rick and Morty Web App
          </Project>

          
        </div>
      </div>
    </section>
  );
}
