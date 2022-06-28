const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-bar ul a')
const menuLength = menuItem.length;

for(var i = 0; i < menuLength; i++){
  if(menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  }
}

const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset
  
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up")
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
   body.classList.remove("scroll-up")
   body.classList.add("scroll-down")
   
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
    
   }
  lastScroll = currentScroll;
  
})





document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".layer").forEach(function(move){
var moving_value = move.getAttribute("data-speed");
var x = (e.clientX * moving_value) / 250;
var y = (e.clientY * moving_value) / 250;

move.style.transform = "translateX(" + x +"px) translateY(" + y + "px)";
  });
}

VanillaTilt.init(document.querySelector(".best_school_left"), {
  max: 10,
  speed: 1000,
      glare: true,
});




let valueDisplays = document.querySelectorAll(".statistical_items_numbers");
let interval = 5000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue += 1;
    valueDisplays.textContent = startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration)
});



ScrollReveal({ reset: true, distance: '60px', duration: 2000, delay: 900});
ScrollReveal().reveal('.content_target_best', { delay: 200,origin: 'top',});
ScrollReveal().reveal('.target_icon', { delay: 200,origin: 'right' });
ScrollReveal().reveal('.content_target_pp', { delay: 100,origin: 'bottom' });
ScrollReveal().reveal('.content_target_row .target_items', { delay: 100, origin: 'bottom', interval: 200});


ScrollReveal().reveal('.best_school_left_img', { delay: 100, origin: 'left',});
ScrollReveal().reveal('.best_school_left_icon', { delay: 100, origin: 'bottom',});

ScrollReveal().reveal('.best_school_right', { delay: 300, origin: 'right',});
ScrollReveal().reveal('.best_school_right_p', { delay: 500, origin: 'right',});
ScrollReveal().reveal('.best_school_right_list li', { delay: 600, origin: 'right', interval: 200});

ScrollReveal().reveal('.lecturers_list_why', { delay: 200,origin: 'top' });
ScrollReveal().reveal('.lecturers_list_title', { delay: 500,origin: 'top' });

ScrollReveal().reveal('.course_h1', { delay: 500, origin: 'top',});
ScrollReveal().reveal('.course .course_items', { delay: 600, origin: 'top', interval: 200});
ScrollReveal().reveal('.lecturers_list .person_items .person' , { delay: 600, origin: 'bottom', interval: 200});

ScrollReveal().reveal('.statistical_p', { delay: 100,origin: 'top' });
ScrollReveal().reveal('.statistical_medal', { delay: 200,origin: 'right' });

ScrollReveal().reveal('.statistical_row .statistical_items' , { delay: 600, origin: 'bottom', interval: 200});

ScrollReveal().reveal('.content_target_bestcontact', { delay: 200,origin: 'top' });
ScrollReveal().reveal('.contact_p', { delay: 100,origin: 'top' });
ScrollReveal().reveal('.contact_right_h3', { delay: 100,origin: 'bottom' });

ScrollReveal().reveal('.contact_right .search-box' , { delay: 600, origin: 'right', interval: 200});








