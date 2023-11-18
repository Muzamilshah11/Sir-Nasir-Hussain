

// Today Topic is OR|| and &&

let html_score= Number(prompt("Please Enter the HTML Scor:-- "))
let css_score= Number(prompt("Now Enter the HTML Scor:-- "))
let Typescript_score= Number(prompt("Now Enter the HTML Scor:-- "))
let nextjs_score= Number(prompt("Now Enter the HTML Scor:-- "))
let python_score= Number(prompt("Now Enter the HTML Scor:-- "))

let obtain = html_score+css_score+Typescript_score+nextjs_score+python_score

let per = obtain/500*100;

var grade =''
 if(per>=90){
    grade = "A+"
 } 
 else if(per>=80){
    grade="A"
 }
 else if(per>=70){
    grade="B"
 }
 else if(per>=60){
    grade="C"
 }
 else if(per>=50){
    grade="D"
 }
 else{
    grade="Sorry You are Fail"
 }
 // Collect through (Called Backticks ``)
 alert(
    `Your total Marks:-- ${obtain} 
    and Your Percetage:-- ${per} 
    and Your Grade is:--${grade}`)
// console.log(`Your total Marks:-- ${obtain} 
//    and Your Percetage:-- ${per} 
//    and Your Grade is:--${grade}`)



// if (per>=90 && per>=80){
//     alert("your grade is:-- "+ grade)


// }else{

// }