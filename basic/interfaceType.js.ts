interface Reportable {
    toString(): string;
}

interface Student extends Reportable {
    name : string;
    class : string;
    age : number;
    grade : string;
}

interface CarModel extends Reportable {
    name : string;
}

const car1:CarModel= {
    name : 'Carnival',
    toString(): string {
        return `this car's name is ${this.name}`
    }
};

const stu1:Student = {
    name: "이정주",
    class: "3학년6반",
    age: 36,
    grade: "A",
    toString(): string {
        return `Name: ${this.name}`;
    }
};

const printInfo = (report:Reportable): void => {
    console.log(report.toString());
};

printInfo(stu1);
printInfo(car1);

export {}