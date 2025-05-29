const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
console.log('Esercizio 1');
const fourthTeacher = teachers[3];

console.log(fourthTeacher)

const philIndex = teachers.indexOf('Phil');

if(philIndex == 3){
  console.log('Phil è quarto');
}

console.log('');
console.log('');


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
console.log('Esercizio 2');

teachers.splice(4, 1, "Patrick");

const fifthTeacher = teachers[4];
console.log(fifthTeacher);

const patrickIndex = teachers.indexOf('Patrick');

if (patrickIndex == 4){
  console.log('Patrick è quinto');
}


console.log('');
console.log('');


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
console.log('Esercizio 3');

const lastTeacher = teachers.pop();
console.log(lastTeacher, "= popped");

console.log('')

for (let i = 0; i < teachers.length; i++){
  const teachersCounter = teachers[i];
  console.log(teachersCounter);
}

console.log('')

const indexLuca = teachers.indexOf('Luca');
if (indexLuca === -1){
  console.log("Luca non c'è se n'è andato via")
}

console.log('');
console.log('');


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
console.log('Esercizio 4');

const firstTeacher = teachers.shift();
console.log(firstTeacher, "= shiftato");

console.log('');

for (let i = 0; i < teachers.length; i++){
  const teachersCounter = teachers[i];
  console.log(teachersCounter);
}

console.log('');

const indexNathan = teachers.indexOf('Nathan');

if (indexNathan == -1){
  console.log("Nathan se n'è andato");
}


console.log('');
console.log('');


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
console.log('Esercizio 5');
teachers.push('Vanessa')
 
for (let i = 0; i < teachers.length; i++){
  const teachersCounter = teachers[i];
  console.log(teachersCounter);
}

console.log('')

if (teachersCounter = "Vanessa"){
  console.log("E' arrivata Vanessa!");
}  

console.log('');
console.log('');


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
console.log('Esercizio 6');
teachers.unshift('Sarah')

for(let i = 0; i < teachers.length; i++){
  const teachersCounter = teachers[i];
  console.log(teachersCounter);
}

console.log('');

const sarahIndex = teachers.indexOf('Sarah');

if (sarahIndex == 0){
  console.log('Sarah prendere la pole!')
}

console.log('');
console.log('');


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
console.log('Esercizio 7');
const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex);

if (lewisIndex == 5){
  console.log('Lewis è quinto, che brutta macchina gli è toccata in Ferrari')
}


console.log('');
console.log('');


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
console.log('Esercizio 8');
// 7
const isTeachersEmpty = teachers.length === 0;

if (isTeachersEmpty === true){
  console.log('La griglia è vuota')
} else {
  console.log('La griglia non è vuota')
}
