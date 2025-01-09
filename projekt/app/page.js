import Nav from './components/Nav'
import Footer from './components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getPageDataFromContentful } from './lib/api';
export default async function Home() {
  const dataFromContentful = await getPageDataFromContentful();
  console.log(dataFromContentful);
  return (
    <>
      <header>
        <Nav />
      </header>
      {/* <!-- Hero-sektion --> */}
      <section className="hero">
        <div className="hero-content">
          <h1>{dataFromContentful.title}</h1>
          <p>{dataFromContentful.description}</p>
          <h1>Välkommen till Min Portfolio</h1>
          <p>Jag är en passionerad webbutvecklare med fokus på att skapa moderna och responsiva webbplatser.</p>
          <Link href="/projects" className="btn">
            Se mina projekt
          </Link>
        </div>
        <div className="hero-image">
          <Image src="/img/potträtt.jpg" alt="Bild på mig" width={250} height={250} />
        </div>
      </section>

      {/* <!-- Kort Om Mig --> */}
      <section className="about-preview">
        <h2>Om Mig</h2>
        <p>Jag heter Elma Vila och jag brinner för att skapa användarvänliga webblösningar som fungerar smidigt på alla enheter. Med passion för både design och teknik strävar jag efter att bygga webbplatser som både ser bra ut och är funktionella.</p>
        <Link href="/about" className="btn">
          Läs mer om mig
        </Link>
      </section>

      {/* <!-- Projektförhandsvisning --> */}
      <section className="project-preview">
        <h2>Utvalda Projekt</h2>
        <div className="project-cards">
          <div className="project-card">
            <Image src="/img/todozen.png" alt="Bild från projektet TodoZen" width={500} height={500} />
            <h3>TodoZen</h3>
            <p>Ett kort beskrivning av projektet.</p>
            <Link href="/project/" className="btn">
              Se mer
            </Link>
          </div>
          <div className="project-card">
            <Image src="/img/drum.png" alt="Bild från projektet Drum Kit" width={500} height={500} />
            <h3>Drum🥁Kit</h3>
            <p>Ett kort beskrivning av projektet.</p>
            <a href="single-4.html" className="btn">
              Se mer
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
