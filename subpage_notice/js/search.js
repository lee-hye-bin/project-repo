let headerSearch = document.querySelector('.header_search');
let searchPage = document.querySelector('.search');
let closeBtn = document.querySelector('.close');

headerSearch.addEventListener('click', function(){ //돋보기 누르면 검색창이 열림
  searchPage.style.display = 'block'; //검색창이 block
  shadowBg.style.opacity = '1'; //검색창 투명도가 100%
  shadowBg.style.zIndex = '800'; //검색창 밑 검정색 배경 깔림
  document.body.classList.add('scroll_rock'); //스크롤 락 걸려서 X 버튼 누르기 전까지는 스크롤 불가
  if(window.scrollY > 0) searchPage.style.position = 'fixed'; //스크롤 됐을 때 따라 내려옴
  // header.classList.add('mouseOn');  <안 먹음 이유 모름
});
searchPage.addEventListener('mouseenter', function(){ //검색창에 마우스가 들어와있으면 header 바뀜
  header.classList.add('mouseOn');
});

/* 
  검색창 꺼지는 조건
  1. X 버튼 누르면 꺼짐
  2. nav 진입하면 꺼짐
*/
closeBtn.addEventListener('click', function(){
    searchPage.style.display = 'none';
    header.classList.remove('mouseOn');
    shadowBg.style.opacity = '0';
    shadowBg.style.zIndex = '-999';
    document.body.classList.remove('scroll_rock');
});
menuItems.forEach(function(item){ 
  item.addEventListener('mouseenter', function(){
    searchPage.style.display = 'none'; //메인 메뉴에 마우스가 올라가면 검색창 닫음
  });
});