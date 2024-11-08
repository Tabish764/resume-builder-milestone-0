let showInput = false;

const handleClickEvent = () => {
    const inputDisplay = document.querySelectorAll(".input-section");
    showInput = !showInput;
    inputDisplay.forEach((visible) => {
        visible.style.display = showInput ? "flex" : "none";
    });
    const toggle = document.querySelector('#button');
    if (toggle) toggle.innerText = showInput ? "Hide all sections" : "Show All Sections";
};

// Function to generate a unique shareable URL
const generateUniqueUrl = (username) => `https://${username}.vercel.app/resume`;

// Function to copy the URL to clipboard
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert("Link copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy link:", err);
    });
};

// Function to print the resume
const printResume = () => {
    const printContents = document.querySelector(".resume-container").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    
};

// Form submit event to generate the resume and display options
document.getElementById('form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const exp = document.getElementById('exp').value;

    // Generate resume HTML
    const resumeHtml = `
        <div class='resume-container'>
            <h2>Resume</h2>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${number}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Work Experience</h3>
            <p>${exp}</p>
        </div>
    `;

    // Display the resume
    const resumeOutputElement = document.getElementById('resume');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHtml;
    }

    // Generate a unique URL based on the name (assuming unique name)
    const username = name.toLowerCase().replace(/\s+/g, ""); // Simplified "username" based on name
    const uniqueUrl = generateUniqueUrl(username);
    const urlElement = document.getElementById('unique-url');
    if (urlElement) {
        urlElement.innerText = `Your shareable resume link: ${uniqueUrl}`;
    }

    // Show the share options
    const shareOptions = document.getElementById('share-options');
    if (shareOptions) shareOptions.style.display = "block";

    // Set up event listeners for "Copy Link" and "Print Resume"
    document.getElementById('copy-link')?.addEventListener('click', () => copyToClipboard(uniqueUrl));
    document.getElementById('print-resume')?.addEventListener('click', printResume);
});
