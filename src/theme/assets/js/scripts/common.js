const $ = jQuery;

const toggleMenu = () => {
  $("#mobile-navigation").toggleClass("hidden");
  $("#mobile-menu").toggleClass("bg-black");
  $("#button__menu--open").toggleClass("hidden");
  $("#button__menu--close").toggleClass("hidden");
  $("body").toggleClass("overflow-hidden");
};
