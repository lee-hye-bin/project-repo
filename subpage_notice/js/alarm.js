let alarm_tabList = document.querySelectorAll('.alarm_tab_head a'); //link 거는 tab
let alarm_tabContent = document.querySelectorAll('#alarm_tab_content .tab'); //tab 선택하면 바뀔 내용
let alarm_activeCont = '';
// 페이지 로드 시 모든 탭 콘텐츠 숨기기
for(let j = 0; j < alarm_tabContent.length; j++){
  alarm_tabContent[j].style.display = 'none';
}
for(let i = 0; i < alarm_tabList.length; i++){
  alarm_tabList[i].addEventListener('click', function(e){
    e.preventDefault();

    let orgTarget = e.target.getAttribute('href'); //클릭된 탭에서 href속성의 id값 추출
    let tabTarget = orgTarget.replace('#',''); //클릭된 탭의 href 속성을 초기화

    for (let j = 0; j < alarm_tabContent.length; j++){
      alarm_tabList[j].classList.remove('active'); //클릭 안 된 탭의 클래스 제거
      alarm_tabContent[j].style.display= 'none'; //클릭 안 된 탭 none
    }
    this.parentNode.classList.add('active');
    
    document.getElementById(tabTarget).style.display = 'block';

    for(let k = 0; k < alarm_tabList.length; k++){
			alarm_tabList[k].classList.remove('active'); //모든클래스 삭제
			e.target.classList.add('active'); //클릭한 요소만 클래스추가
		}
  });
  document.getElementById('alarm_tab_1').style.display = 'block'; //tab1번을 항상 보이게
}
