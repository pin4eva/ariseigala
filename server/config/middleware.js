const prodOrigins = ["http://195.110.59.91","http://server.edfhr.org","https://server.edfhr.org",]
const devOrigins = ["http://localhost:3000","http://localhost:3001","http://localhost:8000",]

module.exports =({env})=> ({
  settings: {
    cors: {
      enable: true,
      origin: env("NODE_ENV")==="production"? prodOrigins : devOrigins
    }
  }
})
