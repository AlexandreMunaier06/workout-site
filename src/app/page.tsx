'use client';

import React, { useState } from 'react';
import './page.css';
import CalculateWater from '@/components/CalculateWater';

type DadosType = {
  age: number,
  gender: number,
  weight: number,
  height: number,
  activity: number,
}

type ResultType = {
  TMB: string,
  TMBActivity: string,
}

export default function Home() {

  const [options, setOptions] = useState<number>(0);

  const [dados, setDados] = useState<DadosType>({
    age: 0,
    gender: 0,
    weight: 0,
    height: 0,
    activity: 0,
  });

  const [result, setResult] = useState<ResultType>({
    TMB: '',
    TMBActivity: '',
  });

  const handleCalculate = () => {
    if (dados.gender === 0) {
      const TMBMen = 88.362 + (13.397 * dados.weight) + (4.799 * dados.height) - (5.677 * dados.age);
      const TMBMenActivity = TMBMen * dados.activity;
      setResult({
        TMB: TMBMen.toFixed(2).toString(),
        TMBActivity: TMBMenActivity.toFixed(2).toString(),
      });
    } else {
      const TMBWomen = 447.593 + (9.247 * dados.weight) + (3.098 * dados.height) - (4.330 * dados.age);
      const TMBWomenActivity = TMBWomen * dados.activity;
      setResult({
        TMB: TMBWomen.toFixed(2).toString(),
        TMBActivity: TMBWomenActivity.toFixed(2).toString(),
      });
    }
  }

  return (
    <main className="main-container">
      <section className="calculo-container">
          <h1>Faça seu cálculo</h1>
          <label htmlFor="options">
            <select
              name="options"
              id="options"
              value={options}
              onChange={(e) => setOptions(Number(e.target.value))}
            >
              <option value="0">Metabolismo Basal e Gasto Calórico</option>
              <option value="1">Água</option>
              <option value="2">IMC</option>
              <option value="3">Percentual de gordura</option>
            </select>
          </label>
      {options === 0 &&
      <>
          <label htmlFor="age">Idade</label>
          <input
            type="number"
            value={dados.age}
            onChange={(e) => setDados({...dados, age: Number(e.target.value)})}
          />

          <label htmlFor="gender">Genero</label>
          <select
            value={dados.gender}
            onChange={(e) => setDados({...dados, gender: Number(e.target.value)})}
          >
            <option value={0}>Masculino</option>
            <option value={1}>Feminino</option>
          </select>

          <label htmlFor="weight">Peso</label>
          <input
            type="number"
            placeholder='em kilos'
            value={dados.weight}
            onChange={(e) => setDados({...dados, weight: Number(e.target.value)})}
          />

          <label htmlFor="height">Altura</label>
          <input
            type="number"
            placeholder='em centimetros'
            value={dados.height}
            onChange={(e) => setDados({...dados, height: Number(e.target.value)})}
          />

          <label htmlFor="activity">Nível de atividade física</label>
          <select
          value={dados.activity}
          onChange={(e) => setDados({...dados, activity: Number(e.target.value)})}
          >
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
          </>
      }
      {options === 1 && <CalculateWater />}
      </section>
      {result.TMB &&
        <section className='result-container'>
          <h1>Resultado</h1>
          <p>Metabolismo basal: {result.TMB}</p>
          <p>Gasto total: {result.TMBActivity}</p>
        </section>}
    </main>
  );
}
