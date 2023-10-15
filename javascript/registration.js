


addFormInputs("log in");
const formBox = document.getElementById("formBox");
const form = document.getElementsByTagName("form")[0];
const title = document.getElementById("title");
const submit = document.getElementById("submit");


function handleSubmittedForm() {
    const inputTags = document.getElementsByTagName("input");
    let failed = false;
    for (let tag of inputTags) {
        
        console.log('tag: ', tag);
        console.log('tag.id: ', tag.id);

        if (tag.id === "submit" || tag.id === "button") {
            console.log("button");
            continue;
        }
        if ((tag.id === "first name" || tag.id === "last name") && !checkName(tag.value)) {
            alert(`invalid ${tag.id}!! a name should be english characters only.`);
            tag.style.borderColor = red;
            let failed = true;

            break;
        }
        else if (tag.id === "Email" && !chechEmail(tag.value)) {
            alert(`invalid ${tag.id}!! an email should be in this form: lettesAndNumbers@domain`);
            tag.style.borderColor = red;
            let failed = true;

            break;
        }
        else if (tag.id === "username" && !checkUsername(tag.value)) {
            alert(`invalid ${tag.id}!! a username should be .`);
            tag.style.borderColor = red;
            let failed = true;

            break;
        }
        else if (tag.id === "password") {
            alert(`invalid ${tag.id}!! a username should be .`);
            tag.style.borderColor = red;
            let failed = true;
            break;
        }
        if (failed){
            console.log("failed!!")
        }
    }


    //don't forget to add a check if already exists in local storage!

    //add new user to local storage
    if(!failed){
        const users = JSON.parse(localStorage.getItem("users")) || [];
        let newUser = {};
    for (let tag of inputTags) {
        if (tag.id === "submit" || tag.id === "button") {
            continue;
        }
        else {
            newUser[tag.id] = tag.value;
        }
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("you signed in successfully! have fun:)")

    window.location.href = "#";

    }
}



