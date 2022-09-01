/**
 * IndexOf: you should be able to determine the location of an item in an array
 * Example: 
 * arr = [1,2,3,5,6]
 * calling the function like 
 * indexoff(arr, 3); should return the index 2
 */
function indexOf(arr, item) {
  return arr.indexOf(item) ;
}


function sum(arr) {
  let s=0;
  for (let i=0; i <arr.length; i+= 1){
    s += arr[i];
  }
  return s ;
}


function filterOut(arr, item) {
  const result = arr.filter(function(x){
    return x !==item;
  });
  return result;
}

function append(arr, item) {
arr.push(item);
return arr;
}



function truncate(arr) {
  arr.splice(-1,1);
  return arr;
  
}


function concat(arr1, arr2) {
  const combine=arr1.concat(arr2);
  return combine ;
}


function insert(arr, item, index) {
arr.splice(index,0,item);
  return arr;
}


// Example: [1,2,4,5] => [1,4,16,25]
function square(arr) {
  let result=arr.map(x=> x** 2);
  return result;
}

module.exports = {
  indexOf,
  sum,
  filterOut,
  append,
  truncate,
  concat,
  insert,
  square
};