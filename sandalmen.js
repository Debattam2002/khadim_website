function updateProductNumberseventytwo(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventytwo');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventytwo');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventytwo").addEventListener('click', function () {
    updateProductNumberseventytwo('phone', 599, true);
});
document.getElementById("phone-minusseventytwo").addEventListener('click', function () {
    updateProductNumberseventytwo('phone', 599, false);
});

function updateProductNumberseventythree(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventythree');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventythree');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventythree").addEventListener('click', function () {
    updateProductNumberseventythree('phone', 2599, true);
});
document.getElementById("phone-minusseventythree").addEventListener('click', function () {
    updateProductNumberseventythree('phone', 2599, false);
});

function updateProductNumberseventyfour(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventyfour');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventyfour');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventyfour").addEventListener('click', function () {
    updateProductNumberseventyfour('phone', 3599, true);
});
document.getElementById("phone-minusseventyfour").addEventListener('click', function () {
    updateProductNumberseventyfour('phone', 3599, false);
});

function updateProductNumberseventyfive(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventyfive');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventyfive');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventyfive").addEventListener('click', function () {
    updateProductNumberseventyfive('phone', 3599, true);
});
document.getElementById("phone-minusseventyfive").addEventListener('click', function () {
    updateProductNumberseventyfive('phone', 3599, false);
});

function updateProductNumberseventysix(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventysix');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventysix');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventysix").addEventListener('click', function () {
    updateProductNumberseventysix('phone', 3599, true);
});
document.getElementById("phone-minusseventysix").addEventListener('click', function () {
    updateProductNumberseventysix('phone', 3599, false);
});