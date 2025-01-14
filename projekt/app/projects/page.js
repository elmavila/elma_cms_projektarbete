import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProjects } from '../lib/api'

export default async function Projects() {
  const allProjects = await getAllProjects()
  console.log(allProjects)

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="project-preview">
          <h2>Mina Projekt</h2>
          <div className="project-cards">
            {allProjects?.map((project, index) => (
              <div key={index} className="project-card">
                <Image src={project.projectPhoto?.url || '/default-image.jpg'} alt={project.projectPhoto?.title || 'Bild saknas'} width={500} height={500} />
                <h3>{project.projectTitle}</h3>
                <p>{project.projectDescription}</p>
                <Link href={`/project/${project.projectTitle.toLowerCase().replace(/ /g, '-')}`} className="btn">
                  Se mer
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
