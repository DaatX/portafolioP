/*==================== Mostrar MENU  ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // validar si existe la variable
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // agregamos la clase mostrar-menu a la etiqueta div con la clase nav_menu
            nav.classList.toggle('mostrar-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== Quitar MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
// Cuando hacemos clic en cada nav_link, eliminamos la clase mostrar-menu
    navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*===================== MOSTRAR DESPLAZAMIENTO ARRIBA =====================*/

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // Cuando el desplazamiento tiene una altura superior a 560 de la ventana gráfica, agrega la clase show-scroll 
    //a la etiqueta a con la clase scroll-top
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== TEMA DE LUZ OSCURA ====================*/
const themeButton = document.getElementById('tema-boton')
const darkTheme = 'dark-tema'
const iconTheme = 'bx-sun'

// Tema previamente seleccionado (si el usuario lo seleccionó)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que tiene la interfaz validando la clase de tema oscuroconst getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Validamos si el usuario eligió previamente un tema
if (selectedTheme) {
// Si se cumple la validación preguntamos cual fue el problema para saber si activamos o desactivamos el dark  
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

//Activar/desactivar el tema manualmente con el botón
themeButton.addEventListener('click', () => {
// Agregar o eliminar el tema oscuro/icono
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
// Guardamos el tema y el icono actual que eligió el usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== REDUCIR EL TAMAÑO E IMPRIMIR EN UNA HOJA A4 =================== =*/
function scaleCv(){
    document.body.classList.add('scale-cv')
}

/*==================== QUITAR EL TAMAÑO CUANDO SE DESCARGUE EL CV ===================== */
function removeScale(){
    document.body.classList.remove('scale-cv')
}


/*==================== GENERAR PDF =====================*/
// área generada en PDF

let areaCv = document.getElementById('area-cv')

let resumenButton = document.getElementById('resumen-boton')


// opciones HTML2pdf
let opt = {
    margin:       0,
    filename:     'CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  };


// Función para llamar a las opciones areaCv y Html2Pdf

function generateResumen(){
    html2pdf(areaCv, opt)
}


// Cuando se hace clic en el botón, ejecuta las tres funciones
resumenButton.addEventListener('click', () =>{


     // 1. Se agrega la clase .scale-cv al cuerpo, donde reduce el tamaño de los elementos
    scaleCv()

     // 2. Se genera el PDF
    generateResumen()

     // 3. La clase .scale-cv se elimina del cuerpo después de 5 segundos para volver a su tamaño normal.
    setTimeout(removeScale, 5000)
})