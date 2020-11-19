import Link from 'next/link'

import './nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
      <Link href="/">
        <a className="nav__link">Home</a>
      </Link>
      <Link href="/posts">
        <a className="nav__link">Posts</a>
      </Link>
      <Link href="/about">
        <a className="nav__link">About</a>
      </Link>
    </nav>
  )
}

export default Nav