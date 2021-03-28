// its for showing a message 
// alert("Hello World");

/* 
DataTypes : 
-String : any text or set of charachters 
"String " or 'String'.

-Numbers : is any number in js
(2, 4.6 , 0.9)

-Boolean : True or False  


-Variables: its something to store values;


-Operators: a sympol that does an action 




*/
// var userName = prompt('what is your name? ');

// alert('Welcome ' + userName);
// 'Hello my name is bashar'
// "This is a String data type"
// '  3+3 '
// alert(3+20)

// alert('bashar')
// assignment operator 
// = 


// Arthmatic operators or mathmatical operators 
// + plus 2+2
// - minus 5-2
// * multiplication 5*3
// / divide  8/2
// ** power 5**5
// % modulas 10 % 5 


// var firstName = "Bashar";
// var x = 10;
// var y = 4;

// var z = x + y;

// alert(z);

// console => something that we can use 
// 1. To show the errors if we have ! 
// its for the developers

// var firstName = 'Bashar ';
// var lastName = 'Alasmar';
// var x = 10;
// var i = 20; 

// // console.log(x*i);
// // console.log(firstName);

// //             Concatincation ! 

// var fullName = firstName + lastName;
// // console.log(fullName);



// // Comparison operators
// // == compare two values 
// // === Strictly equal check everything the data type and the value
// // Greater Than > 
// // less Than < 
// //Greater Than or Equal >=
// //Less thhan or Equal  <= 
// // Not equl !=

// var x = 20; 

// var y = '20';

// console.log(x === y); // is x is equal y ? 


// console.log(15 =='15'); // T
// console.log(15 === '15'); // F

// var userName = prompt('Whats your name?');
// // prompt will take the input from the user 

// document.write('<h2>' + userName + '</h2>');

/* 

if (study is true ){
    Pass
}
Conditional Steatment
     True Or Flase
if(condition){
    // run code ! 
}else {
    // if the condition is false!
}


*/


// var happy = true; // declared variable as true
// if(happy == false){ 
//     console.log('Sorry for you')
// }else if(happy == ture){ // T
//     console.log('its Loggged')
// }
// else { // only one ! default case!
//     alert('WOW Great')
// }








//*************************************************************CLASS05 */
// Logical operators:
// -AND &&: the condition is only true when BOTH of them are true. (shift + 7)
// -OR || : the condition is true when ONE of them is true. (shift + backslash)
// loops:
// a way to repeat code for an amount of time 

// Loops: programming stucture, repeat a block of code until a specific condition is met!

//Why? reduce redunedent code 
// without copying and pasting the code over and over again
// While: 
// when you want to repeat the code for an UNLIMTED amount of time until the condition
// is false
// while(condition){
//     while the condition is true keep running this code, if its false break the loop
// }







// i want to take the user age
// if his age is greater or equal to 18 and his age is less than 35 i will welcome to my website 
// if his age is less than 18 or his is greater than 35 i will tell him you're not allowed 
// default case i will just tell him to have a nice day ! 


// var age = prompt('whats your age?');
// // 12
//         // F       // T 
// if(age >= 18 && age < 35){ // F
//     alert('Welcome to my website!')
//     // T  || F 
// }else if(age < 18 || age > 35){ // T 
//     alert('Sorry your not allowed!')
// }else{
//     alert('Have a nice day!')
// }



/* 

while(condition){

    code .. 

}

*/



// if the password is not uncommon i wont allow the user to enter my website ! 

// var userPassword = prompt('Guess the password!');
// var password = 'uncommon';

// // anything !
//         // anything !== uncommon 
//  // out of the if statement !
//             // T   // until the user enter the correct password(uncommon)
//             //anything !== 'uncommon' T 
// while(userPassword !== password){ // validation 
//     userPassword = prompt('Please enter the correct password!')
//     // we're not assigning the value to anywhere
// }
// while(userPassword !== password){ // validation 
//     prompt('Please enter the correct password!')
//     // we're not assigning the value to anywhere
// }

// while validating the user input ! 
// when i dont know how many times i am going to loop




/*

1- Ask the user what is your favourite instrument!

2- keep asking until he enters piano or guitar 

3- check how many instruments he wants
 
4- show a number of images based on the user enter 


// */
// var favInstrument = prompt('Whats your favourite instrument!','piano , guitar');

// // guitar
//         // T  || F 
//         // T 

// // guitar 
//                 // T  &&  F 
//                 //  F 
                
// // Bashar          T                 T       
// while(favInstrument !== 'piano' && favInstrument !== 'guitar'){

//     favInstrument = prompt('please enter on of the following guitar or piano');
//     // guitar no where ! 
// }
// // guitar 
//                 // F            ||    //      T 

// guitar   // F            &&     // T 

// anything  F             ||      F
 // !F  = > T 
//  while(!(favInstrument ==='piano' || favInstrument ==='guitar')){ 
//     favInstrument = prompt('please enter on of the following guitar or piano');
// }


// i want to print in the console.log 10 numbers 
                // 0 <= 10
                // // T 
                // 10
// for(var i = 1 ; i<=10 ; i++ ){

//     console.log(i); // 0  1 

// }

                //100 < 100 => False
// for(var i = 0 ; i < 100; i = i + 10){
//     console.log('Your website is loadig ', i)
// }

// console.log(i);

// 0
// show nothing 
// 0 - 9
// nothing 
                // F 
// for(var x = 0 ; x === 10 ; x++){
//     console.log(x);
// }

// console.log(3 + '4') as a string
// console.log('the last value of i : ' +  i)
// console.log(i);
// console.log('the last value of i : ' ,  i)


// for(var j = 50 ; j >= 30 ; j--){
//     console.log(j);
// }

// for(var x = 0 ; x <=10 ; x++){
//     console.log(x)
// }

// var i =0
// while(i <= 10){

//     console.log(i)
//     i++;
// }


// for(var i = 0 ; i < 5; i++){
//     console.log('outer loop ' , i );
//     for(var j = 0 ; j < 10 ; j++){
//             console.log('inner loop', j)
//     }
// }




// 1- Ask the user what is your favourite instrument!

// 2- keep asking until he enters piano or guitar 

// 3- check how many instruments he wants
 
// 4- show a number of images based on the user enter 



var favInstrument = prompt('Whats your favourite instrument!','piano , guitar');
     
while(favInstrument !== 'piano' && favInstrument !== 'guitar'){

    favInstrument = prompt('please enter on of the following guitar or piano');
}

// guitar 
// how many guitars would you like to see? 
// 20 images of the guitar!


var instrumentsNum = prompt('How many guitar or piano would you like to see?');
// 4 

var image = ''; 
// undifined

// declaring a variable 
                       // 
for(var i = 1 ; i <=instrumentsNum; i++ ){
    if(favInstrument === 'guitar'){
        image = image + '<img src="images/guitar.png"/>';
    }else if(favInstrument === 'piano'){
        image = image + '<img src="images/piano.jpg"/>';
    }
}
console.log(image);
document.write(image); // to show the image!