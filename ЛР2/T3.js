 function hasProperty(obj, prop) {

    if(obj.hasOwnProperty(prop)) return true;
    return false
}
var myObj = {
    o:"foo",
    b:"bar"

};

function Task3(){
console.log(hasProperty(myObj,"o"))
console.log(hasProperty(myObj,"b"))
console.log(hasProperty(myObj,"c"))
console.log(hasProperty(myObj,"d"))
}