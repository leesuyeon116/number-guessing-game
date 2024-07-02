let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let userInput = document.querySelector("#user-input");
let resultText = document.querySelector(".result-text");
let resultAreaImg = document.querySelector(".main-img");
let chanceArea = document.getElementById("chance-area");
let answerNumberText = document.getElementById("answer-number");

let chances = 3; // 남은 기회
let gameOver = false;
let userValueList = []; // 유저가 입력한 숫자들 리스트

chanceArea.textContent = `남은 기회: ${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

// 게임 시작 시 정답 표시
pickRandomNumber();

function pickRandomNumber() {
    computerNumber = Math.floor(Math.random() * 100) + 1; // 1부터 100 사이의 랜덤 정수
    console.log("정답", computerNumber);
    answerNumberText.textContent = `정답: ${computerNumber}`;
}

function play() {
    // 숫자 추측하기
    let userValue = parseInt(userInput.value);
    if (userValue < 1 || userValue > 100 || isNaN(userValue)) { 
        resultText.textContent = "1부터 100까지를 숫자입력하세요.";
        return; // 함수 종료
    }

    if (userValueList.includes(userValue)) {
        resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요.";
        return;
    }

    chances--;
    userValueList.push(userValue);

    if (userValue < computerNumber) { // 만약에 userValue가 computerNumber보다 작으면
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnB6ODhnMTkwanFzYXpkM3BqeXRvOXljODhjaDUxZHBsZTI5cjdrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9Ie9mRoRs0w3C0/giphy.gif";
        resultText.textContent = "UP!";
    } else if (userValue > computerNumber) { // 만약에 userValue가 computerNumber보다 크면
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZ0amV1dGR0bmRqZXZkdDY0ZmQzNTJ1dXp6MHRxYmZ1a3Foa3N0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9QHP4ADiUoc4Ao/giphy.gif";
        resultText.textContent = "DOWN!";
    } else {
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenMwNGR3d2Y2Y2EweXZncmZucnA2cmdyaDVtdXE0aGZzdWptaDV3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YFis3URdQJ6qA/giphy.gif"
        resultText.textContent = "와우~정답!";
        gameOver = true;
    }

    chanceArea.textContent = `남은 기회: ${chances}`;

    if (chances === 0 || gameOver) {
        endGame();
    }
}

function focusInput() {
    userInput.value = "";
}

function reset() {
    // 리셋
    pickRandomNumber();
    userInput.value = "";
    resultAreaImg.src = "images/up&down.gif";
    resultText.textContent = "숫자를 맞추세요.";
    gameOver = false;
    playButton.disabled = false;
    chances = 3;
    chanceArea.textContent = `남은 기회: ${chances}`;
    userValueList = [];
}

function endGame() {
    playButton.disabled = true;
    answerNumberText.textContent = `정답은 ${computerNumber}였습니다.`;

    if (chances === 0) {
        resultAreaImg.src = "https://image.kmib.co.kr/online_image/2018/1126/611819110012870035_3.jpg";
    }
}
