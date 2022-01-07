//var randomnumber1=Math.floor(Math.random()*6)+1;
//var randomdiceimage="dice"+randomnumber1+".png";
//var randomimagesource="images/"+randomdiceimage;
//var image1=document.querySelectorAll("img")[0];
//image1.setAttribute("src",randomimagesource);

//var randomnumber2=Math.floor(Math.random()*6)+1;
//var randomdiceimage="dice"+randomnumber2+".png";
//var randomimagesource="images/"+randomdiceimage;
//var image2=document.querySelectorAll("img")[1];
//image2.setAttribute("src",randomimagesource);
//if(randomnumber1>randomnumber2){
  //document.querySelector("h1").innerHTML="Player 1 wins!";

//}
//else if(randomnumber2>randomnumber1){
  //document.querySelector("h1").innerHTML="Player 2 wins!";


//}
//else{
  //document.querySelector("h1").innerHTML="Draw!";

//}
//function myFunction() {

var randomnumber=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber1+".png";
var randomimagesource="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

/*var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber2+".png";
var randomimagesource="images/"+randomdiceimage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource);*/


//}
/*var timeleft = 3;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
    var downloadTimer = setInterval(function(){
      var randomnumber1=Math.floor(Math.random()*6)+1;
      var randomdiceimage="dice"+randomnumber1+".png";
      var randomimagesource="images/"+randomdiceimage;
      var image1=document.querySelectorAll("img")[0];
      image1.setAttribute("src",randomimagesource);

      var randomnumber2=Math.floor(Math.random()*6)+1;
      var randomdiceimage="dice"+randomnumber2+".png";
      var randomimagesource="images/"+randomdiceimage;
      var image2=document.querySelectorAll("img")[1];
      image2.setAttribute("src",randomimagesource);*/
      //for buttons 1 to 6
    // for(var i=0;i<document.querySelectorAll(".button1").length;i++){
        document.querySelector(" .button1").addEventListener("click",handleClick);
        function handleClick(){
        if(randomnumber==1){
          console.log("wofoo");
        }

        }

    //  }
    document.querySelector(" .button2").addEventListener("click",handleClick);
    function handleClick(){
      alert("clicked");
    }
    document.querySelector(" .button3").addEventListener("click",handleClick);
    function handleClick(){
      alert("clicked");
    }
    document.querySelector(" .button4").addEventListener("click",handleClick);
    function handleClick(){
      alert("clicked");
    }
    document.querySelector(" .button5").addEventListener("click",handleClick);
    function handleClick(){
      alert("clicked");
    }
    document.querySelector(" .button6").addEventListener("click",handleClick);
    function handleClick(){
      alert("clicked");
    }
    // score adding
  /*  var score= 0;


    function score() {
      if(randomnumber1==)
        score= score+1;
        document.getElementById('wins').innerHTML= wins;
    };


  };*/
