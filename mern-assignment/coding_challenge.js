const markMass =[ 78,95] ;
const markHeight = [1.69,1.88];
const johnMass =[ 92,85] ;
const johnHeight = [1.95,1.76];

function BIM(weight,height){
    return weight *(height*height);
}
//for data one
const markBIM1 = BIM(markMass[0],markHeight[0]);
const johnBIM1 = BIM(johnMass[0],johnHeight[0])
//for data two
const markBIM2 = BIM(markMass[1],markHeight[1]);
const johnBIM2 = BIM(johnMass[1],johnHeight[1])

const result1 =markBIM1<johnBIM1
const result2 =markBIM2<johnBIM2
 console.log(result1)
 console.log(result2)

 //assignment #2-1
 //base on data 1
 if(result1){
     console.log('John\'s BMI is higher than Mark\'s BMI')
 }else{
     console.log("Mark's BMI is higher than John's BMI")
 }

//base on data two 
if(result2){
    console.log('John\'s BMI is higher than Mark\'s BMI')
}else{
    console.log("Mark's BMI is higher than John's BMI")
}

//assignment #2-2
if(result1){
    console.log(`John's ${johnBIM1} BMI is higher than Mark's ${markBIM1} BMI`)
}else{
    console.log(`Mark's ${markBIM1} BMI is higher than John's ${johnBIM1} BMI`)
}

//assignment 3
function average(a,b,c){
    return (a+b+c)/3
}

const dolphineAvg = average(96,108,89);
const koalasAvg = average(88,91,110);
dolphineAvg < koalasAvg ? 
console.log(`The winner is Koalas team with  avg score of ${koalasAvg}`)
:dolphineAvg==koalasAvg ? 
console.log(`It's draw with same score of ${dolphineAvg}`)
:console.log(`The winner is Dolphine team with  avg score of ${dolphineAvg}`)

//assignment 3 bonus 1
const dolphineAvg1 =average(97,112,101);
const koalasAvg1 =average(109,95,123);

console.log(dolphineAvg1)
console.log(koalasAvg1)

if(dolphineAvg1>koalasAvg1&&dolphineAvg>=100){
    console.log(`The winner is Dolphine team with  avg score of ${dolphineAvg1}`)
}else if(koalasAvg1>dolphineAvg1&&koalasAvg1>=100){
    console.log(`The winner is Koalas team with  avg score of ${koalasAvg1}`)
}else{
    console.log('Winner score is less than hundren')
}

//assignment 3 bonus 2
const dolphineAvg2 =average(97,112,101);
const koalasAvg2 =average(109,95,106);

console.log(dolphineAvg2)
console.log(koalasAvg2)

if(dolphineAvg2===koalasAvg2){
    console.log(`Both team score(${Math.floor(dolphineAvg2)}) same point so it is draw`)
}else if(koalasAvg2>dolphineAvg2&&!dolphineAvg2>=100){
    console.log(`The winner is Koalas team with  avg score of ${koalasAvg2}`)
}else if(dolphineAvg2>koalasAvg2&&!koalasAvg2>=100){
    console.log('Winner score is less than hundren')
}else{
    console.log('The match end in draw because they both score above hunderd')
}

//assignment 4
function cal(tip,value){
    return value*(tip/100)
}
const billvalue = [275,40,430];
//for index 1 (275)
billvalue.forEach((bill)=>{
    bill<=50 ?
     console.log(`The bill was ${bill}. The tip is ${cal(15,bill)}.The total value is ${bill+cal(15,bill)}`):
    console.log(`The bill was ${bill}. The tip is ${cal(20,bill)}.The total value is ${bill+cal(20,bill)}`)

})