function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

let randomNum = getRandomFloat(0, 100).toFixed(0);


function numberCheck() {
    let result = document.getElementById('result');
    let entire = document.getElementById('inp').value;
    
    if (entire < randomNum){
        result.innerHTML = "Too Low"
    } else if (entire > randomNum) {
        result.innerHTML = "Too high"
    } else if (entire === randomNum){
        result.innerHTML = "You found the number!"
    }
}