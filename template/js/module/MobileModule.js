export default function MobileModule() {
    const burgerBtn = document.getElementById("hamburger");
    const mobile = document.querySelector(".mobile");
    const mobileOverLay = document.querySelector(".mobile-overlay");
    const body = document.getElementsByTagName("body")[0];
    const header = document.querySelector(".header");
    const mobileClose = document.querySelector(".mobile-close");
    let isOpen = false;

    function HandleOpen() {
        isOpen = !isOpen;
        if (isOpen) {
            burgerBtn.classList.add("active");
            mobile.classList.add("open");
            mobileOverLay.classList.add("open");
            body.classList.add("no-scroll");

        } else {
            burgerBtn.classList.remove("active");
            mobile.classList.remove("open");
            mobileOverLay.classList.remove("open");
            body.classList.remove("no-scroll");
        }
    }

    function HandleClose() {
        isOpen = false;
        burgerBtn.classList.remove("active");
        mobile.classList.remove("open");
        mobileOverLay.classList.remove("open");
        header.classList.remove("sticky");
        body.classList.remove("no-scroll");
    }

    if (burgerBtn) {
        burgerBtn.addEventListener("click", () => {
            HandleOpen()
        });
    }
    if (mobileClose) {
        mobileClose.addEventListener("click", function() {
            HandleClose()
        });
    }
    if (mobileOverLay) {
        mobileOverLay.addEventListener("click", function() {
            HandleClose()
        });
    }
    const menuNavs = document.querySelectorAll(".header .menu-nav");
    if (menuNavs) {
        menuNavs.forEach((item) => {
            const menuLinks = item.querySelectorAll(".menu-item.dropdown .menu-link");
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                const contentNew = `${contentOld} <i class="fas fa-caret-down"></i>`;
                item.innerHTML = contentNew;
            });
        });
    }
    const arrowIcon = document.querySelectorAll(
        ".mobile-nav .menu-list .menu-item a i"
    );
    if (arrowIcon) {
        arrowIcon.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const menu =
                    item.parentElement.parentElement.querySelectorAll(".menu-list")[0];
                $(menu).slideToggle();
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }


    // const srch = document.querySelector('.header-srch')
    // if (srch) {
    //     const srchInput = srch.querySelector('.header-srch-f')
    //     const srchInputs = srch.querySelector('.header-srch-f input')
    //     const srchClose = srch.querySelector('.srch-close-js')
    //     const srchOpen = srch.querySelector('.srch-open-js')
    //     srchOpen.addEventListener('click', () => {
    //         srchInput.classList.add('active');
    //         setTimeout(()=> {
    //             srchInputs.focus();
    //         },500)
    //     })
        
    //     document.addEventListener('click', (e) => {
    //         if (!e.target.matches('.header-srch, .header-srch *')) {
    //             srchInput.classList.remove('active')
    //         }
    //     })
    //     srchClose.addEventListener('click', ()=> {
    //         srchInput.classList.remove('active')
    //         console.log('cc')
    //     })
    // }
}