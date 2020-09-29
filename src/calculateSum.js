function calculateSum(inputArr) {

  // let total = inputArr.reduce((curr,acc) => curr + acc,0)

  let total = 0

  for (let i = 0; i < inputArr.length; i++) {
    const element = inputArr[i];

    if (typeof(element) == "number") 
      total += element
    else
      throw("not all elements in array are integers")
    
  }

	return total;
	// Note that literally only the "reduce" part is about building the sum?
	// Everything else is about making sure our inputs are going to work!
}

// console.log(calculateSum([1,2,3,4,5]));

module.exports = {
  calculateSum
}