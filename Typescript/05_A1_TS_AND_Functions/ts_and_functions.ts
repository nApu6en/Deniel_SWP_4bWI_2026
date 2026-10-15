interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [
    { brand: "BMW", model: "320d", price: 20000, year: 2018 },
    { brand: "Audi", model: "A4", price: 25000, year: 2020 },
    { brand: "VW", model: "Golf", price: 10000, year: 2015 }
];




function getTotalPrice(cars: Car[]): number {
    let total = 0;

    cars.forEach(car => {
        total += car.price;
    });

    return total;
}

function printCars(cars: Car[]): void {
    cars.forEach(car => {
        console.log(car);
    });
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    let result: Car[] = [];

    cars.forEach(car => {
        if (car.price > minPrice) {
            result.push(car);
        }
    });

    return result;
}



function getTotalPrice2(cars: Car[]): number {
    return cars.reduce((total, car) => total + car.price, 0);
}

function printCars2(cars: Car[]): void {
    cars.map(car => console.log(car));
}

function getExpensiveCars2(cars: Car[], minPrice: number): Car[] {
    return cars.filter(car => car.price > minPrice);
}


// TESTEN

console.log(getTotalPrice(cars));
printCars(cars);
console.log(getExpensiveCars(cars, 20000));

console.log(getTotalPrice2(cars));
printCars2(cars);
console.log(getExpensiveCars2(cars, 20000));