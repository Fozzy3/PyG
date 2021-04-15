/******************************* Animaciones de las ilustraciones *******************************/
if (
    window.location.pathname == "/servicios" ||
    window.location.pathname == "/"
) {
    window.addEventListener("scroll", function () {
        let animacion = document.getElementById("animado");
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = "mover 2s ease-out";
        }
    });
}
if (window.location.pathname == "/servicios") {
    window.addEventListener("scroll", function () {
        let animacion = document.getElementById("animado2");
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = "mover 2s ease-out";
        }
    });
}
if (window.location.pathname == "/servicios") {
    window.addEventListener("scroll", function () {
        let animacion = document.getElementById("animado3");
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = "mover 2s ease-out";
        }
    });
}
if (
    window.location.pathname == "/servicios" ||
    window.location.pathname == "/"
) {
    window.addEventListener("scroll", function () {
        let animacion = document.getElementById("animado4");
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = "moverder 2s ease-out";
        }
    });
}

if (window.location.pathname == "/servicios") {
    window.addEventListener("scroll", function () {
        let animacion = document.getElementById("animado5");
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = "moverder 2s ease-out";
        }
    });
}

function nosotros() {
    var elmnt = document.getElementById("nosotros");
    elmnt.scrollIntoView();
}

/******************************* Funciones del Boton Go up *******************************/
var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
};

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

/******************************* Estilizacion del Api Google Maps *******************************/

function iniciarMap() {
    var coord = {
        lat: 4.668647379552905,
        lng: -74.1354106706503
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: coord,
        styles: [{
                elementType: "geometry",
                stylers: [{
                    color: "#1d2c4d",
                }, ],
            },
            {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#8ec3b9",
                }, ],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#1a3646",
                }, ],
            },
            {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#4b6878",
                }, ],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#64779e",
                }, ],
            },
            {
                featureType: "administrative.province",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#4b6878",
                }, ],
            },
            {
                featureType: "landscape.man_made",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#334e87",
                }, ],
            },
            {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{
                    color: "#023e58",
                }, ],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#283d6a",
                }, ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#6f9ba5",
                }, ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#1d2c4d",
                }, ],
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#023e58",
                }, ],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#3C7680",
                }, ],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    color: "#304a7d",
                }, ],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#98a5be",
                }, ],
            },
            {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#1d2c4d",
                }, ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: "#2c6675",
                }, ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#255763",
                }, ],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#b0d5ce",
                }, ],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#023e58",
                }, ],
            },
            {
                featureType: "transit",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#98a5be",
                }, ],
            },
            {
                featureType: "transit",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#1d2c4d",
                }, ],
            },
            {
                featureType: "transit.line",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#283d6a",
                }, ],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{
                    color: "#3a4762",
                }, ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#0e1626",
                }, ],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#4e6d70",
                }, ],
            },
        ],
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

    /******************************* Descripcion del Puntero rojo en el Mapa *******************************/

    const contentString =
        '<section id="body-string">' +
        '<div class="coupon">' +
        '<div class="container-string">' +
        '<h3>PyQ Consultores</h3>' +
        '</div>' +
        '<div class="container-string">' +
        '<ul class="info">' +
        '<p>' +
        '<li>' +
        '<span><i class="fa fa-map-marker" aria-hidden="true"></i></span>' +
        '<span>20C No. 93 - 25 Bl-3 Ap 402 Barrio </span>' +
        '<span>⠀⠀⠀Modelia Bogota D.C</span><br>' +
        '</li>' +
        '<li>' +
        '<span><i class="fa fa-phone" aria-hidden="true"></i></span>+57 703 1567<br>' +
        '</li>' +
        '<li>' +
        '<span><i class="fa fa-phone" aria-hidden="true"></i></span>+57 318 391 7672<br>' +
        '</li>' +
        '<li>' +
        '<span><i class="fa fa-envelope" aria-hidden="true"></i></span>diana.parga@pyqconsultores.com<br>' +
        '</li>' +
        '</ul>' +
        '</p>' +
        '</div>' +
        '<div class="container-string">' +
        '<p>' +
        '<strong>Nuestras Redes Sociales</strong><br>' +
        '<ul class="sci">' +
        '<li><a href="https://www.facebook.com/PQ-Consultores-103499955203834" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>' +
        '<li><a href="https://www.instagram.com/pqconsultores/?hl=es-la4" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>' +
        '<li><a href="https://twitter.com/ConsultoresQ" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>' +
        '<li><a href="https://www.linkedin.com/onboarding/start/people-you-may-know/new/Q" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>' +
        '</ul>' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</section>';

    var infoWindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener("click", toggleBounce);

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}

iniciarMap();

function dontBack() {
    history.forward()
}