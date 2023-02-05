const clock = document.querySelector("h2#clock");

function getClock() {
  //date오브젝트는 호출당시의 현재날짜와시간을 알려준다
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //2글자가 아닐경우 앞에 0추가
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //백틱, ${}사용해 변수입력
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//사이트에 접속하자마자 시간을 바로 보여준다 없을경우 1초후에 생성됨
getClock();
//실행할 함수, 시간 //1초마다 getClock함수실행
setInterval(getClock, 1000);
