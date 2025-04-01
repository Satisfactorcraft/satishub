function removeCookies() {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    document.cookie = `cookie-popup-accepted=true; expires=${date.toUTCString()}; path=/`;
}