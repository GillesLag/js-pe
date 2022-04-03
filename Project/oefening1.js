function oefening1(){
    let firstname = document.querySelector("#inputFirstname").value;
    let name = document.querySelector("#inputName").value;
    let email = document.querySelector("#inputEmail").value;
    let address = document.querySelector("#inputAddress").value;
    let country = document.querySelector("#selectCountry").value;
    let province = document.querySelector("#selectProvince").value;
    let postalCode = document.querySelector("#inputPostalcode").value;

    let formAlert = document.querySelector("#formAlert");
    let alertHead = document.querySelector("#alertHead");
    let alertTekst = document.querySelector("#alertTekst");

    console.log(province);

    let tekstFout = "";

    if (firstname === "") {

        tekstFout = "First name is required.<br/>";
    }

    if (name === "") {
        tekstFout += "Name is required.<br/>";
    }

    if (email === "") {
        tekstFout += "Email is required.<br/>"
    }

    else if (!email.includes("@") || !email.includes(".")) {
        tekstFout += "Email is not valid.<br/>"

    }

    if (address === "") {
        tekstFout += "Address is required.<br/>"
    }

    if (country === ""){
        tekstFout += "Country is required.<br/>"
    }

    if (province === "") {
        tekstFout += "Province is required.<br/>"
    }

    if (postalCode === "") {
        tekstFout += "Postal code is required."
    }

    else if (postalCode > 9999 || postalCode < 1000) {
        tekstFout += "Postal code value must be between 1000 & 9999.";
    }

    if (tekstFout != "") {

        alertHead.innerHTML = "You messed up...";
        alertTekst.innerHTML = tekstFout;
        
        formAlert.classList.remove("invisible");
    }

    else
    {
        alertHead.innerHTML = "Good shit!";
        alertTekst.innerHTML = "You succesfully subscribed";
        formAlert.classList.replace("alert-danger", "alert-success");
        
        formAlert.classList.remove("invisible");
    }
}