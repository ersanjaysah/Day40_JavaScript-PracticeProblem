var num= prompt("Enter a number to find factorial: ");

var fact=1
for (var i=1;i<=num;i++)
{
    fact=fact*i;
}

console.log("Factorial of the number is: ",fact);