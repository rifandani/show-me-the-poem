import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navbar-brand">Show Me The Poem</a>
      </Link>
      <Link href="/new">
        <a className="create">Add Poem</a>
      </Link>
    </nav>
  );
}
