const form = document.getElementById("regex-registeration");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const spost = document.getElementById("regex-sposti").value;
    const firstName = document.getElementById("regex-etunimi").value;
    const lastName = document.getElementById("regex-sukunimi").value;
    const password = document.getElementById("regex-salasana").value;
    const rePassword = document.getElementById("regex-salasana-vahvistus").value;

    const cbKayttoehdot = document.getElementById("regex-cb-kayttoehdot").checked;
    const cbMarketing = document.getElementById("regex-cb-markkinointi").checked;

    // checks
    let passwordLength, specialChar, firstCharUpper, noSpaces, passwordsMatch = false;
    const regExp = /[!?+@#%&]/;

    if (password.length >= 8) {passwordLength = true} // Is password length atleast 8
    if (!regExp.test(password).valueOf()) {specialChar = true} // Is there special characters
    if (password.charAt(0) != password.charAt(0).toUpperCase()) {firstCharUpper = true} // Is first char upper check
    if (!/\s/.test(password)) {noSpaces = true} // Spaces check
    if (password === rePassword) {passwordsMatch = true} // Password check

});