// Ron
const bios = document.querySelectorAll('.bio-text'),
bio = document.querySelector('#bio'),
closeBtn = document.querySelectorAll('.btn-close'),
images = document.querySelectorAll('img')

//reveals bio information
bio.addEventListener('click', (e) => {
    bios.forEach(bio => bio.style.display = 'none')
    images.forEach(image => image.style.opacity = '1')
    closeBtn.forEach(closer => closer.style.display = 'none')

    const el = e.target.parentElement;

    const bioText = el.querySelector('.bio-text')
    bioText.style.display = 'block';

    const bioPic = el.querySelector('img')
    bioPic.style.opacity = '0.5'

    el.querySelector('.btn-close').style.display = 'block'
});
