//image array 실제 이미지 파일과 같은 이름으로 작성한다
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//img태그의 src속성
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
