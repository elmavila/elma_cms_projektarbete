// pages/404.js
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Sida inte hittad</h1>
      <p>Ojdå, vi kunde inte hitta sidan du letade efter.</p>
      <Link href="/">
        Gå tillbaka till startsidan
      </Link>
    </div>
  )
}

export default Custom404
