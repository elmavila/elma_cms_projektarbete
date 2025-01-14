// import { getAllProjects } from '../../../lib/api'
// import Nav from '../../../components/Nav'
// import Footer from '../../../components/Footer'


// export default async function ProjectPage({ params }) {
//   const { slug } = params // Hämta slug från URL-parametern
//   const allProjects = await getAllProjects() // Hämta alla projekt från Contentful

//   // Hitta det specifika projektet baserat på slug
//   const project = allProjects.find((project) => project.projectTitle.toLowerCase().replace(/ /g, '-') === slug)

//   // Om projektet inte finns, visa ett felmeddelande
//   if (!project) {
//     return <div>Projektet hittades inte.</div>
//   }

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>
//       <main>
//         <section className="project-details">
//           <h1>{project.projectTitle}</h1>
//           <Image src={project.projectPhoto?.url || '/default-image.jpg'} alt={project.projectPhoto?.title || 'Bild saknas'} width={500} height={500} />
//           <p>{project.projectDescription}</p>
//           {/* Lägg till mer information om projektet här */}
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }

// // Få alla projekt från Contentful på server-sidan
// export async function generateStaticParams() {
//   const allProjects = await getAllProjects()
//   return allProjects.map((project) => ({
//     slug: project.projectTitle.toLowerCase().replace(/ /g, '-'), // Använd slug baserat på projektets titel
//   }))
// }

// pages/project/[slug]/page.js
import { getAllProjects, getSingleProject } from '../../lib/api'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Image from 'next/image'

export async function getStaticPaths() {
  const allProjects = await getAllProjects()
  const paths = allProjects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = await getSingleProject(params.slug)

  if (!project) {
    return { notFound: true }
  }

  return {
    props: { project },
  }
}

export default function ProjectPage({ project }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="project-details">
          <h1>{project.title}</h1>
          <Image src={project.projectImg.url || '/default-image.jpg'} alt={project.projectImg.title || 'Bild saknas'} width={500} height={500} />
          <p>{project.description}</p>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Besök projektet</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
