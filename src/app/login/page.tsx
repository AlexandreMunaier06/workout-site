'use client'

import Image from 'next/image';
import './login.css';
import Link from 'next/link';
import React, { useState } from 'react';

type loginType = {
  email: string,
  password: string
}

function Login() {

  const [login, setLogin] = useState<loginType>({
    email: '',
    password: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(login);

    try {
      const response = await fetch('http://localhost:3001/cadastro/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)
      });
      const data = response.json();
      console.log(data)
    } catch (err) {
      console.error(err);
    }
  }

  const handleLogin = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [name]: event.target.value
    })
  }

  return (
    <main className="main-container">
      <section className="login-container">
        <div className='login'>
          <form action="" className='forms-login' onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={login.email}
              onChange={(event) => handleLogin('email', event)}
              required
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={login.password}
              onChange={(event) => handleLogin('password', event)}
              required
            />

            <button type='submit'>Entrar</button>
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
