import './perfil.css';

function Perfil() {
  return (
    <>
      <section className="perfil-container">
        <h1>Informe seus dados</h1>
        <label htmlFor="height">Altura (cm)</label>
        <input
          type="number"
          id='height'
          placeholder='em centimetros'
        />

        <label htmlFor="weight">Peso (kg)</label>
        <input
          type="number"
          id='weight'
          placeholder='em kilos'
        />

        <label htmlFor="waist">Cintura (cm)</label>
        <input
          type="number"
          placeholder='em centimetros'
          id='waist'
        />

        <label htmlFor="neck">Pescoço (cm)</label>
        <input
          type="number"
          placeholder='em centimetros'
          id='neck'
        />

        <button type='submit'>
          Salvar
        </button>
      </section>
    </>
  )
}

export default Perfil;
