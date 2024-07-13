function makeBold() {
  document.getElementById("editor").classList.toggle("bold");
}

function makeItalic() {
  document.getElementById("editor").classList.toggle("italic");
}

function makeUnderline() {
  document.getElementById("editor").classList.toggle("underline");
}

function highlightText() {
  const selection = window.getSelection();
  if (selection.toString().length > 0) { // Check if there's a selection
    const selectedText = document.getSelection().getRangeAt(0);
    const span = document.createElement("span");
    span.classList.add("highlight"); // Add a CSS class for highlighting
    span.appendChild(selectedText.cloneContents());
    selectedText.deleteContents();
    selectedText.insertNode(span);
  }
}

function resizeText(size) {
  const selection = window.getSelection();
  if (selection.toString().length > 0) { // Check if there's a selection
    const selectedText = document.getSelection();
    selectedText.getRangeAt(0).surroundContents(document.createElement("span")); // Wrap selection in a span
    const selectedElement = selection.getRangeAt(0).startContainer.parentNode;
    selectedElement.style.fontSize = size + "px"; // Apply font size based on parameter
  }
}
// Add similar functions for other formatting options
// You can use document.execCommand() for more advanced formatting
