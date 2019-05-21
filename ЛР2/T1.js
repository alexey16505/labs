function defaultParameterValue(a, b) {
    if(b == undefined || b == null) b = 100;
    return a+b;

}

function Task1(){
console.log(defaultParameterValue(1,2))
console.log(defaultParameterValue(1))

}