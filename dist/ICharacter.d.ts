export interface ICharacter {
    name: string;
    health: number;
    level: number;
    takeDamage(damage: number): string;
    heal(heals: number): string;
    levelUp(lvl: number): string;
}
//# sourceMappingURL=ICharacter.d.ts.map