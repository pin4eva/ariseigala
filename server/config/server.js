module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "3fbf63f2daafb334a49cd9ad42c04c97"),
    },
  },
});
