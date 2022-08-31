
function reverseString(str) {
  
  var splitString=str.split("");
  var reverseArray=splitString.reverse();
  var joinArray=reverseArray.join("");
  return joinArray;
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  const capitalizeString=str.toUpperCase()
return capitalizeString;
  
}

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {
  const arrayOfString=str.split(splitAt)
  return arrayOfString ;
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};