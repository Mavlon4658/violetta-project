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