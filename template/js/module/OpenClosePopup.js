

export default function OpenClosePopup() {
    try {
        const popup1 = document.getElementById("openpopup1");
        popup1.addEventListener("click", function () {
            document.querySelector(".overlay").classList.toggle("open");
            document.querySelector(".popup-nophoso").classList.toggle("open");
        });
        
        const popup = document.getElementById("openpopup");
        popup.addEventListener("click", function () {
            document.querySelector(".overlay").classList.toggle("open");
            document.querySelector(".popup-nophoso").classList.toggle("open");
        });
        
        const closePopup = document.getElementById("closepopup");
        closePopup.addEventListener("click", function () {
            document.querySelector(".overlay").classList.remove("open");
            document.querySelector(".popup-nophoso").classList.remove("open");
        });
        
    } catch (error) {
        console.log("Error:  " + error)
    }
    
}