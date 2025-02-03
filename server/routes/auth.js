const express = require('../app');
const peopleDB = require('../db/peopleDB');
const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}`
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({message: `Ocorreu um erro ao cadastrar`})
  }
});

module.exports = router;