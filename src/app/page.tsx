'use client';

import React, { useState } from 'react';
import './page.css';
import CalculateWater from '@/components/CalculateWater';
import TMB from '@/components/TMB';
import IMC from '@/components/IMC';
import Fat from '@/components/fat';

export default function Home() {

  const [options, setOptions] = useState<number>(0);

  return (
    <div className="container">
      <aside className='aside-container'>
        <section className="choice-container">
          <h1>O que deseja calcular?</h1>
            <div>
            <input type="radio" id="TBM" value="0" name="choice" className="radio-input" onChange={(e) => setOptions(Number(e.target.value))} checked={options === 0} />
            <label htmlFor="TBM" className="radio-label">Metabolismo Basal e Gasto Calórico</label>
            </div>

          <div className="radio-container">
            <input type="radio" id="water" value="1" name="choice" className="radio-input" onChange={(e) => setOptions(Number(e.target.value))} />
            <label htmlFor="water" className="radio-label">Água</label>
          </div>

          <div>
            <input type="radio" id="IMC" value="2" name="choice" className="radio-input" onChange={(e) => setOptions(Number(e.target.value))} />
            <label htmlFor="IMC" className="radio-label">IMC</label>
          </div>

          <div>
            <input type="radio" id="fat" value="3" name="choice" className="radio-input" onChange={(e) => setOptions(Number(e.target.value))} />
            <label htmlFor="fat" className="radio-label">Percentual de gordura</label>
          </div>
        </section>
      </aside>
      <main className="main-container">
        {options === 0 && <TMB />}
        {options === 1 && <CalculateWater />}
        {options === 2 && <IMC />}
        {options === 3 && <Fat />}
      </main>
    </div>
  );
}