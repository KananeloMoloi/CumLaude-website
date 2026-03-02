
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menu = document.querySelector(".menu");
let cancel= document.querySelector(".cancel");

menu.onclick = function(){
  navBar.classList.add("active");
  menu.style.opacity = "0";
  menu.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  
}
cancel.onclick = function(){
  navBar.classList.remove("active");
  menu.style.opacity = "1";
  menu.style.pointerEvents = "auto";
  body.style.overflow = "auto";
 
}

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});


const swiper = new swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const getlocation = ()=> {
  //get the location from the user
  if (navigator.geolocation)
  {
      navigator.geolocation.getCurrentPosition((position) =>{
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          var longlat = lat + "," + long;
          console.log(longlat);
          window.open("https://www.google.com/maps/dir/" + longlat+ "/cumlaude+institute/@-28.697481,26.3728761,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1ef2b13961d5dec5:0xbfb359ce98130333!2m2!1d28.7873539!2d-28.5282597?entry=ttu");
          
          
      });
  }
  }; 




