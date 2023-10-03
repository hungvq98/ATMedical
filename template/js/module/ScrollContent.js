export default function scrollContent() {
	const speed = 300;
	// NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
	const hash = window.location.hash;
	if ($(hash).length) scrollToID(hash, speed);
	// TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
	$('.megas .menu-link').on('click', function (e) {
		e.preventDefault();

		const href = $(this).find('> a').attr('href') || $(this).attr('href');
		const id = href.slice(href.lastIndexOf('#'));
		if ($(id).length) {
			scrollToID(id, speed);
		} else {
			// window.location.replace(`/${id}`);
			window.location.href = href;
		}
	});
	// HÀM SCROLL CHO MƯỢT MÀ
	function scrollToID(id, speed) {
		const offSet = $('.header').outerHeight();
		const section = $(id).offset();
		const targetOffset = section.top - offSet - 0;
		$('html,body').animate({ scrollTop: targetOffset }, speed);
	}


	const sections = document.querySelectorAll(".sec");
	const nav = document.querySelector(".megas .menu-link");
	const anchors = document.querySelectorAll(".megas .menu-link");
	const headerHeight = document.querySelector(".header").offsetHeight;
	if (anchors && sections && nav) {
		const secs = [];

		function removeActive() {
			anchors.forEach((e) => e.classList.remove("current-menu-item"));
		}

		anchors.forEach((link) => {
			let id = link.getAttribute("href").slice(1);
			let sec = document.querySelector(`#${id}`);

			secs.push(sec);
			link.addEventListener("click", (e) => {
				e.preventDefault();

				window.scrollTo({
					top: sec.offsetTop - 30,
					behavior: "smooth",
				});
			});
		});

		window.addEventListener("scroll", () => {
			let scrollY = window.scrollY;
			secs.forEach((item, index) => {
				if (scrollY > item.offsetTop - 200) {
					removeActive();
					anchors[index].classList.add("current-menu-item");
				} else {
					anchors[index].classList.remove("current-menu-item");
				}
			});
		});

		document.addEventListener('scroll', function () {
			// Kiểm tra tất cả các section
			sections.forEach(section => {
				const sectionTop = section.getBoundingClientRect().top;

				// Nếu section trên màn hình
				if (sectionTop >= 0 && sectionTop <= window.innerHeight) {
					// Thêm class active
					section.classList.add('active');
				} else {
					// Loại bỏ class active
					section.classList.remove('active');
				}
			});
		});

		function addActiveClass() {
			const scrollPosition = window.scrollY;

			// Get the top position of the first section
			const firstSectionTop = sections[0].offsetTop - 80;

			if (scrollPosition >= firstSectionTop) {
				// Add "active" class to the nav
				nav.classList.add("active");
			} else {
				// Remove "active" class from the nav
				nav.classList.remove("active");
			}
		}

		// Add event listener for scroll events
		window.addEventListener("scroll", addActiveClass);
	}

}