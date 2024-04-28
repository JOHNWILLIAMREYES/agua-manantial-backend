const knex = require('knex');
const MAX_CONNECTION_POOLSIZE = 150;

// const {
//   DB_NAME = 'agua_manantial',
//   DB_USER = 'postgres',
//   DB_PASS = '12345',
//   DB_HOST = 'localhost',
//   DB_PORT = 5432,
// } = process.env;

// aws ssm start-session --target i-0968ccec302cb10f4 --document-name AWS-StartPortForwardingSessionToRemoteHost --parameters portNumber="5533",localPortNumber="5533",host="aguamanantial-prod-db.coqf1pyunolc.us-east-1.rds.amazonaws.com" --profile aguamanantial --region us-east-1
// const {
//   DB_NAME = 'manantial1',
//   DB_USER = 'manantial',
//   DB_PASS = 'manantial12345',
//   DB_HOST = 'manantial-db.coqf1pyunolc.us-east-1.rds.amazonaws.com',
//   DB_PORT = 5433,
// } = process.env;
// const config = {
//   client: 'pg',
//   connection: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//   pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
//   acquireConnectionTimeout: 8000,
// };
const config = {
  client: 'pg',
  connection: 'postgresql://postgres:uojUQxGTFwdSqznJsskiUZyGyZKfNxiv@monorail.proxy.rlwy.net:47315/railway',
  pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
  acquireConnectionTimeout: 8000,
};
const Db = knex(config);
module.exports = Db;
