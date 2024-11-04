let siteMap = document.querySelector('.sitemap');
let hamburgerBtn = document.querySelector('.hamburger_menu');
let siteMapCloseBtn = document.querySelector('.sitemap_close');

siteMap.style.display = 'none';
hamburgerBtn.addEventListener('click', function(){
  siteMap.style.display = 'block';
  siteMap.style.opacity = '1';
  shadowBg.style.opacity = '1';
  shadowBg.style.zIndex = '900';
  searchPage.style.display = 'none';
  document.body.classList.add('scroll_rock');
});

siteMapCloseBtn.addEventListener('click', function(){
  siteMap.style.display = 'none';
  siteMap.style.opacity = '0';
  shadowBg.style.opacity = '0';
  shadowBg.style.zIndex = '-999';
  document.body.classList.remove('scroll_rock');
});

/****************************** 반응형 sitemap (witdh <= 768px일 때 서브메뉴로 바뀐다) ******************************/
if(window.matchMedia("(max-width: 768px").matches){ // console.log(`보인다`);
  let accordionItems = document.querySelectorAll('.sitemap_item'); //아코디언 영역
  let submenuBtn = document.querySelectorAll('.sitemap_item_title'); //누를 부분
  let accordionContents = document.querySelectorAll('.sitemap_element'); //펼쳐지는 부분

  // foreach로 accordionItems 배열 선택 후 addeventlistner
  accordionItems.forEach(function(item){ //foreach가 accordionItems를 한 번씩 돈다
    console.log('accordionItems', item);
    submenuBtn.forEach(function(i){ //foreach가 submenuBtn을 한 번씩 돈다
      // console.log('submenubtn', i);
      i.addEventListener('click', function(a){ //foreach가 도는 동안 submenuBtn을 클릭하면 함수가 실행된다
        // console.log(`qhdufk`);
        accordionContents.style.display = 'block'; //accordionContents는 정의되지 않음...왜?
      })
    });
  });
}



/*   if(window.offsetWith <= 768 &&  siteMap.style.display === 'block'){
    console.log(`보여라`);
    let accordion = document.querySelectorAll('.sitemap_element');
    let submenuBtn = document.querySelectorAll('.sitemap_item_title');
    console.log(accordion, submenuBtn);
  } */
