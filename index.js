let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    return (document.body.classList += " dark-theme");
  }

  document.body.classList.remove(`dark-theme`);
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(`.modal__overlay--loading`);
  const success = document.querySelector(`.modal__overlay--success`);
  loading.classList += ` modal__overlay--visible`;

  emailjs
    .sendForm(
      `service_bgq6odq`,
      `template_pnox7cc`,
      event.target,
      `kNFVWhJ-R6QFaZTPf`,
    )
    .then(() => {
      loading.classList.remove(`modal__overlay--visible`);
      success.classList += ` modal__overlay--visible`;
    })
    .catch(() => {
      loading.classList.remove(`modal__overlay--visible`);
      alert(
        `The email service is temporarily unavailable. Please contact me directly at sebastiangiraldo96@gmail.com !`,
      );
    });
}

function openModal(event) {
  document.body.classList += ` modal--visible`;
}

function exitModal(event) {
  document.body.classList.remove(`modal--visible`);
}

function moveBackground() {
  const shapes = document.querySelectorAll(".shape");
  const scaleFactor = 1 / 20;
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInteger = isOdd ? -1 : 1;
    shapes[i].style.transform =
      `translate(${x * boolInteger}px, ${y * boolInteger}px)`;
  }
}
