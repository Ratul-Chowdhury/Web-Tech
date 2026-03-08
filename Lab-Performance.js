
function handleSubmit() {
  const firstname = document.getElementById('firstname').value.trim();
  const lastname  = document.getElementById('lastname').value.trim();
  const email     = document.getElementById('email').value.trim();
  const phone     = document.getElementById('phone').value.trim();
  const message   = document.getElementById('message').value.trim();
  const errorMsg  = document.getElementById('errorMsg');

  if (!firstname || !lastname || !email || !phone || !message) {
    errorMsg.style.display = 'block';
    return;
  }

  errorMsg.style.display = 'none';

  console.log("Form Submitted:");
  console.log("First Name:", firstname);
  console.log("Last Name:",  lastname);
  console.log("Email:",      email);
  console.log("Phone:",      phone);
  console.log("Message:",    message);
}         