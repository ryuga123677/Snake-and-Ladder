
var temp1 = 0;
var sum1 = 1;
var sum2 = 1;
var temp2 = 0;
var cnt1=0;
var cnt2=0;
var toggle = false;
let blue_piece = `<img class="blue" src="./png-transparent-board-clue-game-ludo-piece-playing-blue-toy-recreation-removebg-preview.png">`;
let red_piece = `<img class="red" src="./2560458f4e5d25925e4440ae290fff054dbb31.png">`;
document.getElementById("forred").innerHTML = red_piece;
document.getElementById("forblue").innerHTML = blue_piece;
function removeprevious(temp) {
  let x = "p" + temp;
  document.getElementById(x).innerHTML = "";
  console.log("rem");
  console.log(temp);
}
function placebuttons(sum) {
  var m = "p" + sum;
  let html = `<img class="blue" src="./png-transparent-board-clue-game-ludo-piece-playing-blue-toy-recreation-removebg-preview.png">`;
  document.getElementById(m).innerHTML = html;
  console.log("place");
  console.log(sum);
}

function dice1() {
  // let x = 'p' + temp1;

  if (toggle == false) {
    document.getElementById("info").innerHTML = "Player 2 turn";

    let d = Math.floor(Math.random() * 6 + 1);
    if (d == 1) {
      document.getElementById("diceface1").innerHTML = `<div id="dice1">
   <div class="square1">
       <div class="circle1">
   
       </div>
   
     </div>
   
   </div>`;
    }
    if (d == 2) {
      document.getElementById("diceface1").innerHTML = `<div class="square2">
      <div class="circle2">
  
      </div>
      <div class="circle2">
  
      </div>
  
    </div>`;
    }
    if (d == 3) {
      document.getElementById("diceface1").innerHTML = `<div class="square3">
      <div class="circle3">
  
      </div>
      <div class="circle3">
  
      </div>
      <div class="circle3">
  
      </div>
  
    </div>`;
    }
    if (d == 4) {
      document.getElementById("diceface1").innerHTML = ` <div class="square4">
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

</div>`;
    }
    if (d == 5) {
      document.getElementById("diceface1").innerHTML = `  <div class="square5">
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


</div>`;
    }
    if (d == 6) {
      document.getElementById("diceface1").innerHTML = ` <div class="square6">
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

</div>`;
    }
    if (sum1 + d > 100) {
      toggle = true;
      return;
    }
     removeprevious(temp1);
    sum1 += d;
    cnt1++;
    var bluelement= document.getElementById("forblue");
    if(sum1!=1)
      {if(bluelement!=null)
      bluelement.innerHTML = '';
      }
      else{
         bluelement.innerHTML = blue_piece;
   
      }

    for (let i = temp1; i < sum1; i++) {
      (function(i) {
        setTimeout(function() {
          placebuttons(i + 1);
    
          if (i < sum1 - 1) {
            setTimeout(function() {
              removeprevious(i + 1);
              placebuttons2(temp2);
              
            }, 600);
          } else if (i === sum1 - 1 && sum1 === 6) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 45;
              temp1 = 45;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 20) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 59;
              temp1 = 59;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 57) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 96;
              temp1 = 96;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 52) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 72;
              temp1 = 72;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 71) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 92;
              temp1 = 92;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 43) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 17;
              temp1 = 17;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 50) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 5;
              temp1 = 5;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 56) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 8;
              temp1 = 8;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 73) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 15;
              temp1 = 15;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 87) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 49;
              temp1 = 49;
             placebuttons(sum1);

            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 84) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 63;
              temp1 = 63;
             placebuttons(sum1);
            }, 600);
          }
          else if (i === sum1 - 1 && sum1 === 98) {
            setTimeout(function() {
            
              removeprevious(i+1);
              sum1 = 40;
              temp1 = 40;
             placebuttons(sum1);
            }, 600);
          }
          toggle=true;
        }, 600 * (i - temp1));
      })(i);
    }
    
    temp1 = sum1;
    checkwinner(sum1, sum2);
    placebuttons2(temp2);

    if (sum1 == 2) {
      sum1 = 23;
      t = temp1;
      setTimeout(removeprevious, 1000, t);
      setTimeout(placebuttons, 1000, sum1);

      temp1 = sum1;
    }
    
}}

function removeprevious2(temp) {
  let x = "p" + temp;

  document.getElementById(x).innerHTML = "";
  
}
function placebuttons2(sum) {
  var m = "p" + sum;
  let html = `<img class="red" src="./2560458f4e5d25925e4440ae290fff054dbb31.png">`;
  document.getElementById(m).innerHTML = html;
  console.log(sum);
}
function dice2() {
  if (toggle == true) {
    document.getElementById("info").innerHTML = "Player 1 turn";

    let d = Math.floor(Math.random() * 6 + 1);
    if (d == 1) {
      document.getElementById("diceface2").innerHTML = `<div id="dice1">
   <div class="square1">
       <div class="circle1">
   
       </div>
   
     </div>
   
   </div>`;
    }
    if (d == 2) {
      document.getElementById(
        "diceface2"
      ).innerHTML = `    <div class="square2">
      <div class="circle2">
  
      </div>
      <div class="circle2">
  
      </div>
  
    </div>`;
    }
    if (d == 3) {
      document.getElementById("diceface2").innerHTML = `<div class="square3">
      <div class="circle3">
  
      </div>
      <div class="circle3">
  
      </div>
      <div class="circle3">
  
      </div>
  
    </div>`;
    }
    if (d == 4) {
      document.getElementById("diceface2").innerHTML = ` <div class="square4">
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

</div>`;
    }
    if (d == 5) {
      document.getElementById("diceface2").innerHTML = `  <div class="square5">
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


</div>`;
    }
    if (d == 6) {
      document.getElementById("diceface2").innerHTML = ` <div class="square6">
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

</div>`;
    }
    if (sum2 + d > 100) {
      toggle = false;
      return;
    }
    removeprevious2(temp2);

    sum2 += d;
    
    for (let i = temp2; i < sum2; i++) {
      (function(i) {
        setTimeout(function() {
          placebuttons2(i + 1);
    
          if (i < sum2 - 1) {
            setTimeout(function() {
              removeprevious2(i + 1);
              placebuttons(temp1);
              
            }, 600);
          } else if (i === sum2 - 1 && sum2 === 6) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 45;
              temp2 = 45;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 20) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 59;
              temp2 = 59;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 57) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2= 96;
              temp2 = 96;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 52) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 72;
              temp2 = 72;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 71) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 92;
              temp2 = 92;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 43) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 17;
              temp2= 17;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 50) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 5;
              temp2 = 5;
             placebuttons2(sum2);
            
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 56) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 8;
              temp2 = 8;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2- 1 && sum2 === 73) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 15;
              temp2 = 15;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 87) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 49;
              temp2 = 49;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 84) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 63;
              temp2 = 63;
             placebuttons2(sum2);
            }, 600);
          }
          else if (i === sum2 - 1 && sum2 === 98) {
            setTimeout(function() {
            
              removeprevious2(i+1);
              sum2 = 40;
              temp2 = 40;
             placebuttons2(sum2);
            }, 600);
          }
          
            toggle=false;
          
        }, 600 * (i - temp2));
      })(i);
    }

    temp2 = sum2;
    checkwinner(sum1, sum2);

  
    var redelement=document.getElementById("forred");
    if(sum2!=1)
      {if(redelement!=null)
      redelement.innerHTML = '';
      }
      else{
         document.getElementById("forred").innerHTML = red_piece;
   
      }
    if (sum2 == 2) {
      sum2 = 23;
      console.log(sum1);
      t = temp2;
      setTimeout(removeprevious2, 1000, t);
      setTimeout(placebuttons2, 1000, sum2);

      temp2 = sum2;
      console.log(sum2);
    }
   

  }

}

function checkwinner(sum1, sum2) {
  if (sum1 == 100) {
    console.log("player one winner");
    document.querySelector(".container").innerHTML = `<h1>Player 1 Wins!!</h1>`;
  }
  if (sum2 == 100) {
    console.log("player one winner");
    document.querySelector(".container").innerHTML = `<h1>Player 2 Wins!!</h1>`;
  }
}