import Link from 'next/link'
export default function Nav() {
  return (
    <nav>
      <Link href="/" className="logo">
        Elma Vila
      </Link>
      <ul className="menu">
        <li>
          <Link href="/">Startsida</Link>
        </li>
        <li>
          <Link href="/projects">Projekt</Link>
        </li>
        <li>
          <Link href="/about">Om Mig</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}
