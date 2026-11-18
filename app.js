
// document.addEventListener("DOMContentLoaded", function() {
//     let btn = document.querySelector(".cls-btn");
//     let btn1 = document.querySelector(".menu");
//     let sidebar = document.getElementById("my_sidebar");
//     let nav_item = document.querySelectorAll(".sidebar .nav-item");

    
//     // let receipt = document.querySelector(".oval .receipt");
//     // let calendar = document.querySelector(".oval .calender");
//     const buttons = document.querySelectorAll(".oval button");


    
//     let desktopCards = document.querySelectorAll(".desktop-card .welcome-card, .desktop-card .stay-card, .desktop-card .sun-ill");

//     if (btn1 && sidebar) btn1.addEventListener("click", () => sidebar.classList.add("active"));
//     if (btn && sidebar) btn.addEventListener("click", () => sidebar.classList.remove("active"));
    
//     nav_item.forEach(nav => {
//         nav.addEventListener("click", function(){
//             nav_item.forEach(item => item.classList.remove("active"));
//             this.classList.add("active");
           
//         })
//     })


//     //  receipt.addEventListener("click", function(){
//     //     console.log("r working")

//     //     this.classList.add("active");
//     // })
//     // calendar.addEventListener("click", function(){
//     //     console.log("csl working")

//     //     this.classList.add("active");
//     // })
//     buttons.forEach(btn => {
//     btn.addEventListener("click", function() {
//         console.log(this.className + " working");

//         // Check if this specific button is already active
//         const isActive = this.classList.contains("active");

//         // Clear active class from both buttons
//         buttons.forEach(b => b.classList.remove("active"));

//         // Toggle it on if it wasn't active
//         if (!isActive) {
//             this.classList.add("active");
//         }
//     });
// });

//     desktopCards.forEach(card => {
//         card.addEventListener("click", function() {
        
//              desktopCards.forEach(c => c.classList.remove( "sun-ill"));
//             this.classList.add("open");
//             console.log(`${this.classList[0]} activated`);
//         });
//     });

   
// });

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector(".cls-btn");
    let btn1 = document.querySelector(".menu");
    let sidebar = document.getElementById("my_sidebar");
    let nav_item = document.querySelectorAll(".sidebar .nav-item");
    const buttons = document.querySelectorAll(".oval button");
    let desktopCards = document.querySelectorAll(".desktop-card .welcome-card, .desktop-card .stay-card, .desktop-card .sun-ill");

    // 1. Sidebar Open/Close (Safe check)
    if (btn1 && sidebar) {
        btn1.addEventListener("click", () => sidebar.classList.add("active"));
    }
    if (btn && sidebar) {
        btn.addEventListener("click", () => sidebar.classList.remove("active"));
    }
    
    // 2. Sidebar Nav Items (Safe check)
    if (nav_item.length > 0) {
        nav_item.forEach(nav => {
            nav.addEventListener("click", function(){
                nav_item.forEach(item => item.classList.remove("active"));
                this.classList.add("active");
            });
        });
    }

    // 3. Oval Buttons (Safe check)
    if (buttons.length > 0) {
        buttons.forEach(btn => {
            btn.addEventListener("click", function() {
                console.log(this.className + " working");

                const isActive = this.classList.contains("active");
                buttons.forEach(b => b.classList.remove("active"));

                if (!isActive) {
                    this.classList.add("active");
                }
            });
        });
    }

    // 4. Desktop Cards (Safe check)
    if (desktopCards.length > 0) {
        desktopCards.forEach(card => {
            card.addEventListener("click", function() {
                desktopCards.forEach(c => c.classList.remove("sun-ill"));
                this.classList.add("open");
                console.log(`${this.classList[0]} activated`);
            });
        });
    }
});
