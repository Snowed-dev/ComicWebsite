const fileButton = document.getElementById("fileButton");
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.multiple = true; // Enable multiple file selection

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
