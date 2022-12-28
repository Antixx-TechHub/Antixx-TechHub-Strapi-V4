module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: 'https://api.antixxtechhub.com/',
  // url: env("PUBLIC_URL", "https://api.antixxtechhub.com"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
