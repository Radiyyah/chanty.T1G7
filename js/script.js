<<<<<<< HEAD
// var closebtns = document.getElementsByClassName("close");
// var i;
=======

let i = 0; //start point
let container = [];
let time = 3000;
//container list
container[0] = document.getElementsByClassName('section1');
container[1] = document.getElementsByClassName('section2');
container[2] = document.getElementsByClassName('section3');
container[3] = document.getElementsByClassName('section4');

//Function to change the container
function changeContainer(){
    
}
changeContainer();
if(i = container){
    addEventListener(click, changeContainer);
}

// document.slide.src = container[i];

//     if(i < container.length -1){
//         i++;
//     }else{
//         i = 0;
//     }

//     setTimeout("changeContainer()", time);

var closebtns = document.getElementsByClassName("close");
var i;
>>>>>>> e5024c6401102bf12233c0a4fd370f84f3a7e043

// for (i = 0; i < closebtns.length; i++) {
//   closebtns[i].addEventListener("click", function() {
//     this.parentElement.style.display = 'none';
//   });
// }
// $(document).ready(function(){
//   $('#icon').click(function(){
//       $('ul').toggleClass('show');
//   });
// });

// icon-section
const icon = document.getElementById('icon');

const menu = document.getElementById('menu');
icon.onclick = function(){
    icon.classList.toggle('active');
    menu.classList.toggle('active');
}

document.onclick = function(clickEvent){
    if(clickEvent.target.id !=="menu" && 
    clickEvent.target.id !=="icon"){
        icon.classList.remove('active');
        menu.classList.remove('active');
    }
}

// communication dropdown-section 

let dropdown = document.querySelector('.nav-3');
dropdown.onclick = function(){
  dropdown.classList.toggleClass('active');
} 
// const toggleBtn = document.querySelector('#close-icon');
// const navlist = document.querySelector('menu');

// toggleBtn.addEventListener('click', () =>{
// if(navlist.style.display === 'none') {
//   navlist.style.display ='block';
// } else {
//   navlist.style.display ='none';
// }
// });
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

