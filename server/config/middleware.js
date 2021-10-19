const origin = ["http://localhost:8000","http://localhost:3000","http://localhost:3001","http://143.198.164.151","http://143.198.164.151:8000","https://ariseigalaonline.com","https://server.ariseigalaonline.com","https://dev.ariseigalaonline.com"]

module.exports =({env})=> ({
  settings: {
    cors: {
      enable: true,
      origin
    }
  }
})
