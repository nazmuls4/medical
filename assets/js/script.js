// const navbar_toggler = document.getElementById('menu-btn')
// const mobile_menu = document.getElementById('menu')

// navbar_toggler.addEventListener('click', () =>{
//     navbar_toggler.classList.toggle('open')
//     mobile_menu.classList.toggle('flex')
//     mobile_menu.classList.toggle('hidden')
// })


$(document).ready(function () {         
    
    
    // active menu class
    $(".navbar-toggler").click(function() {
        $(".navbar-toggler").toggleClass("true");
        $(".navbar-toggler").toggleClass("false");
        $(".mobile_menu").removeClass("hidden");
        $(".mobile_menu").addClass("addhidden");
    }); 
    // active menu class
    $(".exit_btn").click(function() {
        $(".mobile_menu").addClass("hidden");
        $(".navbar-toggler").removeClass("true");
        $(".mobile_menu").removeClass("addhidden");
    }); 

     // aos animation
    AOS.init({
        easing: 'ease-in-out',
        anchorPlacement: 'center center',
        duration: 700,
        throttleDelay: 400,
        once: true,
        disable: 'mobile',
    })

//   $(".ooff-canvas-menu .close").click(function() {
//       $(".ooff-canvas-menu").removeClass("closemenu");
//   });   
    
//   $("button.navbar-toggler").click(function() {
//       $("body.page").toggleClass("bodyeffect");
//   });    

//   $(".ooff-canvas-menu .close").click(function() {
//       $("button.navbar-toggler").addClass("collapsed");
//   });  
     


    $('.slider_inner_area').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        speed: 300,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 2,
                }
            },

            {
                breakpoint: 575,
                settings: {
                slidesToShow: 1,
                }
            }
    ]
    });

    $('.patient_slider_area_wrapper_list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true, 
        prevArrow: '<div class="slick-arrow slick-prev fa-solid fa-arrow-left"></div>',
        nextArrow: '<div class="slick-arrow slick-next fa-solid fa-arrow-right"></div>',
    });



}) 

    
    


 