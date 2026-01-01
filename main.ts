/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-30
 * @fileoverview this program calculates the total of every even number from 1 to the integer given by the user.
 */

//variables
const int = Number(prompt("Enter a positive integer:"));
let total = 0;
let count = 1;
//do while loop
do {
  if (count % 2 === 0) {
    total += count;
  }
  count++;
} while (count <= int);
//output
console.log(`The sum of even numbers from 1 to ${int} is: ${total}`);

console.log("\nDone");