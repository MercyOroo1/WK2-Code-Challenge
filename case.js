function stringSwap (string) {
  // this function accepts a string as an arguement
 let stringArray = string.split("").map (checkCase)
 // turns the string into an array of letters. The map method cycles through each letter of the array and modifies it according to the callback function.
 let newString = stringArray.join ("")
 // the array is converted back into a string 
 return newString
 // the function returns the new string
}
// this is the callback function 
function checkCase (letter) {
  // this function takes a single letter as an argument
    if (letter === letter.toUpperCase()) {
      // if the letter is in uppercase it is changed to lowercase
       let letter2 = letter.toLowerCase()
return letter2
    }else {
      let  letter2 = letter.toUpperCase()
      //  if the letter is in lowercase it is changed to uppercase
      return letter2
    }
   
}

 