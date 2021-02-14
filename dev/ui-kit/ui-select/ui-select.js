let select = () => {
    let selectCurrent = document.querySelectorAll('.js-select-header'),
        selectItem = document.querySelectorAll('.js-select-item');
    selectCurrent.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.currentTarget.parentElement.classList.toggle('is-open');
        })
    });
    selectItem.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.currentTarget.closest('.c-select').querySelector('.js-select-current').innerHTML = e.currentTarget.innerHTML;
            e.currentTarget.closest('.c-select').classList.remove('is-open');
        })
    });
};
