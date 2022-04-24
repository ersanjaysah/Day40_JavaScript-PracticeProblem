var firstrange =prompt("Please enter First range");
var lastrange=prompt("Please enter Last range")

console.log("All prime number with in that range is:");
for (i=firstrange;i<=lastrange;i++){
    var count=0;
    for (var j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(i);
    }
}