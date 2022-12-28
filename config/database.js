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
