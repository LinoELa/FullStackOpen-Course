// ===== VARIABLES  ===== //
const x = 1;
let y = 5;

console.log(x, y); // se imprime 1 5
y += 10;
console.log(x, y); // se imprime 1 15
y = "sometext";
console.log(x, y); // se imprime 1 sometext
// x = 4; // provoca un error

// ===== ARRAYS  ===== //
const t = [1, -1, 3];

t.push(5);

console.log(t.length); // se imprime 4
console.log(t[1]); // se imprime -1

t.forEach((value) => {
  console.log(value); // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
});

const b = [1, -1, 3];

const b2 = b.concat(5); // crea un nuevo array

console.log(b); // se imprime [1, -1, 3]
console.log(b2); // se imprime [1, -1, 3, 5]

// ===== VARIABLES  ===== //
// ===== VARIABLES  ===== //
// ===== VARIABLES  ===== //
