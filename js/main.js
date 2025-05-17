  document.addEventListener("DOMContentLoaded", function () {
  

emailjs.init("2GAhWzEnLOer6GJhm"); // Ganti dengan public key dari EmailJS

  const form = document.getElementById("contactForm");
  const status = document.getElementById("statusMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = "Mohon isi semua field.";
      status.style.color = "red";
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };

    emailjs.send("landingpage", "template_zy5trxl", templateParams)
      .then(() => {
        status.textContent = "Pesan berhasil dikirim via Email!";
        status.style.color = "green";
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        status.textContent = "Gagal mengirim email.";
        status.style.color = "red";
      });
  });
});



  // Kirim WhatsApp
 function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusMsg = document.getElementById("statusMessage");
S
  if (!name || !email || !subject || !message) {
    statusMsg.textContent = "Mohon lengkapi semua field.";
    statusMsg.style.color = "red";
    return;
  }

  // Ganti dengan nomor WA tujuan (tanpa + dan tanpa spasi, gunakan format internasional)
  const phone = "6281220869603S";

  // Susun isi pesan
  const waMessage = `Halo Moemtaz 👋%0ASaya ${name} (${email}) ingin menyampaikan:%0A%0ASubjek: ${subject}%0APesan: ${message}`;

  
  const waLink = `https://wa.me/${phone}?text=${waMessage}`;

 
  window.open(waLink, '_blank');
}
window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("solid");
          navbar.classList.remove("transparent");
        } else {
          navbar.classList.add("transparent");
          navbar.classList.remove("solid");
        }
      });

      document.addEventListener("DOMContentLoaded", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("solid");
        } else {
          navbar.classList.add("transparent");
        }
      });
      /*Navbar-nav*/
      window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.classList.remove("transparent");
          navbar.classList.add("solid");
        } else {
          navbar.classList.add("transparent");
          navbar.classList.remove("solid");
        }
      });
