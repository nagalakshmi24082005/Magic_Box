var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=20;
let boxcount=0;

document.getElementById('btn').addEventListener('click',function(){
   var guess= parseInt(document.getElementById('guessInput').value);
   attempts++;
   for(i=0;i<5;i++){
   if(guess===randomNumber){
      boxcount++;
      lock.src='open box.jpg';
   //display("Congradulations you guess the number in "+attempts+"attempts");
     display("Congradulations you opened box "+boxcount);
 randomNumber=Math.floor(Math.random()*100)+1;
 attempts =10;
 setTimeout(()=>{
     lock.src='closed box.jpg';
     display("Guess the number to open Box"+boxcount+1);
     document.getElementById('guessInput').value='';
 },5000);
  if(boxcount == 5){
   display("Congradulations! you won the game!");
   document.getElementById('btn').disabled=true;
   document.getElementById('guessInput').disabled=true;
  }
   }
   else if(guess<randomNumber){
    display('Number is too low try a higher Number');
  
   }
   else{
    display('Number is too high try a Lower Number');
   }
   }
   attempts--;
   if(attempts==0){
      display('Game Over! Try Again')
   }
});
 
function display(msg){
    document.getElementById('msg').textContent=msg;

}