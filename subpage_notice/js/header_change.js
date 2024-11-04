/* header */
let header = document.querySelector('#header');

window.addEventListener('scroll', function(){
  if(window.scrollY>0) header.classList.add('scroll');
  else header.classList.remove('scroll');
});

// 스크롤하면 로고 이미지가 바뀜
window.addEventListener('scroll', function(){
  let logo = document.querySelector('#logo_image');
  if(window.scrollY>0) logo.src = "images/logo_black.png";
  else logo.src = "images/logo_white.png";
});

//헤더 마우스 호버 시 스타일 바뀜
header.addEventListener('mouseenter', function(){
  header.classList.add('mouseOn'); //mouseOn 클래스 추가해서 스타일 변경
});
header.addEventListener('mouseleave', function(){
  header.classList.remove('mouseOn');
});