import { getAllProjects, getCategory, getFilterdProjects } from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

// Genererar statiska parametrar för projekt baserat på deras 'slug'
export async function generateStaticParams() {
  const allProjects = await getAllProjects()
  return allProjects.map((project) => ({ slug: project.slug }))
}

// Komponent som visar filtrerade projekt baserat på vald kategori
export default async function FilterdProjects({ params }) {
  const query = await getFilterdProjects(params.slug)
  const FilterdProjects = query?.data?.categoryCollection?.items || []
  const allCategories = await getCategory()

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="project-preview">
          <h2>Mina Projekt</h2>
          <button>
            <Link href="/projects" className="backButton">
              Tillbaka
            </Link>{' '}
          </button>
          <div className="category-list">
            <h3>Kategorier</h3>
            <ul>
              {allCategories.map((item, index) => (
                <li key={index}>
                  <Link href={`/category/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="filtered-projects-cards">
            {/* Itererar genom de filtrerade projekten och skapar en kort för varje kategori */}
            {FilterdProjects.map((category) => (
              <div key={category.slug} className="filtered-projects-card">
                <h2>Kategori: {category.title}</h2>
                {category?.linkedFrom?.allProjectsCollection?.items?.map((project) => (
                  <div key={project.slug} className="linked-project">
                    <Image src={project.projectPhoto?.url} alt={project.projectPhoto?.title || 'Bild saknas'} width={500} height={500} />
                    <h3>{project.projectTitle}</h3>
                    <p>{project.projectDescription}</p>
                    <Link href={`/project/${project.slug}`} className="btn">
                      Se mer
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
