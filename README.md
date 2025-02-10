# Workout Site

Este é um projeto de um site de treino que ajuda os usuários a calcular seu metabolismo basal, consumo de água, IMC e percentual de gordura. Além disso, permite registrar a dieta diária.

## Funcionalidades

- **Cálculo de Metabolismo Basal e Gasto Calórico**: Componente `TMB`.
- **Cálculo de Consumo de Água**: Componente `CalculateWater`.
- **Registro de Dieta**: Página `Dieta`.

## Estrutura do Projeto

- **`/src/app/page.tsx`**: Página principal com opções de cálculo.
- **`/src/components/TMB/index.tsx`**: Componente para cálculo de metabolismo basal.
- **`/src/components/CalculateWater/index.tsx`**: Componente para cálculo de consumo de água.
- **`/src/components/header/index.tsx`**: Componente de cabeçalho.
- **`/src/app/dieta/page.tsx`**: Página para registro de dieta.

## Como Executar

1. Clone o repositório:
  ```bash
  git clone https://github.com/seu-usuario/workout-site.git
  ```
2. Navegue até o diretório do projeto:
  ```bash
  cd workout-site
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```
4. Execute o projeto:
  ```bash
  npm run dev
  ```

## Tecnologias Utilizadas

- React
- TypeScript
- Next.js
