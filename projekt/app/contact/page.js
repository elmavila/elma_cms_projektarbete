import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import { getContactHead, getContactInfo } from '../lib/api'

export default async function Contact() {
  const contactHead = await getContactHead()
  const contactInformation = await getContactInfo()
  console.log(contactHead, contactInformation)

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="contact-page">
          <div className="container">
            <h1>{contactHead[0].title}</h1>

            {/* Bildsektion */}
            <Image src={contactHead[0].img.url || '/default-image.jpg'} alt={contactHead?.img?.title || 'Bild saknas'} width={250} height={250} />
            {/* Kontaktuppgifter */}
            <div className="contact-details">
              <h2>{contactInformation[0].title}</h2>
              <ul>
                {/* Här mappar vi över listan och renderar varje sträng direkt */}
                {contactInformation[0].contactInformation.map((info, index) => (
                  <li key={index}>{info}</li> // Rendera varje sträng i listan
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
