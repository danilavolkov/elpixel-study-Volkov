import { ICharacter } from './ICharacter.js';
export declare abstract class Hero implements ICharacter {
    protected _name: string;
    protected _health: number;
    level: number;
    protected maxHealth: number;
    set name(value: string);
    get name(): string;
    set health(value: number);
    get health(): number;
    constructor(name: string, health: number, level: number);
    takeDamage(damage: number): string;
    heal(heals: number): string;
    levelUp(lvl: number): string;
}
//# sourceMappingURL=hero.d.ts.map