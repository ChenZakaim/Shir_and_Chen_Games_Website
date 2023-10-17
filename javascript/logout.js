const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const logoutButton = document.getElementById("logout");

if (currentUser["username"] === "guest") {
    logoutButton.textContent = "log in / sign up";
    logoutButton.addEventListener("click", () => {
    window.location.assign("../html/index.html");
    });
}
else {
    logoutButton.addEventListener("click", LogOut);
}

function logIn(password, username) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    for (let user of users) {
        if (user["username"] === username && user["password"] === password) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.assign("../html/homepage.html");
            return true;
        }
    }
    alert("user does not exists.");
}

function LogOut() {
    let guest = { "first name": "", "last name": "", "email": "", "username": "guest", "password": "" };
    localStorage.setItem("currentUser", JSON.stringify(guest));
    alert("logged out successfully!");
    window.location.assign("../html/index.html");
}

