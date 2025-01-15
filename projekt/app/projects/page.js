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
          {/* Dropdown Menu */}
          <div className="dropdown-container">
            <button className="dropdown-button">
              Välj kategori
            </button>
            
              <ul className="dropdown-menu">
                <li>
                  <Link href="/projects/category/web">Webbprojekt</Link>
                </li>
                <li>
                  <Link href="/projects/category/design">Design</Link>
                </li>
                <li>
                  <Link href="/projects/category/mobile">Mobilapplikationer</Link>
                </li>
                <li>
                  <Link href="/projects/category/other">Övrigt</Link>
                </li>
              </ul>

          </div>
          <div className="project-cards">
            {allProjects.map((project) => (
              <div key={project.slug} className="project-card">
                <Image src={project.projectPhoto?.url} alt={project.projectPhoto?.title || 'Bild saknas'} width={500} height={500} />
                <h3>{project.projectTitle}</h3>
                <p>{project.projectDescription}</p>
                <Link href={`/project/${project.slug}`} className="btn">
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
