(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // ← replace
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.innerHTML = "Sending...";
  status.style.color = "#0d6efd";

  emailjs.sendForm(
    "YOUR_SERVICE_ID",   // ← replace
    "YOUR_TEMPLATE_ID",  // ← replace
    this
  )
  .then(() => {
    status.innerHTML = "✅ Message sent successfully!";
    status.style.color = "green";
    this.reset();
  })
  .catch(() => {
    status.innerHTML = "❌ Failed to send message. Try again.";
    status.style.color = "red";
  });
});
