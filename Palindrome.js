const Palindrome = (str) =>{
  const reversedString = str.split("").reverse().join("");
  console.log(str === reversedString);
}
console.log("The input is a palindrome: ");
Palindrome("Apple");//return false
