

/* ****** Animaciones ****** */
if (typeof (window) !== 'undefined') {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'mover 2s ease-out'
        }
    })
}
if (typeof (window) !== 'undefined') {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado2');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'mover 2s ease-out'
        }
    })
}

if (typeof (window) !== 'undefined') {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado3');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'mover 2s ease-out'
        }
    })
}

if (typeof (window) !== 'undefined') {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animado4');
        let posicionob1 = animacion.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight;

        if (posicionob1 < tamañoPantalla) {
            animacion.style.animation = 'moverder 2s ease-out'
        }
    })
}

if (typeof (window) !== 'undefined') {
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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}