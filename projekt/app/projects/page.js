import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProjects, getCategory} from '../lib/api'

export default async function Projects() {
  const allProjects = await getAllProjects()
  const allCategories = await getCategory()
  console.log(allProjects)

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="project-preview">
          <h2>Mina Projekt</h2>
          {/* Divider */}
          <div className="divider"></div>
          {/* Kategorier Sektion */}
          <div className="category-list">
            <h3>Kategorier</h3>
            <ul>
              {allCategories.map((item, index) => (
                <li key={index}>
                  <a href={`/category/${item.slug}`}>{item.title}</a>
                </li>
              ))}
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
