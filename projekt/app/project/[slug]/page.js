import { getSingleProject, getAllProjects } from '../../lib/api'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export async function generateStaticParams() {
  const project = await getAllProjects()
  return project.map((project) => ({
    slug: project.slug,
  }))
}

export default async function singleProject({ params }) {
  const allProjects = await getSingleProject(params.slug)
  console.log('alla', allProjects[0])

  if (!allProjects || allProjects.length === 0) {
    return { notFound: true }
  }

  const project = allProjects[0]

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="single-project-page">
        <h1 className="project-title">{project.projectTitle}</h1>

        <div className="project-details">
          <div className="category-list">Kategori: {project.categoryCollection?.items?.map((category) => category.title).join(', ')}</div>
        </div>

        <div className="project-text">
          {project.mainText?.json?.content?.map((text, index) => (
            <div key={index}>{text.content[0].value}</div>
          ))}
        </div>

        <div className="project-images">
          {project.multiImgCollection?.items?.map((img, index) => (
            <Image key={index} src={img.url} width={500} height={500} alt={img.description}></Image>
          ))}
        </div>
        <div>Länk till projektet:</div>
      </main>
      <Footer />
    </>
  )
}
