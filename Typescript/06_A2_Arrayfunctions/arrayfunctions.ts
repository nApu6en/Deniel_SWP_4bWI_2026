
const zahlen = [1, 2, 3];

const neu = zahlen.map(x => x * 2);

console.log(neu);



const zahlen2 = [1, 2, 3, 4, 5];

const neu2 = zahlen2.filter(x => x > 3);

console.log(neu2);



const zahlen3 = [5, 2, 8, 1];

zahlen3.sort((a, b) => b - a);

console.log(zahlen3); 