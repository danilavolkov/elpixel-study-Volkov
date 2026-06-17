import { Warrior } from "./src/warrior.js";
import { ADC } from "./src/archer.js";
import { Mid } from "./src/mage.js";


const sett = new Warrior('Сетт');
const ashe = new ADC('Эш');
const akali = new Mid('Акали');
console.groupEnd();

console.group('Эш')
ashe.attack(20);
ashe.takeDamage(10);
ashe.attack(10);
ashe.attack(10);
ashe.attack(10);
ashe.attack(10);
ashe.levelUp(1);
console.groupEnd();

console.group('Сетт')
sett.takeDamage(20);
sett.takeDamage(10);
sett.heal(10);
sett.takeDamage(50);
sett.levelUp(1);
console.groupEnd();

console.group('Акали')
akali.castButtons(30, 'Q');
akali.takeDamage(10);
akali.castButtons(40, 'E');
akali.takeDamage(100);
console.groupEnd();