export default (function() {
    if (document.querySelector('.main__dropdown')) {
        const btn = document.querySelector('.main__dropdown-btn'),
              list = document.querySelector('.main__dropdown-list'),
              listItem = document.querySelectorAll('.main__dropdown-item'),
              input = document.querySelector('.main__dropdown-input');
              
        btn.addEventListener('click', () => {
            list.classList.toggle('main__dropdown-list--show');
        });
    
        listItem.forEach(item => {
            item.addEventListener('click', (e) => {
                const target = e.target;
    
                e.stopPropagation();
                btn.innerText = target.innerText;
                // dropDownBtn.focus();
    
                input.value = target.dataset.value;
                list.classList.remove('main__dropdown-list--show');
            });
        });
    
        document.addEventListener('click', (e) => {
            if (e.target !== btn) {
                list.classList.remove('main__dropdown-list--show');
            }
        });
    
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' || e.key === 'Escape') {
                list.classList.remove('main__dropdown-list--show');
            }
        });
    }
}());