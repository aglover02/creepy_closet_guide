$(document).ready(function () {
  if ($("#slideshow").length) {
    let slides = $("#slideshow .slide");
let currentSlide = 0;
let isPaused = false;

function showSlide(index) {
  $(".slide").fadeOut();
  $(".slide").eq(index).fadeIn();
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= $(".slide").length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(function () {
  if (!isPaused) {
    nextSlide();
  }
}, 3000);

$("#pauseSlideshow").on("click", function () {
  isPaused = !isPaused;

  if (isPaused) {
    $(this).text("Play Slideshow");
  } else {
    $(this).text("Pause Slideshow");
  }
});
  }

  if ($("#topImage").length) {
    const tops = [
      { 
        src: "top01.jpg", 
        alt: "Burgundy crocheted sleeveless top with ruffled edges and lace-up front detail."
      },
      { 
        src: "top02.jpg",
        alt: "Oversized black and gray knit sweater with distressed hem and patterned sleeves."
      },
      { 
        src: "top03.jpg",
        alt: "Oversized black button-up shirt with a silver chain collar accessory."
      },
      { 
        src: "top04.jpg", 
        alt: "Oversized black and burgundy cardigan with a distressed pattern and front buttons."
      },
      { 
        src: "top05.jpg",
        alt: "Black short-sleeve blouse with puff sleeves, front buttons, and layered necklace."
      },
      { 
        src: "top06.jpg", 
        alt: "Black cropped mesh striped T-shirt with short sleeves and ruffled edges."
      },
      { 
        src: "top07.jpg", 
        alt: "Red and black smocked cropped tank top with wide straps and a ruffled hem."
      },
      { 
        src: "top08.jpg", 
        alt: "Black distressed knit sweater with open-knit details and lace-up sleeves."
      },
      { 
        src: "top09.jpg", 
        alt: "Sheer black long-sleeve mesh top layered over a black bralette, with harness-style straps and flared sleeves."
      },
      { 
        src: "top10.jpg", 
        alt: "Black strapless corset-style crop top with subtle embroidered trim."
      },
      { 
        src: "top11.jpg", 
        alt: "Black sleeveless waistcoat with a deep V-neck and two silver buttons."
      },
      { 
        src: "top13.jpg",
        alt: "Dark gray cropped T-shirt with a white skull and floral graphic."
      },
      { 
        src: "top14.jpg", 
        alt: "Black sleeveless corset top with front lace-up detail and wide straps."
      },
      { 
        src: "top15.jpg", 
        alt: "Black pinstripe blazer with buckle strap details at the waist and sleeves."
      },
      { 
        src: "top16.jpg",
        alt: "Black corset-style top layered over a sheer black short-sleeve shirt."
      },
      { 
        src: "top17.jpg",
        alt: "Black cardigan with embroidered sun and moon details and decorative gold buttons."
      },
      { 
        src: "top18.jpg", 
        alt: "Sheer black striped long-sleeve top with ruffled trim and a black bralette underneath."
      },
      { 
        src: "top19.jpg",
        alt: "Dark gray fitted long-sleeve top with ribbed texture and scalloped edges."
      },
      { 
        src: "top21.jpg", 
        alt: "Sheer black long-sleeve wrap top with spiderweb pattern and flared cuffs."
      },
      { 
        src: "top22.jpg", 
        alt: "Black leather biker jacket with silver zippers, buttons, and belted waist."
      },
      { 
        src: "top23.jpg", 
        alt: "Black floral corset-style top with front hook closures and vertical seam details."
      },
      { 
        src: "top24.jpg", 
        alt: "Black cropped T-shirt with red collar trim and red star graphics."
      },
      { 
        src: "top25.jpg", 
        alt: "Black sleeveless denim vest with spikes, patches, skull designs, plaid fabric, and silver buttons."
      },
      { 
        src: "top26.jpg", 
        alt: "Black long-sleeve shirt with strap and silver D-ring details down the sleeves."
      },
      { 
        src: "top27.jpg", 
        alt: "Black bat-shaped corset top with lace-up front detail."
      },
      { 
        src: "top28.jpg",
        alt: "Black zip-up cropped tank top with grommet straps and side buckle details."
      },
      { 
        src: "top29.jpg", 
        alt: "Black cold-shoulder top with corset-style lace-up detail across the waist."
      },
      { 
        src: "top30.jpg",
        alt: "Black strapless cropped top with mesh panel, grommets, and buckle straps down the front."
      }
    ];

    const bottoms = [
      { 
        src: "bottom01.jpg", 
        alt: "Black pleated mini skirt."
      },
      { 
        src: "bottom02.jpg", 
        alt: "Black flared pants with studded belt details, silver zippers, straps, and D-rings."
      },
      { 
        src: "bottom03.jpg", 
        alt: "Gray oversized cargo jeans with straps, large pockets, D-rings, and studded details."
      },
      { 
        src: "bottom04.jpg", 
        alt: "Black wide-leg cargo pants with zipper pockets, hanging straps, D-rings, and grommet details."
      },
      { 
        src: "bottom05.jpg", 
        alt: "Long black skirt with silver zippers, straps, grommets, and D-ring details."
      },
      { 
        src: "bottom06.jpg", 
        alt: "Black layered mini skirt with lace ruffles and sheer fabric trim."
      },
      { 
        src: "bottom07.jpg", 
        alt: "Black fitted shorts with silver grommet details along the waistband and leg openings."
      },
      { 
        src: "bottom08.jpg", 
        alt: "Black flared pants with mesh side panels and buckle strap details."
      },
      { 
        src: "bottom09.jpg",
        alt: "Black bloomer-style shorts with layered ruffles and a small bow at the waist."
      },
      { 
        src: "bottom10.jpg", 
        alt: "Black mini skirt with layered lace ruffles, small bow detail, and D-rings at the waist."
      },
      { 
        src: "bottom11.jpg", 
        alt: "Black wide-leg leather pants."
      },
      { 
        src: "bottom12.jpg", 
        alt: "Black wide-leg denim pants with a relaxed fit and raw hems."
      },
      { 
        src: "bottom13.jpg", 
        alt: "Dark gray flared cargo pants with lace-up waist, side pockets, straps, and buckle details."
      },
      { 
        src: "bottom14.jpg",
        alt: "Black high-waisted shorts with corset-style lace-up details on both sides."
      },
      { 
        src: "bottom15.jpg", 
        alt: "Gray wide-leg trousers with a relaxed fit."
      },
      { 
        src: "bottom16.jpg", 
        alt: "Long purple patchwork skirt with layered sheer panels and velvet-like fabric sections."
      },
      { 
        src: "bottom17.jpg", 
        alt: "Brown plaid high-low skirt with a ruffled hem."
      },
      { 
        src: "bottom18.jpg", 
        alt: "Long green plaid skirt with a side slit, pockets, and a black belt."
      },
      { 
        src: "bottom19.jpg",
        alt: "Black pinstripe pleated mini skirt with small buckle and ring details at the waist."
      },
      { 
        src: "bottom20.jpg",
        alt: "Black sheer midi skirt with a white cross pattern."
      },
      { 
        src: "bottom21.jpg", 
        alt: "Baggy black pants with silver grommets, zipper detail, drawstring waist, and hanging strap details."
      },
      { 
        src: "bottom22.jpg",
        alt: "Red plaid skinny pants with black zipper details, straps, and silver hardware."
      },
      { 
        src: "bottom23.jpg", 
        alt: "Black knee-length cargo shorts with hanging straps, grommets, D-rings, and studded details."
      },
      { 
        src: "bottom24.jpg", 
        alt: "Plain black flared pants."
      }
    ];

    const shoes = [
      { 
        src: "shoe01.jpg", 
        alt: "Glossy black thigh-high platform boots with lace-up fronts, side zippers, and chunky heels."
      },
      { 
        src: "shoe03.jpg", 
        alt: "Chunky black sneakers with silver metal details and thick platform soles."
      },
      { 
        src: "shoe06.jpg", 
        alt: "Black platform Mary Jane shoes with ankle straps and small silver studs."
      },
      { 
        src: "shoe07.jpg", 
        alt: "Black lace-up combat boots with side zippers and yellow stitching."
      },
      { 
        src: "shoe09.jpg", 
        alt: "Black chunky platform sneakers with thick soles and lace-up details."
      },
      { 
        src: "shoe13.jpg",
        alt: "Tall black platform boots with side zippers and chunky block heels."
      },
      { 
        src: "shoe14.jpg", 
        alt: "Black platform heels with ankle straps and flared block heels."
      },
      { 
        src: "shoe15.jpg", 
        aalt: "Black platform shoes with buckle straps, silver spikes, and thick ridged soles."
      },
      { 
        src: "shoe18.jpg",
        alt: "Black high-top sneakers with white laces and white rubber soles."
      },
      { 
        src: "shoe20.jpg", 
        alt: "Glossy black platform shoes with lace-up fronts, silver studs, and thick wedge soles."
      },
      { 
        src: "shoe22.jpg", 
        alt: "Black platform wedge heels with crisscross straps, silver studs, and pentagram ring charms."
      },
      { 
        src: "shoe24.jpg",
        alt: "Glossy black platform boots with multiple buckle straps, silver plates, and wedge soles."
      },
      { 
        src: "shoe28.jpg", 
        alt: "Black platform sandals with crisscross studded straps."
      },
      { 
        src: "shoe29.jpg",
        alt: "Glossy black platform sneakers with buckle straps, chain details, and thick soles."
      }
    ];

    let topIndex = 0;
    let bottomIndex = 0;
    let shoeIndex = 0;

    function showTop(index) {
      $("#topImage").fadeOut(150, function () {
        $(this)
          .attr("src", tops[index].src)
          .attr("alt", tops[index].alt)
          .fadeIn(150);
      });
    }

    function showBottom(index) {
      $("#bottomImage").fadeOut(150, function () {
        $(this)
          .attr("src", bottoms[index].src)
          .attr("alt", bottoms[index].alt)
          .fadeIn(150);
      });
    }

    function showShoes(index) {
      $("#shoeImage").fadeOut(150, function () {
        $(this)
          .attr("src", shoes[index].src)
          .attr("alt", shoes[index].alt)
          .fadeIn(150);
      });
    }

    $("#nextTop").on("click", function () {
      topIndex = (topIndex + 1) % tops.length;
      showTop(topIndex);
    });

    $("#prevTop").on("click", function () {
      topIndex = (topIndex - 1 + tops.length) % tops.length;
      showTop(topIndex);
    });

    $("#nextBottom").on("click", function () {
      bottomIndex = (bottomIndex + 1) % bottoms.length;
      showBottom(bottomIndex);
    });

    $("#prevBottom").on("click", function () {
      bottomIndex = (bottomIndex - 1 + bottoms.length) % bottoms.length;
      showBottom(bottomIndex);
    });

    $("#nextShoes").on("click", function () {
      shoeIndex = (shoeIndex + 1) % shoes.length;
      showShoes(shoeIndex);
    });

    $("#prevShoes").on("click", function () {
      shoeIndex = (shoeIndex - 1 + shoes.length) % shoes.length;
      showShoes(shoeIndex);
    });
  }
    $(".faq-answer").hide();

  $(".faq-question").on("click", function () {
    $(this).next(".faq-answer").slideToggle(300);
    $(this).toggleClass("open-question");
  });

  $("#backToTop").hide();

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTop").fadeIn(300);
    } else {
      $("#backToTop").fadeOut(300);
    }
  });

  $("#backToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});