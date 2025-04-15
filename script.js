// Get references to DOM elements
const nameInput = document.getElementById("nameInput")
const nameDisplay = document.getElementById("nameDisplay")

// Initialize the state
let nameState = "Guest"

// Add event listener to update state when input changes
nameInput.addEventListener("input", (event) => {
  // Update the state with the current input value
  nameState = event.target.value || "Guest"

  // Update the DOM to reflect the current state
  nameDisplay.textContent = nameState
})