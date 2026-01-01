/*==================================== Question No 1 =========================================
array destructuring 
we get the property values of an object by obj.name but here we can get easily without writing 
every time obj the values of object property 
we write left side the keyword like let ,const and than in {} we write properties name that 
have we defined in obj and after we write = and afer = we write objname and now we can get the valeus of property only by property name
like console.log(name)
======================================= Answer =====================================*/
/* const obj = { name: 'Aziz',
    age : 30,
    designation : 'developer'
}

// console.log(obj.age)
const {name, age,designation}  = obj;
console.log(name)
console.log(age)  */
// it is object destructuring , getting the value of obj properties without dot notation is called obj destructuring

/*==================================== Question No 2=========================================
short and smart way to extracting array elements and storing them in seperate variable and accessng them using variables
======================================= Answer =====================================*/

//  const colors = ['red','green','blue'];
//   const [first,second,third] = colors;
//   console.log(first)
// console.log(second)
// console.log(third)


// secnod 

// const names = ['Aslam','Akrm', 'Mubin','Saqib', 'umer'];
// console.log(names[2])

// const [studentOne, studentTwo,studenThree, studenFour,studenFive] = names
// console.log(studentOne);
// console.log(studenFour)
/*==================================== Question No 3 =========================================
spread operator is a feature of js that is used to 
merge/combine array or object 
copy array or object 
add data to an array or object 
expand elements of an array or object 
======================================= Answer =====================================*/
/* const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];
console.log(arr2)

const obj1 = {name : 'Aiz'};
const obj2 = {...obj1,age : 30};
console.log(obj2)
 */
/*==================================== Question No 4 =========================================
speread operator is used to expand the elements of an array or object
======================================= Answer =====================================*/
/* let arr1 = [1,2];
let arr2 = [3,4];
// let arr = arr1.concat(arr2);
let arr = [...arr1,...arr2]
console.log(arr)
let copy = [...arr];
console.log('copy : ',copy)
copy = [...copy,6,7,8];
console.log(copy)
 */
// object 

/* let obj1 = {name: 'Aziz'}
let obj2 = {age : 30};
// let obj = obj1.concat(obj2);
let obj = {...obj1,...obj2};
console.log(obj)

let objCopy = {...obj};
objCopy = {...objCopy,designation :'developer',city : 'karachi'}
console.log(objCopy); */


/*==================================== Question No 5 =========================================
set is a method of js and we can stroe unique values in array by using set method
======================================= Answer =====================================*/
// const numbers = new Set([1,1,1,2,2,3,4,4,4,5,6,7]);
// console.log(numbers)

/*==================================== Question No 6 =========================================
diagonal problem of hackerrank
======================================= Answer =====================================*/
/* let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

let leftSum = 0;
let rightSum = 0;

for (let i = 0; i < arr.length; i++) {
  leftSum = leftSum + arr[i][i];               // left diagonal
  rightSum = rightSum + arr[i][arr.length - 1 - i]; // right diagonal
}

let result = Math.abs(leftSum - rightSum);

console.log(result);
 */

/* let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

let leftSum = 0;
let rightSum = 0;

for(let i = 0; i < arr.length;i++){
    let a = arr[0][0];
    let b = arr[1][1];
    let c = arr[2][2]
    // right

    let d = arr[0][2];
    let e = arr[1][1];
    let f = arr[2][0];
    leftSum = a+b + c;
    rightSum = d + e + f;
    var result = leftSum - rightSum;
    result = Math.abs(result);

}
console.log(result) */


// let arr = [
//   [11, 2, 4,9],
//   [4, 5, 6,3],
//   [10, 8, -12,5],
//   [5,2,1,12]
// ]; 

// let leftSum = 0;
// let rightSum = 0;
// for(let i = 0;i < arr.length ;i++){
//      console.log(arr[i][i])
//     // console.log(arr[i][arr.length-1-i])
//     leftSum += arr[i][i];
//     rightSum += arr[i][arr.length-1-i];
    
// }
// let result = Math.abs(leftSum - rightSum);
// console.log(result)

/*==================================== Question No 7 =========================================
Map method
======================================= Answer =====================================*/
// const user = new Map();
// user.set('name','Aziz')
// user.set('age',25);
// console.log(user)


/*==================================== Question No 8 =========================================
Map is built-in-method and by using it we can store every type keys and values data in object 
, we can keepn key name let , true  function while in normal object we can not keep such name of keys, 
.set is used to store data in map, 
.has is used to check existence of any data in map, 
.get is used to get the value of any key
.size is used to check size of object 
.clear is used to clear all data of obj 
.keys is used to get keys fo obj 
.values is used to get values of obj
.entries is used to get pair of values of obj.
. we can run loop on map also like [key, value]
======================================= Answer =====================================*/
 /* shinning example :
       _____________________
       const map = new Map();
    
map.set('name','Aziz');
map.set('1998','Birthyear');
map.set('()=>{}','I am function');
map.set(new Date().getTime(),'Hello time');
map.set('null','No data available');
map.set('let','ok')
// console.log(map.get('let'))
// console.log(map.size)
map.set('let','not ok')
map.delete('1998');
let check = map.has('name');
console.log(check);
// console.log(map.clear());
console.log(map.keys())
console.log(map);
console.log(map.values());
console.log(map.entries()) */




/* const user = new Map();
    user.set('age','30');
    user.set('name','Aziz');
    user.set('designation','developer');
    user.set('let','keyword');
    user.set('funtion','arrowfun');
    user.delete('age');
    console.log(user.has('designation'))
    console.log(user.keys());
    console.log(user.values());
    console.log(user.entries());
    console.log(user.size)
    user.clear()
    console.log(user) */

    // Add values, check existence, delete values, get values, clear all obj, size of map create map , get keys, get value, get pairs

    /* const map = new Map( );
         map.set('name' ,'Aziz');
         map.set('age',30);
         map.set('city','karachi');
         console.log(map);
        //  for loop 
        for(let [ke,valu] of map){
          console.log(ke,valu)
        } */


/*==================================== Question No 9 =========================================
new Set
======================================= Answer =====================================*/
/* // let mySet = new Set([1,1,2,2,3,4,4,5,6,7]);
// console.log(mySet)

// add values in set 
let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(20);
mySet.add(30);
console.log(mySet)
// check existence of any value
console.log(mySet.has(20));
// delete any value 
mySet.delete(20);
console.log(mySet)
// clear( )
// mySet.clear( );
console.log(mySet.size)
console.log(mySet)
/* for(let i = 0;i <mySet.length;i++){
  console.log(mySet[i])
}
 */
// mySet.forEach((value)=>{
//   console.log(value)
// })

// // Real use of new Set( ) for removing duplicate 
// let numbers = [1,1,2,2,2,4,3,3,4];
// let unique = [...new Set(numbers)]
// console.log(unique) */

/*==================================== Question No 10 =========================================
new Set( )
======================================= Answer =====================================*/
// /* let set = new Set();
// set.add('apple');
// set.add('apple');
// set.add('banana');
// set.add('mango');
// set.add('grapes');
// console.log(set)

// /* set.forEach((item)=>{
//   console.log(item)
// }) */

//  /*  for(let item of set){
//     console.log(item)
//   } */

//     let arr = [...set];
//     for(let i = 0;i < arr.length;i++){
//       console.log(arr[i])
//     }

/*==================================== Question No 11 =========================================
convert an array to new set( )
======================================= Answer =====================================*/
/* let arr = [1,2,2,3,3,4,5,6];
 let myset = new Set(arr);
 console.log(myset)

 */


/*==================================== Question No 12 =========================================
Problem: soution by function
You are given a list (array) of numbers.
You need to find how many numbers are positive, how many are negative, and how many are zero.

Then, calculate the fraction (ratio) of each type in the list and print it.
Print the fractions with 6 decimal places.
======================================= Answer =====================================*/
// /* let array = [-4, 3, -9, 0, 4, 1];
// function ratioFinder(a){
//   let positive = [];
//   let negative = [];
//   let zero = [];
//   for(let item of a){
//    if(item > 0){positive.push(item)}
//    else if(item < 0){negative.push(item)}
//    else (zero.push(item))
//   }
// let positiveRatio = (positive.length / array.length).toFixed(6);
// let negativeRatio = (negative.length / array.length).toFixed(6);
// let zeroRatio = (zero.length / array.length).toFixed(6);
// /* console.log(positiveRatio);
// console.log(negativeRatio);
// console.log(zeroRatio) */
// return {positiveRatio,negativeRatio,zeroRatio}
  

// }

// let ans = ratioFinder(array);
// console.log(ans.positiveRatio);
// console.log(ans.negativeRatio);
// console.log(ans.zeroRatio)


/*==================================== Question No 13 =========================================
diagonal difference
======================================= Answer =====================================*/
/* let array = [
  [2,4,5],
  [4,1,6],
  [9,1,3]
]
function diagonal(arr){
  leftSide = 0;
  rightSide = 0;
  for(let i = 0 ;i < arr.length;i++){
    // console.log(arr[i])
    leftSide = leftSide + arr[i][i];
    console.log(leftSide)
    rightSide = rightSide + arr[i][arr.length-1-i];
    console.log(rightSide)
  }
let difference = Math.abs(leftSide - rightSide);
console.log(difference)
return difference

}
let ans =diagonal(array)
console.log(ans)
 */


/*==================================== Question No 14 =========================================
alice bob
======================================= Answer =====================================*/

/* let a = [3,2,5,6];
let b = [9,1,24,5];
function aliceBob(first,second){
  let alice = 0;
  let bob = 0;
  for(let i = 0;i < first.length;i++){
    if(first[i] > second[i]){
      alice++;
    }
    else if(first[i] < second[i]){
      bob++
    }
  }
  return [alice,bob]

}
let ans = aliceBob(a,b);
console.log(ans)
 */

/*==================================== Question No 15 =========================================
find missing number
======================================= Answer =====================================*/
/* let arr = [1,2,4,5,6,7,8];
let total = 0;
for(let i = 1;i<=8;i++){
    total = total + i;
    console.log(i)
}
console.log(total);
let sum = 0;
for(let j = 0;j < arr.length;j++)
{
    sum = sum + arr[j]
}

console.log(sum)
let missing = total - sum;
console.log(missing) */

/* let arr = [1,2,3,4,5,6,8,9,10];
let total = 0;
for(let i = 1 ;i <=10;i++){
  total = total + i
}
console.log(total);
let sum = 0;
for(let j = 0; j < arr.length;j++){
  sum = sum + arr[j]
}
console.log(sum);
let missing = total - sum;
console.log(missing) */

/*==================================== Question No 16 =========================================
unique array
======================================= Answer =====================================*/
/* let arr = [1,2,3,2,3,4,5,5,6];
let unique = [];
console.log(unique)
for(let item of arr){
  if(!unique.includes(item)){
    unique.push(item)
  }

}
console.log(unique) */

/*==================================== Question No 17 =========================================
flatten array
======================================= Answer =====================================*/
/* let arr = [1,2,[3,4],5,[6,7],8];
let result = [];
for(let i = 0;i < arr.length;i++){
    if(Array.isArray(arr[i])){
        for(let j = 0 ; j < arr[i].length;j++){
            result.push(arr[i][j])
        }
    }
    else{ result.push(arr[i])}
}

console.log(result)
 */


/* let arr = [1,2,[3,4],5,[6,7],8];
let result = [];
for(let i = 0; i < arr.length;i++){
  if(Array.isArray(arr[i])){
    for(let j = 0;j < arr[i].length;i++)
  }
else{}
} */


/*==================================== Question No 18 =========================================
the function that we pass another function as an argrment and receive by parameter and call in the block of 
receiver function
======================================= Answer =====================================*/
/* function greet(name,callback){
  console.log('hello ', name);
  callback();
}

function sayGoodbye(){
  console.log('Good bye')
}

greet('Mayank',sayGoodbye); */

/*==================================== Question No 19 =========================================
push() is array method that add one at the end of an array
push add one at the last of an array, it return us updated length of an array
======================================= Answer =====================================*/
/* let arr = ['apple','mango'];
console.log(arr, arr.length,typeof arr)
let ans = arr.push('guava');
console.log(arr,arr.length)

console.log(ans) */


/*==================================== Question No 20 =========================================
pop() removes last element of an array, pop removes us last deleted item
======================================= Answer =====================================*/
/* let name  = ['ali','ahmad','mubin'];
let ans = name.pop();
console.log(ans);
console.log(name)
 */

/*==================================== Question No 21 =========================================
foreach is an array method , by using it we can make any change of all the emlements of origional array.
======================================= Answer =====================================*/
/* let names = ['ali','mobin','haider']
// names.forEach((item,index)=>{
//   console.log(index + ' '+ item)
// })

for(let i = 0 ; i < names.length;i++){
  console.log(i + ' ' + names[i] + ' ' + 'khan');
  
} */

//  /*  let prices = [100, 200, 300];
//   /* prices.forEach(element => {
//    let a =  element + 10;
//    console.log(a)
    
//   });
//  */

// for(let i = 0; i < prices.length;i++){
//  let ans =  prices[i] + 10;
//    console.log(ans)
// } */


// let prices = [100, 200, 300];
// let result = [];   // declared outside

// for (let i = 0; i < prices.length; i++) {
//   let ans = prices[i] + 10;
//   result.push(ans);
// }

// console.log(result);


/* let prices = [100, 200, 300];
let ans = [];
prices.forEach((item)=>{
ans.push(item + 10)
})
console.log(ans) */
/*==================================== Question No 22 =========================================
map is array method by using it we can get a new array apply any change on the all elements of 
origional array
======================================= Answer =====================================*/
// const arr = [1,2,3,4,5];
// const modifyArray = arr.map((element)=>{return element * 2;})
// console.log(modifyArray)

/* let arr = [1,2,3,4,5];
let newArr = arr.map((item,index)=>{
  return item*5
})

console.log(newArr) */

/*==================================== Question No 23 =========================================
.sort() is used for ascending and descending order 
======================================= Answer =====================================*/
/* let name = ['abubakr','sabir','ishfaq'];
   name = name.sort();
   console.log(name)

let num = [1,112,4,412,5,];
   num = num.sort();
   console.log(num) */

/*==================================== Question No 24 =========================================
shift remove first of an array and return us removed item
======================================= Answer =====================================*/
/* let name = ['ali','haider','umer'];
  let ans = name.shift();
  console.log(name);
  console.log(ans)
 */



/*==================================== Question No 25 =========================================
we create a normal function and show some details now we create an obj and we call our function 
after function name we write call and in call prameter first we write object name and after comma than 
we write another parameter and we access our object property values in our function by this keyword and 

======================================= Answer =====================================*/
/* function details(city,designation){
  console.log(`My name is ${this.name} ,my age is ${this.age} and my city is ${city} an 
    my designaiton is ${designation}`)
}
const obj = { name : 'Aziz',
  age : 30
}
details.call(obj,'Karachi','developer') */

/*==================================== Question No 26 =========================================
apply 
call() and apply same only main difference is that in apply parameter first we write obj name and after comma 
we write another pramete inside []
======================================= Answer =====================================*/
/* function details(city,designaiton){
console.log(`My name is ${this.name},my age is ${this.age} and my city is ${city} and my designatio is ${designaiton} `)
}
const obj = { name:'Aziz',
  age : '30'
}
details.apply(obj,['karachi','developer'])
 */

/*==================================== Question No 27 =========================================
bind and call are same only main difference that call respose us immediately but 
we first save bind a variable and than call our variable
======================================= Answer =====================================*/
/* function details(city,age){
  console.log(`my name is ${this.name}, my city is ${city} and my age is ${age}`)
}

const obj = {name : 'aziz'}

let ans = details.bind(obj,'Karachi',30)
ans() */
/*==================================== Question No 28 =========================================
bulb on /off
======================================= Answer =====================================*/


// /* function bulbOnfunction() {
//   const bulb = document.getElementById('bulboffImg');
//   const heading = document.getElementById('heading');
//   const btn = document.getElementById('btn');
//  if(bulb.src.includes('off.jpeg')){
//   bulb.src = './assets/on.jpeg';
//   heading.innerHTML = 'bulb is now on';
//   btn.innerHTML = 'bulb off'
//  }
//  else{
//   bulb.src ='./assets/off.jpeg';
//   heading.innerHTML = 'bulb is now off';
//   btn.innerHTML = 'bulb on'
//  }
// } */



/*==================================== Question No 29 =========================================
onmouseover and onmouseout
======================================= Answer =====================================*/

/* function first(){
  let apple = document.getElementById('image');
  apple.src = "./assets/mango.jpeg"
  
  }
  function secnod(){
    let apple = document.getElementById('image');
    apple.src = "./assets/apple.jpeg"
  }

   */



/*==================================== Question No 30 =========================================
bulb on/off function
======================================= Answer =====================================*/

/* function onofffunction(){
  let getHeading = document.getElementById('heading');
  let getImg = document.getElementById('img');
  let getBtn = document.getElementById('btn');
  if(getImg.src.includes("off.jpeg")){
    getImg.src = "./assets/on.jpeg";
    getBtn.innerHtml = 'off';
    getHeading.innerHTML = 'Bulb is now On'
  }
  else{
    getImg.src = "./assets/off.jpeg";
    getBtn.innerHTML = 'on';
    getHeading.innerHTML = 'Bulb is now off'
  }
}

 */

/*==================================== Question No 31 =========================================
compare two arrays
======================================= Answer =====================================*/
/* let arrayOne = ['apple','mango','orange'];
let arrayTwo = ['apple','mango','orange'];
let isTrue = true;
for(let i = 0;i < arrayOne.length;i++){
  if(arrayOne[i] !== arrayTwo[i]){
    isTrue = false;
    break;
  }
}
if(isTrue){
  console.log('array elements are equal ')
}
else{
  console.log('array elements are not equal')
}
 */

/*==================================== Question No 32 =========================================
local storage, session storage and cookies
======================================= Answer =====================================*/
// localstroage
/* localStorage.setItem('name','Aziz')
localStorage.setItem('location','karachi');
localStorage.removeItem('location')
alert(localStorage.getItem('name'))
 */

// session storage 
/* sessionStorage.setItem('designation','developer');
sessionStorage.setItem('year',2022);
sessionStorage.removeItem('designation');
sessionStorage.clear();
console.log(sessionStorage.getItem('year'))
alert(sessionStorage.getItem('designation'))
 */




/*==================================== Question No 33 =========================================
map() 
map is an array method, it returns a new array , it does not modify origional array, by using map 
we can apply any change on the each element of an array
======================================= Answer =====================================*/
/* let arr = [1,2,3,4,5,6];
let newArr = arr.map((item,index)=>{
  return(item*3)
})
console.log(newArr) */

/* let arr = [1,2,3,4,5,6];
let result = [];
for(let i = 0;i < arr.length;i++){
  console.log(arr[i]*5);
  result.push(arr[i]*5)
}

console.log(result) */


/*==================================== Question No 34 =========================================
filter is a js array method , it does not modify origional array it give us new array that is 
consisted of items according to our condition,
======================================= Answer =====================================*/
/* const fruits = ['apple','mango','orange','mango','grapes','banana','mango'];
let result = fruits.filter((item)=>{
  return item === 'mango'
})
console.log(result) */


/* const fruits = ['apple','mango','orange','mango','grapes','banana','mango'];
let ans = [];
for(let i = 0;i < fruits.length;i++){
if(fruits[i] === 'mango'){
  ans.push(fruits[i])
}
}
console.log(ans) */

/*==================================== Question No 35 =========================================
reduce( );
======================================= Answer =====================================*/
/* let arr = [2,3,4];
let ans = arr.reduce((accumulate,current)=>{
  return accumulate + current;
},1)
console.log(ans) */

/*==================================== Question No 36 =========================================
getComputedStyle is a method and it bring all the css applied on html element in js and 
parseInt is also a method , if we have number string like '200px' it give us only number and removes text
======================================= Answer =====================================*/

/* let span = document.getElementById('span');

function increasefontsize(){
  let currentSize = window.getComputedStyle(span).fontSize;
  let fontSize = parseInt(currentSize);
  fontSize = fontSize + 2;
  span.style.fontSize = fontSize + 'px';
  console.log(fontSize,typeof fontSize)
  console.log(currentSize)
}



function decreasefontsize(){
  let currentSize = window.getComputedStyle(span).fontSize;
  let getSize = parseInt(currentSize);
      getSize = getSize - 2;
      getSize = getSize + 'px';
      span.style.fontSize = getSize;
} */

/*==================================== Question No 37 =========================================
bg color changer
======================================= Answer =====================================*/
/* let div = document.getElementById('div');
let heading = document.getElementById('heading');
function redColor(){
  div.style.background = 'red'
  heading.innerHTML = 'i am red'
}

function greenColor(){
  div.style.background = 'green';
  heading.innerHTML = 'i am green'
}

function pinkColor(){
  div.style.background = 'pink';
  heading.innerHTML = 'i am pink'
}

function blueColor(){
  div.style.background = 'blue';
  heading.innerHTML = 'i am blue'
}

function blackColor(){
  div.style.background = 'black';
  heading.innerHTML = 'i am black';
  heading.style.color = 'white'
}

function yellowColor(){
  div.style.background = 'yellow';
  heading.innerHTML = 'i am yellow';
  heading.style.color = 'red'
}

 */




/*==================================== Question No 38 =========================================
reduced
======================================= Answer =====================================*/
/* let array = [2,3,4,5]
let ans = array.reduce((prev,next)=>{
  return prev + next
},0)
console.log(ans)

let str = ['i','love','js'];
let result = str.reduce((prev,next)=>{
  return(prev + ' ' + next)
})
console.log(result) */

/* let obj = {item1 : 100,
  item2 : 200,
  item3 : 300
}
let ans = obj.reduce((item,index)=>{
  return 
}) */
/*==================================== Question No 39 =========================================
function declaration
======================================= Answer =====================================*/

/* greeting();
function greeting(){
  console.log('welcome')
} */


/*==================================== Question No 40 =========================================
function expression 
======================================= Answer =====================================*/
/* greeting()
let greeting = function(){
  console.log('expressiong  welcome',)
}
 */




/*==================================== Question No 41 =========================================
todo list
======================================= Answer =====================================*/
/* let todo = document.getElementById('todo-input');
let ul = document.getElementById('ul');
console.log(todo)
// clear function
function clearTodo(){
  todo.value = '';
}

// AddItem function
function AddItem(){
  let createLi = document.createElement('li');
  let createButton = document.createElement('button');
  let buttonText = document.createTextNode('Delete Item');

  // create attribute for delete button
 
  createButton.setAttribute('onclick','deleteItem()')
  createButton.appendChild(buttonText);
  let liText = document.createTextNode(todo.value);
  createLi.appendChild(liText);
  createLi.appendChild(createButton);
  ul.appendChild(createLi);
  clearTodo();
}

// delete item function 
function deleteItem(){
createLi.remove();
}
 */



/*==================================== Question No 42 =========================================
function return specific value
======================================= Answer =====================================*/
/* function checking(){
  return function(){
    return 'hello world'
  }
}
const ans = checking('good');
console.log(ans()) */




/*==================================== Question No 43 =========================================
function return one more every call 
======================================= Answer =====================================*/
/* function increment(n){
  return function(){
    return ++n
  }
  }

let ans = increment(10)

console.log(ans())
console.log(ans()) */


/*==================================== Question No 44 =========================================
vowel extractor and counter
======================================= Answer =====================================*/
/* let str = 'Java Script is fun';
    str = str.toLowerCase();
let vowel = [];
for(let i = 0; i < str.length;i++){
  console.log(str[i]);
  if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
    vowel.push(str[i])
  }
}
console.log(vowel);
let s = vowel.join('');
console.log(s.length)
console.log(s) */


/* let str = 'Java Script is fun';
    str = str.toLowerCase();
let vowel =0;
let vow = '';
for(let i = 0; i < str.length;i++){
  console.log(str[i]);
  if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
    vowel++;
    vow = vow + str[i]
  }
}
console.log(vowel);
console.log(vow) */

/*==================================== Question No 45 =========================================
const even odd
======================================= Answer =====================================*/
/* let num = [1,2,3,4,5];
let even = [];
let odd = [];
function checker(number){
  for(let i = 0;i < num.length; i++){
    if(num[i] % 2 == 0){
      even.push(num[i])
    }
    else{odd.push(num[i])}
  }

}
checker(num);
console.log(even);
console.log(odd) */



/*==================================== Question No 46 =========================================
first letter to uppercase 
======================================= Answer =====================================*/
/* let array = ["alice", "bob", "charlie"];
let ans = [];
function converter(){
  for(let i = 0;i<array.length;i++){
    ans.push( array[i].slice(0,1).toUpperCase() + array[i].slice(1).toLowerCase())
  }

}
converter(array);
console.log(ans) */

/*==================================== Question No 47 =========================================
count the existence of element
======================================= Answer =====================================*/

 let arr = ['a','b','a','a','c','d','e','e','f'];
let count = {};
arr.forEach((item)=>{
  if(count[item]){
    count[item] = count[item] + 1;
  }
  else{
    count[item] = 1
  }
})
console.log(count) 

/*==================================== Question No 48 =========================================
// flatten array
======================================= Answer =====================================*/
/* let arr = [1,2,[3,4],5,[6,7],8];
let result = [];
for(let i = 0;i < arr.length;i++){
    if(Array.isArray(arr[i])){
        for(let j = 0 ; j < arr[i].length;j++){
            result.push(arr[i][j])
        }
    }
    else{ result.push(arr[i])}
}

console.log(result) */

/* let arr = [1,2,[3,4],5,[6,7],8];
let result = [];
for(let i = 0; i < arr.length;i++){
  if(Array.isArray(arr[i])){
    for(j = 0; j < arr[i].length;j++){
      result.push(arr[i][j])
    }
  }
  else{result.push(arr[i])}
}

console.log(result) */

/*==================================== Question No 49 =========================================
promise is an object, it is use to handle asynchrounous task,it has three states, fullfilled,pending 
rejected, 
we pass an executor function in the promise parameter which takes two parameter, resolve reject, 
if promise succeeded resolve is run if promise failed reject is run, 
we call under promise and 
get promise result in .then and .catch , we pass a call back function in then parameter and pass success and console it, 

======================================= Answer =====================================*/
  
  /*      const learningPromise = new Promise((resolve,reject)=>{
    const userInput = prompt('enter any number');
    if(userInput % 2 === 0)resolve('promise resolved');
    else reject('promise rejected')
});
// console.log(learningPromise)
learningPromise
.then((success)=>{console.log('promise success : ',success)})
.catch((err)=>{console.log('promise err : ',err)}) */

/* const learningPromise = new Promise((resolve,reject)=>{
  const userInput = prompt('enter any number')
  if(userInput % 2 == 0){resolve('promise succeeded')
   
  }
  else{ reject('promise rejected')}
})
learningPromise
.then((success)=>{console.log('promise succeeded : ',success)})
.catch((error)=>{console.log('promise error : ',error)}) */


/*==================================== Question No 50 =========================================
try catch
======================================= Answer =====================================*/
/* try{
  console.log(a);
  var a = 2;
}
catch(error){
  console.log(error)
}
console.log(3+6) */

/* console.log(a);
console.log(3+4) */
/*==================================== Question No 51 =========================================
object 
is a data type used to store related data to a thing in key value pairs , for exampel person 
name,age,desigantion etc 
======================================= Answer =====================================*/
/* let obj = {
  name :'Azziz',
  age : 23,
  designation : 'developer'
} */

