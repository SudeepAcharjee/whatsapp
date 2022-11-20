const emailIcon = document.getElementById("send");
emailIcon.addEventListener("click", (event) => {
  sendEmail();
});

/**
 * Open the email client.
 */
function sendEmail() {
  window.open(
    "mailto:sudeepacharjeegp@gmail.com?subject=Contact Sudeep Acharjee"
  );
  }