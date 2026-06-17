import {ICharacter} from './ICharacter.js';

export abstract class Hero implements ICharacter {
    protected _name: string;
    protected _health: number;
    level: number;
    protected maxHealth: number;

    set name(value: string){
        if(!value || value.trim().length === 0){
            throw new Error('Имя героя не должно быть пустым!');
        }
        this._name = value.trim();
    }

    get name(): string {
        return this._name;
    }

    set health(value: number){
        if (value < 0){
           this._health = 0;
        } else {
            this._health = Math.min(value, this.maxHealth);
        }
    }

    get health(): number{
        return this._health;
    }

constructor (name: string, health: number, level: number){
    this.maxHealth = health;
    this.health = health;
    this.level = level;
    this.name = name;

}

takeDamage(damage: number): string{
    this.health -= damage;

    if (this.health === 0){
        return `${this.name} был убит, получив ${damage} урона`;
    }
    return `${this.name} получил ${damage} урона`;
}

heal(heals: number): string {
    const firstHealth = this.health;
    this.health = Math.min(this.health + heals, this.maxHealth);
    const lastHealth = this.health - firstHealth; 
    return `${this.name} восстановил ${lastHealth} здоровья. На данный момент здоровье: ${this.health}`;
}

levelUp(lvl: number): string {
    this.level +=lvl;
    this.maxHealth = Math.floor(this.maxHealth * Math.pow(1.2, lvl));
    this.health = this.maxHealth;
    const message = `${this.name} повышает свой уровень до ${this.level}! Здоровье увеличено (${this.maxHealth}) и восстановлено до максимума!`;
    console.log(message);
    return message;
    }

}