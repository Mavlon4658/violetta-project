const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((item) => {
    const accBtn = item.querySelector('.accordion-btn');
    const accBody = item.querySelector('.accordion-body');
    const accImgs = item.querySelectorAll('.accordion-btn__icon img');

    accBtn.addEventListener('click', () => {
        accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            accImgs[0].classList.add('hidden');
            accImgs[1].classList.remove('hidden');
        } else {
            accImgs[0].classList.remove('hidden');
            accImgs[1].classList.add('hidden');
        }
    });
});

const bars = document.querySelector('.header-bars');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');

bars.onclick = () => {
    menu.classList.remove('hidden');
}

menuClose.onclick = () => {
    menu.classList.add('hidden')
}

const eductaionMoreBtn = document.querySelector('.education-more-btn');
const educationMoreText = document.querySelector('.education-more-text');

eductaionMoreBtn.onclick = () => {
    if (educationMoreText.classList.contains('hidden')) {
        eductaionMoreBtn.querySelector('svg').classList.add('rotate-180')
        educationMoreText.classList.remove('hidden');
        educationMoreText.classList.add('flex');
    } else {
        eductaionMoreBtn.querySelector('svg').classList.remove('rotate-180')
        educationMoreText.classList.add('hidden');
        educationMoreText.classList.remove('flex');
    }
}