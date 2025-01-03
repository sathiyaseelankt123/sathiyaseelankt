// show menu

const showMenu = (toogleId, navId) => {
    const toogle = document.getElementById(toogleId, navId),
        nav = document.getElementById(navId);
    if (toogle && nav) {
        toogle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle', 'nav_menu');

// Active & Remove Active
const navLink = document.querySelectorAll('.nav_link');

navLink.forEach(n => n.classList.remove('active'))

function linkAction() {
    this.classList.add('active')
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

var enteredDate = "2012/12/10";
const period = new Date(new Date().getTime() - new Date(enteredDate).getTime())
var years = new Date(new Date() - new Date(enteredDate)).getFullYear() - 1970;
const months = period.getMonth();
document.getElementById('experienceCount').innerText = years + " Years & " + months + " Months";
document.getElementById('experienceCount1').innerText = years + " Years & " + months + " Months";