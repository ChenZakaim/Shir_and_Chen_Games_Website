//! check the file name type
//! ctrl+shift+i 
//! delete these comments when done 
//! if you have changed names of variables here that are used in js/css/html files don't forget to change there as well 
//! dont leave too much empty lines. 
//! press ctrl+f on keyboard and type //! to find all comments in this file 
//! delete console.logs when finished
//! well done! 
//! good luck!

//all the form inputs that the function will add according to the selected scenerio:
const formInputs = {
    "log in": ["username", "password"],
    "sign up": ["first name", "last name", "email", "username", "password"]
};





/**
 * a function that reloads the form as "log in" or up"
 */
function addFormInputs(key) {
    //! delete if not needed
    // const formBox = document.getElementById("formBox");

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


    //! try to change these variables to const
    //adds submit button
    let buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonsContainer";


    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = key;
    submit.id = "submit";
    buttonsContainer.appendChild(submit);

    let button = document.createElement("button");
    button.type = "button";
    button.id = "button";
    //set button value
    //! maybe try switch case?
    if (key === "log in") {
        button.textContent = "sign up";
        buttonsContainer.appendChild(button);
        button.onclick = () => {
            form.innerHTML = "";
            addFormInputs("sign up");
        };
    }
    else {
        button.textContent = "log in";
        buttonsContainer.appendChild(button);
        button.onclick = () => {
            form.innerHTML = "";
            addFormInputs("log in");
        }
    }
    //add buttons to form
    form.appendChild(buttonsContainer);
}



//! delete ///////////////
//////////////////////////////////////////////////////////////////////////////////////
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