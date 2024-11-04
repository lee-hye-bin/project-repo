// Swiper 초기화
var swiper = new Swiper('.swiper-banner', {
  slidesPerView: 'auto', // 한 줄에 보여줄 수 있는 만큼
  spaceBetween: 15, 
  loop: true, // 무한 루프
  navigation: {
    nextEl: '.next', // 다음 버튼
    prevEl: '.prev', // 이전 버튼
  },
  autoplay: {
    delay: 2000, // 2초
    disableOnInteraction: false, // 버튼 클릭 시에도 자동 재생 유지
  },
  speed: 500, // 슬라이드 전환 속도
});

// 재생 및 정지 버튼 토글
let isPlaying = true; //초기 재생 상태(play)
let playButton = document.querySelector('.play');
let pauseButton = document.querySelector('.pause');

playButton.style.display = 'none'; //play button 일단 숨김

pauseButton.addEventListener('click', function () {
  swiper.autoplay.stop(); 
  pauseButton.style.display = 'none'; //pause 버튼을 클릭하면 멈추고 none 됨
  playButton.style.display = 'inline-block'; //pause 버튼이 사라지면 play button이 inline-block으로
});

playButton.addEventListener('click', function () {
  swiper.autoplay.start(); 
  playButton.style.display = 'none'; 
  pauseButton.style.display = 'inline-block';
});
