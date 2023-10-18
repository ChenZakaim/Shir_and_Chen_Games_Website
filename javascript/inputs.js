//all the form inputs that the function will add according to the selected scenerio:
const formInputs = {
    "log in": ["username", "password"],
    "sign up": ["first name", "last name", "email", "username", "password"]
};

/**
 * a function that reloads the form as "log in" or "sign" up"
 */
function addFormInputs(key) {
    const title = document.getElementById("title");
    title.textContent = key;// changing the form title

    const form = document.getElementsByTagName("form")[0];

    for (let i = 0; i < formInputs[key].length; i++) {

        //creates new label tag
        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", formInputs[key][i]);
        newLabel.textContent = formInputs[key][i];
        //creates new input tag
        let newInput = document.createElement("input");
        newInput.name = formInputs[key][i];
        newInput.id = formInputs[key][i];

        //attaches new tags to the form
        newInput.setAttribute('required', '');
        form.appendChild(newLabel);
        form.appendChild(newInput);

        //! i think this can be outside the for instead of checking every iteration 
        //! if this is the password input
        //defines type - password to passwords, others = text. adds eye to password
        if (formInputs[key][i] === "password") {
            newInput.type = "password";
            let eye = document.createElement("i");
            eye.className = "far fa-eye";
            eye.id = "togglePassword";
            eye.style.fontSize = "0.73em";
            form.appendChild(eye);
            setEyeEvent();
        }
        else {
            newInput.type = "text";
        }
    }

    //adds submit button
    const BUTTONS_CONTAINER = document.createElement("div");
    BUTTONS_CONTAINER.id = "buttonsContainer";

    const SUBMIT = document.createElement("input");
    SUBMIT.type = "submit";
    SUBMIT.value = key;
    SUBMIT.id = "submit";
    BUTTONS_CONTAINER.appendChild(SUBMIT);

    let BUTTON = document.createElement("button");
    BUTTON.type = "button";
    BUTTON.id = "button";
    //set button value
    switch (key) {
        case "log in":
            BUTTON.textContent = "sign up";
            BUTTONS_CONTAINER.appendChild(BUTTON);
            BUTTON.onclick = () => {
                form.innerHTML = "";
                addFormInputs("sign up");
            }
            break;
        default:
            BUTTON.textContent = "log in";
            BUTTONS_CONTAINER.appendChild(BUTTON);
            BUTTON.onclick = () => {
                form.innerHTML = "";
                addFormInputs("log in");
            }
    }
    //add buttons to form
    form.appendChild(BUTTONS_CONTAINER);
}

function setEyeEvent() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
}