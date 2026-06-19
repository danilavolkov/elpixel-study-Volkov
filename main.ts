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
    getSum(num1: number, num2: number): number;
}

let calc: IMath = {
    num1: 22,
    num2: 21,
    getSum(num1: number, num2: number): number{
        return num1 + num2;
    }
    
}
console.log(calc.getSum(22,21));


interface IUser {
    user: string;
    age: number;
    proverka(age: number): string;
}
let user23: IUser = {
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


interface IDate {
    day?: string;
    month?: string;
    year?: string;
}

let date: IDate = {   }
console.log(date.day); 

interface IUser2 {
    readonly salary: number;
    ubitki: number;
}

let proverit: IUser2 = {
    salary: 500,
    ubitki: 400
}

function func <T>(data: T):T {
    return data;
}

console.log(func(2));

function myFunc <T>(data: T[]):T[] {
    for(let i = 0; i < data.length; i++){
        console.log(data[i]);
    }
    return data;
}
console.log(myFunc([1, 'lil', 3, 'lala', 5]));


function myFunc2 <T>(data: T[]): T[]{
    console.log(data.length);
    return data;
}

let func23: <U> (data: U[]) => U[] = myFunc2;


