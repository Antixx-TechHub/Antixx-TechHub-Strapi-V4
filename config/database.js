module.exports = ({ env }) => ({
  // Update your postgres credentials here
  connection: {
    client: "postgres",
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-28.railway.app'),
        port: env.int('DATABASE_PORT', 6065),
        database: env('DATABASE_NAME', 'railway'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'pX3z2QPPIPBqDyWI3A6b'),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});



// const parse = require('pg-connection-string').parse;
// // const config = parse('postgres://uajbchhyhbxuyl:35d3c31cd9f00a9639c9e77e6d09971bd02aa242506cb6b2bc6186d778e677f8@ec2-52-48-159-67.eu-west-1.compute.amazonaws.com:5432/dbtn6shd4j5opr');
// const config = parse('postgres://ovnlgeivpdhibg:73154a7d9d2d80764503cb60c8bb5c8f1594bd866141cd9ac41d212a320a8f43@ec2-3-225-213-67.compute-1.amazonaws.com:5432/dbte4oi8uc04jj');
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: {
//         rejectUnauthorized: false
//       },
//     },
//     debug: false,
//   },
// });
