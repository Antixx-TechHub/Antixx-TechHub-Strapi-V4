// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   // url: 'https://api.antixxtechhub.com/',
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "https://api.antixxtechhub.com/"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "default-secret-here"),
    },
  },
});

// path: ./config/server.js

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   socket: '/tmp/nginx.socket', // only use if absolutely required
//   emitErrors: false,
//   url: env('PUBLIC_URL', 'https://api.antixxtechhub.com/'),
//   proxy: env.bool('IS_PROXIED', true),
//   cron: {
//     enabled: env.bool('CRON_ENABLED', false),
//   },
// });
