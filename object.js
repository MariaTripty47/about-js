// -------object--------
// for get all properties
const myself = {
name:'Maria Nur Tripty',
age: 21,
passion:'Webdevloper',
'fav places':['bandarban','rangamati','kuakata']
}
console.log(myself)


// get one specific properties
console.log(myself.age)

// --------or------(by declaring variable)
const fullname = myself.name;
console.log(myself.name)



// --or--(bracket notation for: hyphen,space,colon etc)
console.log(myself['age'])
const longevity = myself['age']
console.log(longevity)
console.log(myself['fav places'])


// for update value
myself.age = 25;

//------or------
myself['age'] = 25;
console.log(myself)


// dot notation
const subject = {
name:'physics',
teacher:'Sabina Yeasmin',
examDate:'22 June',
exams:{
    name:'mid exam',
    marks:30,
}
}
console.log(subject)
console.log(subject.exams)//
