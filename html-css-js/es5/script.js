class SuperHero {
  constructor(name, power, energy = 100) {
    this.name = name;
    this.power = power;
    this.energy = energy;
  }

  train() {
    this.energy += 10;
  }

  usePower() {
    this.energy -= 30;
  }


}

class FlyingHero extends SuperHero {
  constructor(name, power, energy, flightSpeed) {
    super(name, power, energy);
    this.flightSpeed = flightSpeed;
  }

  fly() {
    console.log(`${this.name} is flying at ${this.flightSpeed} km/h!`);
    this.energy -= 10;
  }
}

const ironman = new FlyingHero("Ironman", "Laser", 100, 200);

ironman.fly();
ironman.usePower();
ironman.train();

console.log(ironman);