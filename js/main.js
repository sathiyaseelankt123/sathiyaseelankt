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
// Certifications Data (grouped)
const certifications = {
    Cloud: [
        {
            img: "https://udemy-certificate.s3.amazonaws.com/image/UC-46802a5c-7a0e-4452-8dd2-8e35a942f33b.jpg?v=1707412895000",
            link: "https://www.udemy.com/certificate/UC-46802a5c-7a0e-4452-8dd2-8e35a942f33b/"
        },
        {
            img: "https://udemy-certificate.s3.amazonaws.com/image/UC-63eee9e0-c337-45d9-b17d-a4fc5b9dd400.jpg?v=1678388640000",
            link: "https://www.udemy.com/certificate/UC-63eee9e0-c337-45d9-b17d-a4fc5b9dd400/"
        },
        {
            img: "https://udemy-certificate.s3.amazonaws.com/image/UC-06e60b67-9d0d-4fa2-9edb-00b218c0ad76.jpg?v=1653487317000",
            link: "https://www.udemy.com/certificate/UC-06e60b67-9d0d-4fa2-9edb-00b218c0ad76/"
        },
        {
            img: "https://udemy-certificate.s3.amazonaws.com/image/UC-48bad029-0d21-4c66-a4e8-febb45a6b37e.jpg?v=1714746354000",
            link: "https://www.udemy.com/certificate/UC-48bad029-0d21-4c66-a4e8-febb45a6b37e/"
        },
        {
            img: "https://media.licdn.com/dms/image/v2/D562DAQEbBhbuz68PyQ/profile-treasury-document-images_480/B56ZaUX9S2HgAc-/1/1746246031780?e=1752105600&v=beta&t=3DUmtCHjCU9JdCbks-bEJmIxaGtfQzcqKsl2dFDKolg",
            link: "https://www.udemy.com/certificate/UC-2c0f1b8d-4a6e-4b5c-bd7f-9e0f1b8d4a6e/"
        },
        {
            img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~OSUEAT8YR518/CERTIFICATE_LANDING_PAGE~OSUEAT8YR518.jpeg",
            link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~OSUEAT8YR518/CERTIFICATE_LANDING_PAGE~OSUEAT8YR518.jpeg"
        },
        {
            img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Y0K2ND32CJWA/CERTIFICATE_LANDING_PAGE~Y0K2ND32CJWA.jpeg",
            link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Y0K2ND32CJWA/CERTIFICATE_LANDING_PAGE~Y0K2ND32CJWA.jpeg"
        }
    
      
    ],
    Java: [],
    Angular: [],
    Others: []
};

// Render Certifications (Cloud group as example)
window.addEventListener('DOMContentLoaded', () => {
    const certContainer = document.querySelector('.certifications_container > div');
    if (certContainer) {
        // Get count of Cloud certifications
        const cloudCount = certifications.Cloud.length;
        // Add the title as a new div with blue font color and count
        const titleDiv = `<div style="color: blue; font-weight: bold; margin-bottom: 10px;">Cloud (${cloudCount})</div>`;
        const certsHtml = certifications.Cloud.map(cert => `
            <div class="certifications_img" style="margin: 10px; flex: 0 0 48%;">
                <a href="${cert.link}" target="_blank">
                    <img src="${cert.img}" alt="Certification" style="width: 100%; max-width: 100%; height: 100%; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                </a>
            </div>
        `).join('');
        certContainer.innerHTML = titleDiv + `
            <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between;">
                ${certsHtml}
            </div>
        `;
    }
});