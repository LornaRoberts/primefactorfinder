function prime(num){
    for (let i=624797; i<num; i++){
      if (num % i === 0){
        console.log(i);
        i+= 1;
  
      }
    }
    
   }
    
    
    prime(489652784103);
    
    