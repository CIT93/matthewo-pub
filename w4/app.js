// PSEUDOCODE (Step 1: Plan First)
// Get the form and needed elements from the HTML.
// Listen for the submit event; when submitted, prevent page reload with event.preventDefault().
// Read the name input, build a greeting, and render it to #output. Add a clear button to reset UI.

// COLLABORATION NOTES (Step 2):
// Example if you discussed with a classmate:
// // Discussed with Sarah; she reminded me the 'submit' listener belongs on the <form>, not the button.
// Example if you reviewed past code-alongs:
// // Reviewed code-along 3.1 to remember event listener setup and preventDefault.

// AI USAGE NOTES (Step 3):
// If you used AI, record prompt + short summary here:
// // AI Prompt: "Why is my page still reloading when I submit this form? Here is my code: ..."
// // Summary: AI pointed out my listener was on the button instead of the form and I was missing preventDefault.

console.log("W4 app.js loaded");

// DOM references
const greetingForm  = document.getElementById("greetingForm");
const nameInput     = document.getElementById("nameInput");
const output        = document.getElementById("output");
const clearBtn      = document.getElementById("clearBtn");

// Defensive check: ensure elements exist
if (!greetingForm || !nameInput || !output || !clearBtn) {
  console.error("One or more required elements are missing in index.html");
}

// Submit handler: prevents reload, builds greeting, renders it
const handleSubmit = function(event) {
  event.preventDefault(); // critical to stop default form navigation/reload

  const name = nameInput.value.trim();
  // Simple branching to practice if/else
  const greeting = name ? `Hello, ${name}! 👋` : "Hello there! Please enter your name.";

  output.textContent = greeting;

  // Optional: console check to confirm the flow
  console.log("Form submitted. Greeting:", greeting);
};

// Clear handler: resets UI for another try
const handleClear = function() {
  greetingForm.reset();
  output.textContent = "Your greeting will appear here.";
  nameInput.focus();
  console.log("Form cleared.");
};

// Wire up listeners after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  greetingForm.addEventListener("submit", handleSubmit);
  clearBtn.addEventListener("click", handleClear);
  console.log("Init complete: listeners attached.");
});

// --- 4.1 - Part 1: Create calculator.js module and code household points function ---
import * as calculator from './calculator.js';

// Calculate the carbon footprint points using our calculator module.
// console.log hardcoded object literal
const demoData = {
  householdMembers: 3,
  homeSquareFootage: 1200,
  isApartment: false,
  dietType: 'average',
  foodPackaging: 'balanced'
};

const results = calculator.calculateFootprint(demoData);
console.log('Footprint (demo):', results);