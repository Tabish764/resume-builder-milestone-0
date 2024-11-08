var _a;
var showInput = false;
var handleClickEvent = function () {
    var inputDisplay = document.querySelectorAll(".input-section");
    showInput = !showInput;
    inputDisplay.forEach(function (visible) {
        visible.style.display = showInput ? "flex" : "none";
    });
    var toggle = document.querySelector('#button');
    if (toggle)
        toggle.innerText = showInput ? "Hide all sections" : "Show All Sections";
};
// Function to generate a unique shareable URL
var generateUniqueUrl = function (username) { return "https://".concat(username, ".vercel.app/resume"); };
// Function to copy the URL to clipboard
var copyToClipboard = function (text) {
    navigator.clipboard.writeText(text).then(function () {
        alert("Link copied to clipboard!");
    }).catch(function (err) {
        console.error("Failed to copy link:", err);
    });
};
// Function to print the resume
var printResume = function () {
    var printContents = document.querySelector(".resume-container").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
};
// Form submit event to generate the resume and display options
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    var _a, _b;
    e.preventDefault();
    // Get input values
    var name = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var exp = document.getElementById('exp').value;
    // Generate resume HTML
    var resumeHtml = "\n        <div class='resume-container'>\n            <h2>Resume</h2>\n            <p>Name: ".concat(name, "</p>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(number, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(exp, "</p>\n        </div>\n    ");
    // Display the resume
    var resumeOutputElement = document.getElementById('resume');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHtml;
    }
    // Generate a unique URL based on the name (assuming unique name)
    var username = name.toLowerCase().replace(/\s+/g, ""); // Simplified "username" based on name
    var uniqueUrl = generateUniqueUrl(username);
    var urlElement = document.getElementById('unique-url');
    if (urlElement) {
        urlElement.innerText = "Your shareable resume link: ".concat(uniqueUrl);
    }
    // Show the share options
    var shareOptions = document.getElementById('share-options');
    if (shareOptions)
        shareOptions.style.display = "block";
    // Set up event listeners for "Copy Link" and "Print Resume"
    (_a = document.getElementById('copy-link')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return copyToClipboard(uniqueUrl); });
    (_b = document.getElementById('print-resume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', printResume);
});
