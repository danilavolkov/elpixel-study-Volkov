"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
class Hero {
    _name;
    _health;
    level;
    maxHealth;
    set name(value) {
        if (!value || value.trim().length === 0) {
            throw new Error('Имя героя не должно быть пустым!');
        }
        this._name = value.trim();
    }
    get name() {
        return this._name;
    }
    set health(value) {
        if (value < 0) {
            this._health = 0;
        }
        else {
            this._health = Math.min(value, this.maxHealth);
        }
    }
    get health() {
        return this._health;
    }
    constructor(name, health, level) {
        this.maxHealth = health;
        this.health = health;
        this.level = level;
        this.name = name;
    }
    takeDamage(damage) {
        this.health -= damage;
        if (this.health === 0) {
            return `${this.name} был убит, получив ${damage} урона`;
        }
        return `${this.name} получил ${damage} урона`;
    }
    heal(heals) {
        const firstHealth = this.health;
        this.health = Math.min(this.health + heals, this.maxHealth);
        const lastHealth = this.health - firstHealth;
        return `${this.name} восстановил ${lastHealth} здоровья. На данный момент здоровье: ${this.health}`;
    }
    levelUp(lvl) {
        this.level += lvl;
        this.maxHealth = Math.floor(this.maxHealth * Math.pow(1.2, lvl));
        this.health = this.maxHealth;
        const message = `${this.name} повышает свой уровень до ${this.level}! Здоровье увеличено (${this.maxHealth}) и восстановлено до максимума!`;
        console.log(message);
        return message;
    }
}
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map