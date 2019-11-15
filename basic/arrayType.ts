export {}

const carMakers:string[] = ['ford', 'toyota', 'bmw'];

const dates:Date[] = [new Date(), new Date()];

const carsByMake:string[][] = [['model1','model2']];

// type inference (추론) 하면 string type 이라는 것을 알 수 있음
const car = carMakers[0];
const myCar = carMakers.pop();
// carMakers.push(200);

// map 을 사용해보자.
const carMakersUpperCase = carMakers.map((car:string):string => {
    return car.toUpperCase();
});

console.log(carMakersUpperCase);

// flexible Type
const flexibleDate: (Date | string)[] = [];

flexibleDate.push('2019-11-15');
flexibleDate.push(new Date());

type Drink = [string, boolean, number]
// Tuple type
const coke: Drink = ['black', true, 40];
const sprite: Drink = ['clear', true, 10];
const coffee: Drink = ['black', false, 3];