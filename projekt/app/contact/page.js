// import Nav from '../components/Nav'
// import Footer from '../components/Footer'
// export default function Home() {
//   return (
//     <>
//       <header>
//         <Nav />
//       </header>
//       <main>
//         <section className="contact-section">
//           <div className="container">
//             <h1>Kontakta Mig</h1>
//             <p id="question">Har du frågor eller vill komma i kontakt med mig? Fyll i formuläret nedan eller använd mina kontaktuppgifter!</p>

//             {/* <!-- Kontaktformulär --> */}
//             <form action="#" method="POST" className="contact-form">
//               <label htmlFor="name">Ditt Namn:</label>
//               <input type="text" id="name" name="name" required />

//               <label htmlFor="email">Din E-postadress:</label>
//               <input type="email" id="email" name="email" required />

//               <label htmlFor="message">Ditt Meddelande:</label>
//               <textarea id="message" name="message" rows="5" required></textarea>

//               <button type="submit">Skicka Meddelande</button>
//             </form>

//             <div className="contact-info">
//               <h2>Kontaktuppgifter</h2>
//               <p>
//                 <strong>Email:</strong> <a href="mailto:elmavila02@gmail.com">elmavila02@gmail.com</a>
//               </p>
//               <p>
//                 <strong>Telefon:</strong> 070-123 45 67
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="contact-page">
          <div className="container">
            <h1>Kontakt-sida</h1>

            {/* Bildsektion */}
            <Image src="/img/potträtt.jpg" alt="Kontaktbild" width={250} height={250} />

            {/* Kontaktuppgifter */}
            <div className="contact-details">
              <h2>Kontaktuppgifter</h2>
              <ul>
                <li>
                  <strong>Email:</strong> <a href="mailto:elmavila02@gmail.com">elmavila02@gmail.com</a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/ditt-github-användarnamn" target="_blank" rel="noopener noreferrer">
                    github.com/ditt-github-användarnamn
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://linkedin.com/in/ditt-linkedin-profil" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/ditt-linkedin-profil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
