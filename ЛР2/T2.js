 function myMap(array, fn) {

    bufArray = []
    array.forEach(element => {
        bufArray.push(fn(element))
    });
    return bufArray
}
var myObj = {
    o:"foo",
    b:"bar"

};
function examplefunction(a){
    return a*a;
}

exampleArray = [1,2,3,4,5,6,7,8,9,10]
function Task2(){
console.log(myMap(exampleArray,examplefunction))

}