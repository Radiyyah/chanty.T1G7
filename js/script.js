
// var closebtns = document.getElementsByClassName("close");
// var i;


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



// HEADER JS STARTS
// NAV BAR STARTS
// icon-section BY SAMUEL
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
// NAV BAR ENDS
// HEADER JS ENDS
// main starts

// pricing section starts
function myFunction() {
    var element = document.getElementById("normal");
    element.classList.toggle("chosen");
  
    var element = document.getElementById("bold");
    element.classList.toggle("chosen");
  
      var x = document.getElementById("money");
      if (x.innerHTML === "$3") {
        x.innerHTML = "$4";
      } else {
        x.innerHTML = "$3";
      }
  
      var x = document.getElementById("money2");
      if (x.innerHTML === "$3") {
        x.innerHTML = "$4";
      } else {
        x.innerHTML = "$3";
      }
  
      var x = document.getElementById("money3");
      if (x.innerHTML === "$3") {
        x.innerHTML = "$4";
      } else {
        x.innerHTML = "$3";
      }
    }
  
  
  // pricing section ends
  
    // main ends