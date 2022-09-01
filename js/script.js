var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
$(document).ready(function(){
  $('#icon').click(function(){
      $('ul').toggleClass('show');
  });
});

let dropdown = document.querySelector('.nav-3');
dropdown.onclick = function(){
  dropdown.classList.toggleClass('active');
} 
const toggleBtn = document.querySelector('#close-icon');
const navlist = document.querySelector('menu');

toggleBtn.addEventListener('click', () =>{
if(navlist.style.display === 'none') {
  navlist.style.display ='block';
} else {
  navlist.style.display ='none';
}
});
// const list = document.querySelector("#menu ul");
// const forms = document.forms;

// // delete movie
// list.addEventListener("click", (e) => {
//   if (e.target.className == "close-icon") {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });
  
// window.addEventListener('scroll', reveal);

// function reveal(){
//   let reveals = document.querySelectorAll('.scroll-nav');

//   for(let i = 0; i < reveals.length; i++){

//     let windowheight = window.innerHeight;
//     let revealtop = reveals[i].getBoundingClientRect().top;
//     let revealpoint = 150;

//     if(revealtop < windowheight - revealtop){
//       reveals[i].classList.add('active');
//     }
//     else{
//       reveals[i].classList.remove('active');
//     }
//   }
// }