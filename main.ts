class User {
	protected name: string;
	protected surn: string;
	
	constructor(name: string, surn: string) {
		this.name = name;
		this.surn = surn;
	}
}

class Employee extends User {
    protected salary: number;
    constructor(name: string, surn: string, salary: number){
        super(name, surn);
        this.salary = salary;
    }
    public getName(): string{
        return this.name;
    }

    public getSurn(): string{
        return this.surn;
    }

    public getSalary(): number{
        return this.salary;
    }
}

let student: Employee = new Employee('Fufu', 'Fifi', 300);
console.log(student.getName());
console.log(student.getSurn());
console.log(student.getSalary());

class User2 {
	readonly age: number;
	
	constructor(age: number) {
		this.age = age;
	}
}

let user2: User2 = new User2(300);
console.log(user2.age);

class Student {
	public static speciality: string = 'figur';
    public static universety: string = 'figuristie';
}

console.log(Student.speciality);
console.log(Student.universety);

class Calc {
	public static getSquear(arr: number[]): number {
		let squear: number = 0;
		
		for (let elem of arr) {
			squear += elem * elem;
		}
		
		return squear;
	}

    	public static getQube(arr: number[]): number {
		let qube: number = 0;
		
		for (let elem of arr) {
			qube += elem * elem * elem;
		}
		
		return qube;
	}

  

}  
const res: number[] = [1, 2, 3, 4, 5];
console.log(Calc.getSquear(res));
console.log(Calc.getQube(res));

interface IMath {
    num1: number;
    num2: number;
}

let calc: IMath = {
    num1: 22,
    num2: 21
}


interface IUser {
    user: string;
    age: number;
    proverka(age: number): string;
}
let user23: IUser ={
    user: 'Penilopa',
    age: 14,

    proverka(age: number): string {
        if (age < 18){
            return 'а ну ка иди отсюда, малолеточка!';
        } else {
            return 'добро пожаловать к нам, мисстер/мисс';
        }
    }
}

console.log(user23.proverka(12));

