// ----for loop---

const friends =['Elon','Bill','Mark','Waren'];
for(const friend of friends){
    console.log(friend);
}

for(let i = 0; i<friends.length; i++){

    console.log(i);
    console.log(friends[i]);

}


// ----while loop----
let i = 0;
while(i<friends.length){

    console.log(friends[i]);
    i++;
}