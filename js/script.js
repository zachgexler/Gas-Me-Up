
function getGas() {
    inptCountry = document.getElementById("country-inpt").value;

    // had to select country to get API so tried to pull it apart to be able to call on individual countries
    let url = "https://wog-world-gas-prices.p.rapidapi.com/country/";
    url = url + inptCountry;


    // Moved down inside document.ready function in order to get the carrousel to implement
    // provided from rapidAPI to create and connect to api
    //     const settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": url,
    //         "method": "GET",
    //         "headers": {
    //             "X-RapidAPI-Key": "5490edf67cmsh9ec321a11faeb51p1ab0c4jsnc57f0b3835d1",
    //             "X-RapidAPI-Host": "wog-world-gas-prices.p.rapidapi.com"
    //         }
    //     };

    //     let country = document.getElementById("country");
    //     country.innerHTML = inptCountry;

    //     let gasprice = document.getElementById("gas-price");
    //     let dieselPrice = document.getElementById("diesel-price");
    // // API only had three values to pull which are gas price and diesel price
    //     $.ajax(settings).done(function (response) {
    //         console.log(response["GAS PRICE:"]);
    //         gasprice.innerHTML = response["GAS PRICE:"];
    //         dieselPrice.innerHTML = response["DIESEL PRICE:"];
    //     });
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

// used the response titles from the API as they were SVGFEDropShadowElement, had console log to show it was pulling correctly

        $.ajax(settings).done(function (response) {
            console.log(response["GAS PRICE:"]);
            gasprice.innerHTML = response["GAS PRICE:"];
            dieselPrice.innerHTML = response["DIESEL PRICE:"];


        });
        // Fading it didnt work and the api is slow so fading in was impossible
        //   $("#country").fadeIn("xslow");
        //   $("#gas-price").fadeIn("xslow");
        //   $("#diesel-price").fadeIn("xslow");

        // used w3 to get jQuery syntax to create a fadeout for extra functionality the prices load slowly so for full effect have to run twice in a row, chose 7 seconds because 10 felt too long and anythign less was too quick
        $("#country").fadeOut(7000);
        $("#gas-price").fadeOut(7000);
        $("#diesel-price").fadeOut(7000);

    });
});