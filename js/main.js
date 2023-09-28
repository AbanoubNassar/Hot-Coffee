/*Shopping */
let shoppingbtn = document.getElementById("cart-btn")
let shopping = document.getElementById("shopping")

/*Search Box */

let searchbtn = document.getElementById("search-btn");
let searchbox = document.getElementById("searchbox");

/*Navbar */
let menubtn = document.getElementById("menu-btn");
let navbar = document.getElementById("navbar");


shoppingbtn.addEventListener("click",function(){
    shopping.classList.toggle("active");
    searchbox.classList.remove("active");
    navbar.classList.remove("active");
});

searchbtn.addEventListener("click",function(){
    searchbox.classList.toggle("active");
    shopping.classList.remove("active");
    navbar.classList.remove("active");
})

menubtn.addEventListener("click",function (){
    navbar.classList.toggle("active");
    shopping.classList.remove("active");
    searchbox.classList.remove("active");
});


window.onscroll = () =>{
    navbar.classList.remove('active');
    shopping.classList.remove('active');
    searchbox.classList.remove('active');
}


/*Start loading*/
let loading = document.getElementById("loading");
var htmlSheet = document.getElementById("html");
function loader (){
    loading.classList.add("inactive"); /*هنا جبت اللوود وفعلت عدم التشغيل */
    htmlSheet.classList.add("active");
}
function fadeOut(){
    setTimeout(loader,2000); /* هنا قولت وقف عدم التشغيل بعد 2 ثواني*/
}

window.onload = () => { /* هنا قولت نفذ معادلة عدم التشغيل عند تحميل الصفحة*/
    fadeOut()   
}
/*End loading*/


/*Start light mood*/

let lightMode = document.getElementById("light-mode-toggle");

const collection = document.getElementsByClassName("for-l&d-mode");
for (let i = 0; i < collection.length; i++) {
lightMode.addEventListener("click",function (){
    collection[i].classList.toggle("activelight");
})
}

/*End light mood*/