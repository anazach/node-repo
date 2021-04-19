const http = require('http')
const fs = require('fs')
const server = http.createServer()

server.on('request', (request, response) => {
  console.log(process)
  console.log('Request url:', request.url)
 console.log('Request method:', request.method)
 
  if (request.url === '/') {
    const file = fs.createReadStream('frontend/index.html')
    file.pipe(response)
  } else if (request.url === '/api/insults') {
    const file = fs.createReadStream('insults.json')
    file.pipe(response)
  } else if (request.url === '/api/getInsult') {
    const result = {
      insult: 'He thinks too much: such men are dangerous. ',
      play: 'Julius Ceasar'
    }

    response.end(JSON.stringify(result))
  } else {
    console.log('Sökväg:', 'frontend' + request.url)
    const file = fs.createReadStream('frontend' + request.url)

    file.on('open', () => {
      file.pipe(response)
    })

    file.on('error', () => {
      const file = fs.createReadStream('frontend/404.html')
      file.pipe(response)
    })
  }
})

server.listen(4449)
