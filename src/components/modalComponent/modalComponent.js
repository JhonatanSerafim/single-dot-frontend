function createModal(type) {
  $.get("/src/components/modalComponent/modalComponent.html", function (data) {
    const $modalClone = $(data);

    const modalTypes = {
      success: {
        buttonVariant: "primary",
        icon: "/assets/img/success.png", 
        title: "Marcação realizada com sucesso!",
        buttonText: "OK"
      },
      error: {
        buttonVariant: "secondary",
        icon: "/assets/img/error.png",
        title: "Houve uma falha ao realizar a marcação!",
        buttonText: "OK"
      },
    };

    const { buttonVariant, icon, title, buttonText } = modalTypes[type];

    $modalClone.find("#modalCloseButton").attr("data-width", '40%');
    $modalClone.find("#modalCloseButton").attr("data-variant", buttonVariant);
    $modalClone.find("#icon").attr("src", icon);

    $modalClone.find("#modalTitle").text(title);
    $modalClone.find("#modalCloseButton").text(buttonText);
    $modalClone.find("#modalCloseButton").on("click", function () {
      $modalClone.remove();
    });

    $("body").append($modalClone);
  });
}

