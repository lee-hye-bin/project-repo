//각각의 swiper 인스턴스 생성
var snsSwiper1 = new Swiper(".swiper-tab-1", {
  slidesPerView : 4,
  slidesPerGroup: 1, // 한번에 이동하는 슬라이드 수
  loop : true,
  spaceBetween: 20,
  centeredSlides: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    // when window width is >= 480px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  },
});
var snsSwiper2 = new Swiper(".swiper-tab-2", {
  slidesPerView : 4,
  slidesPerGroup: 1, 
  spaceBetween: 20,
  loop : true,
  centeredSlides: false, 
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    // when window width is >= 480px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  },
});
var snsSwiper3 = new Swiper(".swiper-tab-3", {
  slidesPerView : 3, 
  slidesPerGroup: 1, 
  spaceBetween: 20,
  loop : true,
  centeredSlides: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  },
});

// 클릭시 이벤트 처리
//탭 클릭시 탭 콘텐츠가 보이게
let snstabs = document.querySelectorAll('.sns_tab');
let snsTabContents = document.querySelectorAll('.sns_tab_content');

snstabs.forEach(function(tab){
  //클릭이벤트 
  tab.addEventListener('click', function(){
    //모든 탭에서 active제거 
    snstabs.forEach(function(t){
      t.classList.remove('active');
    });
    //클릭된 탭만 active클래스 추가
    //this 이벤트가 작동된 그것
    this.classList.add('active');
    //모든 콘텐츠를 숨기고
    snsTabContents.forEach(function(content){
      content.classList.remove('active');
    });
    //클릭된 탭에 해당하는 콘텐츠가 표시
    let tabId = this.dataset.tab;
    document.getElementById(`sns_tab${tabId}`).classList.add('active');

    //해당 탭의 swiper 슬라이드 항상 0번째가 먼저 보임
    if(tabId === '1'){
      snsSwiper1.slideTo(0, 0) // 첫 슬라이드로 이동 
    }
    if(tabId === '2'){
      snsSwiper2.slideTo(0, 0) 
    }
    if(tabId === '3'){
      snsSwiper3.slideTo(0, 0) 
    }
  });
});
