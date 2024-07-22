$(document).ready(function () {
  const variants = {
    primary: {
      backgroundColor: "#03A078",
      hoverColor: "#028056",
    },
    secondary: {
      backgroundColor: "red", // Exemplo de cor secundária
      hoverColor: "darkred", // Exemplo de cor de hover para secundário
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
    if (variant === "primary") {
      $button.hover(
        function () {
          $(this).css("background-color", variants[variant].hoverColor);
        },
        function () {
          $(this).css("background-color", variants[variant].backgroundColor);
        }
      );
    }
  }

  $("button").each(function () {
    var variant = $(this).data("variant");
    var width = $(this).data("width");

    if (!variants[variant]) {
      alert(
        "A variante de cor não foi definida corretamente no componente de botão."
      );
      return;
    }

    applyStyles($(this), variant, width);
    addHoverEffect($(this), variant);
  });
});
