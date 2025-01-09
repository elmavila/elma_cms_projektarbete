import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        {/* <!-- Projektförhandsvisning --> */}
        <section className="project-preview">
          <h2>Mina Projekt</h2>
          <div className="project-cards">
            {/* <!-- Projekt 1 --> */}
            <div className="project-card">
              <Image src="/img/chrochet.png" alt="Projekt 1" width={500} height={500} />
              <h3>Chrochet Site</h3>
              <p>En kort beskrivning av projektet.</p>
              <Link href="/project/chrochet-site" className="btn">Se mer</Link>
            </div>
            {/* <!-- Projekt 2 --> */}
            <div className="project-card">
              <Image src="/img/cakws&baked.png" alt="Projekt 2" width={500} height={500} />
              <h3>Caked & Baked</h3>
              <p>En kort beskrivning av projektet.</p>
              <Link href="/project/caked-baked" className="btn">Se mer</Link>
            </div>

            {/* <!-- Projekt 3 --> */}
            <div className="project-card">
              <Image src="/img/todozen.png" alt="Projekt 3" width={500} height={500} />
              <h3>TodoZen</h3>
              <p>En kort beskrivning av projektet.</p>
              <Link href="/project/todozen" className="btn">Se mer</Link>
            </div>

            {/* <!-- Projekt 4 --> */}
            <div className="project-card">
              <Image src="/img/drum.png" alt="Projekt 4" width={500} height={500} />
              <h3>Drum🥁Kit</h3>
              <p>En kort beskrivning av projektet.</p>
              <Link href="/project/drum-kit" className="btn">Se mer</Link>
            </div>

            {/* <!-- Projekt 5 --> */}
            <div className="project-card">
              <Image src="/img/tindog.png" alt="Projekt 5" width={500} height={500} />
              <h3>Tindog</h3>
              <p>En kort beskrivning av projektet.</p>
              <Link href="/project/tindog" className="btn">Se mer</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
