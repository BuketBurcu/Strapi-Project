module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', '2XdlkdIJaZGbrCKT20AT9w=='),
      },
    },
  });