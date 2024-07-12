// ---sort function----

const persons = ['Elon','Bob','Maria','Sara','Rashid'];

const sortedPerson = persons.sort();

console.log(sortedPerson);

// -----ascending-descending------
for single numbers
const numbers =[9,5,7,8,4,2];

 const numbers_asc = numbers.sort()

 console.log(numbers_asc);

// ---ascending for double and more than numbers

const numbers =[4,7,12,8,43,6,1];

 const numbers_asc = numbers.sort(function(a,b) {return a-b})

 console.log(numbers_asc);

 
// ---descending for double and more than numbers

const numbers =[4,7,12,8,43,6,1];

 const numbers_dsc = numbers.sort(function(a,b) {return b-a})

 console.log(numbers_dsc);


