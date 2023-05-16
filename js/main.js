$(document).ready(function () {
  const elements = $(".parent > .t-bgimg")
    .addClass("img-container")
    .append("<div class='child covering covered' />");

  $(window).scroll((e) => {
    const viewportHeight = e.currentTarget.innerHeight;

    elements.each((_, section) => {
      const coords = section.getBoundingClientRect();

      if (coords.y - viewportHeight < -coords.height / 2) {
        console.log(section.getElementsByClassName("covering")[0]);
        section
          .getElementsByClassName("covering")[0]
          .classList.remove("covered");
      } else {
        section.getElementsByClassName("covering")[0].classList.add("covered");
      }
    });
  });
});
