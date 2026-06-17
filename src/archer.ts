import { Hero } from "./hero.js";

export class ADC extends Hero{
    private attackCounter: number = 0;
    private Kraken_slayer: number = 30;

    constructor(name: string){
    super(name, 100, 1);
}
attack(baseDamage: number): string{
    this.attackCounter++;
    let fullDamage = baseDamage;
    let ProcKrakena = false;

    if (this.attackCounter %3 ===0){
        fullDamage += this.Kraken_slayer;
        ProcKrakena = true;
        console.log(`пассивка предмета "Убийца кракенов". +${this.Kraken_slayer} урона!`);
        this.attackCounter = 0;
    }
console.log(`${this.name} провел атаку на ${fullDamage} урона.`);
console.log(`счетчик атак: ${this.attackCounter}/3`);
if (ProcKrakena){
    return `${this.name} нанес полного урона вместе с кракеном: ${fullDamage}`;
}
return `${this.name} нанес ${fullDamage} урона.`;
}
 takeDamage(amount: number): string {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
if (this.health === 0){
    console.log(`${this.name} больше не потревожит свою команду....... зато потревожит их Самира!`);
    return `${this.name} был убит Самирой`;
}
console.log(`${this.name} получил ${amount} урона!`);
console.log(`Осталось ХП: ${this.health}/${this.maxHealth}`);
return `${this.name} получил ${amount} урона!`
}
}