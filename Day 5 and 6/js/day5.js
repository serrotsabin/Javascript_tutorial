var obj = {
    a: 1,
    b: 2
}

obj.c = 3

console.log(obj)

var newObj = function (a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

var obj2 = new newObj(1,2,3);

console.log(obj2)

newObj.prototype.d  = 4 

console.log(newObj)
console.log(obj2)

var obj2 = new newObj(1,2,3);

console.log(obj2.d)
console.log(obj2)