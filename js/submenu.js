let menuItems = document.querySelectorAll('.main_menu .menu_item');
let submenus= document.querySelectorAll('.submenu');
let shadowBg = document.querySelector('.header_bg');
let textChange = document.querySelectorAll('.main_menu a');
// console.log(textChange);

menuItems.forEach(function(item){   //메인 메뉴에 마우스가 들어오면 서브메뉴 표시
  item.addEventListener('mouseenter', function(){
    submenus.forEach(function(sub){
      //모든서브메뉴 숨기기
      sub.style.display = 'none';
      shadowBg.style.opacity = '1'; //배경 어둡게
      shadowBg.style.zIndex = '800';
    });
    // 현재 타겟 서브메뉴만 표시
    let target = document.getElementById(item.dataset.target);
    if(target){
      target.style.display = 'block';
    } 
  });
});

//서브메뉴에 마우스 들어오면 서브메뉴 유지
submenus.forEach(function(sub) {
  sub.addEventListener('mouseenter', function() {
    sub.style.display = 'block'; 
    header.classList.add('mouseOn');  //서브메뉴에 마우스 들어와도 헤더 바뀜
    shadowBg.style.opacity = '1';
    shadowBg.style.zIndex = '800';
  });

  sub.addEventListener('mouseleave', function() {
    sub.style.display = 'none';
    header.classList.remove('mouseOn'); //서브메뉴에 마우스 나가면 헤더 원래대로
    shadowBg.style.opacity = '0';
    shadowBg.style.zIndex = '-999';

  });
});
//서브메뉴에 마우스 나갔을 때 서브메뉴 닫기

//메인메뉴 컨텐츠에 마우스 진입시 서브메뉴 닫기
document.querySelector('nav').addEventListener('mouseleave', function(){
  submenus.forEach(function(sub){
    sub.style.display = 'none';
    shadowBg.style.opacity = '0';
    shadowBg.style.zIndex = '-999';
  });
});

//스크롤됐을 때 마우스호버하면 서브메뉴 위치 내려옴
header.addEventListener('mouseenter', function(){
  if(window.scrollY > 0) {
    submenus.forEach(function(sub) {
      sub.style.position = 'fixed';
    });
  }
});