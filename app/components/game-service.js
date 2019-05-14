import Player from "../models/player.js";
import Item from "../models/item.js";



let _player = new Player
let laugh = new Item("Laugh", 2, "IT/'S THE BEST MEDICINE!")
let balloonShield = new Item("Balloon Shield", -2, "IT/'S A SHIELD!")
let bananaPeel = new Item("Banana Peel", -3, "SLIPPERY!")


let _items = [laugh, balloonShield, bananaPeel]

export default class GameService {
  constructor() { }

  get Player() {
    return {
      name: _player.name,
      health: _player.health,
      attacks: _player.attacks,
      items: _player.items,
      hits: _player.hits,
    }
  }

  addItemToPlayer(itemIndex) {
    //Needs logic to check if item is already in the target's items before you add it again
    let playerItem = _items[itemIndex]
    _player.items.push(playerItem)
  }

  attackPlayer(attackName) {
    //Needs Logic to account for items
    //Needs logic to check if dead(?)
    let attackDamage = Player.attacks[attackName]
    _player.health -= attackDamage
    _player.hits++
  }
  //Any other methods?
}