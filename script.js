//function factorialIterative(n) {
   // if (n < 0) {
      //  return "Factorial > 0";
    //}
   // let result = 1;
    //for (let i = 1; i <= n; i++) {
   //     result *= i;
    //}
    //return result;
//}
//const number = parseInt(prompt("Enter a number:"));
//consle.log(`The factorial of ${number} (using a loop) is: ${factorialIterative(number)}`);


//function factorialRecursive(n) {
  //  if (n < 0) {
    //    return "Factorial > 0";
    //}
    //if (n === 0 || n === 1) {
     //   return 1;
    //}
    //return n * factorialRecursive(n - 1);
//}
//const number1 = parseInt(prompt("Enter a number:"));
//console.log(`The factorial of ${number1} (using recursion) is: ${factorialRecursive(number1)}`);
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return '${year} is not a leap year.';
        }
        return '${year} is a leap year.';
    }
    return' ${year} is not a leap year.';
}
const year = 2005; 
console.log(isLeapYear(year));


function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
    if (str.length <= 1) return true; 
    if (str[0] !== str[str.length - 1]) return false; 
    return isPalindrome(str.slice(1, -1)); 
}

const word = "A man, a plan, a canal, Panama"; 
console.log(Is "${word}" a palindrome? ${isPalindrome(word)});


function fibonacci(n) {
    if (n <= 1) return n; 
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

const n = 8; 
console.log(The ${n}th Fibonacci number is: ${fibonacci(n)});