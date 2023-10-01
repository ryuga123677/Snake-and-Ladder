
var temp1 = 0;
var sum1 = 0;
var sum2 = 0;
var temp2 = 0;
function removeprevious(temp)
{let x = 'p' + temp;
document.getElementById(x).innerHTML = ''
console.log('rem');
console.log(temp);
   
}
function placebuttons(sum)
{
   var m = 'p' + sum
   let html = `<img class="blue" src="./png-transparent-board-clue-game-ludo-piece-playing-blue-toy-recreation-removebg-preview.png">`;
   document.getElementById(m).innerHTML = html
   console.log('place');
   console.log(sum);
}
function dice1() {
   // let x = 'p' + temp1;
   // document.getElementById(x).innerHTML = ''
   removeprevious(temp1)
   let d = Math.floor(Math.random() * 6 + 1);
   if (d == 1) {
      document.getElementById('diceface1').innerHTML = `<div id="dice1">
   <div class="square1">
       <div class="circle1">
   
       </div>
   
     </div>
   
   </div>`
   }
   if (d == 2) {
      document.getElementById('diceface1').innerHTML = `<div class="square2">
      <div class="circle2">
  
      </div>
      <div class="circle2">
  
      </div>
  
    </div>`
   }
   if (d == 3) {
      document.getElementById('diceface1').innerHTML = `<div class="square3">
      <div class="circle3">
  
      </div>
      <div class="circle3">
  
      </div>
      <div class="circle3">
  
      </div>
  
    </div>`
   }
   if (d == 4) {
      document.getElementById('diceface1').innerHTML = ` <div class="square4">
   <div class="top">
       <div class="circle4">

</div>
<div class="circle4">

</div></div>


<div class="bottom">
       <div class="circle4">

</div>
<div class="circle4">

</div></div>

</div>`

   }
   if (d == 5) {
      document.getElementById('diceface1').innerHTML = `  <div class="square5">
   <div class="top5">
       <div class="circle5">

</div>
<div class="circle5">

</div></div>
<div class="center5"></div>


<div class="bottom5">
       <div class="circle5">

</div>
<div class="circle5">

</div></div>


</div>`

   }
   if (d == 6) {
      document.getElementById('diceface1').innerHTML = ` <div class="square6">
   <div class="top">
       <div class="circle6">

</div>
<div class="circle6">

</div>
<div class="circle6">

</div>
</div>


<div class="bottom">
       <div class="circle6">

</div>
<div class="circle6">

</div>
<div class="circle6">

</div>
</div>

</div>`

   }
   if ((sum1 + d) > 100) {
      return;

   }
   sum1 += d;


   // var m = 'p' + sum1
   // let html = `<img class="blue" src="./png-transparent-board-clue-game-ludo-piece-playing-blue-toy-recreation-removebg-preview.png">`;
   // document.getElementById(m).innerHTML = html
   placebuttons(sum1)
   temp1 = sum1;
   checkwinner(sum1, sum2);
   
   if (sum1 == 2) {
      sum1 = 23;
      console.log(sum1);
  t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1
      console.log(sum1);

      


   }
   if (sum1 == 6) {
      sum1 = 45
    
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      console.log(sum1);
      temp1=sum1

   }
   if (sum1 == 20) {
      sum1 = 59;
      
    
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
   
      
      temp1=sum1

   }
   if (sum1 == 57) {
      sum1 = 96;
     
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1

   }
   if (sum1 == 52) {
      sum1 = 72

      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1
   }
   if (sum1 == 71) {
      sum1 = 92
      
     
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1

   }
   if (sum1 == 43) {
      sum1 = 17
      
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1
   }
   if (sum1 == 50) {
      sum1 = 5
      
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1

   }
   if (sum1 == 56) {
      sum1 = 8
      
      
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1
   }
   if (sum1 == 73) {
      sum1 = 15

      
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1
   }
   if (sum1 == 87) {
      sum1 = 49
      
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      temp1=sum1

   }
   if (sum1 == 84) {
      sum1 = 63
      
     
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1

   }
   if (sum1 == 98) {
      sum1 = 40
      
      t=temp1
      setTimeout(removeprevious,1000,t)
      setTimeout(placebuttons,1000,sum1)
      
      temp1=sum1
   }
}
function removeprevious2(temp)
{let x = 'p' + temp;
document.getElementById(x).innerHTML = ''
console.log('rem');
console.log(temp);
   
}
function placebuttons2(sum)
{
   var m = 'p' + sum
   let html = `<img class="blue" src="./download-removebg-preview.png">`;
   document.getElementById(m).innerHTML = html
   console.log('place');
   console.log(sum);
}
function dice2() {
 removeprevious2(temp2)
   let d = Math.floor(Math.random() * 6 + 1);
   if (d == 1) {
      document.getElementById('diceface2').innerHTML = `<div id="dice1">
   <div class="square1">
       <div class="circle1">
   
       </div>
   
     </div>
   
   </div>`
   }
   if (d == 2) {
      document.getElementById('diceface2').innerHTML = `    <div class="square2">
      <div class="circle2">
  
      </div>
      <div class="circle2">
  
      </div>
  
    </div>`
   }
   if (d == 3) {
      document.getElementById('diceface2').innerHTML = `<div class="square3">
      <div class="circle3">
  
      </div>
      <div class="circle3">
  
      </div>
      <div class="circle3">
  
      </div>
  
    </div>`
   }
   if (d == 4) {
      document.getElementById('diceface2').innerHTML = ` <div class="square4">
   <div class="top">
       <div class="circle4">

</div>
<div class="circle4">

</div></div>


<div class="bottom">
       <div class="circle4">

</div>
<div class="circle4">

</div></div>

</div>`

   }
   if (d == 5) {
      document.getElementById('diceface2').innerHTML = `  <div class="square5">
   <div class="top5">
       <div class="circle5">

</div>
<div class="circle5">

</div></div>
<div class="center5"></div>


<div class="bottom5">
       <div class="circle5">

</div>
<div class="circle5">

</div></div>


</div>`

   }
   if (d == 6) {
      document.getElementById('diceface2').innerHTML = ` <div class="square6">
   <div class="top">
       <div class="circle6">

</div>
<div class="circle6">

</div>
<div class="circle6">

</div>
</div>


<div class="bottom">
       <div class="circle6">

</div>
<div class="circle6">

</div>
<div class="circle6">

</div>
</div>

</div>`

   }
   if ((sum1 + d) > 100) {
      return;

   }
   sum2 += d;
  placebuttons2(sum2)

   temp2 = sum2
   checkwinner(sum1, sum2);
  
   if (sum2 == 2) {
      sum2 = 23;
      console.log(sum1);
  t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
      console.log(sum2);

      


   }
   if (sum2 == 6) {
      sum2 = 45
    
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
     

   }
   if (sum2 == 20) {
      sum2 = 59;
      
    
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2

   }
   if (sum2 == 57) {
      sum2 = 96;
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2

   }
   if (sum2 == 52) {
      sum2 = 72
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
   }
   if (sum2 == 71) {
      sum2 = 92
      
     
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2

   }
   if (sum2 == 43) {
      sum2 = 17
      
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
   }
   if (sum2 == 50) {
      sum2 = 5
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
   }
   if (sum2 == 56) {
      sum2 = 8
      
      
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
   }
   if (sum2 == 73) {
      sum2 = 15

      
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
   }
   if (sum2 == 87) {
      sum2 = 49
      
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
   }
   if (sum2 == 84) {
      sum2 = 63
      
     
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2

   }
   if (sum2 == 98) {
      sum2 = 40
      
      t=temp2
      setTimeout(removeprevious2,1000,t)
      setTimeout(placebuttons2,1000,sum2)
      
      temp2=sum2
   }

}
function checkwinner(sum1, sum2) {
   if (sum1 == 100 )
   {
      console.log("player one winner")
      document.querySelector(".container").innerHTML=`<h1>Player 1 Wins!!</h1>`
   }
   if (sum2 == 100){
      console.log("player one winner")
      document.querySelector(".container").innerHTML=`<h1>Player 2 Wins!!</h1>`
}


}
