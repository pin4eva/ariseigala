/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

dotenv.config()

module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID
  },
  eslint: {
            ignoreDuringBuilds: true,
        },
  
}
