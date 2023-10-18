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
    let newInput;
    for (let i = 0; i < formInputs[key].length; i++) {

        //creates new label tag
        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", formInputs[key][i]);
        newLabel.textContent = formInputs[key][i];
        //creates new input tag
        newInput = document.createElement("input");
        newInput.name = formInputs[key][i];
        newInput.id = formInputs[key][i];
        newInput.type = "text";

        //attaches new tags to the form
        newInput.setAttribute('required', '');
        form.appendChild(newLabel);
        form.appendChild(newInput);

    }

    //defines type password (which is the last one to be "newInput") to passwords,
    //others = text. adds eye to password
    newInput.type = "password";
    let eye = document.createElement("i");
    eye.className = "far fa-eye";
    eye.id = "togglePassword";
    eye.style.fontSize = "0.73em";
    form.appendChild(eye);
    setEyeEvent();

    //adds submit button
    const BUTTONS_CONTAINER = document.createElement("div");
    BUTTONS_CONTAINER.id = "buttonsContainer";

    const SUBMIT = document.createElement("input");
    SUBMIT.type = "submit";
    SUBMIT.value = key;
    SUBMIT.id = "submit";
    BUTTONS_CONTAINER.appendChild(SUBMIT);

    let button = document.createElement("button");
    button.type = "button";
    button.id = "button";
    //set button value
    switch (key) {
        case "log in":
            button.textContent = "sign up";
            BUTTONS_CONTAINER.appendChild(button);
            button.onclick = () => {
                form.innerHTML = "";
                addFormInputs("sign up");
            }
            break;
        default:
            button.textContent = "log in";
            BUTTONS_CONTAINER.appendChild(button);
            button.onclick = () => {
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