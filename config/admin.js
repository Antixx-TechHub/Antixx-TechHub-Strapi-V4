module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '96ed8b33100e2b5ddedbd573a33ee2fd'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a039f7bac6c23ac27c3be8415160908b'),
  },
});
