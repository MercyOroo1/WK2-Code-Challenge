function primeArray (numsArray) {
    // this function takes in an array of numbers as an argument 
   newArray = numsArray.filter(checkPrimeNums)
   // .filter method cycles through the array of numbers and picks out the numbers that satisfy the
   // conditions of the callback function called checkPrimeNums
    return newArray
    // function returns the new array of numbers with the numbers that satisfy the conditions in the callback function
}
function checkPrimeNums (num) { {
    // this function checks whether a number is a prime number
    if (num>1){
        // the number has to be greater than one since one is not a prime number 
    for ( i = 2; i <= Math.sqrt(num); i++) {
        // the divisibility of the number is checked iteratively
        if (num % i === 0) {
            // if a number is divisible by another number other than 1 and itself the it is not a prime number hence the function returns false
            
            return false
        }
    }
    //  if a number has no other number that is divisible by it then the function returns t
     return true
}}
}

