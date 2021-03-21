const db = require('./db');
const helper = require('../helper');
const config = require('../db/config');

async function getStats(page = 1){
  const rows = await db.query(
    `SELECT * FROM transactions`, []
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getStats
}