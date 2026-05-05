                                                         // Fundamental of JavaScript:
// arrays and objects
//functions return
// async js coding
// foreach map filter find indexOf

// var arr = [1, 2, "hi", true, function () {}, [1, 2, 3], { name: "anasyousaf" }];
var arr = [1, 2, 3, 4, 5];
                                                       // forEach
// forEach is a method that executes a provided function once for each array element. It does not return a new array, but it can be used to perform side effects on each element of the array.
arr.forEach(function (val) {
  console.log(val + "Hello");
});
                              
                                                        // map

// map returns new array of the same length as the original array, with the results of calling a provided function on every element in the calling array.
// when see a map method we know that it will make a new array with the same length as the original array
//  and it will apply the function to each element of the array and return the new array.
var maparr = arr.map(function (val) {
  return val;
});

console.log(maparr);

                                                       // filter
// filter returns a new array with all elements that pass the test implemented by the provided function. 
// It does not modify the original array, but it can be used to create a new array with only the elements that meet certain criteria.

const filteredArr = arr.filter(function (val) {
    if(val>3){
        return true;
    }

});
console.log(filteredArr);

                                                        // find
// find is the way of searching element and it will only gives the one it get first

var findarr=arr.find(function(val){
    if(val===2){
        return val;
    }

});
console.log(findarr);

                                                        // indexOf
// indexOf find the index of the value,we give in paramters
// arrary.indexOf(value we want to find the index of,
// why we are finding the index of that particular array because in backend,we something have to check whether this particular user is in my database or not)

console.log(arr.indexOf(12)); // if true it will pass the array index otherwise if not,it will return -1


                                                       // Object
//Object if a key has a value then it is called as object
// object is a collection of key value pair
// object is a non-primitive data type
// object is a reference data type
// object is a mutable data type                                                     

var obj={
    name:"Anas Yousaf",
    age:12
}
// accessing the value of the object
console.log(obj.name); // dot notation
console.log(obj["name"]); // bracket notation

obj.freeze(obj); // we can freeze the object so that we cannot change the value of the object
obj.name="Anas Yousaf Khan"; // we can change the value of the object


                                                      // function return
// function return is a way of returning a value from a function
// when we want to return a value from a function we use return keyword
// function is object in JavaScript and it can have properties and methods

function add(a, b) {
  return a + b;
}

var sum = add(2, 3);
console.log(sum); // 5

                                                        //Functions length
// length is a property of the function that returns the number of parameters the function expects

function add(a, b) {
  return a + b;
}

console.log(add.length); // 2

                                                        // async js coding
// line by line code chale isey kahte hain synchronous code
// jo bhi code  async nature ka ho,usey side stack mein bhej do 
// and agle code ko chaalo jo bhi sync nature ka ho , 
// jab bhi saara synx code chal jaaye,tab check karo ki async code complete hua ye nhi 
// and agar wo complete hua ho tu usey  stack mein laao and and chalao

async function abcd(){
    var blob=await fetch(`https://randomuser.me/api/`) // fetch is async function  by nature and it will return a promise
    var asyncblob=await blob.json();
    console.log(asyncblob);



}

abcd();