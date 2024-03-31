function acceptNumbers (num1,num2) {
    // function that accepts two numbers, the first one is the start and the second one is the end 
    if (num2 >= num1) {
        // the first number should be greater than yhe second for the array to be generated between the two numbers
    result = []
    // an empty array is declared where the generated numbers will be added
    for (i=num1;i<=num2;i++) {
        // a for loop that generates numbers between the starter and the end
        result.push (i)
        //the generated numbers are added to the empty array
    
    } 
    return result }else
    // if the start is more than the end, the array will not be generated and the program returns the following statement to the use
return ("The first number should be less than the second number")}

