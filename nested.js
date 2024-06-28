const college = {
name:'CGWC',
class:['11','12'],
events:['science fair','21 Feb','26 Mar'],
unique:{
color:'blue',
result:{
gpa:5,
merit:'top'

}

}
}
// ---for getting variable
console.log(college.unique)
// ---for getting variable value
console.log(college.unique.color)


// ---for getting single value of string type
console.log(college.events[2])
// ---for deleting variable
delete college.class;
console.log(college)
