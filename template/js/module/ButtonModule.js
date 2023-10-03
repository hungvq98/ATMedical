export default function () {
    const buttons = document.querySelectorAll('.buttons');
    if (buttons) {
        if (window.innerWidth < 800) {
            buttons.forEach(item => {
                item.addEventListener('click', () => {
                    centerButton(item)
                })
            })
            function centerButton(button) {
                const screenWidth = window.innerWidth;
                const buttonRect = button.getBoundingClientRect();
                const buttonCenter = buttonRect.left + buttonRect.width / 2;

                const scrollContainer = document.querySelector('.scrollContainer');
                const scrollAmount = buttonCenter - screenWidth / 2;
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });

                // const buttons = document.querySelectorAll('.partner-btn-item');
                // buttons.forEach((btn) => {
                //     btn.style.transform = 'scale(1)';
                // });

                // button.style.transform = 'scale(1.2)';
            }
        }
    }
}