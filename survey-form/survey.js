
function handleSubmit(event) {
  event.preventDefault(); 

  const form = document.getElementById('surveyForm');
  const formData = new FormData(form);


  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const dob = formData.get('dob');
  const country = formData.get('country');
  const gender = formData.getAll('gender');
  const profession = formData.get('profession');
  const email = formData.get('email');
  const mobile = formData.get('mobile');


  if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
      alert('Please fill in all the required fields.');
      return false;
  }

  const surveyData = `
      <strong>First Name:</strong> ${firstName}<br>
      <strong>Last Name:</strong> ${lastName}<br>
      <strong>Date of Birth:</strong> ${dob}<br>
      <strong>Country:</strong> ${country}<br>
      <strong>Gender:</strong> ${gender}<br>
      <strong>Profession:</strong> ${profession}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Mobile:</strong> ${mobile}
  `;

  document.getElementById('surveyData').innerHTML = surveyData;
  document.getElementById('popupModal').style.display = 'flex';

  return false;
}


function closePopup() {
  document.getElementById('popupModal').style.display = 'none';
  resetForm();
}


function resetForm() {
  document.getElementById('surveyForm').reset();
}
