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

chanceArea.innerHTML = `남은 기회: ${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
    computerNumber = Math.floor(Math.random() * 100) + 1; // Math.random()함수 -> 0~1사이 숫자를 반환
    console.log("정답", computerNumber);
    return computerNumber; // 선택된 정답 반환
}

// 정답 화면에 표시
answerNumberText.textContent = pickRandomNumber();

function play() {
    // 숫자 추측하기
    let userValue = parseInt(userInput.value);
    if(userValue < 1 || userValue > 100) { 
        resultText.textContent = "1부터 100까지를 숫자입력";
        return; // 함수 종료
    }

    if(userValueList.includes(userValue)) { // 이미 입력한 숫자인 경우 에러 메시지 출력 후 함수 종resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
        resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
        return;
    }

    chances--;
    userValueList.push(userValue);

    if(userValue < computerNumber) { // 만약에 userValue가 computerNumber보다 작으면
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnB6ODhnMTkwanFzYXpkM3BqeXRvOXljODhjaDUxZHBsZTI5cjdrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9Ie9mRoRs0w3C0/giphy.gif";
        resultText.textContent = "UP!";

    } else if(userValue > computerNumber) { // 만약에 userValue가 computerNumber보다 크면
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZ0amV1dGR0bmRqZXZkdDY0ZmQzNTJ1dXp6MHRxYmZ1a3Foa3N0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9QHP4ADiUoc4Ao/giphy.gif";
        resultText.textContent = "DOWN!";

    } else {
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenMwNGR3d2Y2Y2EweXZncmZucnA2cmdyaDVtdXE0aGZzdWptaDV3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YFis3URdQJ6qA/giphy.gif"
        resultText.textContent = "와우~정답!";
        gameOver = true;
    }

    chanceArea.textContent = `남은기회:${chances}`; 

    if(gameOver) {
        playButton.disabled = true;
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenMwNGR3d2Y2Y2EweXZncmZucnA2cmdyaDVtdXE0aGZzdWptaDV3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YFis3URdQJ6qA/giphy.gif";
        resultText.textContent = "정답입니다~";
    }

    if(chances === 0) {
        gameOver = true;
        answerNumberText.textContent = computerNumber;
        resultAreaImg.src = "https://image.kmib.co.kr/online_image/2018/1126/611819110012870035_3.jpg";
        resultText.textContent = `끝! 정답은 ${computerNumber}였습니다.`;
        playButton.disabled = true;
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
    chanceArea.innerHTML = `남은 기회:${chances}`;
    userValueList = [];
    answerNumberText.textContent = computerNumber; // 초기화 시 정답을 화면에 표시
}

pickRandomNumber();