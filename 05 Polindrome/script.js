const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

checkButton.addEventListener("click", () => {
  if (textInput.textContent === "") {
    alert("Please input a value");
    console.log("empty button was clicked");
  } else if (textInput.textContent === "A") {
    resultDiv.innerText = "A is a palindrome";
    console.log("A button was clicked");
  }
});
