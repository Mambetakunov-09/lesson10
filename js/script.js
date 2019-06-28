$('#team-1').owlCarousel({
    navigation: false, // show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    // items:4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
    // itemsCustom: [
    //     [0, 4],
    //     [450, 2],
    //     [600, 2],
    //     [700, 2],
    //     [1000, 4],
    //     [1200, 4],
    //     [1400, 4],
    //     [1600, 4],
    // ]
})
$('#clients-1').owlCarousel({
    navigation: false, // show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    // items:5,
    // itemsCustom: [
    //     [0, 4],
    //     [450, 2],
    //     [600, 2],
    //     [700, 2],
    //     [1000, 4],
    //     [1200, 4],
    //     [1400, 4],
    //     [1600, 4],
    // ]
});
$('#client-s1').owlCarousel({
    navigation: false, // show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
    // items: 1
    // itemsCustom: [
    //     [0, 4],
    //     [450, 2],
    //     [600, 2],
    //     [700, 2],
    //     [1000, 4],
    //     [1200, 4],
    //     [1400, 4],
    //     [1600, 4],
    // ]

})

$('.mobile-bnt').on('click', function () {
    $('.list-items').toggleClass('active')
    $('.mobile-bnt').toggleClass('active')
});
$('.list-item a').on('click', function () {
    $('.list-items').removeClass('active')
});
