import Nav from '../components/Nav'
import Image from 'next/image'
export default function About() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>
        <section className="about-me">
          <div className="container">
            <div className="about-layout">
              <div className="text-column">
                <h1>Om Mig</h1>
                <p>Hej! Jag heter Elma Vila och jag brinner för webbutveckling och design. Jag älskar att skapa webblösningar som inte bara ser bra ut utan också fungerar smidigt och effektivt på alla enheter, oavsett om du använder en dator, telefon eller surfplatta.</p>
                <h2>Min Resa</h2>
                <p>Jag började min karriär inom webbutveckling med en passion för att lösa problem och skapa vackra, funktionella webbplatser. Efter att ha studerat på It-Högskolan i Göteborg har jag utvecklat flera projekt och fått djupa kunskaper inom HTML, CSS, JavaScript, och ramverk som React.</p>

                <h2>Utöver webbutveckling</h2>
                <p>Utanför kodningen älskar jag att virka, spela spel, umgås med vänner och baka. Jag tror att mina kreativa intressen ger mig inspiration och perspektiv som jag tar med mig in i mina projekt.</p>
              </div>

              <div className="skills-column">
                <h2>Kompetenser</h2>

                <div className="skill-category">
                  <h3>Frontend</h3>
                  <div className="skill-icons">
                    <div className="skill-item">
                      <Image src="/img/html.svg" alt="HTML5" className="skill-icon" width={50} height={50} />
                      <p>HTML5</p>
                    </div>
                    <div className="skill-item">
                      <Image src="/img/css.svg" alt="CSS3" className="skill-icon" width={50} height={50} />
                      <p>CSS3</p>
                    </div>
                    <div className="skill-item">
                      <Image src="/img/javascript.svg" alt="JavaScript" className="skill-icon" width={50} height={50} />
                      <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                      <Image src="/img/react.svg" alt="React" className="skill-icon" width={50} height={50} />
                      <p>React</p>
                    </div>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Backend</h3>
                  <div className="skill-icons">
                    <div className="skill-item">
                      <Image src="/img/node-js.svg" alt="Node.js" className="skill-icon" width={50} height={50} />
                      <p>Node.js</p>
                    </div>
                    <div className="skill-item">
                      <Image src="/img/mongodb.svg" alt="MongoDB" className="skill-icon" width={50} height={50} />
                      <p>MongoDB</p>
                    </div>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Design</h3>
                  <div className="skill-icons">
                    <div className="skill-item">
                      <Image src="/img/figma.svg" alt="Figma" className="skill-icon" width={50} height={50} />
                      <p>Figma</p>
                    </div>
                    <div className="skill-item">
                      <Image src="/img/tailwind-css.svg" alt="Tailwind CSS" className="skill-icon" width={50} height={50} />
                      <p>Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
