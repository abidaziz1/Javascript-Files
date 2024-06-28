const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1; console.log(position);

//The includes() Method Check if the fruit array contains "Mango"
console.log(fruits.includes("Mango"));

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction); 
function myFunction(value, index, array) {
    return value > 18;
  }
console.log(first);

const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log("The last temperature over 40 was in position "+pos);

//The sort() method sorts an array alphabetically
fruits.sort(); console.log(fruits);

//The reverse() method reverses the elements in an array
fruits.reverse(); console.log(fruits);

//The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted(); console.log(sorted);

//The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); console.log(points);
//for sort Numerically

//randomly sorting
points.sort(function(){return 0.5 - Math.random()});
console.log(points);

//by finding array ascending and descending, you can find min and max number of that array respectively
//You can use Math.min.apply(null, arr) to find the lowest number in an array
//You can use Math.max.apply to find the highest number in an array
