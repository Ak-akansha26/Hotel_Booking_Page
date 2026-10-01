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

document.addEventListener("DOMContentLoaded", function() {
let btn = document.querySelector(".cls-btn"); // Close button
let btn1 = document.querySelector(".menu");    // Hamburger menu button

let sidebar = document.getElementById("my_sidebar");
let desktopWelcomeCard = document.querySelector(".desktop_card .welcome-card");
let desktopStayCard = document.querySelector(".desktop_card .stay-card");

// let welcomeCard = document.querySelector(".desktop_card .welcome_card");
// let stayCard = document.querySelector("desktop_card .stay_card");


btn1.addEventListener("click", function() {
    console.log("Opening sidebar");
    sidebar.classList.add("active"); 
});

btn.addEventListener("click", function() {
    console.log("Closing sidebar");
    sidebar.classList.remove("active"); 
});


 if (desktopWelcomeCard) {
        desktopWelcomeCard.addEventListener("click", function() {
            console.log("Desktop welcome card activated");
            desktopWelcomeCard.classList.add("open");
             desktopWelcomeCard.classList.add("sun-ill");
        });
    }

    // Desktop Stay Card Click
    if (desktopStayCard) {
        desktopStayCard.addEventListener("click", function() {
            console.log("Desktop stay card activated");
            desktopStayCard.classList.add("open");
             desktopWelcomeCard.classList.add("sun-ill");
        });
    }

});











// card1.addEventListener("click", function(){
//     console.log("welcome card activated")
//     welcomeCard.classList.add("open");
// })

// card2.addEventListener("click", function(){
//     console.log("stay card activated")
//     stayCard.classList.add("open");
// })




document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector(".cls-btn");
    let btn1 = document.querySelector(".menu");
    let sidebar = document.getElementById("my_sidebar");
    
    let desktopCards = document.querySelectorAll(".desktop-card .welcome-card, .desktop-card .stay-card, .desktop-card .sun-ill");

    if (btn1 && sidebar) btn1.addEventListener("click", () => sidebar.classList.add("active"));
    if (btn && sidebar) btn.addEventListener("click", () => sidebar.classList.remove("active"));

    desktopCards.forEach(card => {
        card.addEventListener("click", function() {
        
             desktopCards.forEach(c => c.classList.remove("open", "sun-ill"));
            this.classList.add("open", "class-ill");
            console.log(`${this.classList[0]} activated`);
        });
    });
});
