"use strict"

// Карусель изображений

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }   
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

//Каталоги изображений

//Карусель каталога 1

let CG1slideIndex = 1;
CG1showSlides(CG1slideIndex);

// Next/previous controls
function CG1plusSlides(n) {
  CG1showSlides(CG1slideIndex += n);
}

// Thumbnail image controls
function CG1currentSlide(n) {
  CG1showSlides(CG1slideIndex = n);
}

function CG1showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("CG1Slides");
  let dots = document.getElementsByClassName("CG1dot");
  if (n > slides.length) {CG1slideIndex = 1}
  if (n < 1) {CG1slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }   
  slides[CG1slideIndex-1].style.display = "block";
  dots[CG1slideIndex-1].className += " active";
} 

//Карусель каталога 2

let CG2slideIndex = 1;
CG2showSlides(CG2slideIndex);

// Next/previous controls
function CG2plusSlides(n) {
  CG2showSlides(CG2slideIndex += n);
}

// Thumbnail image controls
function CG2currentSlide(n) {
  CG2showSlides(CG2slideIndex = n);
}

function CG2showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("CG2Slides");
  let dots = document.getElementsByClassName("CG2dot");
  if (n > slides.length) {CG2slideIndex = 1}
  if (n < 1) {CG2slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }   
  slides[CG2slideIndex-1].style.display = "block";
  dots[CG2slideIndex-1].className += " active";
} 

//Карусель каталога 3

let CG3slideIndex = 1;
CG3showSlides(CG3slideIndex);

// Next/previous controls
function CG3plusSlides(n) {
  CG3showSlides(CG3slideIndex += n);
}

// Thumbnail image controls
function CG3currentSlide(n) {
  CG3showSlides(CG3slideIndex = n);
}

function CG3showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("CG3Slides");
  let dots = document.getElementsByClassName("CG3dot");
  if (n > slides.length) {CG3slideIndex = 1}
  if (n < 1) {CG3slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }   
  slides[CG3slideIndex-1].style.display = "block";
  dots[CG3slideIndex-1].className += " active";
}
