$(document).ready(function () {
  const variants = {
    primary: {
      backgroundColor: "#06D6A0",
      hoverColor: "#028056",
    },
    secondary: {
      backgroundColor: "#D61206", 
      hoverColor: "darkred",
    },
  };

  function applyStyles($button, variant, width) {
    $button.css({
      "background-color": variants[variant].backgroundColor,
      width: width,
      padding: "8px",
      border: "none",
      "border-radius": "8px",
      color: "white",
      "font-size": "16px",
      "font-weight": "500",
    });
  }

  function addHoverEffect($button, variant) {
      $button.hover(
        function () {
          $(this).css("background-color", variants[variant].hoverColor);
        },
        function () {
          $(this).css("background-color", variants[variant].backgroundColor);
        }
      );
  }

  $("button").each(function () {
    var variant = $(this).data("variant");
    var width = $(this).data("width");

    if (!variants[variant]) {
      return;
    }

    applyStyles($(this), variant, width);
    addHoverEffect($(this), variant);
  });
});
