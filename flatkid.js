function updateProductNumberfourtytwo(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfourtytwo');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfourtytwo');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfourtytwo").addEventListener('click', function () {
    updateProductNumberfourtytwo('phone', 599, true);
});
document.getElementById("phone-minusfourtytwo").addEventListener('click', function () {
    updateProductNumberfourtytwo('phone', 599, false);
});

function updateProductNumberfourtythree(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfourtythree');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfourtythree');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfourtythree").addEventListener('click', function () {
    updateProductNumberfourtythree('phone', 2599, true);
});
document.getElementById("phone-minusfourtythree").addEventListener('click', function () {
    updateProductNumberfourtythree('phone', 2599, false);
});

function updateProductNumberfourtyfour(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfourtyfour');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfourtyfour');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfourtyfour").addEventListener('click', function () {
    updateProductNumberfourtyfour('phone', 3599, true);
});
document.getElementById("phone-minusfourtyfour").addEventListener('click', function () {
    updateProductNumberfourtyfour('phone', 3599, false);
});

function updateProductNumberfourtyfive(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfourtyfive');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfourtyfive');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfourtyfive").addEventListener('click', function () {
    updateProductNumberfourtyfive('phone', 3599, true);
});
document.getElementById("phone-minusfourtyfive").addEventListener('click', function () {
    updateProductNumberfourtyfive('phone', 3599, false);
});

function updateProductNumberfourtysix(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfourtysix');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfourtysix');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfourtysix").addEventListener('click', function () {
    updateProductNumberfourtysix('phone', 3599, true);
});
document.getElementById("phone-minusfourtysix").addEventListener('click', function () {
    updateProductNumberfourtysix('phone', 3599, false);
});

function updateProductNumberfourtyseven(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfourtyseven');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfourtyseven');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfourtyseven").addEventListener('click', function () {
    updateProductNumberfourtyseven('phone', 3599, true);
});
document.getElementById("phone-minusfourtyseven").addEventListener('click', function () {
    updateProductNumberfourtyseven('phone', 3599, false);
});