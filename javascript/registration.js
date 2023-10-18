//! ctrl+shift+i 
//! delete these comments when done 
//! if you have changed names of variables here that are used in js/css/html files don't forget to change there as well 
//! dont leave too much empty lines. 
//! press ctrl+f on keyboard and type //! to find all comments in this file 
//! change the name of file to tastyPlanet (forgot the P) ;)
//! delete console.logs when finished
//! well done! 
//! good luck!

addFormInputs("log in");
const formBox = document.getElementById("formBox");
const form = document.getElementsByTagName("form")[0];
const submit = document.getElementById("submit");



//! try to figure out why the event is deprecated(marked),(maybe there is something missing?)
function handleSubmittedForm() {
    event.preventDefault();
    const title = document.getElementById("title");


    if (title.textContent === "sign up") {
        return handleSubmittedFormSignup() || true;
    }
    else {
        const inputTags = document.getElementsByTagName("input");
        //! try to change it to const (and declare them in different scope)
        let password;
        let username;
        for (let tag of inputTags) {
            if (tag.id === "password") {
                password = tag.value
            }
            if (tag.id === "username") {
                username = tag.value
            }
        }
        return logIn(password, username);

    }
}

function handleSubmittedFormSignup() {
    const inputTags = document.getElementsByTagName("input");
    let failed = false;
    //!maybe you should try switch and case?
    for (let tag of inputTags) {
        if (tag.name !== "submit" && tag.name !== "button") {

            if ((tag.name === "first name" || tag.name === "last name") && !checkName(tag.value)) {
                alert(`invalid ${tag.id}!! a name should be english characters only.`);
                tag.style.borderColor = "red";
                return false;
            }

            if (tag.name === "Email" && !checkEmail(tag.value)) {
                alert(`invalid ${tag.id}!! an email should be in this form: lettesAndNumbers@domain`);
                tag.style.borderColor = "red";
                return false;
            }
            if (tag.name === "username" && !checkUsername(tag.value)) {
                alert(`invalid ${tag.id}!! a username should be .`);
                tag.style.borderColor = "red";
                return false;
            }
            if (tag.name === "password" && !checkPassword(tag.value)) {
                alert(`invalid ${tag.id}!! a password should be at least 8 characters long, and contain at least 1 upeercase and lowercase letters and a number.`);
                tag.style.borderColor = "red";
                return false;

            }
        }
    }
    //check if already exists in local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let usedKeys = 0;

    //add new user to local storage
    if (!failed) {
        let newUser = {};
        for (let tag of inputTags) {
            if (tag.id === "submit" || tag.id === "button") {
                continue;
            }
            else {
                newUser[tag.id] = tag.value;
            }
        }
        for (let user of users) {
            if (user["username"] === newUser["username"]) {
                if (user["email"] === newUser["email"]) {
                    failed = true;
                    alert("user already exists! log in to start playing");
                    return false;
                }
                failed = true;
                alert("username is alredy used. try again with a different one");
                return false;
            }
            else {
                if (user["email"] === newUser["email"]) {
                    failed = true;
                    alert("Email is alredy used. try again with a different one or log in with this Email's account username and password.")
                    break;

                }
            }
        }


        if (!failed) {

            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("currentUser", JSON.stringify(newUser));
            alert("you signed up successfully! have fun:)");
            window.location.assign("../html/homepage.html");
        }


    }
}

