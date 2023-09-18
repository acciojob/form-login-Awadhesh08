function getFormvalue() {
    //Write your code here
	function getFormvalue() {
    // Get the form element
    var form = document.getElementById("form1");

    // Get the input elements for first name and last name
    var firstNameInput = form.elements["fname"];
    var lastNameInput = form.elements["lname"];

    // Get the values entered by the user
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    // Check if both fields are filled
    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Please enter both first name and last name.");
    } else {
        // Display the first and last name in an alert
        alert("First Name: " + firstName + "\nLast Name: " + lastName);
    }

    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
}
}
