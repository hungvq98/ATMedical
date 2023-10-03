export default function CopyModule() {
    const copyBlock = document.querySelector('.copyBlock')
    if (copyBlock) {
        const sourceInput = copyBlock.querySelector('.sourceInput');
        const copyButton = copyBlock.querySelector('.copyButton');
        const txt = copyButton.querySelector('.txt')
        copyButton.addEventListener('click', async function () {
            // try {
            //     await navigator.clipboard.writeText(sourceInput.value);
            //     txt.innerText = txt.getAttribute('data-success')
            // } catch (error) {
            //     txt.innerText = txt.getAttribute('data-fail')
            // }


            sourceInput.select();

            // Sao chép nội dung đã chọn vào clipboard
            document.execCommand('copy');

            // Bỏ chọn nội dung
            window.getSelection().removeAllRanges();

            // Thông báo cho người dùng đã sao chép xong
                txt.innerText = txt.getAttribute('data-success')

        });


    }
}