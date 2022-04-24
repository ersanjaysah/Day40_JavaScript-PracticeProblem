function palindrom()
{
    var num=prompt("Please enter a number to check palindrom or not");
    var temp=num;
    var rev=0;
    var div=0;
    while(num>0){
        div=num%10;
        rev=(rev*10)+div;
        num=parseInt(num/10);
    }
    if(temp==rev){
        console.log("Entered number is palindrom number ");
    }
    else{
        console.log("Enter number is not a palindrom number ");
    }
}

palindrom(); // calling function here