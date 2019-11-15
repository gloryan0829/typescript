// ES 6 - Object Destructuring
export {}

const todayWeather = {
    date : new Date(),
    weather : 'sunny'
};

const loggerWeather = ({date, weather}: {date:Date, weather:string}):void => {
    console.log(date);
    console.log(weather);
};

loggerWeather(todayWeather);

// another ex
const personInfo = {
    name : 'doublej',
    sex : 'male',
    age : 36,
    address : {
        addr1: 'Seoul',
        addr2: 'KangNam'
    },
    setAge(_age: number):void {
        this.age = _age;
    }
};

const {age, name} : {age:number, name:string} = personInfo;
console.log(`${age} // ${name}`);

const {address: {addr1, addr2}} : {address: {addr1:string, addr2:string}} = personInfo;
console.log(`${addr1} // ${addr2}`);