//template_pnox7cc
// service_bgq6odq
// kNFVWhJ-R6QFaZTPf

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
  const modal = document.querySelector(`.modal`);
  modal.classList += ` modal--visible`;
}

function exitModal(event) {
  const modal = document.querySelector(`.modal`);
  modal.classList.remove(`modal--visible`);
}
