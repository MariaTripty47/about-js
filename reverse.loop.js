const numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers);

numbers.reverse();

console.log(numbers);

// ---or----

const reversed = numbers.reverse();
console.log(reversed);


 
// // ----or-----

const reverse_numbers = [];

for(let i=0; i< numbers.length; i++){

    const num = numbers[i];
    reversed_numbers.unshift(num);
}


// ----or----
for(let i= numbers.length -1; i>=0; i--){

    const num = numbers[i];
console.log(num);

}

// -----or---
const rev_rev_numbers =[];
for(let i= numbers.length -1; i>=0; i--){

const num = numbers[i];
console.log(num);

rev_rev_numbers.push(num);
}

console.log(rev_rev_numbers);

