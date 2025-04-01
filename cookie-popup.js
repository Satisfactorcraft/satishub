function acceptCookies() {
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = `cookie-popup-accepted=true; expires=${date.toUTCString()}; path=/`;
    document.getElementById("cookie-popup-menu").style.display = "none";
}
function checkCookie() {
    cinfo = document.cookie.split("=");
    console.log(cinfo);
    if (cinfo[0] == "cookie-popup-accepted" && cinfo[1] == "true") return true; else return false;
}
if (checkCookie()) {
    setTimeout(() => {
    document.getElementById("cookie-popup-menu").style.display = "none";
    },1);
}