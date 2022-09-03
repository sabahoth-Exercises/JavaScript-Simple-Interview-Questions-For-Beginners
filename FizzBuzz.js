function fizzBuzz(){
  let n = 15;
  let i;
  
  for(i=0; i<=n; i++){
    if ((i%3 === 0) && (i%5 === 0)){
      console.log('fizzBuzz');
    }else if(i%5 === 0){
      console.log('buzz');
    }else if(i%3 === 0){
      console.log('fizz');
    }else{
      console.log(i);
    }
  }
}fizzBuzz();
