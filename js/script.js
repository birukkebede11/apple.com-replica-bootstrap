$( document ).ready(function() {
	// $(".footer-links-wrapper h3").click(function(){
	// 	// if ($(window).width() < 768) {
	// 		$(this).next('ul').slideToggle();
	// 			$(this).toggleClass('expanded');
	// 		// } else {
	// 			// $(this).next('ul').show();
	// 		// }
	// });

	if ($(window).width() <= 768) {
		$(".footer-links-wrapper").addClass("someClass");
	} else {
		$(".footer-links-wrapper").removeClass("someClass");
	}
	$(window).on("resize", function (event) {
		if ($(window).width() <= 768) {
			$(".footer-links-wrapper").addClass("someClass");
		} else {
			$(".footer-links-wrapper").removeClass("someClass");
			$(".footer-links-wrapper ul").show();
		}
	});
	// Footer collapse functionality
	$(document).on("click", ".someClass h3", function () {
		$(this).next("ul").slideToggle();
		$(this).toggleClass("expanded");
	});

	// Search bar
	$(".search-link").click(function (event) {
		event.preventDefault();
		$(".navbar-collapse.collapse").removeClass("show");
		$(".searchbox").slideToggle();
	});

	// jQuery Carousal (Leul Jun-Batch, 2023)
	const slideWidth = $(".slide").width();
	const slideDuration = 3000; // Time interval for each slide
	let isPaused = false; // pause button

	// Generate slides dynamically - Start
	const data = [
		"https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/77/0a/a1/770aa1a3-66b2-b178-5baf-77b89d853425/12de9656-5842-4431-82e9-e4ba9ebe8cb7.png/274x593.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/de/5d/cd/de5dcd45-4fc8-32a5-ea31-36e18fc2ad57/c8327382-66da-4b46-9ef3-f292d102dcd8.png/274x593.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/27/70/4a/27704afa-feb6-8ed8-9d0e-9d4f3536de2a/d404c65c-cb7e-481b-8ecd-846293327946.png/274x593.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/5e/d0/d7/5ed0d7ff-25b7-e265-98c0-84a346088913/1797e75e-4543-4f27-b385-c37112cdcaf2.png/274x593.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/35/3e/91/353e917e-dfdc-1b1e-3c8e-39e60183a3f2/c1da2705-dc68-41ef-ad5f-cdb35907226b.png/274x593.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/94/28/c0/9428c086-1b06-2463-e057-a99c4d52fd3d/68b4c403-30ce-42dd-b174-9aa677157fed.png/274x593.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/d8/80/3e/d8803ef4-0c6c-1fe6-3b4e-15e4690d18aa/01c96032-6397-4686-9432-7e803c2aac8e.png/274x593.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b3/fa/77/b3fa7718-b692-ca56-87ce-5af818a447f7/955d54ab-6986-4e68-981d-b11df46a0029.png/274x593.jpg",
	];

	for (let i = 1; i < data.length; i++) {
		let imgLink = data[i];
		$(".slides").append(
			`<div class="slide">
				<img src=${imgLink} alt="" />
			</div>`
		);
	}

	
	// Function to move the slides
	function moveSlides() {
		if (!isPaused) {
			$(".slides").animate(
				{
					"margin-left": -slideWidth,
				},
				2000,
				function () {
					// Move the first slide to the end
					$(".slides .slide:first").appendTo(".slides");
					// Reset the margin
					$(".slides").css("margin-left", 0);
				}
			);
		}
	}

	// Set an interval to move the slides
	setInterval(moveSlides, slideDuration);

	// pause button functionality
	$(".circle-container").on("click", function () {
		isPaused = !isPaused;

		if (isPaused) {
			$("#pause").removeClass("fa-pause");
			$("#pause").addClass("fa-play");
		} else {
			$("#pause").removeClass("fa-play");
			$("#pause").addClass("fa-pause");
		}
	});
});


