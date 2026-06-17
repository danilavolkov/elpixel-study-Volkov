"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADC = void 0;
const hero_1 = require("./hero");
class ADC extends hero_1.Hero {
    attackCounter = 0;
    Kraken_slayer = 30;
    constructor(name) {
        super(name, 100, 1);
    }
    attack(baseDamage) {
        this.attackCounter++;
        let fullDamage = baseDamage;
        let ProcKrakena = false;
        if (this.attackCounter % 3 === 0) {
            fullDamage += this.Kraken_slayer;
            ProcKrakena = true;
        }
        console.log(`${this.name} провел атаку на ${fullDamage} урона.`);
        console.log(`счетчик атак: ${this.attackCounter}/3`);
        if (ProcKrakena) {
            return `${this.name} нанес полного урона вместе с кракеном: ${fullDamage}`;
        }
        return `${this.name} нанес ${fullDamage} урона.`;
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        if (this.health === 0) {
            console.log(`${this.name} больше не потревожит свою команду....... зато потревожит их Самира!`);
            return `${this.name} был убит Самирой`;
        }
        console.log(`${this.name} получил ${amount} урона!`);
        console.log(`Осталось ХП: ${this.health}/${this.maxHealth}`);
        return `${this.name} получил ${amount} урона!`;
    }
}
exports.ADC = ADC;
//# sourceMappingURL=archer.js.map