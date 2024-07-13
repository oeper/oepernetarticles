// Function to simulate loading an article
function showArticle(articleId) {
  const articleContent = "This is the content of article " + articleId + ". (This is simulated content, actual implementation would fetch from a database)";
  document.getElementById("article-content").textContent = articleContent;
}

// Function to simulate submitting an article (limited functionality, doesn't create new pages)
function submitArticle() {
  const userContent = document.getElementById("userContent").value;
  alert("Thank you for your submission! (This is a simulated message, actual implementation would store the article)");
  document.getElementById("userContent").value = ""; // Clear the textarea after submission
}
