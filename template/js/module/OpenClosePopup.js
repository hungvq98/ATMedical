
export default function OpenClosePopup() {
    try {
        const popup1 = document.getElementById("openpopup1");
        popup1.addEventListener("click", function () {
            document.querySelector(".chitiet-tuyendung-overlay").classList.toggle("chitiet-tuyendung-open");
            document.querySelector(".popup-nophoso").classList.toggle("chitiet-tuyendung-open");
        });

        const popup = document.getElementById("openpopup");
        popup.addEventListener("click", function () {
            document.querySelector(".chitiet-tuyendung-overlay").classList.toggle("chitiet-tuyendung-open");
            document.querySelector(".popup-nophoso").classList.toggle("chitiet-tuyendung-open");
        });

        const closePopup = document.getElementById("closepopup");
        closePopup.addEventListener("click", function () {
            document.querySelector(".chitiet-tuyendung-overlay").classList.remove("chitiet-tuyendung-open");
            document.querySelector(".popup-nophoso").classList.remove("chitiet-tuyendung-open");
        });

        const closePopup1 = document.getElementById("overlay-close");
        closePopup1.addEventListener("click", function () {
            document.querySelector(".chitiet-tuyendung-overlay").classList.remove("chitiet-tuyendung-open");
            document.querySelector(".popup-nophoso").classList.remove("chitiet-tuyendung-open");
        });

    } catch (error) {
        console.log("Error:  " + error)
    }

}