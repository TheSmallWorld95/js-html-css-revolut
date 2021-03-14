// FUNCTIONS
function toggleMenu() {
  var dropMenu = $("nav .nav-right a")

  dropMenu.mouseenter(function () {
    $(this).siblings(".my-dropdown-menu").removeClass("hidden")
  })
  dropMenu.mouseleave(function () {
    $(this).siblings(".my-dropdown-menu").addClass("hidden")
  })
}
