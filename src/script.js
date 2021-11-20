import {validPassword} from "./validPassword";
import { isUserPresent,get,getUsers } from "./asyncFetch";

const form = document.querySelector("#signupForm");
const feedback = document.querySelector("#feedback");
let password;
let username;



form.addEventListener("submit", event => {
    event.preventDefault();
    password = document.querySelector("#passwordInput").value;
    username = document.querySelector("#usernameInput").value;

    console.log(`username:${username},password:${password}`);

    // showFeedback()
   
})



