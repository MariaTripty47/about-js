
// step-1: declare a function
// step-2: call check whether the function is called properly
// step-3: set a parameter(s)
// step-4: pass the parameter(s), check whether parameter is passed in a proper format
// step-5: do the function tasks(step by step)


// function sumOfnumbers(numbers){

//     let sum = 0;

// for(const number of numbers){

// console.log(number);
// sum = sum + number;

// }

// return sum;

// }

// const numbs = [54, 62, 12, 6];
// const sum = sumOfnumbers(numbs);
// console.log('Sum of number is', sum);

/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */

function evenNumbersOnly(numbers){

    const evens =[];

for(const number of numbers){

if(number %2 ===0){

console.log(number);
  evens.push(number);

}


}
return evens;

}

const numbers = [5,8,91,24,6];

const evens= evenNumbersOnly(numbers);
console.log('even numbers are', evens)

// another......

function sumOfEvenNumbers(numbers){

    let sum = 0;

for(const number of numbers){

if(number %2=== 0){

    console.log(number);
    sum = sum + number ;
}


}
return sum;

}

const sum = sumOfEvenNumbers(numbers);

console.log('sum of the even numbers is', sum);