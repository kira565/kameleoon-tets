let arr = [];

for (let i = 0; i <= 100; i++){
    if (i%3 === 0){
        arr.push("A / B")
    } else if (i%5 === 0){
        arr.push("Testing")
    } else if (i%3 === 0 && i%5 === 0){
        arr.push("A/B Testing")
    } else {
        arr.push(i)
    }
}

function renderNumbers() {
   document.getElementById('numbers').innerHTML = arr;
}