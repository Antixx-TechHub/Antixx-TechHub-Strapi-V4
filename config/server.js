module.exports = ({ env }) => ({
  host: env('HOST', '192.46.215.131'),
  port: env.int('PORT', 1337),
  url: env("PUBLIC_URL", "https://api.antixxtechhub.com/"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});