const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const submitPasswordButton = document.getElementById("submitPassword");
const fileBrowser = document.getElementById("fileBrowser");
const fileButton = document.getElementById("fileButton");
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.multiple = true; // Enable multiple file selection

submitPasswordButton.addEventListener("click", () => {
  const enteredPassword = passwordInput.value;
  const correctPassword = "rickshaw"; // Set your desired password here

  if (enteredPassword === correctPassword) {
    passwordForm.style.display = "none";
    fileBrowser.style.display = "block";
  } else {
    alert("Invalid password");
  }
});

fileButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", handleFileSelection);

function handleFileSelection(event) {
  const files = event.target.files;
  const imageFiles = Array.from(files).filter((file) =>
    file.type.startsWith("image/")
  );
  const fileNames = imageFiles.map((file) => file.name);

  // Log the file names to the console or perform other actions
  console.log(fileNames);
}
