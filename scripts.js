// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Search functionality
function searchTutorials() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const tutorials = document.querySelectorAll("nav ul li a");

  tutorials.forEach(tutorial => {
    const text = tutorial.textContent.toLowerCase();
    if (text.includes(query)) {
      tutorial.style.display = "block";
    } else {
      tutorial.style.display = "none";
    }
  });
}

// Firebase authentication
document.getElementById("signInForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Logged in successfully!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
