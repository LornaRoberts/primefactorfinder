function prime(num){
    for (let i= num-1; i>0; i--){
      if (num % i === 0){
        //prints out largest prime factor first
        console.log(i);
        i-= 1;
      }
      
    }
    //if prime number, only the original number and 1 will print out
        console.log(num)
      }
    
   
    
    
    prime(15);
    
    