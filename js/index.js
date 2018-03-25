let sliderControlLeft = document.getElementById('sliderControlLeft');
let sliderControlRight = document.getElementById('sliderControlRight');

// let slide1 = document.getElementById('sliderItem1');
// let slide2 = document.getElementById('sliderItem2');

let slides = document.getElementsByClassName('header__slide');

let count = 1;
sliderControlRight.addEventListener("click", function(e){
  e.preventDefault();

  // for(let slide of slides){
  //   slide.classList.toggle('slide_shown');
  // }

  if(count >= slides.length){
    count = 0;
  }
  let shownSlide = document.getElementsByClassName('slide_shown')[0];
  shownSlide.style = "left:-100%";
  slides[count].classList.toggle('slide_shown');

  count++;
});

sliderControlRight.addEventListener("click", function(e){
  e.preventDefault();
});

// gallery img hover

// let galeryItems = document.getElementsByClassName('gallery__item');
//
// for (item of galeryItems) {
//   item.addEventListener('mouseover', function(e){
//     let hoverBlock = e.target.lastChild;
//     console.log(e.target)
//     hoverBlock.classList.add('hover-up');
//   })
// }
