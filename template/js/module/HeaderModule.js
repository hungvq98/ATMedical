export default function HeaderModule() {
    const header = document.querySelector(".header");
    const mobile = document.querySelector(".mobile");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const search = document.querySelector(".search-mona");

    function HandleHeader() {
        if (header && mobile && mobileOverlay) {
            if (window.scrollY > 0) {
                header.classList.add("sticky");
                mobile.classList.add("sticky");
                mobileOverlay.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
                mobile.classList.remove("sticky");
                mobileOverlay.classList.remove("sticky");
            }
        }
    }
    window.addEventListener("scroll", function() {
        HandleHeader();
    });
    $(document).ready(function() {
        HandleHeader();
    });


    const cart = document.querySelector(".cartJS")
    if(cart) {
        const cartMini = cart.querySelector('.cartMini')
        const cartOver = cart.querySelector('.cartOver')
        const cartClick = cart.querySelector('.cartClick')
        const cartClose = cart.querySelector('.cartClose')

        cartClick.addEventListener('click', ()=> {
            Open();
        })

        cartClose.addEventListener('click', ()=> {
            Close();
        })

        cartOver.addEventListener('click', ()=> {
            Close();
        })
        function Open () {
            cartMini.classList.add('open')
            cartOver.classList.add('open');
            $('body').css('overflow','hidden')
        }
        function Close () {
            cartMini.classList.remove('open')
            cartOver.classList.remove('open')
            $('body').css('overflow','normal')
        }
    }
}