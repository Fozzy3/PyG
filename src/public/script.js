

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
/* *** Funciones Varios *** */
function nosotros() {
    var elmnt = document.getElementById("nosotros");
    elmnt.scrollIntoView();
}

