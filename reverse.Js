const sentence ='I am learning wev dev'
reverse = ''
for(const letter of sentence){
    reverse = letter + reverse;
}

    console.log(reverse);
// ---------OR---------
 let rev= ''
for(let i=0; i<sentence.length; i++){

    const letter = sentence[i];
    rev = letter + rev;
}
// ------shortcut------
const reversed = sentence.split('').reverse().join('');
console.log(reversed);