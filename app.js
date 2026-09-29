// let btn = document.querySelector(".cls-btn");
// let btn1 = document.querySelector(".menu");


// let sidebar = document.getElementById("my_sidebar")
// let mainpage = document.getElementById("main")

// btn1.addEventListener("click", function() {
//     console.log("working");
//     sidebar.classList.add("closed");
// })

// btn.addEventListener("click", function() {
//     console.log("working");
//     sidebar.classList.remove("closed");
// })


let btn = document.querySelector(".cls-btn"); // Close button
let btn1 = document.querySelector(".menu");    // Hamburger menu button

let sidebar = document.getElementById("my_sidebar");
let mainpage = document.getElementById("main");

// 1. When hamburger menu is clicked, SHOW the sidebar
btn1.addEventListener("click", function() {
    console.log("Opening sidebar");
    sidebar.classList.add("active"); // Changed from "closed" to "active"
});

// 2. When close button is clicked, HIDE the sidebar
btn.addEventListener("click", function() {
    console.log("Closing sidebar");
    sidebar.classList.remove("active"); // Changed from "active" to "close"
});
