window.addEventListener("scroll", parallax);
function parallax() {
    var offset = window.pageYOffset;
    var parallax = document.querySelector(".parallax-wrapper");
    var threshold = 800;

    if (offset <= threshold) {
        parallax.style.transform = "translateY(" + offset * 0.3 + "px)";
    } else {
        parallax.style.transform = "translateY(" + threshold * 0.3 + "px)";
    }
}

// CLOSE MODAL
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        // event.target.style.display = "none";
        event.target.style.visibility = "hidden";
        event.target.style.opacity = 0;
        iframe = event.target.querySelectorAll("iframe")[0];
        if (iframe) {
            iframe.src = "";
        }
        document.body.classList.remove("modal-isopened");
    }
});

// SELECT ARTISTS
var artists = document.querySelector(".container__music");
var selectAll = document.querySelector(".artist__select .all");
var selectSaturday = document.querySelector(".artist__select .vendredi");
var selectSunday = document.querySelector(".artist__select .samedi");

if (typeof artists != "undefined" && artists != null) {
    selectAll.onclick = function(e) {
        artists.classList.remove("samedi");
        artists.classList.remove("vendredi");
        artists.classList.add("all");
    };
    selectSaturday.onclick = function(e) {
        artists.classList.remove("all");
        artists.classList.remove("samedi");
        artists.classList.add("vendredi");
    };
    selectSunday.onclick = function(e) {
        artists.classList.remove("all");
        artists.classList.remove("vendredi");
        artists.classList.add("samedi");
    };
}

// MODAL ARTISTS
var modalBtnsArtists = [...document.querySelectorAll(".grid-list--artists a")];
modalBtnsArtists.forEach(function(btn) {
    btn.onclick = function(e) {
        e.preventDefault();
        document.body.classList.add("modal-isopened");
        var modal = btn.getAttribute("data-modal");
        var video = btn.getAttribute("data-video");
        document.getElementById(modal).style.visibility = "visible";
        document.getElementById(modal).style.opacity = 1;
        if (video != "") {
            document.getElementById(modal).querySelectorAll("iframe")[0].src = video;
        }
    };
});

var closeBtnsArtists = [
    ...document.querySelectorAll(".modal--artist .modal-close"),
];
closeBtnsArtists.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.closest(".modal");
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
        iframe = modal.querySelectorAll("iframe")[0];
        if (iframe) {
            iframe.src = "";
        }
        document.body.classList.remove("modal-isopened");
    };
});


$("#prog").click(function() {
    $('html,body').animate({
            scrollTop: $("#music").offset().top
    },'slow');
});

$("#lieu").click(function() {
    $('html,body').animate({
        scrollTop: $("#access").offset().top
    },'slow');
});


$("#talbot").click(function() {
    $('html,body').animate({
        scrollTop: $("header").offset().top
    },'slow');
});


$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop();

    $('.text-left').css({
        'opacity': scrollTop * 0.002,
    });

    if ( 200 - (scrollTop * 0.1) > 120) {
        if (!window.matchMedia('(max-width: 767px)').matches) {
            $('.text-right').css({
                'margin-left': 200 - (scrollTop * 0.1) + 'px',
            });
        }
        $('.text-right .description > li').each(function()  {
            var dot = $(this)
            dot.removeClass('underline-effect')
        });
    } else {
        var index = 1;
        $('.infos-date').addClass('border-annimation');

        $('.text-right .description > li').each(function()  {
            var dot = $(this)
            index++;
            setTimeout(function () {
                dot.addClass('underline-effect')
            }, index * 90);
        });
    }

});
