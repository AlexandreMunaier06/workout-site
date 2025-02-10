'use client'

import React, { useState } from 'react';
import './dieta.css';

function Dieta() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  const [macros, setMacros] = useState<{
    [key: string]: { carbs: string; protein: string; fat: string };
  }>({
    breakfast: { carbs: '', protein: '', fat: '' },
    lunch: { carbs: '', protein: '', fat: '' },
    snack: { carbs: '', protein: '', fat: '' },
    dinner: { carbs: '', protein: '', fat: '' },
  });

  const handleMacroChange = (meal: string, macro: string, value: string) => {
    setMacros({
      ...macros,
      [meal]: {
        ...macros[meal],
        [macro]: value,
      },
    });
  };
  return (
    <section className='dieta-container'>
      <div className="dieta">
        <h1>Registro de Dieta</h1>
        <form>
          {['breakfast', 'lunch', 'snack', 'dinner'].map((meal) => (
            <div className="meal-input" key={meal}>
              <label onClick={() => toggleSection(meal)}>
                {meal.charAt(0).toUpperCase() + meal.slice(1)}:
              </label>
              {openSection === meal && (
                <div>
                  <input
                    type="text"
                    placeholder="Carboidratos"
                    value={macros[meal].carbs}
                    onChange={(e) => handleMacroChange(meal, 'carbs', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Proteínas"
                    value={macros[meal].protein}
                    onChange={(e) => handleMacroChange(meal, 'protein', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Gorduras"
                    value={macros[meal].fat}
                    onChange={(e) => handleMacroChange(meal, 'fat', e.target.value)}
                  />
                </div>
              )}
            </div>
          ))}
          <button type="submit">Salvar</button>
        </form>
      </div>
    </section>
  );
}

export default Dieta;
      