const clippingPath = document.getElementById("Clipping-Path");
const clippingPathValue = clippingPath.innerText;
const clippingPathText = clippingPath.innerText;
const serImg = document.getElementById("ser-img");
const serImg1 = document.getElementById("ser-img-1");
const quantityInput = document.getElementById("quantity-input");
const quantityImageNumber = document.getElementById("quantity-image-number");

// Quantity Parent Area
const parentQuentety = document.getElementById("quantity-parent");
const servicesName = document.getElementById("services-name");
const infoArea = document.getElementById("quantity-info");
const pInfoArea = document.getElementById("p-info");
const border = document.getElementById("border-sty");
parentQuentety.addEventListener("click", function (event) {
    const service = event.target.value;

    if (service != "Select Your Service") {
        serImg.style.display = "none";
        serImg1.style.display = "block";
        border.style.border = "none";
        pInfoArea.style.display = "none"
        infoArea.style.display = "block";
        servicesName.innerText = service;
        var quantityValue = parseInt(quantityInput.value);
        if (isNaN(quantityValue) == true) {
            quantityImageNumber.innerText = 0;
        }else{
            quantityImageNumber.innerText = quantityValue;
        }
    } else {
        serImg.style.display = "block";
        serImg1.style.display = "none";
        pInfoArea.style.display = "block"
        infoArea.style.display = "none";
        border.style.border = "1px solid gray";
    }
    showPrices.innerText = showPrice();
    showPrices1.innerText = showPrice1();

});

// Quantity Number Area


const showPrices = document.getElementById("showPrice");
const showPrices1 = document.getElementById("showPrice1");

quantityInput.addEventListener("input", function (event) {
    var quantityValue = parseInt(quantityInput.value);
    if (isNaN(quantityValue) == true) {
        quantityImageNumber.innerText = 0;
    }else{
        quantityImageNumber.innerText = quantityValue;
    }
    
    showPrices.innerText = showPrice();
    showPrices1.innerText = showPrice1();

});

function showPrice() {
    var c = servicesName.innerText;

    var order = Math.abs(parseInt(quantityImageNumber.innerText));
    if (isNaN(order) == true) {
        var price = 0;
        return price + " $USD";
    } else {
        switch (c) {

            case "Clipping Path":
                serImg1.src = "img/s.jpg";
                var price = (0.29 * order).toFixed(2);
                return price + " $USD";


            case "Multi-clipping Path":
                serImg1.src = "img/bg.jpg";
                var price = (1.39 * order).toFixed(2);
                return price + " $USD";

            case "Image Masking":
                serImg1.src = "img/Image-masking.jpg"
                var price = (0.99 * order).toFixed(2);
                return price + " $USD";

            case "Background removal":
                serImg1.src = "img/Background-removal.jpg";
                var price = (0.39 * order).toFixed(2);
                return price + " $USD";

            case "Ghost Mannequin":
                serImg1.src = "img/Ghost.jpg";
                var price = (1.49 * order).toFixed(2);
                return price + " $USD";

            case "Drop Shadow":
                serImg1.src = "img/Drop-shadow.jpg";
                var price = (0.39 * order).toFixed(2);
                return price + " $USD";

            case "Photo Retouching":
                serImg1.src = "img/Model-image-retouchin.jpg";
                var price = (0.79 * order).toFixed(2);
                return price + " $USD";
            case "Color Variants":
                serImg1.src = "img/color-variant.jpg";
                var price = (0.99 * order).toFixed(2);
                return price + " $USD";

            case "Vector Conversion":
                serImg1.src = "img/raster-women-image-to-vector-shillhoutte.jpg";
                var price = (4.49 * order).toFixed(2);
                return price + " $USD";
        }
    }


}

function showPrice1() {
    var c = servicesName.innerText;
    var order = Math.abs(parseInt(quantityImageNumber.innerText));
    if (isNaN(order) == true) {
        var price = 0;
        return price + " $USD";
    } else {
        switch (c) {
            case "Clipping Path":
                var price1 = (3.49 * order).toFixed(2);
                return price1 + " $USD";

            case "Multi-clipping Path":
                var price1 = (12.99 * order).toFixed(2);
                return price1 + " $USD";

            case "Image Masking":
                var price1 = (2.99 * order).toFixed(2);
                return price1 + " $USD";

            case "Background removal":
                var price1 = (3.49 * order).toFixed(2);
                return price1 + " $USD";

            case "Ghost Mannequin":
                var price1 = (2.99 * order).toFixed(2);
                return price1 + " $USD";

            case "Drop Shadow":
                var price1 = (2.99 * order).toFixed(2);
                return price1 + " $USD";

            case "Photo Retouching":
                var price1 = (3.99 * order).toFixed(2);
                return price1 + " $USD";

            case "Color Variants":
                var price1 = (4.99 * order).toFixed(2);
                return price1 + " $USD";

            case "Vector Conversion":
                var price1 = (49.99 * order).toFixed(2);
                return price1 + " $USD";
        }
    }

}
