const collapse = document.getElementById('collapse');
const menu = document.getElementById('menu');

collapse.addEventListener('click', () => {
    if(menu.classList.contains('hidden'))
        menu.classList.remove('hidden');
    else
        menu.classList.add('hidden');
});