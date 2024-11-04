/* snb */

/* 탭1 */
let link = document.querySelectorAll('.vision_history_tabmenu a');
let content = document.querySelectorAll('#vision, #history');

for(let i= 0; i < link.length; i++){
  link[i].addEventListener('click', function(e){
    e.preventDefault();

    let orgTarget = e.target.getAttribute('href');
    let tabTarget = orgTarget.replace('#','');
    for (let x = 0; x < content.length; x++){
      content[x].style.display= 'none';
    }
    document.getElementById(tabTarget).style.display = 'block';

    for(let j = 0; j < link.length; j++){
			link[j].classList.remove('active');
			e.target.classList.add('active');
		}
  });
}
document.getElementById('vision').style.display = 'block';

/* 탭안의탭 */
let historylink = document.querySelectorAll('.history_tab_menu a');
let historyContent = document.querySelectorAll('#history > div');

for(let i= 0; i < historylink.length; i++){
  historylink[i].addEventListener('click', function(e){
    e.preventDefault();

    let orgTarget = e.target.getAttribute('href');
    let tabTarget = orgTarget.replace('#','');
    for (let x = 0; x < historyContent.length; x++){
      historyContent[x].style.display= 'none';
    }
    document.getElementById(tabTarget).style.display = 'block';

    for(let j = 0; j < historylink.length; j++){
			historylink[j].classList.remove('active');
			e.target.classList.add('active');
		}
  });
}
document.getElementById('2020s').style.display = 'block';