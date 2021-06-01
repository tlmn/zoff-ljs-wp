const $ = jQuery;

const toggleMenu = () => {
  $("#mobile-navigation").toggleClass("hidden");
  $("#mobile-menu").toggleClass("bg-black").toggleClass("hidden");
  $("#button__menu--open").toggleClass("hidden");
  $("#button__menu--close").toggleClass("hidden");
  $("body").toggleClass("overflow-hidden");
};

const handleDetailsButtonClick = ({ currentTarget }) => {
  var details = $(currentTarget).parents().eq(1).find("details");
  if (typeof details.attr("open") !== typeof undefined) {
    details.removeAttr("open");
    toggleButtons(currentTarget);
  } else {
    details.attr("open", "");
    toggleButtons(currentTarget);
  }
};

const toggleButtons = (currentTarget) => {
  $(currentTarget).toggleClass("hidden");
  $(currentTarget).siblings().toggleClass("hidden");
};

const setMargins = () => {
  $(".has-slanted-borders").each((index, value) => {
    $(value).css("margin-bottom", "-12px").css("margin-top", "-12px");
  });
};

$(() => setMargins());

$(window).resize(() => setMargins());

$(() =>
  $("#mobile-menu ul.sub-menu").each((index, value) =>
    $(value)
      .siblings()
      .click((event) => {
        event.preventDefault();
        $("#mobile-menu ul.sub-menu").toggle();
      })
  )
);

$(() =>
  $("#menu-navigation ul.sub-menu").each((index, value) => {
    $(value).addClass("dropdown-content");
    $(value).parent().addClass("dropdown").css("display", "inline-block");
  })
);
