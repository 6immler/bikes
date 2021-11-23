export default (function() {
    if (document.querySelector('.modal')) {
        const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modal--show');
                modal.classList.remove('modal--hide');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeModal() { 
            modal.classList.add('modal--hide');
            modal.classList.remove('modal--show');
            document.body.style.overflow = '';
        }

        modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => { 
            if (e.code === 'Escape' && modal.classList.contains('modal--show')) {
                closeModal();
            }
        });
    }
}());