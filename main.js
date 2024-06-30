let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let resultAreaImg = document.querySelector(".main-img");
let chances = 5; // 남은 기회
let gameOver = false;
let userValueList = []; // 유저가 입력한 숫자들 리스트

chanceArea.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1; // Math.random()함수 -> 0~1사이 숫자를 반환
    console.log("정답", computerNum);
}

function play() {
    // 숫자 추측하기
    let userValue = userInput.value;
    if(userValue < 1 || userValue > 100) { 
        resultArea.textContent = "1부터 100까지를 숫자입력";
        return; // 함수 종료
    }

    if(userValueList.includes(userValue)) { // 이미 입력한 숫자인 경우 에러 메시지 출력 후 함수 종료
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
        return;
    }

    chances -- ;
    chanceArea.innerHTML = `남은기회:${chances}`; // 텍스트가 아니라 변수 값이 들어옴
    userValueList.push(userValue);

    if(userValue < computerNum) { // 만약에 userValue가 computerNum보다 작으면
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnB6ODhnMTkwanFzYXpkM3BqeXRvOXljODhjaDUxZHBsZTI5cjdrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9Ie9mRoRs0w3C0/giphy.gif";
        resultArea.textContent = "UP!";

    } else if(userValue > computerNum) { // 만약에 userValue가 computerNum보다 크면
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZ0amV1dGR0bmRqZXZkdDY0ZmQzNTJ1dXp6MHRxYmZ1a3Foa3N0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9QHP4ADiUoc4Ao/giphy.gif";
        resultArea.textContent = "DOWN!";

    } else {
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenMwNGR3d2Y2Y2EweXZncmZucnA2cmdyaDVtdXE0aGZzdWptaDV3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YFis3URdQJ6qA/giphy.gif"
        resultArea.textContent = "정답입니다~";
        gameOver = true;
    }

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function focusInput() {
    userInput.value = "";
  }

// 리셋
function reset() {
    // user input창 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호 생성
    pickRandomNum();
    resultAreaImg.src = "images/up&down.gif";
    resultArea.textContent = "숫자를 맞추세요.";
    gameOver = false;
    playButton.disabled = false;
    chances = 7;
    chanceArea.innerHTML = `남은 기회:${chances}`;
    userValueList = [];
}

pickRandomNum();