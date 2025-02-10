import { useState } from "react";
import './TMB.css';

type DadosType = {
  age: string,
  gender: string,
  weight: string,
  height: string,
  activity: string,
}

type ResultType = {
  TMB: string,
  TMBActivity: string,
}

function TMB() {

  const [dados, setDados] = useState<DadosType>({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activity: '',
  });

  const [result, setResult] = useState<ResultType>({
    TMB: '',
    TMBActivity: '',
  });

  const [diet, setDiet] = useState<string>('maintain');

  const [calories, setCalories] = useState<string>('');

  const handleCalculate = () => {
    if (Number(dados.gender) === 0) {
      const TMBMen = 88.362 + (13.397 * Number(dados.weight)) + (4.799 * Number(dados.height)) - (5.677 * Number(dados.age));
      const TMBMenActivity = TMBMen * Number(dados.activity);
      setResult({
        TMB: TMBMen.toFixed(2).toString(),
        TMBActivity: TMBMenActivity.toFixed(2).toString(),
      });
    } else {
      const TMBWomen = 447.593 + (9.247 * Number(dados.weight)) + (3.098 * Number(dados.height)) - (4.330 * Number(dados.age));
      const TMBWomenActivity = TMBWomen * Number(dados.activity);
      setResult({
        TMB: TMBWomen.toFixed(2).toString(),
        TMBActivity: TMBWomenActivity.toFixed(2).toString(),
      });
    }
  }

  const handleDiet = () => {
    if (diet === 'maintain') {
      setCalories(result.TMBActivity);
    } else if (diet === 'bulking') {
      setCalories((Number(result.TMBActivity) * 1.10).toFixed(2));
    } else {
      setCalories((Number(result.TMBActivity) - (Number(result.TMBActivity) * 0.20)).toFixed(2));
    }
  }

  return (
    <>
      <section className="TBM">
        <h1>Informe seus dados</h1>
        <label htmlFor="age">Idade</label>
        <input
          type="number"
          value={dados.age}
          onChange={(e) => setDados({ ...dados, age: e.target.value })}
        />

        <label htmlFor="gender">Gênero</label>
        <select
          value={dados.gender}
          onChange={(e) => setDados({ ...dados, gender: e.target.value })}
        >
          <option value={0}>Masculino</option>
          <option value={1}>Feminino</option>
        </select>

        <label htmlFor="weight">Peso</label>
        <input
          type="number"
          placeholder='em kilos'
          value={dados.weight}
          onChange={(e) => setDados({ ...dados, weight: e.target.value })}
        />

        <label htmlFor="height">Altura</label>
        <input
          type="number"
          placeholder='em centimetros'
          value={dados.height}
          onChange={(e) => setDados({ ...dados, height: e.target.value })}
        />

        <label htmlFor="activity">Nível de atividade física</label>
        <select
          value={dados.activity}
          onChange={(e) => setDados({ ...dados, activity: e.target.value })}
        >
          <option value={1.2}>Sedentário</option>
          <option value={1.375}>Levemente ativo</option>
          <option value={1.55}>Moderadamente ativo</option>
          <option value={1.725}>Muito ativo</option>
          <option value={1.9}>Super ativo</option>
        </select>

        <button className='calcular-btn' onClick={handleCalculate}>
          Calcular
        </button>
      </section>

      {result.TMB && (
        <section className="result">
          <h1>Resultado</h1>
          <p>Metabolismo basal: {result.TMB}</p>
          <p>Gasto total: {result.TMBActivity}</p>
          <label htmlFor="diet">O que você quer?</label>
          <select name="diet" id="diet" onChange={(e) => setDiet(e.target.value)}>
            <option value="maintain">Manter peso</option>
            <option value="bulking">Bulking</option>
            <option value="cutting">Cutting</option>
          </select>
          <button className='calcular-btn' onClick={handleDiet}>
            Calcular
          </button>
          {calories && <p>Calorias: {calories}</p>}
        </section>
      )}
    </>
  )
}

export default TMB;