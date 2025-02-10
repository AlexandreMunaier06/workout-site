import { useState } from "react";

type DadosType = {
  gender: number,
  height: string,
  waist: string,
  neck: string,
  hip?: string,
}

function Fat() {
  const [dados, setDados] = useState<DadosType>({
    gender: 0,
    height: '',
    waist: '',
    neck: '',
    hip: '',
  });

  const [fat, setFat] = useState<number>(0);

  const handleCalculate = () => {
    const height = Number(dados.height) / 100;
    const waist = Number(dados.waist);
    const neck = Number(dados.neck);

    if (!height || !waist || !neck || (dados.gender === 1 && !dados.hip)) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (dados.gender === 0) {
      setFat((495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450));
    } else {
      const hip = Number(dados.hip);
      setFat((495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450));
    }
  }

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

      {fat > 0 && (
        <section className="result">
          <p>Seu percentual de gordura é de {fat.toFixed(2)}%</p>
        </section>
      )}
    </>
  )
}

export default Fat;