const texts = [
    "Diploma Student",
    "AI & ML Engineer",
    "Python Developer",
    "Web Developer",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            let erase = setInterval(() => {

                letter = letter.slice(0,-1);

                document.getElementById("typing").textContent = letter;

                if(letter.length === 0){

                    clearInterval(erase);

                    count++;

                    index = 0;

                    type();

                }

            },60);

        },1200);

        return;

    }

    setTimeout(type,120);

})();