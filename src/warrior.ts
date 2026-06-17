import { Hero } from "./hero.js";

export class Warrior extends Hero{
    private armor: number;
constructor(name: string){
    super(name, 100, 1);
    this.armor = 20;
}

    takeDamage (amount: number): string {
        const finalDamage = Math.max(0, amount - this.armor);
        const fin: number = amount - finalDamage;   
    if (fin > 0){
        console.log(`Броня ${this.name} поглотила ${fin} урона!`);
        }
    if (finalDamage === 0 && fin > 0){
        console.log(`${this.name} поглотил весь урон`);
        return `${this.name} не получил урона`;
    }
    this.health -= finalDamage;
    if (this.health < 0) this.health = 0;
    if (this.health === 0){
        console.log(`${this.name} получил смертельный удар!`);
        console.log(`${this.name} больше не будет фидить вражеского Дариуса на время`);
        return `${this.name} был убит Дариусом`;
    }
    console.log(`${this.name} получил ${finalDamage} чистого урона`);
    console.log(`осталось здоровья: ${this.health}/${this.maxHealth}`);
    console.log(`Всего: ${amount} | Поглощено: ${fin} | Чистый: ${finalDamage}`);
    return `${this.name} получил ${finalDamage} урона (поглощено ${fin})`;
    }
}