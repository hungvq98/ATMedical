
export default function Select2Module() {
    $(document).ready(function () {
        $('.re-select-main').select2();

        // 

        $(".re-select-main-side").select2({
            containerCssClass: "error",
            dropdownCssClass: "sidesl"
        });


        const selectTwo = document.querySelectorAll('.re-select-sl')
        if (selectTwo) {
            selectTwo.forEach(sl => {
                $(sl).select2();
                $(sl).on('select2:select', function (e) {
                    // const selectx = document.querySelectorAll(sl);
                    sl.closest('.form-ip').classList.add('active')
                    const formall = document.querySelectorAll('.form-list')
                    if (formall) {
                        formall.forEach(forms => {
                            const ip = forms.querySelectorAll('.form-ip')
                            ip.forEach(items => {
                                const input = items.querySelector('select')
                                if (input) {
                                    const text = items.querySelector('.text-abs')
                                    const textW = text.offsetWidth;
                                    items.setAttribute('style', '--kt:' + (textW / 10 + 4) + 'rem')
                                }
                            })
                        })
                    }
                });
            })
        }
    });
}