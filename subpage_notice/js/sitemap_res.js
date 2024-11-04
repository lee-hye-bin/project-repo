let hamburgerRes = document.querySelector('.hamburger_menu_responsive');
let sitemapRes = document.querySelector('.res_sitemap');
let closeBtnRes = document.querySelector('.res_sitemap_close');

shadowBg.style.zIndex = '-999';
sitemapRes.style.display = 'none';

hamburgerRes.addEventListener('click', function(){
  sitemapRes.style.display = 'block';
  sitemapRes.style.opacity = '1';
  document.body.classList.add('scroll_rock');
});

closeBtnRes.addEventListener('click', function(){
  sitemapRes.style.display = 'none';
  sitemapRes.style.opacity = '0';
  document.body.classList.remove('scroll_rock');
});

window.addEventListener('resize', function(){
  if(window.innerWidth > 768) sitemapRes.style.display = 'none'; //가로가 768px 이상이면 반응형 서브메뉴 삭제함
});

function setupAccordion() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    let accordionItems = document.querySelectorAll('.res_sitemap_item'); // 아코디언 영역
    let submenuBtn = document.querySelectorAll('.res_sitemap_item_title'); // 누를 부분
    let accordionContents = document.querySelectorAll('.res_sitemap_element'); // 펼쳐지는 부분

    // 각 버튼에 맞는 콘텐츠와 매칭하여 반복 처리
    accordionItems.forEach(function(item, index) {
      let button = submenuBtn[index]; 
      let content = accordionContents[index]; 
      
      // 클릭 이벤트 설정
      button.addEventListener('click', function() {
        // 클릭할 때마다 active 클래스를 토글하여 아코디언 콘텐츠를 열고 닫음
        if (content.classList.contains('active')) {
          content.classList.remove('active'); // 이미 열려 있으면 닫기
        } else {
          // 다른 모든 콘텐츠 닫기
          accordionContents.forEach(acc => acc.classList.remove('active'));
          // 현재 클릭한 콘텐츠만 열기
          content.classList.add('active');
        }
      });
    });
  }
}

setupAccordion();
window.addEventListener('resize', setupAccordion);