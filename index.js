/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};

/*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */

/*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */

function Person(name, age) {
  let newPerson = Object.create(Person.prototype);
  newPerson.name = name;
  newPerson.age = age;
  newPerson.stomach = [];
}

Person.prototype = {
  eat: function(arg) {
    if (this.stomach && this.stomach.length < 10) {
      this.stomach.push(arg);
    }
  },
  poop: function() {
    this.stomach = [];
  },
  toString: function() {
    return `${this.name},${this.age}`;
  }
};
let May = new Person("AA", 26);
for (let i = 0; i < 20; i++) {
  May.eat("Maggi");
}

May.poop();
console.log(Object.getPrototypeOf(May));

/*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

function Car(model, milesPerGallon) {
  let newCar = Object.create(Car.prototype);
  newCar.model = model;
  newCar.milesPerGallon = milesPerGallon;
  newCar.tank = 0;
  newCar.odometer = 0;
  return newCar;
}

Car.prototype = {
  fill: function(gallons) {
    this.tank = this.tank + gallons;
  },
  drive: function(distance) {
    console.log("Tank--->", this.tank, parseInt(this.tank));
    if (this.tank <= 0) {
      return `"I ran out of fuel at ${this.odometer} miles!"`;
    }

    let burnedFuel = distance / this.milesPerGallon;
    this.odometer = this.odometer + burnedFuel;
    this.tank = this.tank - burnedFuel;
  }
};
let toy = new Car("toy1721", 20);

toy.fill(10);
toy.drive(100);
toy.drive(100);
console.log(toy.drive(100));
console.log(toy);

/*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
function Baby(name, age, favouriteToy) {
  Person.call(this, name, age);
  this.favouriteToy = favouriteToy;
}
Baby.prototype = Person.prototype;
Baby.prototype.play = function() {
  return `Playing with ${this.favouriteToy}`;
};

let newBaby = new Baby("Mo", 5, "skates");
console.log(Object.getPrototypeOf(newBaby));
console.log(newBaby.play());

/* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. 
    2. 
    3. 
    4. 
  */

///////// END OF CHALLENGE /////////
