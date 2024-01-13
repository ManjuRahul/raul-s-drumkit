    var array = document.querySelectorAll(".drum");

    for (var i=0; i<array.length; i++){

        document.querySelectorAll("button")[i].addEventListener("click", function () {

            var buttonText = this.textContent;
                
            switch (buttonText) {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    return tom1.play();
                    break;

                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    return tom2.play();
                    break;

                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    return tom3.play();
                    break;
            
                case "d":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    return tom3.play();
                    break;

                    case "j":
                    var tom3 = new Audio("sounds/crash.mp3");
                    return tom3.play();
                    break;

                    case "k":
                    var tom3 = new Audio("sounds/kick-bass.mp3");
                    return tom3.play();
                    break;

                    case "l":
                    var tom3 = new Audio("sounds/snare.mp3");
                    return tom3.play();
                    break;

                    default:
                        console.log(buttonText)
                    break;
            }

            });

}

// var audio = new Audio("sounds/tom-1.mp3");
// return audio.play();