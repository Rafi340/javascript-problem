function recFac(num){
    if(num == 1){
        console.log(num);
        return 1
    }else{
        console.log(num -1);
        return num * recFac(num - 1);
    }
}
var res = recFac(5);
console.log(res);