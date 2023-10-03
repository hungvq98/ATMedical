export default function TabModule() {

    let tab = document.querySelectorAll('.tabJS');
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll('.tabBtn');
            let tPanel = t.querySelectorAll('.tabPanel');
            // let tSort = t.querySelectorAll('.tabSort');

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add('active');
                tPanel[0].classList.add('open');
                // tSort[0].classList.add('active');
                $(tPanel[0]).slideDown();

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener('click', showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove('active');
                            tPanel[a].classList.remove('open');
                            // tSort[a].classList.remove('active');
                            // $(tPanel[a]).slideUp(400);

                        }
                        tBtn[i].classList.add('active');
                        tPanel[i].classList.add('open');
                        // tSort[i].classList.add('active');
                        // $(tPanel[i]).slideDown(400);

                    }
                }
            }
        });
    }

     // tab in tab 
     let tabPr = document.querySelectorAll(".tabParent");
    //  let btnPrev = document.querySelector(".tabParent .prevs")
    //  let btnNext = document.querySelector(".tabParent .nexts")
 
     if (tabPr) {
         tabPr.forEach((t) => {
             let tBtn = t.querySelectorAll(".tabParentBtn");
             let tPanel = t.querySelectorAll(".tabParentPanel");
             let flag = 0;
             // for tab
            //  function tab(number) {
            //      tBtn.forEach(btn => {
            //          btn.classList.remove("active")
            //      })
            //      tPanel.forEach(btn => {
            //          btn.classList.remove("open")
            //      })
            //      tBtn[number].classList.add('active')
            //      tPanel[number].classList.add('open')
 
            //      if (flag > 0) {
            //          btnPrev.classList.add('active')
            //      }
            //      if (flag < (tBtn.length - 1)) {
            //          btnNext.classList.add('active')
            //      }
 
            //      if (flag == 0) {
            //          btnPrev.classList.remove('active')
 
            //      }
            //      if (flag == (tBtn.length - 1)) {
            //          btnNext.classList.remove('active')
            //      }
 
            //  }
             if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                 tBtn[0].classList.add("active");
                 tPanel[0].classList.add("open");
 
                //  if (flag > 0) {
                //      btnPrev.classList.add('active')
                //  }
                //  if (flag < (tBtn.length - 1)) {
                //      btnNext.classList.add('active')
                //  }
 
                //  btnPrev.addEventListener('click', () => {
                //      if (flag > 0) {
                //          flag--;
                //          btnPrev.classList.add('active')
                //      }
 
                //      if (flag == 0) {
                //          btnPrev.classList.remove('active')
 
                //      }
 
                //      if (flag < (tBtn.length - 1)) {
                //          btnNext.classList.add('active')
                //      }
 
                //      tab(flag)
                //  })
 
                //  btnNext.addEventListener('click', () => {
                //      if (flag < (tBtn.length - 1)) {
                //          flag++;
                //          btnNext.classList.add('active')
                //      }
                //      if (flag == (tBtn.length - 1)) {
                //          btnNext.classList.remove('active')
                //      }
 
                //      if (flag > 0) {
                //          btnPrev.classList.add('active')
                //      }
 
                //      tab(flag)
                //  })
                 for (let i = 0; i < tBtn.length; i++) {
                     tBtn[i].addEventListener("click", showPanel);
                     function showPanel(e) {
                         e.preventDefault();
                         for (let a = 0; a < tBtn.length; a++) {
                             tBtn[a].classList.remove("active");
                             tPanel[a].classList.remove("open");
                         }
                         tBtn[i].classList.add("active");
                         tPanel[i].classList.add("open");
                        //  flag = i;
                        //  tab(flag)
                     }
                 }
             }
             const tabChild = t.querySelectorAll('.tabChild');
 
             tabChild.forEach(t => {
                 let tBtnchild = t.querySelectorAll(".tabChildBtn");
                 let tPanelchild = t.querySelectorAll(".tabChildPanel");
                 if (tBtnchild.length !== 0 && tPanelchild.length === tBtnchild.length) {
                     tBtnchild[0].classList.add("active");
                     tPanelchild[0].classList.add("open");
 
                     for (let i = 0; i < tBtnchild.length; i++) {
                         tBtnchild[i].addEventListener("click", showPanel);
 
                         function showPanel(e) {
                             e.preventDefault();
                             for (let a = 0; a < tBtnchild.length; a++) {
                                 tBtnchild[a].classList.remove("active");
                                 tPanelchild[a].classList.remove("open");
                             }
                             tBtnchild[i].classList.add("active");
                             tPanelchild[i].classList.add("open");
                         }
                     }
                 }
             })
         });
     }
}