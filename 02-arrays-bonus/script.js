// http://127.0.0.1:3000/esercizi/js-arrays/02-arrays-bonus/index.html

const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers)

console.log('')
console.log('')

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = null;

console.log('')
console.log('')

// 3. Rimuovi 'Ed' dall'array teachers
const edIndex = teachers.indexOf("Ed");

if (edIndex !== -1){
  teachers.splice(edIndex, 1)
  
  for(let i = 0; i < teachers.length; i++){
    teachersCounter = teachers[i];
    console.log(teachersCounter)
  }
}

console.log('')
console.log('')

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio');

if(isFabioPresent){
  for(let i = 0; i < teachers.length; i++){
    teachersCounter = teachers[i];
    console.log(teachersCounter)
  }
}

console.log('')
console.log('')

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;

// Per ora ho fatto questi, ed oltretutto devo essere sincer0, alcuni dubbi di logica me li sono tolti con copilot
// non mi ha fatto linee di codice intere, piuttosto ha risolto problemi di sintassi.
// So che Artur e Fabio sono molto attenti all'uso di questo strumento quindi preferisco essere sincero