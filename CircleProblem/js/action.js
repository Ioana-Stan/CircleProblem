

function greenEvent() {
    const green = document.getElementById("green");
    if(green.classList.contains("circle-green-move-back")){
        green.classList.remove("circle-green-move-back");
    }
    green.classList.add("circle-green-move");
    green.onclick = greenEventBack;
    
}

function greenEventBack() {
    green.classList.remove("circle-green-move");
    green.classList.add("circle-green-move-back");
    green.onclick = greenEvent;
}