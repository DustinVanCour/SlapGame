let clowns = {
  name: 'Slappy the Clown',
  health: 100,
  hits: 0,
  items: [
    { name: 'Laugh', modifier: -2, description: 'CREEPY!' },
    { name: 'Ballon', modifier: -3, description: 'IT\'S A SHIELD!' },
    { name: 'Banana Peel', modifier: -4, description: 'SLIPPERY!' }
  ]
}

// let items = [{
//   laugh: { name: 'Laugh', modifier: -2, description: 'CREEPY!' }
//   balloon: { name: 'Ballon', modifier: -3, description: 'IT\'S A SHIELD!' }
//   bananaPeel: { name: 'Banana Peel', modifier: -4, description: 'SLIPPERY!' }
// }]

function slap() {
  clowns.health--
  clowns.hits++
  console.log(health)
  update()
}

function punch() {
  clowns.health -= 5
  clowns.hits++
  console.log(health)
  update()
}

function kick() {
  clowns.health -= 10
  clowns.hits++
  console.log(health)
  update()
}

function update() {
  document.getElementById("health").innerText = clowns.health;
  document.getElementById("hit-counter").innerText = clowns.hits;
  document.getElementById("name").innerText = clowns.name;
}


update()