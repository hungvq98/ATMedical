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
                    input.addEventListener('blur', () => {
                        if (input.value == '') {
                            input.closest('.form-ip').classList.remove('active')
                        }
                    })
                }
                if (textarea) {
                    const text = items.querySelector('.text-abs')

                    text.classList.add('field')
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
                    textarea.addEventListener('blur', () => {
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

    if(star) {
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
}