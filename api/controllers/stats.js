const config = require('../db/config');
const db = require('../db/db');
const helper = require('../helpers/dbhelpers.js');

async function getStats(req,res,next,page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM transactions`, []
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  res.json(data)

  // return {
  //   data,
  //   meta
  // }
}

module.exports = {
  getStats
}