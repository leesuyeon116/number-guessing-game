let computerNum = 0;

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100); // Math.random()함수 -> 0~1사이 숫자를 반환
    console.log("정답", computerNum);
}

pickRandomNum();