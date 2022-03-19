var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  rewind: true,
  mousewheel: {
      invert: true,
      releaseOnEdges: true
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },

});

const swiper1 = document.querySelector('.swiper').swiper;

let options = {
  threshold: 0.95
}

// const body = document.getElementsByTagName("body")[0];
// const area = document.querySelectorAll(".scrollArea")[0];


const scrollArea = document.querySelectorAll(".scrollArea");

// let target;

// // let previousY = 0
// // let previousRatio = 0 
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          target = entry.target;
          disableScrolling();
      }
  });
}, options);

observer.observe(scrollArea[0]);


swiper1.on('reachEnd', function(event) {
  console.log("reach to End", event);
  enableScrolling()
})

swiper1.on('reachBeginning', function(event) {
  console.log("reach to reachBeginning", event);
  enableScrolling()
})



const throttleFunction = (func, delay) => {

  // Previously called time of the function
  let prev = 0;
  return (...args) => {
      // Current called time of the function
      let now = new Date().getTime();

      // Logging the difference between previously
      // called and current called timings
      console.log(now - prev, delay);

      // If difference is greater than delay call
      // the function again.
      if (now - prev > delay) {
          prev = now;

          // "..." is the spread operator here
          // returning the function with the
          // array of arguments
          return func(...args);
      }
  }
}

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function() {
      window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function() {};
}