import { Hero } from "./hero";
export declare class Mid extends Hero {
    private mana;
    private maxMana;
    constructor(name: string);
    getMana(): number;
    getMaxMana(): number;
    castButtons(cost: number, button: string): string;
    levelUp(lvl: number): string;
    takeDamage(amount: number): string;
}
//# sourceMappingURL=mage.d.ts.map