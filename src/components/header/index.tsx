import Image from 'next/image';
import react from '../../../public/images/react.png';
import './header.css';
import Link from 'next/link';

function Header() {
  return (
    <header className='header-container'>
      <Link href='/'>
        <Image src={ react } alt="logo" />
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
