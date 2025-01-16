// Importerar nödvändiga komponenter och funktioner
import Nav from '../components/Nav'
import { getAboutPresentation, getAboutEdu, getAboutWork } from '../lib/api'
import Footer from '../components/Footer'

// Definierar About-komponenten som en asynkron funktion
export default async function About() {
  // Hämtar data för about-sidan
  const aboutPresentation = await getAboutPresentation()
  const aboutEdu = await getAboutEdu()
  const aboutWork = await getAboutWork()

  // Returnerar JSX-strukturen för about-sidan
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
                {/* [0] används för att få det första objektet i aboutPresentation-arrayen */}
                <h1>{aboutPresentation[0].title}</h1>
                <p>{aboutPresentation[0].description}</p>

                <h2>{aboutEdu[0].title}</h2>
                <ul>
                  {aboutEdu[0].eduList.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>

                <h2>{aboutWork[0].title}</h2>
                <ul>
                  {aboutWork[0].works.map((works, index) => (
                    <li key={index}>{works}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
