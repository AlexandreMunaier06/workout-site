'use client'

import Image from 'next/image';
import './cadastro.css';
import Link from 'next/link';
import React, { useState } from 'react';

type FormCadastro = {
  firstName: string,
  lastName: string,
  birthday: string,
  email: string,
  password: string,
  gender: 'masculino' | 'feminino',
  weight: string,
  height: string,
}

function Cadastro() {

  const [formData, setFormData] = useState<FormCadastro>({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    password: '',
    gender: 'masculino',
    weight: '',
    height: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = {
      first_name: formData?.firstName,
      last_name: formData?.lastName,
      birthday: formData?.birthday,
      email: formData?.email,
      password: formData?.password,
      gender: formData?.gender,
      weight: formData?.weight ? Number(formData.weight) : null,
      height: formData?.height ? Number(formData.height) : null
    };
  
    console.log('Enviando:', form);
  
    try {
      const response = await fetch('http://localhost:3001/cadastro/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
  
      const data = await response.json();
      console.log('Resposta do backend:', data);
    } catch (err) {
      console.error('Erro na requisição:', err);
    }
  };

  const handleSetForm = (name: string, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [name]: event.target.value.toString(),
    })
  }

  return (
    <main className="main-container">
      <section className="login-container">
        <div className='login'>
          <form action="" className='forms-login' onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={formData.firstName}
              onChange={(event) => handleSetForm('firstName', event)}
              required
            />

            <label htmlFor="lastName">Sobrenome:</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(event) => handleSetForm('lastName', event)}
              required
            />

            <label htmlFor="nascimento">Data de nascimento:</label>
            <input
              type="date"
              id="nascimento"
              value={formData.birthday}
              onChange={(event) => handleSetForm('birthday', event)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(event) => handleSetForm('email', event)}
              required
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={formData.password}
              onChange={(event) => handleSetForm('password', event)}
              required/>

            <label htmlFor="confirmSenha">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmSenha"
              required
            />

            <label htmlFor="genero">Genero:</label>
            <select
              name="genero"
              id="genero"
              value={formData.gender}
              onChange={(event) => handleSetForm('gender', event)}
            >
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>

            <label htmlFor="peso">Peso (kg):</label>
            <input
              type="text"
              id="peso"
              value={formData.weight}
              onChange={(event) => handleSetForm('weight', event)}
              placeholder='Peso em kilos'
              required
            />

            <label htmlFor="altura">Altura (cm):</label>
            <input
              type="text"
              id="altura"
              value={formData.height}
              onChange={(event) => handleSetForm('height', event)}
              placeholder='Altura em centímetros'
              required
            />

            <button type='submit'>Cadastrar</button>
            <Link href='./login'>Já tem cadastro? Clique aqui!</Link>
          </form>
        </div>
        <Image src='/images/pesos.jpg' alt="pesos de academia" className='image' width={100} height={100} />
      </section>
    </main>
  )
}

export default Cadastro;
