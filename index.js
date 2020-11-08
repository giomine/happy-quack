var clickMe = document.querySelector("button");
clickMe.addEventListener("click", function(){
   var quack = new Audio("quack.mp3");
   quack.play();
});
