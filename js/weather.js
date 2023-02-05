//날씨
//user의 위치(geolocation)

//API KEY https://home.openweathermap.org/api_keys에서 가입후 myAPI키입력
const API_KEY = "8e76163c4b8cf7496432314143d4a65d";

//위치를 잘 불러왔을 때
function onGeoOk(position) {
  //위도 얻기
  const lat = position.coords.latitude;
  //경도 얻기
  const lon = position.coords.longitude;
  console.log("You live in", lat, log);
  //weatherapi에서 나오는주소와 lay,lon apikey입력
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      //console.log(data.name) //해당지역이름출력됨
      city.innerText = data.name;
      //날씨와 온도
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
//error가 생겼을 때
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
//위지를 불러오는데 성공하면 ONgeok, 아닐경우 error실행
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
