function getName(first, last){
    console.log(arguments);
    let name='';
    for(let i =0;i<arguments.length;i++){
        const fullName=arguments[i];
        name = name +" "+ fullName;
    }
    return name;
}
const p = getName('r','a','f');
console.log(p);