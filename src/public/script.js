

/* ****** Animaciones ****** */
if (window.location.pathname == "/servicios" || window.location.pathname == "/") {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'mover 2s ease-out'
        }
    })
}
if (window.location.pathname == "/servicios") {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado2');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'mover 2s ease-out'
        }
    })

}
if (window.location.pathname == "/servicios") {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado3');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'mover 2s ease-out'
        }
    })
}
if (window.location.pathname == "/servicios" || window.location.pathname == "/") {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado4');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'moverder 2s ease-out'
        }
    })
}

if (window.location.pathname == "/servicios") {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado5');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'moverder 2s ease-out'
        }
    })
}

/**** Funciones Varios ****/

function nosotros() {
    var elmnt = document.getElementById("nosotros");
    elmnt.scrollIntoView();
}

/**** Boton Top ****/
var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*** mapa *****/
function iniciarMap() {
    var coord = { lat: 4.668647379552905, lng: -74.1354106706503 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: coord,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0e1626"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,

    });

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    const contentString =
    '<section id="body-string">' +
        '<div class="card">' +
        '<div class="card-image"></div>' +
        '<div class="card-text">' +
        '<span class="date">4 days ago</span>' +
        '<h2>Post One</h2>' +
        '<p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>' +
        '</div>' +
    '</section>';

    var infoWindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener('click', toggleBounce)

    marker.addListener('click', () => {
        infoWindow.open(map, marker)
    })
}

iniciarMap();