module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a039f7bac6c23ac27c3be8415160908b'),
  },
});
