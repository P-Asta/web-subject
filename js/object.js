class Player {
  constructor(name, power, speed) {
    this.name = name
    this.power = power
    this.speed = speed
  }
  attack() {
    console.log(`${this.name} Attack!`)
  }
}
