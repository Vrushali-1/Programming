"use strict";
var button = document.querySelector("button");
var uname = document.getElementById("t1");
var password = document.getElementById("pass");
button.addEventListener("click", function () {
    if (uname.value == "admin") {
    }
    else if (uname.value = "user") {
    }
    else
        console.log("username: " + uname.value + "password: " + password.value);
});
