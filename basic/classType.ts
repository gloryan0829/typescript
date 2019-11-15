interface PersonInfo {
  name: string;
  citizenId: string;
  sex: string;
}

class Person {
  constructor(public info: PersonInfo) {}

  public getName(): string {
    return this.info.name;
  }

  public getSex(): string {
    return this.info.sex;
  }

  protected getCitizenId(): string {
    return this.info.citizenId;
  }
}

class Student extends Person {
  private grade: string;
  public teacherName: string;
  public class: string;

  constructor(public info: PersonInfo) {
    super(info);
  }
  public setGrade(grade:string): void {
      this.grade = grade;
  };
  public getGrade():string {
      return this.grade;
  }
  public toString() {
      return `I am ${this.info.name}`
  }
}

const lee = new Student({
    name:'lee',
    citizenId:'123',
    sex:'male'
});

console.log(lee.toString());