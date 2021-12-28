function call_back(name, age , task){
    console.log("Your Name:",name);
    console.log("Your age:",age);
    task();
}

function washroom(){
    console.log("Go to washroom and take soap for wash your hand")
}
function shower(){
    console.log("take shower");
}
function scrollfb(){
    console.log("don't scroll fb");
}

call_back('rafi samnan', 24 , scrollfb);
call_back(' samnan', 24 , shower);