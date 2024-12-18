import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
          <p>&copy; 2024 Elma Vila. Alla rättigheter förbehållna.</p>
          <div className="social-media">
        <a href="https://github.com/elmavila" target="_blank">
          <Image src="/img/github-svgrepo-com.svg" alt="Github" width={24} height={24} />
        </a>
        <a href="mailto:elmavila02@gmail.com">
          <Image src="/img/email-svgrepo-com.svg" alt="E-mail" width={24} height={24} />
        </a>
        <a href="https://www.linkedin.com/in/elma-vila-3a1962289/" target="_blank">
          <Image src="/img/linkedin-svgrepo-com.svg" alt="LinkedIn" width={24} height={24} />
        </a>
      </div>
    </footer>
  )
}
