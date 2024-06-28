// Function of slice()
const address='andorkilla';
const part = address.slice(3,8);
console.log(part);
// turns the sentence into single words in an array
const sentence='Success is not final,failure is not fatal:it is the courage to continue that counts.';
console.log(sentence.split(' ')); 
// split a string into substring by @
const saying='Believe @ you can and you are @ halfway there';
console.log(saying.split('@')); 
const friendsStr ='Justin,Leo,Olivia,Jack,William,Taylor,Rose';
const friends = friendsStr.split(','); 
console.log(friends);
// Function of join()
const RealFriends =['Justin','Leo','Olivia','Jack','William','Taylor','Rose'];
console.log(RealFriends.join());
console.log(RealFriends.join('-'));
console.log(RealFriends.join('/'));