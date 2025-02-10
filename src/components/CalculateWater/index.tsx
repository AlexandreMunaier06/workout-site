'use client';

import React, { useState } from 'react';

type intakeType = {
  intakeMin: string,
  intakeMax: string,
}

const CalculateWater: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [waterIntake, setWaterIntake] = useState<intakeType>({
    intakeMin: '',
    intakeMax: '',
  });

  const handleCalculate = () => {
    const intakeMin = (Number(weight) * 0.035).toFixed(2);
    const intakeMax = (Number(weight) * 0.05).toFixed(2);
    setWaterIntake({ intakeMin: String(intakeMin), intakeMax: String(intakeMax) });
  };

  return (
    <>
      <div className='TBM'>
        <h1>Informe seus dados</h1>
        <label htmlFor="weight">Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight((e.target.value))}
        />
        <button onClick={handleCalculate}>Calcular</button>
      </div>
      <div className='result'>
        {waterIntake.intakeMax &&
          <p>O consumo diário deve ser entre {waterIntake.intakeMin} e {waterIntake.intakeMax} litros</p>
        }
      </div>
    </>
  );
};

export default CalculateWater;