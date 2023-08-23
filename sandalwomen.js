function updateProductNumberseventyseven(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventyseven');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventyseven');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventyseven").addEventListener('click', function () {
    updateProductNumberseventyseven('phone', 599, true);
});
document.getElementById("phone-minusseventyseven").addEventListener('click', function () {
    updateProductNumberseventyseven('phone', 599, false);
});

function updateProductNumberseventyeight(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventyeight');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventyeight');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventyeight").addEventListener('click', function () {
    updateProductNumberseventyeight('phone', 2599, true);
});
document.getElementById("phone-minusseventyeight").addEventListener('click', function () {
    updateProductNumberseventyeight('phone', 2599, false);
});