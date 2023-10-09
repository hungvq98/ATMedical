export default function InputModule() {
    const formall = document.querySelectorAll('.form-list')
    if (formall) {
        formall.forEach(forms => {
            const ip = forms.querySelectorAll('.form-ip')
            ip.forEach(items => {
                const input = items.querySelector('input')
                const textarea = items.querySelector('textarea')
                if (input) {
                    const text = items.querySelector('.text-abs')
                    if (input.value != '') {
                        input.closest('.form-ip').classList.add('active')
                    }
                    else {
                        input.closest('.form-ip').classList.remove('active')
                    }
                    input.addEventListener('input', () => {
                        if (input.value != '') {
                            input.closest('.form-ip').classList.add('active')
                        }
                        else {
                            input.closest('.form-ip').classList.remove('active')
                        }
                    })
                    input.addEventListener('focus', () => {
                        input.closest('.form-ip').classList.add('focus')
                    })
                    input.addEventListener('blur', () => {
                        input.closest('.form-ip').classList.remove('focus')
                        if (input.value == '') {
                            input.closest('.form-ip').classList.remove('active')
                        }
                    })

                }
                if (textarea) {
                    const text = items.querySelector('.text-abs')
                    console.log('alo')
                    if (text) {
                        text.classList.add('field')
                    }
                    if (textarea.value != '') {
                        textarea.closest('.form-ip').classList.add('active')
                    } else {
                        textarea.closest('.form-ip').classList.remove('active')
                    }
                    textarea.addEventListener('input', () => {
                        if (textarea.value != '') {
                            textarea.closest('.form-ip').classList.add('active')
                        } else {
                            textarea.closest('.form-ip').classList.remove('active')
                        }
                    })
                    textarea.addEventListener('focus', () => {
                        textarea.closest('.form-ip').classList.add('focus')
                    })
                    textarea.addEventListener('blur', () => {
                        textarea.closest('.form-ip').classList.remove('focus')
                        if (textarea.value == '') {
                            textarea.closest('.form-ip').classList.remove('active')
                        }
                    })
                }

            })
        })

    }

    const chose = document.querySelectorAll('.upfile');
    if (chose) {
        chose.forEach(item => {
            const ip = item.querySelector('input')
            const label = item.querySelector('.label-txt')
            ip.addEventListener('change', (e) => {
                const files = ip.files;
                for (const file of files) {
                    label.innerHTML = file.name
                }
            })
        })
    }

    const star = document.querySelectorAll('.rating .stars');

    if (star) {
        star.forEach((item, index) => {
            item.addEventListener('click', () => {

                star.forEach((item2, i) => {
                    if (i <= index) {
                        item2.classList.add('active')
                    } else {
                        item2.classList.remove('active')

                    }
                })
            })
        })
    }

    const book = document.querySelector('.book')
    const cursor = document.querySelector(".cs");
    if (book) {
        
        book.addEventListener("mousemove", (e) => {
            cursor.classList.add('inside')
            cursor.style.left = e.pageX + "px";
            cursor.style.top = e.pageY + "px";
        });
        book.addEventListener("mouseout", (e) => {
            cursor.classList.remove('inside')
        });
    }

}