/*
    Primitive Type
 */

let yourName: string = 'lee';
let count: number = 0;
let rate: number = 0.123;
let nullType:null = null;
let undefinedType:undefined = undefined;

/*
   Object Type
 */

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let nums: number[] = [1, 3, 5, 7];
let isBoolArr: boolean[] = [true, false, true];

/*
   Class Type
 */
class User {
    name = () => {
        return 'lee';
    }
}

let lee: User = new User();
console.log(lee.name());

/**
 Object literal
 */
let point: {x: number, y: number} = {
    x: 10,
    y: 300
};

// Function
const getLog = (_line: number) : void => {
    console.log(_line);
};

console.log(getLog(1));

// Function that return 'any' type
const json = '{"x":10, "y": 20}';
const pared = JSON.parse(json);
pared.a;
console.log(pared);

// Initialization later..
let laterSet: boolean;

laterSet = true;

// Multiple Inference
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let num of numbers) {
    if(num > 0) {
        numberAboveZero = num;
    }
}