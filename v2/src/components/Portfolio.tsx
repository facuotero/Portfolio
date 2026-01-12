import Project from "./Project";
import { FaGithub } from "react-icons/fa";
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
            image="bendito.png"
            description="Minimalist Shopify store for an artisanal olive oil brand. Mobile-first UX and clean PDPs with a frictionless checkout. ShipNow automates rates, labels, pickups, and live tracking—streamlining ops from purchase to delivery while boosting conversion."
            techStack="Liquid, Shopify, Shipnow API"
            buttons={[
              {
                name: "Deploy",
                image: MdWeb,
                link: "https://www.benditoaceite.com/",
              },
            ]}
          >
            Bendito Oil
          </Project>
          <Project
            image="laburen.png"
            description="
  Frontend development of the LaburenAI landing page, focused on performance, scalability, and a clean modular architecture. The project follows a mobile-first approach, with reusable UI components, optimized images, and SEO best practices to deliver a fast and modern user experience."
            techStack="Next.js 15, TypeScript, Tailwind CSS, Shadcn/UI, Radix UI, Vercel"
            buttons={[
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/facuotero/laburenai-landing",
              },
            ]}
          >
            LaburenAI Landing Page
          </Project>
          <Project
            image="combeeLanding.png"
            description="Built a responsive landing page for Combee, a ridesharing startup from Argentina. Developed with Next.js and Tailwind CSS, optimized for speed and SEO. The landing communicates the brand’s value proposition, showcases features, and includes CTAs to download the app and join the community."
            techStack="Next.js, Tailwind CSS"
            buttons={[
              {
                name: "Deploy",
                image: MdWeb,
                link: "https://www.combee.com.ar/",
              },
            ]}
          >
            Combee Landing
          </Project>
          <Project
            image="dallaswear.png"
            description="Dallaswear uniforms (https://dallaswearuniforms.com/) digital platform, helped modernizing their operations and improve internal efficiency. Migrated from Google Sheets with Google Appscript. My contributions focused on clean creating reusable components, and integrating services across the admin and financial dashboards."
            techStack="Next.js, React Query, Supabase"
            buttons={[
              {
                name: "Deploy",
                image: MdWeb,
                link: "https://dallaswear-tasks.vercel.app/",
              },
            ]}
          >
            Dallaswear Task Manager
          </Project>
          <Project
            image="northpines.png"
            description="Website developed for NorthPines Landscaping, a landscaping company based in Colorado. The site focuses on performance and local SEO, featuring service sections, a portfolio gallery, and a contact form. Fully responsive and optimized for user experience across devices."
            techStack="Next.js, Tailwind CSS, TypeScript"
            buttons={[
              {
                name: "Deploy",
                image: MdWeb,
                link: "https://northpineslandscapingco.com/",
              },
            ]}
          >
            NorthPines Landscaping
          </Project>
          <Project
            image="CombeeApp.png"
            description="Combee is a local carpooling platform developed in Argentina, connecting drivers and passengers heading to the same destination. I worked on the mobile app (React Native) implementing secure authentication (Firebase), real-time trip management, and a serverless backend (Node.js + AWS Lambda + MongoDB) using clean architecture for scalability."
            techStack="React Native, Expo, AWS, Nodejs, MongoDB"
            buttons={[
              {
                name: "Deploy",
                image: MdWeb,
                link: "https://www.combee.com.ar/",
              },
            ]}
          >
            Combee Mobile App
          </Project>
          <Project
            image="laSoiree.png"
            description="Internal management platform designed for event production companies. The platform streamlines workflow management, client coordination, and project tracking for event organizers. Features include task management, timeline coordination, vendor management, and real-time collaboration tools to optimize the production process from planning to execution."
            techStack="Nextjs, TailwindCSS, Supabase"
            buttons={[
              {
                name: "Deploy",
                image: MdWeb,
                link: "https://la-soiree.vercel.app/",
              },
            ]}
          >
            La Soirée Producer
          </Project>
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
              },
            ]}
          >
            Lewe Sportlife
          </Project>
          <Project
            image="edee.png"
            description="Student Desktop is a web platform designed for the Executive School, focused on providing a complete and accessible educational experience for professionals. The application allows students to manage their coursework, access educational materials, interact with teachers and peers, and track their academic progress. It also includes a personalized profile and a calendar for exams and classes, optimizing both user experience and educational management for the institution."
            techStack="Nextjs, Typescript, Redux Toolkit, TailwindCSS"
            buttons={[
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/facuotero/student-desktop",
              },

              {
                name: "Deploy",
                image: MdWeb,
                link: "https://student-desktop.vercel.app/",
              },
            ]}
          >
            Student Desktop
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
              },
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
        </div>
      </div>
    </section>
  );
}
