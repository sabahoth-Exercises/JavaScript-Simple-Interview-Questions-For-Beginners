
const maxRepeatedChar = (str) =>{
  let obj = {};
  
  for(let char of str)
  (!obj[char])? obj[char]=1:obj[char]++;
  console.log(obj);
  
  let maxChar ='';
  let maxNum =0;
  
  for(let char in obj){
    if(obj[char] >= maxNum){
      maxNum = obj[char];
      maxChar = char;
    }
  }
  console.log(maxChar + " appears " + maxNum +" times" );
}

maxRepeatedChar('a15alja856a84a');
