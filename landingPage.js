// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the dropdown, text input container, and the text input
  const dropdown = document.getElementById('card-read');
  const issueInputContainer = document.getElementById('issue-container');
  const issueInput = document.getElementById('floatingInput');

  // Load saved values from local storage on page load
  const savedDropdownValue = localStorage.getItem('readingType');
  const savedIssueText = localStorage.getItem('issueText');

//   let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};


  // Set the dropdown value from local storage, if it exists
  if (savedDropdownValue) {
    dropdown.value = savedDropdownValue;

    // Show the text input if the saved value is 'Help with an Issue'
    if (savedDropdownValue === '3') {
      issueInputContainer.classList.remove('d-none');
    }
  }

  // Set the input value from local storage, if it exists
  if (savedIssueText) {
    issueInput.value = savedIssueText;
  }
/// 
  // Add a change event listener to the dropdown
  dropdown.addEventListener('change', function () {
    // Save the dropdown value to local storage
    localStorage.setItem('readingType', this.value);

    // Show or hide the text input based on the dropdown selection
    if (this.value === '3') {
      issueInputContainer.classList.remove('d-none');
    } else {
      issueInputContainer.classList.add('d-none');
      issueInput.value = ''; // Clear the text input
      localStorage.removeItem('issueText'); // Remove text input value from local storage
    }
  });

  // Save the text input value to local storage when the user types
  issueInput.addEventListener('change', function () {
    console.log()
    localStorage.setItem('issueText', this.value);
  });

  // Adds validation to prevent modal from opening if the text input is empty
  document.getElementById('drawButton').addEventListener('click', function() {
    var inputField = document.getElementById('floatingInput');
    if (inputField.value.trim() === '') {
      inputField.classList.add('is-invalid');
      inputField.reportValidity();
    } else {
      inputField.classList.remove('is-invalid');
      var loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
      loadingModal.show();
    }
  });

  // Adds click event listener to the Go! button
const btn = document.querySelector("#modalButton")

  btn.addEventListener('click', function (event) {
    event.preventDefault();

  redirectPage('./results.html');
  });
});
