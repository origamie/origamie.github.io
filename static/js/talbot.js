// function throttle(fn, wait) {
//   var time = Date.now();
//   return function() {
//     if (time + wait - Date.now() < 0) {
//       fn();
//       time = Date.now();
//     }
//   };
// }
document.querySelectorAll(".circle a:not(.ext)").forEach((trigger) => {
    trigger.onclick = function(e) {
        e.preventDefault();
        let hash = "#" + this.getAttribute("href").split("#")[1];
        let target = document.querySelector(hash);
        let headerOffset = 0;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };
});
// window.addEventListener("scroll", function() {
//   var parallax = document.querySelector(".parallax-wrapper");
//   var offset = window.pageYOffset;
//   parallax.style.transform = "translateY(" + offset * 0.4 + "px)";
// });

window.addEventListener("scroll", parallax);
function parallax() {
    var offset = window.pageYOffset;
    var parallax = document.querySelector(".parallax-wrapper");
    // You can adjust the 0.4 to change the speed

    // Define the scroll threshold where the parallax effect stops
    var threshold = 800;

    if (offset <= threshold) {
        parallax.style.transform = "translateY(" + offset * 0.6 + "px)";
    } else {
        parallax.style.transform = "translateY(" + threshold * 0.6 + "px)";
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
var artists = document.querySelector(".hp__music");
var selectAll = document.querySelector(".artist__select .all");
var selectSaturday = document.querySelector(".artist__select .samedi");
var selectSunday = document.querySelector(".artist__select .dimanche");

if (typeof artists != "undefined" && artists != null) {
    selectAll.onclick = function(e) {
        artists.classList.remove("dimanche");
        artists.classList.remove("samedi");
        artists.classList.add("all");
    };
    selectSaturday.onclick = function(e) {
        artists.classList.remove("all");
        artists.classList.remove("dimanche");
        artists.classList.add("samedi");
    };
    selectSunday.onclick = function(e) {
        artists.classList.remove("all");
        artists.classList.remove("samedi");
        artists.classList.add("dimanche");
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
        // modal.style.display = "none";
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
        iframe = modal.querySelectorAll("iframe")[0];
        if (iframe) {
            iframe.src = "";
        }
        document.body.classList.remove("modal-isopened");
    };
});
