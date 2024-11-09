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
var generateUniqueUrl = function (username) { return "https://".concat(username, ".vercel.app/resume"); };
var printResume = function () {
    window.print();
};
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var name = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var exp = document.getElementById('exp').value;
    var resumeHtml = "\n        <div class='resume-container'>\n            <h2>Resume</h2>\n            <p>Name: ".concat(name, "</p>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(number, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(exp, "</p>\n        </div>\n    ");
    var resumeOutputElement = document.getElementById('resume');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHtml;
    }
    var username = name.toLowerCase().replace(/\s+/g, "");
    var uniqueUrl = generateUniqueUrl(username);
    var urlElement = document.getElementById('unique');
    if (urlElement) {
        urlElement.innerText = "Your shareable resume link: ".concat(uniqueUrl);
    }
    var shareOptions = document.getElementById('share');
    if (shareOptions)
        shareOptions.style.display = "block";
    (_a = document.getElementById('print')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', printResume);
});
