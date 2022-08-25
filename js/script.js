
function getGas() {
    inptCountry = document.getElementById("country-inpt").value;

    let url = "https://wog-world-gas-prices.p.rapidapi.com/country/";
    url = url + inptCountry;

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "5490edf67cmsh9ec321a11faeb51p1ab0c4jsnc57f0b3835d1",
            "X-RapidAPI-Host": "wog-world-gas-prices.p.rapidapi.com"
        }
    };

    let country = document.getElementById("country");
    country.innerHTML = inptCountry;

    let gasprice = document.getElementById("gas-price");
    let dieselPrice = document.getElementById("diesel-price");

    $.ajax(settings).done(function (response) {
        console.log(response["GAS PRICE:"]);
        gasprice.innerHTML = response["GAS PRICE:"];
        dieselPrice.innerHTML = response["DIESEL PRICE:"];
    });
}
$(document).ready(function () {
    $("#submit").click(function () {


        inptCountry = document.getElementById("country-inpt").value;

        let url = "https://wog-world-gas-prices.p.rapidapi.com/country/";
        url = url + inptCountry;

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "5490edf67cmsh9ec321a11faeb51p1ab0c4jsnc57f0b3835d1",
                "X-RapidAPI-Host": "wog-world-gas-prices.p.rapidapi.com"
            }
        };

        let country = document.getElementById("country");
        country.innerHTML = inptCountry;

        let gasprice = document.getElementById("gas-price");
        let dieselPrice = document.getElementById("diesel-price");

        $.ajax(settings).done(function (response) {
            console.log(response["GAS PRICE:"]);
            gasprice.innerHTML = response["GAS PRICE:"];
            dieselPrice.innerHTML = response["DIESEL PRICE:"];


        });

        //   $("#country").fadeIn("xslow");
        //   $("#gas-price").fadeIn("xslow");
        //   $("#diesel-price").fadeIn("xslow");

        // $("#country").fadeOut(7000);
        // $("#gas-price").fadeOut(7000);
        // $("#diesel-price").fadeOut(7000);

    });
});