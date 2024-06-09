// typing animacion

var typed = new Typed(".typing", {
    strings: ["", " ", "Desarrollador Front End"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// aside de navegador
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {

    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {

        removeBackSection();

        for (let j = 0; j < totalNavList; j++) {

            if (navList[j].querySelector("a").classList.contains("active")) {

                addBackSection(j);
                // allSection[j].classList.add("back-section");

            }

            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active")
        showSection(this);

        // que se cierre el menu a aprentar una direccion
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }

    })
}
// remove la parte de atra de la section
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {

        allSection[i].classList.remove("back-section");
    }
}
// agregar la nueva section atras
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {

    for (let i = 0; i < totalSection; i++) {

        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

// boton de hambuguesa
function updateNav(elemnt) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        // funcion de url amigable
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[i]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
// boton de contracto amigable
document.querySelector(".hire-me").addEventListener("click", function() {

    const sectionIndex = this.getAttribute("data-section-index");

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);

})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {

    asideSectionTogglerBtn();
})

// funcion para abril hambuguesa
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    // mover los de adentro al centro para verlo bien al abrir el menu
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


// imagen en grande
document.querySelectorAll('.portafolio .portafolio-img img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
}

//  filtro del boton portafolio

$(document).ready(function() {

    $('.portafolio .container .row .btn').click(function() {

        let filter = $(this).attr('data-filter');

        if (filter == 'todos') {
            $('.portafolio .row .portafolio-item').show('400')
        } else {
            $('.portafolio  .row .portafolio-item').not('.' + filter).hide('200');
            $('.portafolio  .row .portafolio-item').filter('.' + filter).show('400');
        }

    });

});

// EmailJS

const contactoForm = document.getElementById('contacto-formu'),
    contactoMensaje = document.getElementById('contacto-mensaje'),
    contactoNombre = document.getElementById('contacto-n'),
    contactoTelefono = document.getElementById('contacto-t'),
    contactoUsuario = document.getElementById('contacto-u'),
    contactoMen = document.getElementById('contacto-m')

const sendEmail = (e) => {

    e.preventDefault()

    //comprobar si los campos tienen un valor
    if (contactoNombre.value === '' , contactoTelefono.value === '' , contactoUsuario.value === '' , contactoMen.value === '') {

        //agregar y quitar color
        contactoMensaje.classList.remove('color-green')
        contactoMensaje.classList.add('color-red')

        //Mostrar mensaje
        contactoMensaje.textContent = 'Debes ingresar los datos 📝☝️'

        //eliminar mensaje ocho segundos
        setTimeout(() => {
            contactoMensaje.textContent = ''
        }, 8000)

    } else {
        //serviceID, templateID, #form, publicKey

        emailjs.sendForm('service_bdfztzo', 'template_opkkxoy', '#contacto-formu', 'xOKc-CCDpRZNg3slM')
            .then(() => {

                //agregar color y mostrar mensaje
                contactoMensaje.classList.add('color-green')
                contactoMensaje.textContent = 'El Mensaje Fue Exitosamente Envidado 👍'

                //eliminar mensaje ocho segundos
                setTimeout(() => {
                    contactoMensaje.textContent = ''
                }, 8000)
            }, (error) => {

                //error de envío de correo
                alert('OOPS! ALGO HA FALLADO...', error)

            })

        //Para borrar el campo de entrada
        contactoNombre.value = ''
        contactoTelefono.value = ''
        contactoUsuario.value = ''
        contactoMen.value = ''
    }
}

contactoForm.addEventListener('submit', sendEmail)


const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
})