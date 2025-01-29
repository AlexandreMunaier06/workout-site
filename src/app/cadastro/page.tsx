import Image from 'next/image';
import pesos from '../../../public/images/pesos.jpg';
import './cadastro.css';
import Link from 'next/link';

function Cadastro() {
  return (
    <main className="main-container">
      <section className="login-container">
        <div className='login'>
          <form action="" className='forms-login'>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" required/>

            <label htmlFor="lastName">Sobrenome:</label>
            <input type="text" id="lastName" required/>

            <label htmlFor="nascimento">Data de nascimento:</label>
            <input type="date" id="nascimento" required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required/>

            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" required/>

            <label htmlFor="confirmSenha">Confirmar Senha:</label>
            <input type="password" id="confirmSenha" required/>

            <label htmlFor="genero">Genero:</label>
            <select name="genero" id="genero">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>

            <label htmlFor="peso">Peso (kg):</label>
            <input type="number" id="peso" placeholder='Peso em kilos' required/>

            <label htmlFor="altura">Altura (cm):</label>
            <input type="number" id="altura" placeholder='Altura em centímetros' required/>

            <button>Cadastrar</button>
            <Link href='./login'>Já tem cadastro? Clique aqui!</Link>
          </form>
        </div>
        <Image src={ pesos } alt="pesos de academia" className='image' />
      </section>
    </main>
  )
}

export default Cadastro;
