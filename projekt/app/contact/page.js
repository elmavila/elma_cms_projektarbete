import Nav from '../components/Nav'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <section className="contact-section">
          <div className="container">
            <h1>Kontakta Mig</h1>
            <p id="question">Har du frågor eller vill komma i kontakt med mig? Fyll i formuläret nedan eller använd mina kontaktuppgifter!</p>

            {/* <!-- Kontaktformulär --> */}
            <form action="#" method="POST" className="contact-form">
              <label for="name">Ditt Namn:</label>
              <input type="text" id="name" name="name" required />

              <label for="email">Din E-postadress:</label>
              <input type="email" id="email" name="email" required />

              <label for="message">Ditt Meddelande:</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit">Skicka Meddelande</button>
            </form>

            <div className="contact-info">
              <h2>Kontaktuppgifter</h2>
              <p>
                <strong>Email:</strong> <a href="mailto:elmavila02@gmail.com">elmavila02@gmail.com</a>
              </p>
              <p>
                <strong>Telefon:</strong> 070-123 45 67
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
