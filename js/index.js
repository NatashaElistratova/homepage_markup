// ------MENU ICON

let menuIcon = document.getElementById('menuIcon');
let nav = document.getElementById('nav');
let navLinks = document.querySelectorAll('#nav ul li');

menuIcon.addEventListener('click', function(){
  nav.classList.toggle('showNav');
});

// -------HEADER SLIDER

let sliderControlLeft = document.getElementById('sliderControlLeft');
let sliderControlRight = document.getElementById('sliderControlRight');

let slides = document.getElementsByClassName('header__slide');

let count = 1;
let prev;

function slideToLeft(e){
  e.preventDefault();
  if(prev){
    prev.classList.remove('slide_current');
  };
  slides[count].classList.add('slide_current');
  prev = slides[count];

  if(count < slides.length-1){
    count++;
  }else{
    count = 0;
  };
};

function slideToRight(e){
  e.preventDefault();
  if(prev){
    prev.classList.remove('slide_current');
  };
  slides[count].classList.add('slide_current');
  prev = slides[count];

  if(count > 0){
    count--;
  }else{
    count = slides.length-1;
  };
};

sliderControlLeft.addEventListener("click", slideToLeft);

sliderControlRight.addEventListener("click", slideToRight);


// --------SMOOTH SCROLL

let speed = 1;

function smoothScroll(e){
  e.preventDefault();

  let curScroll = window.pageYOffset,
      hash =  e.target.hash;
      fromTop = document.querySelector(hash).getBoundingClientRect().top,
      start = null;

      requestAnimationFrame(step);

      function step(time){
        if (start === null) start = time;
        let progress = time - start,
            scrollY = (fromTop < 0 ? Math.max(curScroll - progress/speed, curScroll + fromTop): Math.min(curScroll + progress/speed,curScroll + fromTop));
            window.scrollTo(0,scrollY);
            if(scrollY != curScroll + fromTop){
              requestAnimationFrame(step);
            }else{
              location.hash = hash;
            }
      }
      return false;
}

for (navLink of navLinks) {
  navLink.addEventListener('click', smoothScroll);
}

// --------GOOGLE MAP

function initMap() {
  var coordinates= { lat: 38.726170, lng: -76.980943},

      mapOptions = {
          zoom: 15,
          center: { lat: 38.726170, lng: -76.960943},
          styles:[
                    {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
      },

      marker = new google.maps.Marker({
           position: coordinates,
           icon: 'http://maps.google.com/mapfiles/ms/micons/orange.png',
           map: map
       }),

      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      marker.setMap( map );

      if( window.screen.width <= 1024){
        map.setZoom(13);
      };


};
