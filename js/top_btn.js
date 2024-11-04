let btn = document.getElementById('gototop');
let doc = document.documentElement; 
let scrollAmount; 

let footer = document.querySelector('footer'); 
let windowHeight = window.innerHeight;
let footerTop = footer.offsetTop; 

window.addEventListener('scroll', function() {
  scrollAmount = doc.scrollTop;
  
  if (scrollAmount > 1000) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }

  if (scrollAmount + windowHeight >= footerTop + 100 ) btn.classList.remove('visible');
});


btn.addEventListener('click', function(event) {
  event.preventDefault(); 
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
