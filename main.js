let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1; // Math.random()함수 -> 0~1사이 숫자를 반환
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;
    if(userValue < computerNum) { // 만약에 userValue가 computerNum보다 작으면
        resultArea.textContent = "UP!";
    } else if(userValue > computerNum) { // 만약에 userValue가 computerNum보다 크면
        resultArea.textContent = "DOWN!";
    } else {
        resultArea.textContent = "정답입니다~";
    }
}
pickRandomNum();