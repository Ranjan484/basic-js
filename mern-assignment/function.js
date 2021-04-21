// Types of the function

//1 named function 
function greeting(){
    console.log('hello nice to meet you')
}
greeting();

//2 annonymous function
const greet = function(){
    console.log('Hi welcom to js')
}
greet();

//3 function with argument 
function greet1(name,subject){
    console.log(`Hi ${name} my name is Ranjan. Thanks for enrolling in ${subject}`)
}
greet1('Ranjan','Computer Science')

//4 function with argument and return
function sum(a,b){
    let result;
    return result = a + b;
}
const value = sum(4,5);
console.log(value);

//5 IIFE Immidately invoked function
(function sayhello(){
    console.log('Hello')
})()

function returnArray(){
   const name=['ranjan','ram','kapil','Anjana']
    const age = [21,20,49,50];
    const all =  {
        name:name,
        age:age
    }
    console.log(all)
}
returnArray()
