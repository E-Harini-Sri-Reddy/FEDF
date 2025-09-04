let numbers = [1,2,3,4];
console.log("Initial array:", numbers);

// Adding elements : to the end of array
numbers.push(5, 6);
console.log("Adding elements to array using push:", numbers);

// Adding elements : to the beginning of array
numbers.unshift(-1, 0);
numbers.unshift('a', 'b'); // JS can hold heterogeneous data in array
console.log("Adding elements using unshift:", numbers);

// Adding elements : to the middle of the array
numbers.splice(2, 0, 'c', 'd'); // 2nd parameter if we give as zero, it means we are not deleting anything.
// If we give a value 'n' at 2nd parameter, we are deleting 'n' elements
// 3rd parameter onwards, we start adding content
console.log("Using splice to add:", numbers);

numbers.splice(0, 4); // Deleting using splice
console.log("Using splice to delete only:", numbers);

numbers.splice(9, 2, 7, 8)
console.log("Using splice to delete and add:", numbers);

// Finding elements using indexOf
console.log("Index location of 4:", numbers.indexOf(4)); // return only the 1st index of where value is found

numbers.push(2, 2, 3);
console.log("Added some more elements using push:", numbers);
console.log("Last Index location of 2:", numbers.lastIndexOf(2));

console.log("Array includes 12?", numbers.includes(12));
console.log("Array includes 5?", numbers.includes(5));

console.log("Popped number:", numbers.pop());
console.log("Array after popping number:", numbers);

console.log("Using shift, first element of array is popped: ", numbers.shift()); // First value of array is popped

// Case 1:
// numbers = []; // Deleting all elements at a time
// console.log("All elements are deleted by assigning empty array:", numbers)

// Case 2:
// numbers.length = 0
// console.log("All elements deleted by assigning length = 0", numbers);

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = arr1.concat(arr2);
console.log("Combining 2 arrays using concat():", arr3);

let slice = arr3.slice(2, 4);
console.log("Slicing an array using slice(): ", slice);

let arr4 = [5, 2, 8, 9, 1, 6, 0]
console.log("Array 4 Initially:", arr4);
console.log("Sorting Array 4 using sort():", arr4.sort());

console.log("Reversing an array using reverse():", arr4.reverse());

let arr = [-5, 8, 6, 4, -2, -9, -1, 10]
console.log("Using filter function", arr.filter((n) => n > 0));

// console.log(arr.filter(function(n) {
//   return n > 0;
// }));

let array1 = [2, 5, 28, 22, 21, 10, 30];
let array2 = [3, 22, 10, 15, 5, 25];

console.log("Finding common elements in 2 arrays using includes", array1.filter((n) => array2.includes(n)));