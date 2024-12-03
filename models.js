const db = require('../Dbconfig/db');

const User = {
  // Função para obter todos os usuários
  getAllUsers: (callback) => {
    // Declara a consulta SQL para selecionar todos os registros da tabela "users"
    const sql = 'SELECT * FROM users';

    // Executa a consulta SQL
    db.query(sql, (err, results) => {
      if (err) {
        // Gera um erro caso ocorra durante a execução da consulta
        throw err;
      }
      // Retorna os resultados da consulta através do callback
      callback(results);
    });
  },
};

const db = require('./db'); // Assumindo que 'db' é sua conexão com o banco de dados

async function getUserById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
}

async function updateUser(id, data) {
  try {
    const [result] = await db.query('UPDATE users SET ? WHERE id = ?', [data, id]);
    return result;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
}
module.exports = User;
