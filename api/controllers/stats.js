const config = require('../db/config');
const db = require('../db/db');
const helper = require('../helpers/dbhelpers.js');

async function getStats(req,res,next,page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT parent_id, YEAR(date) as The_Year, SUM(sum) AS Yearly_Sum FROM
		(SELECT * FROM transactions
		WHERE type = 'customer' 
		AND sum >=0) as segment
	GROUP BY YEAR(date), parent_id
	ORDER BY Yearly_Sum DESC`, []
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  res.json(data)
}

module.exports = {
  getStats
}