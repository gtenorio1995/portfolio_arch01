function initPadraoLink() {
  const linksInternos = document.querySelectorAll('a[href^="#"');

  function resetPadrao(link) {
    link.preventDefault();
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", resetPadrao);
  });
}
initPadraoLink();

function initScaleImg() {
  const imgs = document.querySelectorAll("#gallery img");

  function scaleUp(el) {
    let photo = el.target;
    photo.style.transform = "scale(1.2)";
  }

  function scaleDown(el) {
    let photo = el.target;
    photo.style.transform = "scale(1.0)";
  }

  imgs.forEach((img) => {
    img.addEventListener("mouseover", scaleUp);
  });

  imgs.forEach((img) => {
    img.addEventListener("mouseout", scaleDown);
  });
}
initScaleImg();
