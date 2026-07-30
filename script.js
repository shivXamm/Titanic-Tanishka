function playAudio(index) {
    // Stop all audios first
    for (let i = 0; i < 5; i++) {
        let audio = document.getElementById("audio" + i);
        audio.pause();
        audio.currentTime = 0;
    }

    // Play selected audio
    document.getElementById("audio" + index).play();
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        container.classList.add("scrolled");
      } else {
        container.classList.remove("scrolled");
      }
    });
  });
// press the button to take a photo.

let light = document.getElementById('circle');

document.getElementById('button').addEventListener('click', () => {
  light.classList.remove('flash-animation');
  setTimeout(function(){
  light.classList.add('flash-animation');
  },500);
});

let eject = document.getElementById('photo');

document.getElementById('button').addEventListener('click', () => {
  eject.classList.remove('eject-photo');
  setTimeout(function(){
  eject.classList.add('eject-photo');
  },500);
});

$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});
const slider = document.querySelector(".slider");

document.querySelector(".next").addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    slider.appendChild(items[0]);
});

document.querySelector(".prev").addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    slider.prepend(items[items.length - 1]);
});