$(document).ready(() => {

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var distancia = $($anchor.attr('href')).offset().top - 50;

        $('html, body').stop().animate({
            scrollTop: distancia
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.owl-carousel').owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    var slideHeight = $(window).height();
    var slideWidth = $(window).width();

    if (slideWidth < 600) {
        slideHeight = 400;
    }
    $('#owl-hero .item').css('height', slideHeight);
    $(window).resize(function() {
        $('#owl-hero .item').css('height', slideHeight);
    });

    google.maps.event.addDomListener(window, 'load', initialize);

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

});





function initialize() {
    var mapCanvas = document.getElementById('map');
    if (mapCanvas != null) {
        var mapOptions = {
            center: new google.maps.LatLng(25.667813, -100.353401),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }


        var map = new google.maps.Map(mapCanvas, mapOptions);
        var myLatLng = { lat: 25.667813, lng: -100.353401 };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Estacionamiento Sendero1'
        });
        var myLatLng = { lat: 25.786390, lng: -100.137628 };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'SAFE CCC'
        });
    }
}