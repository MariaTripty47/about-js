
// STRING
const capital='Dhaka';
console.log(capital)
// for length
console.log(capital.length)
// for index number value
console.log(capital[0])
// confirming string
console.log(typeof capital)
// array type
const numbers = [11,22,34,44,66];
console.log(numbers)
numbers[2]=33;
console.log(numbers)
// String is immutable
console.log(capital)
capital[3]='q';
console.log(capital)

// Mismatch of the 'Uppercase' And 'lowercase'
const subject='Chemistry'
const book='chemistry'
if(subject===book){

    console.log('I will read');
}
else{

    console.log('I will go for a walk');
}
// Uppercase to Lowercase for condition
const Textbook='Physics';
const Extrabook='PHysIcs';
if(Textbook.toLowerCase()===Extrabook.toLowerCase()){

    console.log('I will read');
}
else{

    console.log('I will go for a walk');
}
// Uppercase to lowercase...VICEVERSA
const college='Chattogram Govt Womens College'
console.log(college.toLowerCase());
console.log(college.toUpperCase());
// Function of trim()----first & last part
const drink=' water ';
const liquid='water';
if(drink.trim()===liquid.trim()){
    console.log('Another name of water is life');
}
else{
    console.log('Death');
}
