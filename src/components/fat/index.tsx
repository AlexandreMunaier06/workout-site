import { useState } from "react";
import Image from 'next/image';

type DadosType = {
  gender: number,
  height: string,
  weight: string,
  waist: string,
  neck: string,
  hip?: string,
}

type ResultType = {
  fat: string,
  fatMass: string,
  leanMass: string,
}

function Fat() {
  const [dados, setDados] = useState<DadosType>({
    gender: 0,
    height: '',
    weight: '',
    waist: '',
    neck: '',
    hip: '',
  });

  const [result, setResult] = useState<ResultType>({
    fat: '',
    fatMass: '',
    leanMass: '',
  });

  const handleCalculate = () => {
    const height = Number(dados.height);
    const waist = Number(dados.waist);
    const neck = Number(dados.neck);
    const weight = Number(dados.weight);

    if (!height || !waist || !neck || (dados.gender === 1 && !dados.hip)) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    let fatPercentage: number;
    if (dados.gender === 0) {
      fatPercentage = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
      const hip = Number(dados.hip);
      fatPercentage = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
    }

    setResult({
      fat: fatPercentage.toFixed(2),
      fatMass: ((fatPercentage / 100) * weight).toFixed(2),
      leanMass: (weight - ((fatPercentage / 100) * weight)).toFixed(2),
    });
  };

  return (
    <>
      <section className="TBM">
        <h1>Informe seus dados</h1>
        <label htmlFor="gender">Gênero</label>
        <select
          name="gender"
          id="gender"
          value={dados.gender}
          onChange={(e) => setDados({ ...dados, gender: Number(e.target.value) })}
        >
          <option value={0}>Masculino</option>
          <option value={1}>Feminino</option>
        </select>

        <label htmlFor="altura">Altura (cm)</label>
        <input
          type="number"
          value={dados.height}
          onChange={(e) => setDados({ ...dados, height: e.target.value })}
          required
        />

        <label htmlFor="weight">Peso (kg)</label>
        <input
          type="number"
          value={dados.weight}
          onChange={(e) => setDados({ ...dados, weight: e.target.value })}
          required
        />

        <label htmlFor="cintura">Circunferência da cintura (cm)</label>
        <input
          type="number"
          value={dados.waist}
          onChange={(e) => setDados({ ...dados, waist: e.target.value })}
          required
        />

        <label htmlFor="pescoco">Circunferência do pescoço (cm)</label>
        <input
          type="number"
          value={dados.neck}
          onChange={(e) => setDados({ ...dados, neck: e.target.value })}
          required
        />

        {dados.gender === 1 && (
          <>
            <label htmlFor="quadril">Circunferência do quadril (cm)</label>
            <input
              type="number"
              value={dados.hip}
              onChange={(e) => setDados({ ...dados, hip: e.target.value })}
              required
            />
          </>
        )}

        <button className='calcular-btn' onClick={handleCalculate}>
          Calcular
        </button>
      </section>

      {result.fat && (
        <section className="result">
          <p>Seu percentual de gordura é de {result.fat}%</p>
          <p>Sua massa gorda em kilos é de {result.fatMass}kg</p>
          <p>Sua massa magra total é de {result.leanMass}kg</p>
          <Image src='/images/fat.png' alt="Body fat levels chart" width={350} height={200}/>
        </section>
      )}
    </>
  )
}

export default Fat;