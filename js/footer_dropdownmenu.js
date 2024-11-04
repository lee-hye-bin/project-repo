const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('#dropdown_content'); 
let toggleArrow = document.getElementById('arrow');
// const dropDown = document.querySelector('.dropdown');

dropbtn.addEventListener('click', function() {
  // 드롭다운 콘텐츠의 최대 높이 설정 (스크롤은 max-height를 넘으면 생김)
  if (dropdownContent.style.maxHeight === '0px' || !dropdownContent.style.maxHeight) {
    dropdownContent.style.maxHeight = '260px'; 
    dropdownContent.style.overflowY = 'auto'; 
    toggleArrow.classList.add('rotate'); //dropdown에 높이가 생기면 rotate
  }
  else {
    dropdownContent.style.maxHeight = '0px'; 
    dropdownContent.style.overflowY = 'hidden'; 
    toggleArrow.classList.remove('rotate'); //dropdown에 높이가 사라지면 원래대로
  }
});