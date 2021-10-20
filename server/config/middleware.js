const devOrigins = ["http://localhost:8000", "http://localhost:3000", "http://localhost:3001"]

const prodOrigins = ["http://143.198.164.151", "http://143.198.164.151:8000", "https://ariseigalaonline.com", "https://ariseigala.vercel.app", "https://server.ariseigalaonline.com", "https://dev.ariseigalaonline.com"]

const origin = process.env.NODE_ENV === "production" ? prodOrigins : devOrigins;

module.exports =()=> ({
  settings: {
    cors: {
      enable: true,
      origin
    }
  }
})
