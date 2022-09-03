const ReverseNumber = (n) =>{
  const convertedNum = n.toString();
  const reversedString = convertedNum.split("").reverse().join("");
  const reversedNumber = parseFloat(reversedString);
  
  if(n<0){
   let neg = -1* reversedNumber;
   console.log(neg);
  }else{
    console.log(reversedNumber);
  }
  
}
console.log(" Reversed number is: ");

ReverseNumber(-20.23);//-32.02
ReverseNumber(-20);//-2

