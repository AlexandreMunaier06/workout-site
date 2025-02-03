import Image from 'next/image';
import './login.css';
import Link from 'next/link';

function Login() {
  return (
    <main className="main-container">
      <section className="login-container">
        <div className='login'>
          <form action="" className='forms-login'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required/>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" required/>
            <button>Entrar</button>
            <Link href='./forgot-password'>Esqueci minha senha</Link>
            <Link href='./cadastro'>Não tem cadastro? Clique aqui!</Link>
          </form>
        </div>
        <Image src='/images/pesos.jpg' alt="pesos de academia" className='image' width={100} height={100} />
      </section>
    </main>
  )
}

export default Login;
