let clowns = {
  name: 'Slappy the Clown',
  health: 100,
  hits: 0
}

let items = {
  fire: { name: 'Fire', modifier: 2, description: 'ITBURNS!' }
  bat: { name: 'Bat', modifier: 4, description: 'WHACK!' }
  punchGun: { name: 'Punch Gun', modifier: 5, description: 'POW!' }
}

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