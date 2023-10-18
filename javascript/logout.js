let currentUser = JSON.parse(localStorage.getItem("currentUser"));
const LOGOUT_BUTTON = document.getElementById("logout");

if (currentUser["username"] === "guest") {
    LOGOUT_BUTTON.textContent = "log in / sign up";
    LOGOUT_BUTTON.addEventListener("click", () => {
    window.location.assign("../html/index.html");
    });
}
else {
    LOGOUT_BUTTON.addEventListener("click", LogOut);
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
    alert("user does not exists.");//! maybe add or wrong details
}

function LogOut() {
    let guest = { "first name": "", "last name": "", "email": "", "username": "guest", "password": "" };
    localStorage.setItem("currentUser", JSON.stringify(guest));
    alert("logged out successfully!");
    window.location.assign("../html/index.html");
}

