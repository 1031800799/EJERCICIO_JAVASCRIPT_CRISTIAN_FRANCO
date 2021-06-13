<script>
    document.write("Hello World!");
</script>
    document.write("<h1>Hello world!</h1>");

console.log("Hello from console") 

var x = 10;

var x = 100;
document.write(x);

var x = 100;
 console.log(x)

x = 42;
console.log(x);

var x = 100;
document.ownerDocument(x);

// This is a single line comment
   alert("This is a alert boz!");

/* This code 
    create an 
    alter box */
    alert("This is an alert box");

var num = 42; // A number without decimals

var price = 55.55; // a number with decimals 
document.write(price)

var name = 'John';
var text = "My name is John Smith";

var text = "My name is 'John' ";

var satHello = 'Hello world! \'I am a JavaScriptprogramer.\'';
document.write(sayHello);

var isActive = true; 
var isHoliday = false;

var x = 10 + 5
document.write(x);

var x = 10;
var y = x + 5 + 22 + 45 + 6548
document.write(y);

var x = 10 * 5;
document.write(x)

var x = 100 / 5;
document.white(x);

var myVariable = 26 % 6;

var num = 10;
// num == 8 will return false

(4 > 2) && (10 < 15)

variable = (condition) ? value1: value2

var isAdult = (age < 18) ? "too young": "Old enough"

var mystring1 = "I am learning"
var mystring2 = "JavaScript with sololearn.";
document.write(mystring1 + mystring2) 

if (condition) {
    statements
 }

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
    alter("JavaScript is easy to learn.");
}

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
    alter("JavaScript is easy to learn.");
}

if (expression) {
    // executed if condition is true
 }
 else {
    // executed if condition is false
 }

 var myNum1 = 7; 
 var myNum2 = 10;
 if (myNum1 > myNum2) {
     alter("This is my first condition");
 }
 else {
     alter("This is my second condition")
 }

var course =1;
if (course == 1) {
    document.white("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write("<h1>CSS Tutorial</h1>");
} else {
    document.white("<h1>JavaScript Tutorial");
}

var course = 3;
if (course ==1) {
    document.write("<h1>HTML Tutorial</h1>");
} else if (course ==2) {
    doxument.write("<h1>CSS Tutorial</h1>");
} else {
    document.white("<h1>JavaScript Tutorial");
}

switch (expression) {
    case n1: 
       statements
       break;
    case n2: 
       statements
       break;
    default: 
       statements
  }

var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break; 
    case 3: 
        document.write("wednesday");
        break; 
    default: 
        document.write("Another day");
}

var color ="yellow";
  switch(color) {
    case "blue":
        document.write("This is blue.");
        break;
    case "red":
        document.write("This is red.");
        break;
    case "green":
        document.write("This is green.")
        break;
    case "orange":
        document.write("This is orange.");
        break;
    default:
        document.write("Color not found.")
  }
 
for (i=1; i<=5; i++) {
    document.write(i + "<br />");
}

var i= 1;
for (i=1; i<=5; i++) {
    document.write(i + "<br />");
}

for (i=1, text=""; i<=5; i++) {
    text = i;
    document.write(i + "<br />");
}

var i = 0;
for(; i < 10;) {
    document.write(i);
    i++;
}

while (condition) {    
    codeblock
}

var i=0;
while (i<=10) {
    document.write(i + "<br />");
}

do {
    codeblock
 }
 while (condition);

var i=20;
do {
    document.write(i + "<br />");
    i++;
}
while (i<=25);

for (i = 0; i <=10; i++) {
    if (i ==5) {
        break
    }
    document.write(i + "<br />");
}

for (i = 0; i <= 10; i++) {
    if (i ==5) {
        continue    
    }
    document.write(i + "<br />");
}

function name() {    
    //code to be executed
}

function myFunction() {
    alter("calling a function!");
} 

myFunction();

function myFunction() {
    alter("Alert box!"); 
}

myFunction()
//"Altert box!"

// some other code

myFunction();
//"Alter box!"

functionName(param1, param2, param3); {
    // some code
 }

function sayHello(name) {
    alter("Hi, " + name);
}

sayHello("David");

function sayHello(name) {
    alter("Hi, " + name);
}
sayHello(David);
sayHello("Sarah");
sayHello("John");

function myFunc(x, y) {
    // some code
}

function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
}

function sayHello(name, age) {
    document.write(name + " is " + age + "years old.");
}

sayHello("John", 20)

function myFunction(a, b) {
    return a + b;
}

varx = myFunction(5, 6);
// return value will end up in x

function addNumber(a, b) {
    var c = a+b;
    return c; 
}
document.write( addNumbers(40, 2) );

alert("Do you really want to leave this page?");

alert("Hello\nHow are you?");

var user = prompt("Please enter your name");
alert(user);

var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}

var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
};

objectName.propertyName
//or
objectName['propertyName']

var person = {
    name: "John" , age: 31,
    favColor: "green" , height: 183
};
var x = person.age;
var y = person["age"];

var course = {name: "JS", lessons: 41};
document.write(course.name.length);

objectName.methodName()

document.write("This is some text");

var person = {
    name: "John", age: 42, favColor: "green"
};

function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("amy", 21, "red");

document.write(p1.age); // Outputs 42
document.write(p2.name); // outputs "Amy"

function person (name, age) {
    this.name = name;
    this.age = age;
}
var John = new person("john", 25);
var James = new person("James", 21);

var John = {name: "John", age: 25};
var James = {name: "James", age: 21};

var John = {
    name: "John",
    age: 25
};
  var James = {
    name: "James",
    age: 21
};

document.write(John.age); 

methodName = function() { codelines }
objectName.methodName() 

function person(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("David", 21);
p.changeName("Jhon");
//Now p.name equals to "John"

function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2016 - this.age;
}

function person(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2016 - this.age;
}

var p = new person("A", 22);
document.write(p.yearOfBirth());

var course1 ="HTML"; 
var course2 ="CSS"; 
var course3 ="JS"; 

var courses = new Array("HTML", "CSS", "JS");

var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 

var courses = new Array("HTML", "CSS", "JS");
document.write(courses[10]);

var course = new Array(3);
course[0] ="HTML"; 
course[1] ="CSS"; 
course[2] ="JS"; 

var course = new Array();
course[0] ="HTML"; 
course[1] ="CSS"; 
course[2] ="JS"; 
course[3] ="C++";

var course = ["HTML", "CSS", "JS"];

var course = ["HTML", "CSS", "JS"];
document.write(course.length);

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var course = c1.concat(c2);

var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);

document.write(Math.PI);

var number = Math.sqrt(4)
document.write(number);

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("Tje square root of " + n + "is" + answer);

function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);

var d = new Date();
//d stores the current date and time

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

var d = new Date();
var hours = d.getHours();
//hours is equal to the current hour 

function printTime() {
    var d = new Date();
    var hhours = d.getHours();
    var mins = d.getMinutes();
    var secs  = d.getSeconds();
    Document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

document.body.innerHTML = "Some text";

//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)

var elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";

var arr =  document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi";

var node = document.createTextNode("Some new text");

var t = setInterval(move, 500); 

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
}

var t = setInterval(move, 10);ç

function move() {
    if(pos >= 150) {
      clearInterval(t);
    }
    else {
      pos += 1;
      box.style.left = pos+"px";
    }
}

var pos = 0;
//our box element 
var box = document.getElementById("box");
var t = setInterval(move, 10);

function move() {
    if(pos >= 150) {
        clearInterval(t);
    }
    else {
        pos += 1;
        box.style.left = pos+"px";
    } 
}

var x = document.getElementById("demo");
x.onclick = function () {
    document.body.innerHTML = Date ();
}

window.onload ​= function() {
    ​//some code
}

element.addEventListener("event, function, useCapture");

element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}

element.removeEventListener("mouseover", myFunction);

addEventListener("event, function, useCapture")

//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false); 

var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
];

var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num= 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

function validate() {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    if(n1.value != "" && n2.value != "") {
        if(n1.value == n2.value) {
            return true;
        }
    }
    alter("The values should be equal and not blank");
    return false; 
}

var a = 10;
const b = 'hello';
let c = true;

if (true) {
    let name = 'jack';
}
alert(name); //generates an error

function varTest() {
    var x= 1;
    if (true) {
        var c = 2; // same variable
        console.log(x); //2 
    }
    console.log(x); //2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2; //different variable
        console.log(x); //2 
    }
    console.log(x); //1
}

for (let i = 0; i < 3; i++) {
    document.write(i);
}

const a = 'Hello';
a = 'Bye';

let name= 'David';
let msg = 'Welcome ' + name + '!';
console.log(msg);

let name = 'David';
let msg = `Welcome ${name}!`;
console.log(msg);

let a = 8;
let b = 34;
let msg = `The sum is ${a+b}`;
console.log(msg);

let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}

let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
    console.log(v)
}

let list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}

for (let ch of "Hello") {
    console.log(ch);
}

function add(z, y) {
    var sum = x+y;
    console.log(sum);
}

const add = (x, y) => {
    let sum = x + y;
    console.long(sum); 
}

const greet = x =>"Welcome" +x;

const x = () => alert("Hi");

var arr = [2, 3, 7, 8];

arr.forEach(function(el) {
    console.log(el * 2);
});

const arr = [2, 3, 7, 8];

arr.forEach(v => {
    console.log(v * 2);
});

function test(a, b = 3, c = 42) {
    return a + b  + c;
}
console.log(test(5)); //50

const test = (a, b = 3, c = 42) => {
    return a + b + c;
}
console.log(test(5)); //50 

let tree = {
    height: 10,
    color: 'greem',
    grow() {
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height); // 12

let heigh = 5;
let health = 100;

let athlete= {
    height,
    health
};

var a = {x: 1, x: 2, x: 3, x: 4};

let prop = 'name';
let id = '123'
let mobible = '08923'

let user = {
    [prop]: 'Jack',
    [`user_${id}`]: `${mobile}`
};

var i = 0;
var a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
};

var param = 'size';
var config = {
    [param]: 12,
    ['mobible' + param.charAt(0).toUpperCase() +
param.slice(1)]: 4
};
console.log(config.mobileSize);

let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
let newStudent = Object.assign({}, person, student);

let person = {
    name: 'Jack',
    age: 18 
};

let newPerson = person; // mewPerson references person
newPerson.name ='Bon';

console.log(person); //Bob
console.log(newPerson.name); // Bob

let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person);
newPerson.name = 'Bob';

console.log(person.name); // Jack 
console.log(newPerson.name); // Bob

let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person, {name: 'Bob'});

let arr = ['1', '2', '3'];
let [one, two, three] = arr;

console.log(one); // 1
console,log(two); // 2
console.log(three); //3

let a = () => {
    return [1, 3, 2];
}

let [one, two] = a();

let a, b, c = 4, d = 8;
[a, b = 6] [2]; //a = 2, b = 6

[c, d] = [d,c]; //c = 8, d = 4

let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h); //100
console.log(s); // true

let a, b;
({a, b}) = {a: 'Hello', b: 'Jack'};

console.log(a + b); // Hello Jack

let {a, b} = {a: 'Hello ', b: 'Jack'};
console.log(a + b);

var o = {h: 42, s: true};
var {h: foo, s: bar} = 0

//console.log(h); // Error
console.log(foo); // 42

var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

console.log(id); // 42
console.log(age); // 20

function contationsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments [k];
        if (arr.indexOf(num) === -1){   
            return false;
        }
      }
      return true;
}
let x = [2, 4, 6, 7]
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(X, 6, 9));

function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));

const myFunction = (w, x, y, z) => {
    console.log(w + x + y+ z);
};
let args = [1, 2, 3];
myFunction(...args, 4);

var dateFields = [1970, 0, 1]; // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date);

var arr = ["One", "Two", "Five"];

arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
console.log(arr);

let newArr= ['Three', 'Four'];
let arr = ['one', 'Two', ...newArr, 'five'];
console.log(arr);

const obj1 = { foo: 'bar', x: 42};
const onj2 = { foo: 'baz', y: 5};

const clonedObj = {...obj1}; // { foo: "bar", x:42 }
const mergedObj = {...obj1, ...obj2}; // { foo: "baz", x: 42, y: 5}

const obj1 = { foo: 'bar', x: 42};
const obj2 = { foo: 'baz', y: 5};
const merge = (...objects) => ({...objects});

let mergedObj= merge(obj1, obj2);
// {0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = marge({}, obj1, obj2);
// { 0: {}, 1: { foo 'bar', x: 42 }, 2: { foo: 'baz', y: 5} } 

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

const square = new Rectangles(5, 5)
const poster = new Rectangles(2, 3)

var Square = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    }
};

var Square = class  {
    constructor(height, width) {
        this.heigh = height;
        this.width = width;
    }
};

var Square = class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
}
get area() {
    return this.calcArea();
    }
calcArea() {
    return this.calcArea();
    }
}
const square = new Rectangle(5, 5);
console.log(square.area); // 25

class Point {
    constructur(x, y) {
        this.x = x;
        this.y = y;
    }
    static distrance(a, b) {
        const dx = a.y - b.x;
        const dy= a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distrance(p1, p2));

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a moise');
    }
}
class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

let dog = new Dog('Rex');
dog.speak();

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a moise');
    }
}

class Dog extends Animal {
    speak() {
        super.speak(); // Super
        console.log(this.name + ' barks. ');
    }
}

let dog = new Dog('Rex');
dog.speak();

let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2

let map = new Map();

map.set('K1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1

console.log(map.has('k2')); // true

for (let kv of map.entries())
  console.log(kv[0] + " : " + kv[1]);

let set = new set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); //5

let set = new set();

set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for(let v of set.values())
  console.log(v);

  asyncFunc("Work 1") // Task 1
  .then(function(result){
  console.log(result);
  return asyncFunc("Work 2 "); // Task 2
  }, function(error) {
  console.log(error);
  })
  .then(function(result) {
  console.log(result);
  }, function(error) {
  console.log(error);
  });
  console.log("End");

new Promise(function(resolve, reject) {
  // Work
  if (success)
      resolve(result);
  else
      reject(Error("failure"));
}); 

// lib/math.js
export ​let sum = (x, y) => { return x + y; }
export ​let pi = 3.14;

// app.js
import * ​as math from "lib/mat"

class Add {
  constructor(...words) {
      this.words = words;
  }
  //your code goes here
  print(){
      var y ="";
      for (x of this.words) {
        if(x == ","){
          x = "";
        }
        else{
          y += "$" + x;
        }
      }

      y = y + "$";
      console.log(y);
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", ",", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();

setTimeout (function(){
  console.log("Work 1");
  setTimeout(function() {
      console.log("Work 2");
  }, 1000);
}, 1000);
console.log ("End");

function* idMaker() {
  let index = 0;
  while (index <5)
  yield index++;
}
var gen = idMaker();
console.log(gen.next().value);

const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
      for(let index of arr){
          yield '{index}';
      }
  }
};
const all = [...my_obj]
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5)
  .reduce((i, d) => i + d);
console.log(all);

[4, 5, 1, 8, 2, 0].filter(function(x){
  return x > 3
})[0];

[4, 5, 1, 8, 2, 0].find (x => x > 3);

[4, 5, 1, 8, 2, 0].findIndex (x => x >3);

"SoloLearn".indexOf ("Solo") === 0; // true
"SoloLearn".indexOf ("Solo") === (4 - "Solo".length); // true
"SoloLearn".indexOf ("loLe") !== -1; // true
"SoloLearn".indexOf ("olo", 1) !== -1; // true
"SoloLearn".indexOf ("olo", 2) !== -1; // false

"SoloLearn".startsWith ("Solo", 0); // true
"SoloLearn".endsWith ("Solo", 4); // true
"SoloLearn".includes ("loLe"); // true
"SoloLearn".includes ("olo", 1); // true
"SoloLearn".includes ("olo", 2); // true