var range=prompt("Enter range to find Harmonic number: ");

var sum=0;

for (var i=1;i<=range;i++){
    sum=sum+(1/i);
}

console.log("Harmonic number upto that range is: ",sum);