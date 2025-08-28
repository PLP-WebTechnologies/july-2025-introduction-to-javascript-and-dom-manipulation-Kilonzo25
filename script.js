//PART ONE: MASTERING JAVASCRIPT BASICS
// variables
let username = 'Brian';
//(console.log) executes the variable and provides the value 'Brian'
console.log(username);

// Operators
let Num1 = 10;// assigning the value 10 to Num1
let Num2 = 20;//assigning the value 20 to Num2
console.log(Num1 + Num2);//addition
console.log(Num1 * Num2);//multiplication
console.log(Num1 / Num2);//division
console.log(Num1 % Num2);//modulus

//comparison operators
let p1= 3;
let p2 = 3;
console.log(p1=p1)//outputs 3
console.log(p1>=p2)//outputs true



//PART TWO: FUNCTIONS
let profileName = prompt("Enter your profile name:");
// this pops up and asks the user for his or her profile name
console.log(profileName);
// the second function calculates the square of a number
const square = function(num){
    return num * num;
};
console.log(square(5));



// PART 3: DOM INTERACTIONS
// it is a way of a browser to represnt html webpage as a 
// Each object becomes a node and can be adjusted effectively
function manipulate(){
    let body = document.getElementById('body');
    let js = document.getElementById('js');
    let par = document.getElementById('par');
    let click = document.getElementById('click');

    //beginning of manipulation
    body.style.backgroundColor = 'blue';
    intro.style.colour = 'violet'
    par.style.fontSize = '25px'
    click.style.borderColor = 'red'
    click.style.border = '3px'

 




}


