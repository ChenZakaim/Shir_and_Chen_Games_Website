


addFormInputs("log in");
const formBox = document.getElementById("formBox");
const form = document.getElementsByTagName("form")[0];
const submit = document.getElementById("submit");


function handleSubmittedForm(){
    const title = document.getElementById("title");


    if (title.textContent ==="sign up"){
        return handleSubmittedFormSignup() || true;
    }
    else{

    }
}

function handleSubmittedFormSignup() {
    const inputTags = document.getElementsByTagName("input");
    let failed = false;
    for (let tag of inputTags) {

        console.log('tag: ', tag);
        console.log('tag.name: ', tag.name);

        if (tag.name === "submit" || tag.name === "button") {
            console.log("button");
            continue;
        }
        console.log('!checkName(tag.value): ', !checkName(tag.value));
        if ((tag.name === "first name" || tag.name === "last name") && !checkName(tag.value)) {
            alert(`invalid ${tag.id}!! a name should be english characters only.`);
            tag.style.borderColor = "red";
            let failed = true;
            return false;
            break;
        }
        console.log('!checkEmail(tag.value): ', !checkEmail(tag.value));

        if (tag.name === "Email" && !checkEmail(tag.value)) {
            alert(`invalid ${tag.id}!! an email should be in this form: lettesAndNumbers@domain`);
            tag.style.borderColor = "red";
            let failed = true;
            return false;

            break;
        }
        console.log('!checkUsername(tag.value): ', !checkUsername(tag.value));
        if (tag.name === "username" && !checkUsername(tag.value)) {
            alert(`invalid ${tag.id}!! a username should be .`);
            tag.style.borderColor = "red";
            let failed = true;
            return false;

            break;
        }
        if (tag.name === "password" && !checkPassword(tag.value)) {
            alert(`invalid ${tag.id}!! a password should be at least 8 characters long, and contain at least 1 upeercase and lowercase letters and a number.`);
            tag.style.borderColor = "red";
            let failed = true;
            return false;

            break;
        }
        if (failed) {
            console.log("failed!!")
        }
        console.log('failed: ', failed);
    }


    //dcheck if already exists in local storage!
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let usedKeys = 0;



    
    // for (let tag of inputTags) {
    //     for (let user of users) {
    //         // for(let key in user) {
    // for (let tag of inputTags) {
    //     if((tag.name === "Email")
    //             if (tag.name ==="username" )tag.value === user["Email"]){
    //                 usedKeys++;
    //                 failed = true;
    //             }
    //         }
    //         if (user.key().length === usedKeys){
    //             alert("user already exist!!")
    //         }

    //     }

    // }


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
                if (user["Email"] === newUser["Email"]) {
                    failed = true;
                    alert("user already exists! log in to start playing");
                    return false;

                    
                }
                failed = true;
                alert("username is alredy used. try again with a different one");
                return false;
                
            }
            else {
                if (user["Email"] === newUser["Email"]) {
                    failed = true;
                    alert("Email is alredy used. try again with a different one or log in with this Email's account username and password.")
                    break;

                }
            }
        }


        if(!failed){

            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("currentUser", JSON.stringify(newUser));
            alert("you signed up successfully! have fun:)");
        }
        window.location.replace("../html/homepage.html");


    }
}



