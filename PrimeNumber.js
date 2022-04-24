var num =prompt("Please enter a number to check for prime number: ");

var count=0;
for (var i=1;i<=num;i++)
{
    if (num%i==0)
    {
        count=count+1;
    }
}

if (count==2){
    console.log("Entered number is Prime Number");
}
else
{
    console.log("Enter number is not a prime number")
}