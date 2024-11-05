//function to go back to the previous page when Go back button is clicked
document.getElementById("goBackButton").onclick = function () {
  window.location.href = "index.html";
};
document.getElementById("BackButton").onclick = function () {
  window.location.href = "index.html";
};

function continueBtn() {
  //collect data from preferred-doctor's page
  const preferenceData = {
    preferredGender:
      document.querySelector('input[name="gender"]:checked')?.value || "",
    language: document.getElementById("language").value || "",
    specialty: document.getElementById("specialty").value || "",
  };
  sessionStorage.setItem("preferenceData", JSON.stringify(preferenceData));

  window.location.href = "review.html";
}
