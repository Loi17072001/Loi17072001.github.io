$(document).ready(function(){
    $('.header_right_bars').click(function(){
        $('.header_left_nav').slideToggle();
    });
})


ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400});
ScrollReveal().reveal('.banner_left_heading', { delay: 200,origin: 'left',});
ScrollReveal().reveal('.banner_left_desc', { delay: 400,origin: 'left',});
ScrollReveal().reveal('.banner_left_button', { delay: 600,origin: 'bottom',});
ScrollReveal().reveal('.banner_right_colum1 .banner_right_colum1_img', { delay: 200,origin: 'right',interval: 200});
ScrollReveal().reveal('.banner_right_colum2 .banner_right_colum2_img', { delay: 200,origin: 'right',interval: 200});






ScrollReveal().reveal('.everything_img', { delay: 200,origin: 'left',});
ScrollReveal().reveal('.everything_right_heading', { delay: 100,origin: 'right',});
ScrollReveal().reveal('.everything_right_desc', { delay: 200,origin: 'right',});
ScrollReveal().reveal('.banner_left_button_start', { delay: 400,origin: 'right',});



ScrollReveal().reveal('.customize_left_tr .customize_left_tr_td', { delay: 200,origin: 'right',interval: 200});

ScrollReveal().reveal('.trusted_content_top_heading', { delay: 100,origin: 'top',});
ScrollReveal().reveal('.trusted_content_top_desc', { delay: 200,origin: 'top',});
ScrollReveal().reveal('.trusted_content_middle_top', { delay: 300,origin: 'left',});
ScrollReveal().reveal('.trusted_content_middle_bottom', { delay: 400,origin: 'right',});

ScrollReveal().reveal('.learn_right .learn_right_img1 ', { delay: 100,origin: 'top',});
ScrollReveal().reveal('.learn_right .learn_right_img2 ', { delay: 100,origin: 'bottom',});
ScrollReveal().reveal('.learn_right .learn_right_img3 ', { delay: 100,origin: 'right',});


ScrollReveal().reveal('.support_heading', { delay: 100,origin: 'top',});
ScrollReveal().reveal('.support_desc', { delay: 200,origin: 'top',});
ScrollReveal().reveal('.support img', { delay: 300,origin: 'right',});

ScrollReveal().reveal('.footer_top_content_left', { delay: 100,origin: 'left',});
ScrollReveal().reveal('.footer_top_content_right', { delay: 100,origin: 'right',});

ScrollReveal().reveal('.footer_middle_ul .footer_middle_ul_li', { delay: 200,origin: 'bottom',interval: 200});
ScrollReveal().reveal('.footer_bottom_content .footer_bottom_content_list', { delay: 200,origin: 'bottom',interval: 200});






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









