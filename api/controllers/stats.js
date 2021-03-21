const config = require('../db/config');
const db = require('../db/db');

async function getStats(page = 1){
  const data = await db.query(
    `SELECT * FROM transactions`, []
  );

  return data;
}

module.exports = {
  getStats
}