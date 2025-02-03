import Image from 'next/image';
import './header.css';
import Link from 'next/link';

function Header() {
  return (
    <header className='header-container'>
      <Link href='/'>
        <Image src='/images/react.png' alt="logo" width={50} height={50}/>
      </Link>
      <ul>
        <li><Link href='/'>Feed</Link></li>
        <li><Link href='/treinos'>Treinos</Link></li>
        <li><Link href='/perfil'>Perfil</Link></li>
      </ul>
      <Link href='/login'>Login</Link>
    </header>
  )
}

export default Header;
