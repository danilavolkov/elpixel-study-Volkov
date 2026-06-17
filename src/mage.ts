import { Hero } from "./hero.js";

export class Mid extends Hero{
    private mana: number;
    private maxMana: number;

    constructor(name: string){
    super(name, 100, 1);
    this.mana = 100;
    this.maxMana = 100;
}    

getMana(): number{
    return this.mana;
}
getMaxMana(): number{
    return this.maxMana;
}

castButtons(cost: number, button: string): string{
    if(this.mana < cost){
        console.log(`${this.name} не хватает маны: ${this.mana}/${this.maxMana}`);
        console.log(`для кнопки ${button} нужно ${cost} маны`);
        return `${this.name} не смог скастовать нужную последовательность из-за отсуствия маны`
    }

this.mana -= cost;
console.log(`${this.name} кастует ${button}`);
console.log(`потрачено ${cost} маны. Осталось ${this.mana}/${this.maxMana} маны`);

if (button === "Q"){
   console.log(`${this.name} применяет Q`); 
} else if (button === "W"){
    console.log(`${this.name} применяет W`);
} else if (button === "E"){
    console.log(`${this.name} применяет E`);
} else if(button === "R"){
    console.log(`${this.name} применяет ульту R`);
}
return `${this.name} использовал ${button} (осталось ${this.mana})`;
}

override levelUp(lvl: number): string {
    const result = super.levelUp(lvl);
    this.mana = this.maxMana;
    console.log(`уровень был поднят и мана была восстановлена!`);
    return result;
}

takeDamage(amount: number): string {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
if (this.health === 0){
    console.log(`${this.name} опять идет по пути лузстрика, при этом делая доброе дело вражескому Зеду, продлевая его винстрик)`);
    return `${this.name} был убит Зедом`;
}
console.log(`${this.name} получил ${amount} урона!`);
console.log(`Осталось ХП: ${this.health}/${this.maxHealth}`);
return `${this.name} получил ${amount} урона!`
}
}