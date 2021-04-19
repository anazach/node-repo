const fs = require('fs')

function writeToFile(fileName, text) {
  fs.writeFile(fileName, text, (error) => {
    console.log(`Ssved in ${fileName}`)
    process.exit()
  })
}

function getText(fileName) {
  console.log('Add text to file')
  process.stdin.once('data', (input) => {
    const text = input.toString().trim()
    writeToFile(fileName, text)
  })
}