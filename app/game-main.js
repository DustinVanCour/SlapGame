let clowns = {
  name: 'Slappy the Clown',
  health: 100,
  hits: 0,
  items: []
}

let items = {
  laugh: { name: 'Laugh', modifier: 2, description: 'IT\'S THE BEST MEDICINE!' },
  balloonShield: { name: 'Ballon Shield', modifier: -2, description: 'IT\'S A SHIELD!' },
  bananaPeel: { name: 'Banana Peel', modifier: -3, description: 'SLIPPERY!' }
}

function slap() {
  clowns.health -= 1 + addMods()
  clowns.hits++
  console.log(health)
  update()
}

function punch() {
  clowns.health -= 5 + addMods();
  clowns.hits++
  console.log(health)
  update()
}

function kick() {
  clowns.health -= 10 + addMods()
  clowns.hits++
  console.log(health)
  update()
}

function giveLaugh() {
  clowns.items.push(items.laugh)
  console.log(clowns.items[0])
}

function giveBalloonShield() {
  clowns.items.push(items.balloonShield)
  console.log(clowns.items[1])
}

function giveBananaPeel() {
  clowns.items.push(items.bananaPeel)
  console.log(clowns.items[2])
}

function addMods() {
  let total = 0
  for (let i = 0; i < clowns.items.length; i++) {
    let item = clowns.items[i]
    total += item.modifier
  }
  return total
}

function update() {
  document.getElementById("health").innerText = clowns.health;
  document.getElementById("hit-counter").innerText = clowns.hits;
  document.getElementById("name").innerText = clowns.name;
}


update()