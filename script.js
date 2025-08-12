let title = document.querySelector("#main_title");
let title_input = document.getElementById("title_input");

let noun_input = document.getElementById("noun");
let verb_input = document.getElementById("verb");
let adj_input = document.getElementById("adjective");

let submit = document.querySelector("button");

let body = document.querySelector("body");
let result = document.createElement("p");

let adlibTitles = document.querySelectorAll(".adlib label");

let firstPart = "Last night I ate a ";
let secondPart = ", and today I just had had to ";
let thirdPart = " What a ";
let fourthPart = " day!";

title_input.oninput = function(){
    title.innerHTML = title_input.value;
}

submit.onclick = function(event){
    event.preventDefault();
    let nounMsg = noun_input.value;
    let verbMsg = verb_input.value;
    let adjMsg = adj_input.value;

    firstPart = firstPart + nounMsg;
    secondPart = secondPart + verbMsg + ".";
    thirdPart = thirdPart + adjMsg;

    if (title_input.value.length == 0 ||
        noun_input.value.length == 0 ||
        verb_input.value.length == 0 ||
        adj_input.value.length == 0
    ){
        alert("Please fill in all fields!");
    }
    else{
        result.innerHTML = firstPart;
        result.innerHTML += secondPart;
        result.innerHTML += thirdPart;
        result.innerHTML += fourthPart;
        body.appendChild(result);

        console.log(result);

        submit.remove();
        title_input.remove();
        noun_input.remove();
        verb_input.remove();
        adj_input.remove();

        adlibTitles.style.display = "none";
    }
}