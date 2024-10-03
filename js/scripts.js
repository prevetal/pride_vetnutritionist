document.addEventListener('DOMContentLoaded', function () {
	// Questions slider
	const questionsSliders = [],
		questions = document.querySelectorAll('.questions .swiper')

	questions.forEach((el, i) => {
		el.classList.add('questions_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.minHeight = 0)

					setHeight(items)
				}
			}
		}

		questionsSliders.push(new Swiper('.questions_s' + i, options))
	})


	// Create diet slider
	const createDietSliders = [],
		createDiet = document.querySelectorAll('.create_diet .swiper')

	createDiet.forEach((el, i) => {
		el.classList.add('create_diet_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.minHeight = 0)

					setHeight(items)
				}
			}
		}

		createDietSliders.push(new Swiper('.create_diet_s' + i, options))
	})


	// Doctors slider
	const doctorsSliders = [],
		doctors = document.querySelectorAll('.doctors .swiper')

	doctors.forEach((el, i) => {
		el.classList.add('doctors_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.photo').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.photo').outerHeight() * 0.5
						)
					})
				}
			}
		}

		doctorsSliders.push(new Swiper('.doctors_s' + i, options))
	})


	// Basis of life slider
	const basisOfLifeSliders = [],
		basisOfLife = document.querySelectorAll('.basis_of_life .swiper')

	basisOfLife.forEach((el, i) => {
		el.classList.add('basis_of_life_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.minHeight = 0)

					setHeight(items)
				}
			}
		}

		basisOfLifeSliders.push(new Swiper('.basis_of_life_s' + i, options))
	})


	// Vetnutritionist - Create diet
	$('.vetnutritionist .create_diet .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')

		parent.find('li.hide').slideToggle(250, () => {
			createDietSliders.forEach(slider => {
				let items = slider.el.querySelectorAll('.item')

				items.forEach(el => el.style.minHeight = 0)

				setHeight(items)
			})
		})
	})


	// Vetnutritionist - Prices
	$('.vetnutritionist .prices .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.prices')

		$(this).toggleClass('active')

		parent.find('.table_wrap').toggleClass('show')
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})
})



const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.minHeight = maxheight + 'px')
}