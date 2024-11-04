document.addEventListener('DOMContentLoaded', function () {
  const rowsPerPage = 8;
  const rows = document.querySelectorAll('#notice_table tbody tr');

  // 상단 3개는 고정
  const fixedRowsCount = 3;
  const paginatedRows = Array.from(rows).slice(fixedRowsCount); // 페이지네이션에 필요한 행만
  const rowsCount = paginatedRows.length;
  const pageCount = Math.ceil(rowsCount / rowsPerPage);

  const numbers = document.querySelector('#numbers');
  const currentPage = document.querySelector('.current_page');
  const totalPage = document.querySelectorAll('.total_page');


  // 총 페이지 수를 설정
  totalPage[1].textContent = pageCount;

  // 페이지네이션 번호 생성
  for (let i = 1; i <= pageCount; i++) {
    numbers.innerHTML += `<li><a href="#none">${i}</a></li>`;
  }

  const numberBtn = numbers.querySelectorAll('#numbers li a');

  // 페이지 클릭 이벤트 처리
  numberBtn.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      numberBtn.forEach((nb) => nb.classList.remove('on'));
      e.target.classList.add('on');
      displayRow(idx);
    });
  });
  numberBtn[0].classList.add('on'); // 초기 페이지 활성화

  // 행 표시 함수
  function displayRow(idx) {
    let start = idx * rowsPerPage;
    let end = start + rowsPerPage;

    // 페이지네이션 행 숨기기
    paginatedRows.forEach(row => row.style.display = 'none');

    // 현재 페이지의 행 표시
    let newRows = paginatedRows.slice(start, end);
    newRows.forEach(row => row.style.display = '');

    // 상단 고정 행 표시
    rows.forEach((row, index) => {
      if (index < fixedRowsCount) row.style.display = '';
    });

    // 현재 페이지 번호 업데이트
    currentPage.textContent = `${idx + 1}`;
  }

  // 초기 페이지 로드 시 첫 페이지 표시
  displayRow(0);
});

const noticeInform = document.querySelector('.notice_inform');
noticeInform.innerHTML += `<span style="font-size: 16px;">총 게시글 <strong class="total_page" style="font-size: 16px; color: #014A8F;">${rowsCount}</strong>건 | 페이지 <strong class="current_page" style="font-size: 16px; color: #014A8F;">${numberBtn}</strong>/ ${pageCount}`;