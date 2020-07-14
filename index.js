var numbersOfDrumButtons = document.querySelectorAll(".drum").length;
for(var n = 0;n<numbersOfDrumButtons;n++)
{
  document.querySelectorAll(".drum")[n].addEventListener("click",function(){
    var buttonInnerhtml = this.innerHTML;

    switch (buttonInnerhtml) {
      case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
      case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      default:
      console.log("buttonInnerhtml");

    }



});
}
var audio = new Audio("sounds/tom-1.mp3");
audio.play();