import { Engine, Besitzer } from "./engine.ts";

const motor = new Engine("BMW", 150, "Benzin");

const besitzer = new Besitzer("Max", "Müller", 25);

console.log(motor);
console.log(besitzer);