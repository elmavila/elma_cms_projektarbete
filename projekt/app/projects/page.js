import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
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
              <a href="single-1.html" className="btn">
                Se mer
              </a>
            </div>

            {/* <!-- Projekt 2 --> */}
            <div className="project-card">
              <Image src="/img/cakws&baked.png" alt="Projekt 2" width={500} height={500} />
              <h3>Cakes & Baked</h3>
              <p>En kort beskrivning av projektet.</p>
              <a href="single-2.html" className="btn">
                Se mer
              </a>
            </div>

            {/* <!-- Projekt 3 --> */}
            <div className="project-card">
              <Image src="/img/todozen.png" alt="Projekt 3" width={500} height={500} />
              <h3>TodoZen</h3>
              <p>En kort beskrivning av projektet.</p>
              <a href="single-3.html" className="btn">
                Se mer
              </a>
            </div>

            {/* <!-- Projekt 4 --> */}
            <div className="project-card">
              <Image src="/img/drum.png" alt="Projekt 4" width={500} height={500} />
              <h3>Drum🥁Kit</h3>
              <p>En kort beskrivning av projektet.</p>
              <a href="single-4.html" className="btn">
                Se mer
              </a>
            </div>

            {/* <!-- Projekt 5 --> */}
            <div className="project-card">
              <Image src="/img/tindog.png" alt="Projekt 5" width={500} height={500} />
              <h3>Tindog</h3>
              <p>En kort beskrivning av projektet.</p>
              <a href="single-5.html" className="btn">
                Se mer
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
