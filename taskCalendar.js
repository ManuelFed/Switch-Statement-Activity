// Name: Manuel Federico D. Tudayan
// Activity: Perf2: Conditional Statements and Loops
// Data Structures and Algorithms

// SWITCH STATEMENT ACTIVITY:

// Display the choices that the user can choose to input.
console.log(
  "Choices: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
);

// Ask the user for a day of the week as input.
let week_day = prompt("Enter a day of the week: ");

// Switch Statement
// Checks if user inputs a day of the week, then displays a specific task for that day.
switch (week_day) {
  // If user input is "Monday", then displays "Your task for Monday is: Finish your assignments."
  case "Monday":
    console.log("Your task for Monday is: Finish your assignments.");
    break;
  // If user input is "Tuesday", then displays "Your task for Tuesday is: Clean your room."
  case "Tuesday":
    console.log("Your task for Tuesday is: Clean your room.");
    break;
  // If user input is "Wednesday", then displays "Your task for Wednesday is: Go to the gym."
  case "Wednesday":
    console.log("Your task for Wednesday is: Go to the gym.");
    break;
  // If user input is "Thursday", then displays "Your task for Thursday is: Buy groceries."
  case "Thursday":
    console.log("Your task for Thursday is: Buy groceries.");
    break;
  // If user input is "Friday", then displays "Your task for Friday is: Water the plants."
  case "Friday":
    console.log("Your task for Friday is: Water the plants.");
    break;
  // If user input is "Saturday", then displays "Your task for Saturday is: Relax and chill."
  case "Saturday":
    console.log("Your task for Saturday is: Relax and chill.");
    break;
  // If user input is "Sunday", then displays "Your task for Sunday is: Take a Rest."
  case "Sunday":
    console.log("Your task for Sunday is: Take a Rest.");
    break;
  // If user inputs does not match any of the choices, then display an error message.
  default:
    console.log("Invalid input, please try again.");
}
