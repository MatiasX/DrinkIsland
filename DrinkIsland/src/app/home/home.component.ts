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

      const items = document.querySelectorAll<HTMLElement>('.slider02 .list .item');
      const thumbnails = document.querySelectorAll<HTMLElement>('.thumbnail .item');
      const next02 = document.getElementById('next02') as HTMLButtonElement;
      const prev02 = document.getElementById('prev02') as HTMLButtonElement;

      let currentIndex = 0;
      let countItem = items.length;
      let itemActive = 0;
      let refreshInterval: any;

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

      next02.onclick = function(){
        itemActive = itemActive + 1;
        if(itemActive >= countItem){
            itemActive = 0;
        }
        showSlider();
      }
  
      prev02.onclick = function(){
        itemActive = itemActive - 1;
        if(itemActive < 0){
            itemActive = countItem - 1;
        }
        showSlider();
      }
  
      refreshInterval = setInterval(() => {
        next02.click();
      }, 7000);
  
      function showSlider(){
        let itemActiveOld = document.querySelector<HTMLElement>('.slider02 .list .item.active');
        let thumbnailActiveOld = document.querySelector<HTMLElement>('.thumbnail .item.active');
        itemActiveOld!.classList.remove('active');
        thumbnailActiveOld!.classList.remove('active');
  
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
  
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
          next02.click();
        }, 7000);
      }
  
      thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
          itemActive = index;
          showSlider();
        })
      });


      
    });
  }
}
