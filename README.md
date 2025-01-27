# Improper Handling of Null and Falsy Values in JavaScript

This repository demonstrates a common error in JavaScript: improper handling of null and other falsy values. The `bug.js` file contains a function that handles null values correctly but does not consider other falsy values. The `bugSolution.js` file provides a corrected version that addresses this issue.

## Description

The `foo` function in `bug.js` adds two numbers. While it correctly handles null inputs, it does not account for cases where the inputs are other falsy values such as 0, false, or "".  This can lead to unexpected behavior and potential errors.

## Solution

The `bugSolution.js` file provides a refined version of the function. It explicitly checks for both null and undefined values, ensuring that the addition operation is only performed when both inputs are numbers. 

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (e.g., browser's console, Node.js). 
3. Execute the functions with different inputs to observe the behavior of each version.