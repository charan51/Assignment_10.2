class Airplane {
    constructor(name, occupancy, speed) {
        if (name !== '') {
            this.name = name;
        } else {
            console.log('name cannot be empty');
        } if (occupancy !== '' && !(occupancy > 180) && !(occupancy < 0)) {
            this.occupancy = occupancy;
        } else {
            console.log('Occupancy cannot be empty, should not be negative and should not be more than 180');
        } if (speed !== '' && !(speed > 900) && !(speed < 0)) {
            this.speed = speed;
        } else {
            console.log('Speed cannot be empty, should not be negative and should not be more than 900');
        }
    }
    get increaseSpeed() {
        return this.speed;
    }
    set increaseSpeed(speed) {
        return this.speed += speed;
    }
    get decreaseSpeed() {
        return this.speed;
    }
    set decreaseSpeed(speed) {
        return this.speed -= speed;
    }
    status() {
        console.log(`Airplane : ${this.name} with ${this.occupancy} occupancy, is moving at ${this.speed} km/hr`)
    }
};
// Airplane 1
var Airplane1 = new Airplane('JetAirways', 150, 300);
Airplane1.increaseSpeed = 200;
Airplane1.status();
// Airplane 2
var Airplane2 = new Airplane('KingFisher', 160, 100);
Airplane2.increaseSpeed = 200;
Airplane2.status();
// Airplane 3
var Airplane3 = new Airplane('Indian Air ways', 100, 400);
Airplane3.increaseSpeed = 200;
Airplane3.status();