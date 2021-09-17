module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1347),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '03f327c65df201da0c5cb0e141582a89'),
    },
  },
});
