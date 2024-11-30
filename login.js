// Toggle between login and signup forms
function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const pageTitle = document.getElementById('pageTitle');
    const signupTitle = document.getElementById('signupTitle');
  
    if (loginForm.classList.contains('hidden')) {
      // If signup form is visible, switch to login form
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      pageTitle.style.display = "block"; // Show "Login" header
      signupTitle.style.display = "none"; // Hide the signup title
    } else {
      // If login form is visible, switch to signup form
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
      pageTitle.style.display = "none"; // Keep "Login" title on the page
      signupTitle.style.display = "block"; // Show the signup title
    }
}

// Dummy login function
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const role = document.getElementById('roleSelect').value;

    // Retrieve the stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));

    // Check if the user exists and the password matches
    if (storedUser && storedUser.password === password) {
        alert(`Logged in with Email: ${email}, Role: ${role}`);
        
        // Store the user's role in sessionStorage to use in the dashboard
        sessionStorage.setItem('userRole', role);

        // Redirect to the dashboard page after login
        window.location.href = "Queryrequest.html";
    } else {
        alert("Invalid login credentials or user not found. Please sign up.");
    }
}

// Dummy signup function
function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const role = document.getElementById('signupRole').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store the new user in localStorage (You can replace this with MongoDB later)
    const newUser = {
        name: name,
        email: email,
        password: password,
        role: role
    };

    localStorage.setItem(email, JSON.stringify(newUser));

    alert(`Signed up as Name: ${name}, Email: ${email}, Role: ${role}`);
    
    // Redirect back to the login page after successful signup
    window.location.href = "accessloginPage.html";  // Assuming your login page is index.html
}
