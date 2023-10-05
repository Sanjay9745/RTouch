// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function openNav() {
    var myNav = document.getElementById("myNav");
    myNav.classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");

    // Check if the navigation menu is currently open
    var isOpen = myNav.classList.contains("menu_width");

    // If the menu is open, add a click event listener to all anchor links in the overlay
    if (isOpen) {
        var overlayLinks = document.querySelectorAll("#myNav a");
        for (var i = 0; i < overlayLinks.length; i++) {
            overlayLinks[i].addEventListener("click", function() {
                // Close the navigation menu
                openNav();
            });
        }
    }
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});