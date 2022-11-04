let searchFrom = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchFrom.classList.toggle("active");
}

// showing the login form only when users click on login

let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () =>{
    loginForm.classList.toggle("active");
}

document.querySelector("#close-login-btn").onclick = () =>{
    loginForm.classList.remove("active");
}



// 

// loginForm.addEventListener("click", () =>{
//     document.querySelector(".").style.right = 0;
// });

// let closeLoginForm = document.querySelector("#close-login-btn");

// closeLoginForm.addEventListener("click", () =>{
//     document.querySelector(".login-form-container").style.display = none;
// });

// all this is just to ensure the navigation is fixed when user scrolls down the webpage

window.onscroll = () =>{
    searchFrom.classList.remove("active");


    if(window.scrollY > 80){
        document.querySelector(".header .header-2").classList.add("active");
    }else{
        document.querySelector(".header .header-2").classList.remove("active");
    }
}


window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector(".header .header-2").classList.add("active");
    }else{
        document.querySelector(".header .header-2").classList.remove("active");
    }
}
