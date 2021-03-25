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

var firstName = 'Bashar ';
var lastName = 'Alasmar';
var x = 10;
var i = 20; 

// console.log(x*i);
// console.log(firstName);

//             Concatincation ! 

var fullName = firstName + lastName;
// console.log(fullName);



// Comparison operators
// == compare two values 
// === Strictly equal check everything the data type and the value
// Greater Than > 
// less Than < 
//Greater Than or Equal >=
//Less thhan or Equal  <= 
// Not equl !=

var x = 20; 

var y = '20';

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



/*

1- Ask the user what is your favourite instrument (3 images)!

2- show image based on the Answer 


*/


var favInstrument = prompt('Whats your favourite instrument!','piano , guitar , violin');

if(favInstrument === 'guitar'){
    document.write('<img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL1007936_rt_q2qwiw.jpg" />')
}else if(favInstrument === 'piano'){
    document.write('<img src="https://www.musikalessons.com/blog/wp-content/uploads/2017/06/grand-piano-.jpg"/>')
}else if (favInstrument === 'violin'){
    document.write('<img src="https://cdn.shopify.com/s/files/1/0182/0563/products/MaestroVNTop_682x1800_7159c927-5752-43e0-9c2e-a19df87bf18b_800x.JPG?v=1551819005"/>')
}else {
    alert('Okay welcome to my website')
}

