function saveMedicalData() {
  // this will collect the form data from mdical history page
  const medicalData = {
    conditions: document.getElementById("conditions")?.value || "",
    familyMedical: document.getElementById("family-medical")?.value || "",
    allergies: document.querySelector('input[name="allergies"]')?.value || "",
    currentMedications:
      document.querySelector('input[name="currentMedications"]')?.value || "",
    surgeries: document.querySelector('input[name="surgeries"]')?.value || "",
  };

  console.log("Medical Data:", medicalData); // Log data for debugging
  //save data to sessionStorage
  sessionStorage.setItem("medicalData", JSON.stringify(medicalData));

  // redirect user to the next page
  window.location.href = "preferred.html";
}
