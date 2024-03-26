import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backgroundImageUrl: string = '/assets/img/iw.jpg';

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const slides = document.querySelectorAll<HTMLElement>('.slide');
      const slideRadios = document.querySelectorAll<HTMLInputElement>('[name="slider"]');
      const prevButton = document.getElementById('prev') as HTMLButtonElement;
      const nextButton = document.getElementById('next') as HTMLButtonElement;

      let currentIndex = 0;

      // Function to show the current slide
      function showSlide(index: number) {
          slides.forEach((slide, i) => {
              
          });
          slideRadios.forEach((radio, i) => {
              radio.checked = (i === index);
          });
      }

      // Function to show next slide
      function showNextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      }

      // Function to show previous slide
      function showPrevSlide() {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
      }

      // Event listeners for buttons
      prevButton.addEventListener('click', showPrevSlide);
      nextButton.addEventListener('click', showNextSlide);

      // Show initial slide
      showSlide(currentIndex);
    });
  }
}
