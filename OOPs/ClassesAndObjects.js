class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    engineStart() {
        console.log(`${this.make} ${this.model} ${this.year} enginge Starts.`);
    }
}

let myCar = new Car("Toyota","Corolla",2023);

myCar.engineStart();