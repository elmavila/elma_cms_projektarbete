import Nav from './components/Nav'
import Footer from './components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getPageDataFromFrontPageHead, getPageDataFromFrontAbout, getPageDataFromFrontProjects } from './lib/api'

export default async function Home() {
  const dataFromFrontPageHead = await getPageDataFromFrontPageHead()
  const dataFromFrontPageAbout = await getPageDataFromFrontAbout()
  const dataFromFrontPageProjects = await getPageDataFromFrontProjects()
  console.log(dataFromFrontPageHead, dataFromFrontPageAbout, dataFromFrontPageProjects)

  return (
    <>
      <header>
        <Nav />
      </header>
      {/* <!-- Hero-sektion --> */}
      <section className="hero">
        <div className="hero-content">
          <h1>{dataFromFrontPageHead[0].title}</h1>
          <p>{dataFromFrontPageHead[0].description}</p>
          <Link href="/projects" className="btn">
            Se mina projekt
          </Link>
        </div>
        <div className="hero-image">
          <Image src={dataFromFrontPageHead[0].imageFrontPage.url} alt={dataFromFrontPageHead[0].imageFrontPage.description} width={250} height={250} />
        </div>
      </section>

      {/* <!-- Kort Om Mig --> */}
      <section className="about-preview">
        <h2>{dataFromFrontPageAbout[0]?.aboutMeTitle}</h2>
        <p>{dataFromFrontPageAbout[0]?.aboutMeDescription}</p>
        <Link href="/about" className="btn">
          Läs mer om mig
        </Link>
      </section>

      {/* <!-- Projektförhandsvisning --> */}
      {/* <section className="project-preview">
        <h2>{dataFromFrontPageProjects[0].projectTitle}</h2>
        <div className="project-cards">
          {dataFromFrontPageProjects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.projectImg?.url ? <Image src={project.projectImg.url} alt={project.projectImg.description} width={500} height={500} /> : <div>Bild saknas</div>}
              <h3>{project.projectTitle}</h3>
              <p>{project.projectDescription1}</p>
              <Link href={`/project/${project.slug}`} className="btn">
                Se mer
              </Link>
            </div>
          ))}
        </div>
      </section> */}

      <Footer />
    </>
  )
}
