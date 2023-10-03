import { CountUp } from "../library/countUp/countUp.min.js";
export default function CountUpModule() {
    let num = document.querySelectorAll(".countNum");
    num.forEach((v) => {
        let n = parseInt(v.textContent);
        var countUp = new CountUp(v, n, {
            separator: ".",
            decimal: '.',
        });
        let check = true;
        window.addEventListener("scroll", () => {
            if (v.getBoundingClientRect().top < window.innerHeight && check) {
                countUp.start();
                check = false;
            }
        });
        window.addEventListener('load', ()=> {
            if (v.getBoundingClientRect().top < window.innerHeight && check) {
                countUp.start();
                check = false;
            }
        })
    });


    let a = 0;
    let counterBlock = document.querySelector(".counter-js");
    if (counterBlock) {
        let oTop = counterBlock.offsetTop - window.innerHeight;
        $(window).on("scroll", function () {
            if (a == 0 && $(window).scrollTop() > oTop) {
                console.log($(".numb-count").attr("data-count"));
                $(".numb-count").each(function () {
                    let $this = $(this),
                        countTo = $this.attr("data-count");
                    $({
                        countNum: $this.text(),
                    }).animate(
                        {
                            countNum: countTo,
                        },

                        {
                            duration: 2000,
                            easing: "swing",
                            step: function () {
                                $this.text(Math.floor(this.countNum) < 10 ? `${Math.floor(this.countNum)}` : `${Math.floor(this.countNum)}`);
                            },
                            complete: function () {
                                $this.text(Math.floor(this.countNum) < 10 ? `${Math.floor(this.countNum)}` : `${Math.floor(this.countNum)}`);
                            },
                        }
                    );
                });
                a = 1;
            }
        });
    } else {
        return;
    }



    
}