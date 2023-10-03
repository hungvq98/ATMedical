export default function TextAniModule() {
    Splitting({
        target: "[data-spl]",
    });

    Splitting({
        target: "[data-spl-line]",
        by: "lines"
    });


    const text = document.querySelectorAll(".backToTop .circle-txt");
    if(text) {
        text.forEach(items => {
            items.innerHTML = items.innerHTML
            .split("")
            .map(
                (char, i) => `<span style="transform:rotate(${i * 8.8}deg)">${char}</span>`
            )
            .join("");
        })
       
    }
}