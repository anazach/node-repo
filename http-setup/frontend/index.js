function showInsults(insults) {
  const insultsElem = document.querySelector('#insults')
  for (insult of insults) {
    const insultElem = document.createElement('li')
    insultElem.innerHTML = insult.insult + ' - ' + insult.play + ' <br/><br/> '
    insultsElem.append(insultElem)
  }
}

async function getInsults() {
  const response = await fetch('http://localhost:4449/api/insults')
  const data = await response.json()
  console.log('Insults:', data)
  showInsults(data.insults)
}

async function getInsult() {
  const response = await fetch('http://localhost:4449/api/getInsult')
  const data = await response.json()
  console.log('Insult:', data)
}

document.querySelector('#buttonElem').addEventListener('click', () => {
  getInsults()
  getInsult()
})
