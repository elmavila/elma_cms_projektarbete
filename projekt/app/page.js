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
      <Footer />
    </>
  )
}
