const min = parseInt(prompt("შეიყვანეთ მინიმალური"))
const max = parseInt(prompt("შეიყვანეთ მაქსიმალური"))
let y = Math.floor(Math.random() * (max - min) ) + min;
console.log(y)

let Try = 1;

document.getElementById("submitguess").onclick = function () {

    let x = document.getElementById("guessField").value;

    if (x == y) {
        alert("შენ მართალი ხარ " + "\n შენ გამოიყენე "
            + Try + " მცდელობა" );
    }
    else if (x > y) {
        Try++;
        alert("სცადეთ დაბალი ციფრი");
    }
    else {
        Try++;
        alert("სცადეთ მაღალი ციფრი")
    }
}