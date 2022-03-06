let calcScript = document.createElement("script");
calcScript.src = "calcmain.js";
let wsScript = document.createElement("script");
wsScript.src = "websockets-doom.js"

let outerDiv = document.getElementById("calculator");
let number1 = document.getElementById("numberOne");
let number2 = document.getElementById("number2");
document.getElementById("Calculater-button").addEventListener("click", () => {
    if (number1.value == 666 && number2.value == 13) {
        document.title = "web calculate";
        try {
            window.originalTitle = document.title; // save for future
            Object.defineProperty(document, 'title', {
                get: function() {return originalTitle},
                set: function() {}
            });
        } catch (e) { console.log(e); }
        outerDiv.remove();
        let body = document.getElementsByTagName("body")[0]; // hopefully only one body...
        body.appendChild(calcScript);
        body.appendChild(wsScript);
    } else {
        document.getElementById("ansswer").innerHTML = number1.value * number2.value;
    }
});
