function updateProductNumberninetyone(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetyone');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetyone');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninetyone").addEventListener('click', function () {
    updateProductNumberninetyone('phone', 599, true);
});
document.getElementById("phone-minusninetyone").addEventListener('click', function () {
    updateProductNumberninetyone('phone', 599, false);
});

function updateProductNumberninetytwo(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetytwo');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetytwo');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninetytwo").addEventListener('click', function () {
    updateProductNumberninetytwo('phone', 2599, true);
});
document.getElementById("phone-minusninetytwo").addEventListener('click', function () {
    updateProductNumberninetytwo('phone', 2599, false);
});

function updateProductNumberninetythree(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetythree');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetythree');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninetythree").addEventListener('click', function () {
    updateProductNumberninetythree('phone', 3599, true);
});
document.getElementById("phone-minusninetythree").addEventListener('click', function () {
    updateProductNumberninetythree('phone', 3599, false);
});

function updateProductNumberninetyfour(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetyfour');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetyfour');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninetyfour").addEventListener('click', function () {
    updateProductNumberninetyfour('phone', 3599, true);
});
document.getElementById("phone-minusninetyfour").addEventListener('click', function () {
    updateProductNumberninetyfour('phone', 3599, false);
});

function updateProductNumberninetyfive(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetyfive');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetyfive');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusnninetyfive").addEventListener('click', function () {
    updateProductNumberninetyfive('phone', 3599, true);
});
document.getElementById("phone-minusninetyfive").addEventListener('click', function () {
    updateProductNumberninetyfive('phone', 3599, false);
});

function updateProductNumberninetysix(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetysix');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetysix');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninetysix").addEventListener('click', function () {
    updateProductNumberninetysix('phone', 3599, true);
});
document.getElementById("phone-minusninetysix").addEventListener('click', function () {
    updateProductNumberninetysix('phone', 3599, false);
});