module.exports = ({ env }) => ({
  // Update your postgres credentials here
  connection: {
    client: "postgres",
    connection: {
      host: env('DATABASE_HOST', 'postgresql-101073-0.cloudclusters.net'),
        port: env.int('DATABASE_PORT', 10142),
        database: env('DATABASE_NAME', 'antixxtechhubv4'),
        user: env('DATABASE_USERNAME', 'pbwebvision'),
        password: env('DATABASE_PASSWORD', 'Pash@8481'),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
