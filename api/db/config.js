require('dotenv').config()
const env = process.env

const config = {
  db: { /* don’t expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: env.DB_USER || 'b3x8jlthtcu1mfqj',
    password: env.DB_PASSWORD || 'jirra8u68nycxkcl',
    database: env.DB_NAME || 'vd29u8yrgnvmheaz',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;