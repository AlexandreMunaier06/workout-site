'use client';

import React, { useState } from 'react';

type intakeType = {
  intakeMin: string,
  intakeMax: string,
}

const CalculateWater: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [waterIntake, setWaterIntake] = useState<intakeType>({
    intakeMin: '',
    intakeMax: '',
  });

  const handleCalculate = () => {
    const intakeMin = (weight * 0.035).toFixed(2);
    const intakeMax = (weight * 0.05).toFixed(2);
    setWaterIntake({intakeMin: String(intakeMin), intakeMax: String(intakeMax)});
  };

  return (
    <div>
      <label htmlFor="weight">Peso (kg):</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <button onClick={handleCalculate}>Calcular</button>
      {waterIntake.intakeMax &&
        <p>O consumo diário deve ser entre {waterIntake.intakeMin} e {waterIntake.intakeMax} litros</p>
      }
    </div>
  );
};

export default CalculateWater;