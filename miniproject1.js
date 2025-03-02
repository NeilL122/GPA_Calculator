//arr = [ "A", "B", "C"];
function calculateGPA(arr) {
  // total sum of all the grades
  var total = 0;
  //number of items in the array
  var count = arr.length;

  // for loop checking each element in the array and check numeric value
  for (var i = 0; i < count; i++) {
    // if array at index i is equal to A, add 100 to total
    if (arr[i] === "A") {
      total += 100;
    } else if (arr[i] === "B") {
      total += 80;
    } else if (arr[i] === "C") {
      total += 70;
    } else if (arr[i] === "D") {
      total += 60;
    } else if (arr[i] === "F") {
      total += 50;
    } else {
      // if the value is not a letter grade, return "Invalid Grade"
      console.log("Invalid Grade, please enter a valid grade");
      return; //exit the function with no return value
    }
  }
  // calculate the average of the grades
  var averageNumericGPA = total / count;

  // convert averageNumericGPA to letter grade
  var finalGPA;
  if (averageNumericGPA >= 90) {
    finalGPA = "A";
  } else if (averageNumericGPA >= 80) {
    finalGPA = "B";
  } else if (averageNumericGPA >= 70) {
    finalGPA = "C";
  } else if (averageNumericGPA >= 60) {
    finalGPA = "D";
  } else {
    finalGPA = "F";
  }

  // use string contactenation to print the final GPA
  console.log("The average GPA is: " + finalGPA);
}

// call function with different grade arrays
calculateGPA(["A", "B", "C"]);

calculateGPA(["A", "A", "A"]);

calculateGPA(["A", "B", "D"]);
