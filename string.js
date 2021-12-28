var spech="My  Name is  Rafi Samnan. I need to change for Akhirat";
var count=0;
for(var i=1; i<spech.length; i++){
    var element = spech[i];
    if(element == " " && spech[i-1] !=" " ){
        count++;
    }
}

console.log(count);