const config = require('../db/config');
const db = require('../db/db');

async function getSumsPerParentPerYear(req,res,next){
  const data = await db.query(
    `SELECT parent_id, YEAR(date) as The_Year, SUM(sum) AS Yearly_Sum FROM
		(SELECT * FROM transactions
		WHERE type = 'customer' 
		AND sum >=0) as segment
	GROUP BY YEAR(date), parent_id
	ORDER BY Yearly_Sum DESC`, []
  );

  res.json(data)
}

async function getPercentageDifferencesPerDate(req,res,next){
  const data = await db.query(
    `SELECT * FROM transactions
	WHERE type = 'customer'
	ORDER BY parent_id, DATE DESC`, []
  );

  let latestTransactionOfCustomerX = {};

  for (i = 0; i < data.length; i++) {
   	// console.log('transaction', data[i]);
   	// console.log('transaction.parent_id', data[i].parent_id);
  	
  	if(latestTransactionOfCustomerX=={}){
		latestTransactionOfCustomerX = data[i];
	} else if (data[i].parent_id!= latestTransactionOfCustomerX.parent_id){
		console.log('Here is the latest transaction of a new parent_id', data[i]);
		latestTransactionOfCustomerX = data[i];
	} else {
		console.log('need to compare this transaction to the previous transaction of the given parent_id', data[i])
	}
  }
	  
  
  res.json(data)
}

module.exports = {
  getSumsPerParentPerYear,
  getPercentageDifferencesPerDate,  
}