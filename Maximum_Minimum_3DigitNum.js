let num1= Math.floor(Math.random()*900)+100;
let num2= Math.floor(Math.random()*900)+100;
let num3= Math.floor(Math.random()*900)+100;
let num4= Math.floor(Math.random()*900)+100;
let num5= Math.floor(Math.random()*900)+100;

console.log(num1,num2,num3,num4,num5);

//For finding Maximum between 5 number
if (num1>num2 && num1>num3 && num1>num4 && num1>num5){
    console.log("First number is Largest number: ",num1);
}
else if(num2>num3 && num2>num4 && num2>num5){
    console.log("Second umnber is Largest number: ",num2);
}
else if(num3>num4 && num3>num5){
    console.log("Third number is Largest Number: ",num3);
}
else if(num4>num5){
    console.log("Fourth number is Largest Number: ",num4);
}
else{
    console.log("Fifth number is Largest Number: ",num5);
}

//For finding minimum between 5 number.
if (num1<num2 && num1<num3 && num1<num4 && num1<num5){
    console.log("First number is Largest number: ",num1);
}
else if(num2<num3 && num2<num4 && num2<num5){
    console.log("Second umnber is Largest number: ",num2);
}
else if(num3<num4 && num3<num5){
    console.log("Third number is Largest Number: ",num3);
}
else if(num4<num5){
    console.log("Fourth number is Largest Number: ",num4);
}
else{
    console.log("Fifth number is Largest Number: ",num5);
}