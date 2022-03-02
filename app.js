// ACTIVE NAV BTNS SECTION

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-btn a');

// console.log(activePage);

navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active-nav-links");
    }
});


// OPEN NAV SECTION

function navMobile() {
    const navBtn = document.querySelector("#nav-icon");
    let menuOpen = false;

    navBtn.addEventListener("click", () => {
        if (!menuOpen) {
            navBtn.classList.add("open");
            menuOpen = true;
            $(".nav-links").css("right", "0");
            $(".nav-btn").addClass("nav-btn-animation");
            $(".nav-hero").css("top", "0");
            $(".nav-company-info").css("left", "0");
            $(".nav-company-logo").css("bottom", "0");
            $(".nav-hero-mobile").css("left", "0");
            $(".text-animation-appear").css("opacity", "0");
            $(".text-animation-appear").addClass("text-appear-animation");
            $(".nav-with-logo").css("top", "-100%");
            $(".main-nav-page").css("z-index", "0");
            $(".main-nav-page").removeClass("nav-full-section");
        } else {
            navBtn.classList.remove("open");
            menuOpen = false;
            $(".nav-links").css("right", "-100%");
            $(".nav-btn").removeClass("nav-btn-animation");
            $(".nav-hero").css("top", "-100%");
            $(".nav-company-info").css("left", "-100%");
            $(".nav-company-logo").css("bottom", "-100%");
            $(".nav-hero-mobile").css("left", "-100%");
            $(".text-animation-appear").removeClass("text-appear-animation");
            $(".text-animation-appear").css("opacity", "1");
            $(".nav-with-logo").css("top", "0");
            $(".main-nav-page").addClass("nav-full-section");
        }
    })
}
navMobile();


function subNavTrigger() {
    $(".nav-sub-trigger-link-1").click(function() {
        $(".nav-sub-links-1").slideToggle();
    })
}

subNavTrigger();

function subNavTrigger2() {
    $(".nav-sub-trigger-link-2").click(function() {
        $(".nav-sub-links-2").slideToggle();
    })
}

subNavTrigger2();