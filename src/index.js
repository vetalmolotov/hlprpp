
// Test import of styles
import '@/styles/index.scss'

const bgImage01 = '/assets/bg-image01.png';
const bgImage02 = '/assets/bg-image02.png';
const bgImage03 = '/assets/bg-image03.png';
const bgImage04 = '/assets/bg-image04.png';
const bgImage05 = '/assets/bg-image05.png';
const bgImage06 = '/assets/bg-image06.png';
const bgImage07 = '/assets/bg-image07.png';
const bgImage08 = '/assets/bg-image08.png';
const bgImage09 = '/assets/bg-image09.png';
const bgImage10 = '/assets/bg-image10.png';
const backgroundUrls = [
  bgImage01,
  bgImage02,
  bgImage03,
  bgImage04,
  bgImage05,
  bgImage06,
  bgImage07,
  bgImage08,
  bgImage09,
  bgImage10,
];


backgroundUrls.join("")
console.log(backgroundUrls)
console.log(backgroundUrls.join(""))
const bg = document.querySelector("#background");
for (let i=0; i< 10; i++) {
  bg.innerHTML = ""
  const backgroundUrlsNumber = Math.floor(Math.random() * backgroundUrls.length)
  const setBackgroundList = backgroundUrls.map((url) => {
    backgroundUrls.join("")
    return '<li><img src="' + url + '" alt="" /></li>'
  });
  bg.innerHTML += setBackgroundList;
  const firstImage = document.querySelector("#background li:first-child")
  firstImage.innerHTML = '<img src="'+ backgroundUrls[backgroundUrlsNumber] +'" alt="" />';
}

const imageActiveClass = 'show';
const showTime = 10000; // milliseconds

const lights = document.querySelectorAll('#background li');
if (localStorage.getItem('on') === 'true'){
  for (let i = 0; i < lights.length; ++i) {
    const firstChild = document.querySelector("#background li:not(:last-child)")
    const lastChild = document.querySelector("#background li:last-child")
    firstChild.remove()
    lights[i].classList.remove('show');
    lastChild.classList.add('show')
  }
}


lights.forEach((light, index) => {
  setTimeout(() => {
    light.classList.add(imageActiveClass);

    if(index === lights.length - 1) {

      setTimeout(() => {
        if(light.classList.contains('show')) {
          localStorage.setItem('on','true');
        }

      }, showTime);
    }
  }, index * showTime);
});