'use client';

import './page.css';

export default function Home() {

  const handleCalculate = () => {

  }
  return (
    <main className="main-container">
      <section className="calculo-container">
        <h1>Faça o cálculo da sua taxa de metabolismo basal</h1>
        <label htmlFor="age">Idade</label>
        <input type="number" />

        <label htmlFor="gender">Genero</label>
        <select>
          <option value={0}>Masculino</option>
          <option value={1}>Feminino</option>
        </select>

        <label htmlFor="weight">Peso</label>
        <input type="number" placeholder='em kilos'/>

        <label htmlFor="height">Altura</label>
        <input type="number" placeholder='em centimetros'/>

        <label htmlFor="activity">Nível de atividade física</label>
        <select>
          <option value={1.2}>Sedentário</option>
          <option value={1.375}>Levemente ativo</option>
          <option value={1.55}>Moderadamente ativo</option>
          <option value={1.725}>Muito ativo</option>
          <option value={1.9}>Super ativo</option>
        </select>

        <button
          className='calcular-btn'
          onClick={handleCalculate}
        >
          Calcular
        </button>
      </section>
    </main>
  );
}
