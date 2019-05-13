let name = 'Slappy the Clown'
let health = 100
let hits = 0

function slap() {
  health--
  hits++
  console.log(health)
  update()
}

function punch() {
  health -= 5
  hits++
  console.log(health)
  update()
}

function kick() {
  health -= 10
  hits++
  console.log(health)
  update()
}

function update() {
  document.getElementById("health").innerText = health;
  document.getElementById("hit-counter").innerText = hits;
  document.getElementById("name").innerText = name;
}


update()