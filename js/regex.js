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

    if (password.length >= 8) {passwordLength = true}
    if (!regExp.test(password).valueOf()) {specialChar = true}
    if (password.charAt(0) != password.charAt(0).toUpperCase()) {firstCharUpper = true}
    if (!/\s/.test(password)) {noSpaces = true}
    if (password === rePassword) {passwordsMatch = true}

});