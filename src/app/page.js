import Link from 'next/link';
import Image from 'next/image'
import styles from './page.css'

export default function Home() {
  const date = new Date();
  const tanggal = date.getDate();
  const bulan = date.getMonth() + 1;
  const tahun = date.getFullYear();

  const links = [
    {
      name: 'LinkedIn',
      desc: 'Know me better at my personal profile on LinkedIn',
      link: 'https://www.linkedin.com/in/salam-pararta/',
    },
    {
      name: 'GitHub',
      desc: 'Take a look at some of my projects here!',
      link: 'https://github.com/SenzawaG',
    },
    {
      name: 'Codes',
      desc: 'Find some of website coding Guide, Tips and Tricks here!',
      link: 'https://www.instagram.com/lamp.devs/',
    },
    {
      name: 'Pojok Priangan',
      desc: 'Find our Shortcuts and CollegeHacks for UPI Bandung',
      link: 'https://pojokpriangan.my.id',
    },
  ]

  return (
    <main className="main">
      <div className="description">
        <p>
          Last update: &nbsp;
          <code className="code">{`${tanggal}/${bulan}/${tahun}`}</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with {' '}
            <Image
              src="/next.svg"
              alt="Vercel Logo"
              className="vercelLogo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="center">
        <Image
          className="logo"
          src="/lamp.png"
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="grid">
        {links.map((item,i) => (
          <Link
            key={i}
            href={item.link}
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {item.name}
            </h2>
            <p>
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
