module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://api.antixxtechhub.com/',
  url: env("PUBLIC_URL", "https://api.antixxtechhub.com"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
