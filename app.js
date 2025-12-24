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

======================================= Answer =====================================*/

function first(){
  let apple = document.getElementById('image');
  apple.src = "./assets/mango.jpeg"
  
  }
  function secnod(){
    let apple = document.getElementById('image');
    apple.src = "./assets/apple.jpeg"
  }

  



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*/


/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*/

/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*/