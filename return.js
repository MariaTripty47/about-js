function tenTimes (number){

const result = number*10;

return result;

}

tenTimes(5);

const output = tenTimes(5);
console.log('output',output)


// -------or------

function add(price1,price2){

const total = price1 + price2;

return total;

}

const bill = add(5,80);

console.log(bill);


// -------or------

function add2(price1,price2){

return price1 + price2;

}

const bill2 = add(5, 80);
console.log(bill2);

// -----another example-----

function doMath(num1,num2){

const sum = num1+ num2;
const diff = num1- num2;
const multiply = sum*diff;
const result = multiply/2;
return result;

}

const result = doMath(10,5);
console.log(result);

// -----another conditional example-----

function isEven(number){

if( number % 2 === 0){

    return true;
}

else{

    return false;
}

}
console.log(isEven(5));
console.log(isEven(110));

// ------for odd-------

function isOdd(number){

    if( number % 2 === 1){
    
        return true;
    }
    
    else{
    
        return false;
    }
    
    }
    console.log(isEven(10));
    console.log(isEven(7));
    

