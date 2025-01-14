import Nav from '../components/Nav'
import Image from 'next/image'
import { getAboutPresentation, getAboutEdu, getAboutWork } from '../lib/api'
export default async function About() {
  const aboutPresentation = await getAboutPresentation()
  const aboutEdu = await getAboutEdu()
  const aboutWork = await getAboutWork()
  console.log(aboutPresentation, aboutEdu, aboutWork)
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

              {/* <div className="skills-column">
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
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
