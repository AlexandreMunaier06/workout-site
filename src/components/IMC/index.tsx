import { useEffect, useState } from "react";

type DadosType = {
  weight: string,
  height: string,
}

function IMC() {

  const [imc, setImc] = useState<number>(0);

  useEffect(() => {
    const determineImcStatus = (imc: number) => {
      if (imc < 18.5) return 'abaixo do peso';
      if (imc < 24.9) return 'com peso saudável';
      if (imc < 29.9) return 'com sobrepeso';
      if (imc < 34.9) return 'com obesidade grau 1';
      if (imc < 39.9) return 'com obesidade grau 2';
      return 'com obesidade grau 3';
    };

    setImcStatus(determineImcStatus(imc));
  }, [imc]);

  const [dados, setDados] = useState<DadosType>({
    weight: '',
    height: '',
  });
  
  const [imcStatus, setImcStatus] = useState<string>('');

  const handleCalculateIMC = () => {
    const height = Number(dados.height) / 100;
    const imc = Number(dados.weight) / (height * height);
    setImc(imc);
  }

  return (
    <>
      <section className="TBM">
        <h1>Informe seus dados</h1>
        <label htmlFor="age">Peso</label>
        <input
          type="number"
          placeholder="em kilos"
          value={dados.weight}
          onChange={(e) => setDados({ ...dados, weight: e.target.value })}
          required
        />

        <label htmlFor="weight">Altura</label>
        <input
          type="number"
          placeholder='em centímetros'
          value={dados.height}
          onChange={(e) => setDados({ ...dados, height: e.target.value })}
          required
        />

        <button className='calcular-btn' onClick={handleCalculateIMC}>
          Calcular
        </button>
      </section>

      {imc > 0 && (
        <section className="result">
          <h2>Seu IMC é de: {imc.toFixed(2)}</h2>
          <h1>Você está {imcStatus}</h1>
          <ul>
            <li>Abaixo de 18.5 - Abaixo do Peso</li>
            <li>Entre 18.5 e 24.9 - Peso Saudável</li>
            <li>Entre 25 e 29.9 - Sobrepeso</li>
            <li>Entre 30 e 34.9 - Obesidade Grau 1</li>
            <li>Entre 35 e 39.9 - Obesidade Grau 2</li>
            <li>Acima de 40 - Obesidade Grau 3</li>
          </ul>
        </section>
      )}
    </>
  )
}

export default IMC;