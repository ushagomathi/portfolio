const addClass = document.getElementById("addClass");
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
    if (addClass.style.display === "none") {
        addClass.style.display = "block";
    } else {
        addClass.style.display = "none";

    }
});

// // on scroll sticky with animation
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});

//  FOOTER  //
let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});






//form validation//
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.c-error').forEach(error => error.textContent = '');
    
    let isValid = true;

    // Validate FullName
    const fname = document.getElementById('fname');
    if (fname.value.trim() === '') {
        fname.nextElementSibling.textContent = 'Full Name is required';
        isValid = false;
    }

    // Validate Mobile Number
    const phno = document.getElementById('phno');
    const phnoPattern = /^[0-9]{10}$/;
    if (!phnoPattern.test(phno.value)) {
        phno.nextElementSibling.textContent = 'Invalid mobile number';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
        email.nextElementSibling.textContent = 'Invalid email address';
        isValid = false;
    }

    // Validate Message
    const msg = document.getElementById('msg');
    if (msg.value.trim() === '') {
        msg.nextElementSibling.textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
     // Clear the form fields
     document.querySelector('form').reset();
});
// LOCA STORAGE FOR FORM // // Load data from local storage when the page loads
    // Function to load data from local storage and populate the table
    function loadTableData() {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        const tableBody = document.getElementById('tableBody');

        // Clear existing rows
        tableBody.innerHTML = '';

        // Populate table rows
        storedData.forEach(data => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data.fname}</td>
                <td>${data.phno}</td>
                <td>${data.email}</td>
                <td>${data.msg}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Load table data on page load
    window.onload = function() {
        loadTableData();
    };

    // Save data to local storage and update table on form submission
    document.getElementById('c_form').addEventListener('submit', function(event) {
        event.preventDefault();

        const fname = document.getElementById('fname').value;
        const phno = document.getElementById('phno').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('msg').value;

        // Get existing data from local storage
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];

        // Add new data to the array
        storedData.push({ fname, phno, email, msg });

        // Save the updated array to local storage
        localStorage.setItem('formData', JSON.stringify(storedData));

        // Clear the form fields
        document.getElementById('c_form').reset();

        // Update the table with the new data
        loadTableData();
    });
///////////////////////////////////////////////////////////////////////////////


const downloadButton = document.getElementById('download-button');

downloadButton.addEventListener('click', () => {
    const filePath = '/home/usha/Downloads/USHA RESUME.pdf'; 
    const fileName = 'USHA RESUME.pdf';

    fetch(filePath)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a); 
            a.click();
            document.body.removeChild(a); 
            URL.revokeObjectURL(url); 
        })
        .catch(err => console.error('Error downloading the file', err));
});



const rateUsButton = document.getElementById('rate-us-button');
const ratingModal = document.getElementById('rating-modal');
const closeSpan = document.querySelector('.close');
const bodyContent = document.querySelector('body'); 

rateUsButton.addEventListener('click', () => {
    ratingModal.style.display = 'flex'; 
    bodyContent.classList.add('blur-background'); 
});

closeSpan.addEventListener('click', () => {
    ratingModal.style.display = 'none'; 
    bodyContent.classList.remove('blur-background'); 
});

