const inappropriateWords = ["drakey snakey", "pussy", "skbidi toilet"]; // Replace with your list of inappropriate words

function submitContent() {
  const userContent = document.getElementById("userContent").value.toLowerCase(); // Get user input and convert to lowercase for case-insensitive matching
  let isBanned = false;

  for (const word of inappropriateWords) {
    if (userContent.includes(word)) {
      isBanned = true;
      alert("Bro did NOT just get baned from an article website😭🙏");
      break;
    }
  }

  if (!isBanned) {
    alert("Thank you for your submission!"); // Simulates successful submission (no actual storage)
  }

  // Simulate a banned user by disabling the textarea and button
  if (isBanned) {
    document.getElementById("userContent").disabled = true;
    document.querySelector("button").disabled = true;
  }
}
