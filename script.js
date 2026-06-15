window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "white";
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }else{
        nav.style.boxShadow = "none";
    }

});